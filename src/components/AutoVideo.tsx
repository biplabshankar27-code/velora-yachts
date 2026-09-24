import { useEffect, useRef, type VideoHTMLAttributes } from 'react'

type AutoVideoProps = VideoHTMLAttributes<HTMLVideoElement> & {
  preload?: VideoHTMLAttributes<HTMLVideoElement>['preload']
}

export default function AutoVideo({ preload = 'metadata', ...rest }: AutoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const inViewRef = useRef(false)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    const resume = () => {
      if (inViewRef.current && video.readyState >= 3) {
        video.play().catch(() => {})
      }
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting
        if (entry.isIntersecting) {
          if (video.readyState >= 3) {
            video.play().catch(() => {})
          }
        } else {
          video.pause()
        }
      },
      { threshold: 0.05 }
    )
    io.observe(video)
    video.addEventListener('canplay', resume)
    return () => {
      io.disconnect()
      video.removeEventListener('canplay', resume)
    }
  }, [])

  return <video ref={ref} preload={preload} {...rest} />
}
