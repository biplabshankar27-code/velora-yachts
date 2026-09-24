import { motion } from 'motion/react'
import type { YachtSpecItem } from '../data/yachts'

interface FleetVideoProps {
  videoSrc: string
  name: string
  specs: YachtSpecItem[]
  delay: number
  isOpen: boolean
}

export default function FleetVideo({ videoSrc, name, specs, delay, isOpen }: FleetVideoProps) {
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={isOpen ? { y: 0 } : { y: '100%' }}
      transition={{ duration: 0.9 + delay, ease: [0.19, 1, 0.22, 1] }}
      className="fleet-video"
    >
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)',
        }}
      />
      <div className="fleet-video-info">
        <div
          style={{
            fontSize: 'clamp(28px,2.5vw,44px)',
            color: 'white',
            letterSpacing: '-0.01em',
            marginBottom: 20,
          }}
        >
          {name}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 24px' }}>
          {specs.map((spec) => (
            <div key={spec.label}>
              <div
                style={{
                  fontSize: 8,
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.3em',
                  marginBottom: 4,
                }}
              >
                {spec.label}
              </div>
              <div style={{ fontSize: 13, color: 'white', letterSpacing: '0.1em' }}>
                {spec.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

