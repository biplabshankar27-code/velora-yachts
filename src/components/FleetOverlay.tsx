import { motion, AnimatePresence } from 'motion/react'
import FleetVideo from './FleetVideo'

interface FleetOverlayProps {
  isOpen: boolean
  onClose: () => void
}

const FLEET_ITEMS = [
  {
    name: 'OCEAN ECLIPSE',
    videoSrc: '/videos/fleet-ocean-eclipse.mp4',
    delay: 0,
    specs: [
      { label: 'LENGTH', value: '162FT' },
      { label: 'CRUISING SPEED', value: '14 KNOTS' },
      { label: 'GUESTS', value: 'UP TO 12' },
      { label: 'CABINS', value: '7 STATEROOMS' },
    ],
  },
  {
    name: 'BLACK SOVEREIGN',
    videoSrc: '/videos/fleet-black-sovereign.mp4',
    delay: 0.12,
    specs: [
      { label: 'LENGTH', value: '138FT' },
      { label: 'TOP SPEED', value: '19 KNOTS' },
      { label: 'HULL', value: 'STEEL & ALUMINIUM' },
      { label: 'ENGINES', value: '2× MTU 12V 4000' },
    ],
  },
  {
    name: 'AZURE HORIZON',
    videoSrc: '/videos/fleet-azure-horizon.mp4',
    delay: 0.24,
    specs: [
      { label: 'LENGTH', value: '120FT' },
      { label: 'RANGE', value: '4,100NM' },
      { label: 'GUESTS', value: '8 + 12 CREW' },
      { label: 'DECK', value: 'SUN DECK WITH JACUZZI' },
    ],
  },
]

export default function FleetOverlay({ isOpen, onClose }: FleetOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.3 } }}
          className="fleet-overlay" style={{ position: 'fixed', inset: 0, zIndex: 110 }}
        >
          {FLEET_ITEMS.map((item) => (
            <FleetVideo
              key={item.name}
              videoSrc={item.videoSrc}
              name={item.name}
              specs={item.specs}
              delay={item.delay}
              isOpen={isOpen}
            />
          ))}
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.4 } }}
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 32,
              right: 32,
              zIndex: 120,
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 100,
              padding: '12px 28px',
              color: 'white',
              background: 'transparent',
              fontSize: 10,
              letterSpacing: '0.22em',
              cursor: 'pointer',
              fontFamily: 'var(--font-serif)',
            }}
          >
            CLOSE
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

