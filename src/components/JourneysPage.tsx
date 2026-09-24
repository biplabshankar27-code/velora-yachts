import { useState } from 'react'
import { motion } from 'motion/react'
import PageOverlay from './PageOverlay'

interface JourneysPageProps {
  isOpen: boolean
  onClose: () => void
}

const DESTINATIONS = [
  {
    region: 'MEDITERRANEAN',
    title: 'ITALIAN RIVIERA',
    subtitle: 'MONACO → PORTOFINO VIA THE LIGURIAN COAST',
    duration: '10 DAYS',
    season: 'SUMMER',
    description:
      'Monaco to Portofino via the Ligurian coastline — hidden coves, family trattorias ashore, and the quiet anchorages between the famous names.',
  },
  {
    region: 'CARIBBEAN',
    title: 'LESSER ANTILLES',
    subtitle: 'ANTIGUA → THE GRENADINES',
    duration: '14 DAYS',
    season: 'WINTER',
    description: 'From Antigua through the Grenadines — trade-wind sailing, reef anchorages, and beach landings far from the cruise routes.',
  },
  {
    region: 'PACIFIC',
    title: 'FRENCH POLYNESIA',
    subtitle: 'TAHITI → MOOREA → BORA BORA',
    duration: '21 DAYS',
    season: 'YEAR-ROUND',
    description: 'Tahiti, Moorea, Bora Bora and beyond — lagoon passages, motu picnics, and the most generous water on the planet.',
  },
  {
    region: 'ATLANTIC',
    title: 'ARC TRANSATLANTIC',
    subtitle: 'LAS PALMAS → BARBADOS',
    duration: '18 DAYS',
    season: 'NOVEMBER',
    description: 'The grand ocean passage from Las Palmas to Barbados — celestial navigation, watch rotations, and landfall after two blue weeks.',
  },
  {
    region: 'ADRIATIC',
    title: 'DALMATIAN ISLANDS',
    subtitle: 'SPLIT → KOTOR',
    duration: '7 DAYS',
    season: 'SPRING',
    description: "Croatia's hidden islands and Montenegro's Bay of Kotor — medieval ports, quiet bays, and long lunches under the pines.",
  },
  {
    region: 'SCANDINAVIA',
    title: 'NORWEGIAN FJORDS',
    subtitle: 'BERGEN → GEIRANGERFJORD',
    duration: '12 DAYS',
    season: 'SUMMER',
    description: 'Geirangerfjord, Nærøyfjord, and the Arctic Circle — vertical waterfalls, midnight sun, and completely empty anchorages.',
  },
]

export default function JourneysPage({ isOpen, onClose }: JourneysPageProps) {
  const [hovered, setHovered] = useState<number | null>(null)
  const [ctaHovered, setCtaHovered] = useState(false)

  return (
    <PageOverlay isOpen={isOpen} onClose={onClose} pageName="JOURNEYS">
      <div className="split-2" style={{ padding: 'clamp(48px,6vw,80px)' }}>
        <div>
          <h2
            style={{
              fontSize: 'clamp(36px,5vw,72px)',
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: '-0.01em',
              color: '#0c0c0e',
              margin: 0,
            }}
          >
            THE WORLD'S FINEST WATERS.
            <br />
            YOUR ITINERARY.
          </h2>
        </div>
        <div>
          <p
            style={{
              fontSize: 11,
              lineHeight: 1.9,
              letterSpacing: '0.12em',
              color: 'rgba(12,12,14,0.55)',
              margin: '0 0 28px',
            }}
          >
            SIX SEASONAL PROGRAMMES, EACH BUILT AROUND A DIFFERENT SEA. EVERY ROUTE IS OPERATED BY
            OUR OWN CREWS ABOARD OUR OWN VESSELS — AND EVERY DEPARTURE CAN BE ADAPTED FOR A SINGLE
            MEMBER.
          </p>
          <button
            onClick={() => setCtaHovered(true)}
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
            style={{
              background: ctaHovered ? '#253f63' : 'var(--accent)',
              color: 'white',
              padding: '14px 36px',
              fontSize: 10,
              letterSpacing: '0.22em',
              borderRadius: 2,
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-serif)',
              transition: 'background 0.3s ease',
            }}
          >
            REQUEST A CUSTOM VOYAGE
          </button>
        </div>
      </div>

      <div
        className="journeys-grid"
        style={{ marginBottom: 40 }}
      >
        {DESTINATIONS.map((dest, i) => (
          <motion.div
            key={dest.title}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden', borderRadius: 0, boxShadow: 'none' }}
          >
            <div
              style={{
                height: 200,
                background: 'linear-gradient(135deg, #1c2d45 0%, #2a4a73 100%)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 24,
                  left: 32,
                  fontSize: 8,
                  letterSpacing: '0.35em',
                  color: 'rgba(147,197,253,0.85)',
                }}
              >
                {dest.region}
              </div>
              <div style={{ position: 'absolute', bottom: 24, left: 32, right: 32 }}>
                <div
                  style={{
                    fontSize: 'clamp(20px,3vw,32px)',
                    color: 'white',
                    lineHeight: 1.05,
                    marginBottom: 8,
                  }}
                >
                  {dest.title}
                </div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.15em' }}>
                  {dest.subtitle}
                </div>
              </div>
            </div>
            <div style={{ background: 'white', padding: '28px 32px' }}>
              <div style={{ display: 'flex', gap: 32, marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: 8, letterSpacing: '0.3em', color: 'rgba(12,12,14,0.38)', marginBottom: 4 }}>
                    DURATION
                  </div>
                  <div style={{ fontSize: 11, color: '#0c0c0e' }}>{dest.duration}</div>
                </div>
                <div>
                  <div style={{ fontSize: 8, letterSpacing: '0.3em', color: 'rgba(12,12,14,0.38)', marginBottom: 4 }}>
                    SEASON
                  </div>
                  <div style={{ fontSize: 11, color: '#0c0c0e' }}>{dest.season}</div>
                </div>
              </div>
              <p
                style={{
                  fontSize: 11,
                  lineHeight: 1.9,
                  color: 'rgba(12,12,14,0.7)',
                  marginBottom: 24,
                  textTransform: 'lowercase',
                  margin: '0 0 24px',
                }}
              >
                {dest.description}
              </p>
              <button
                onClick={(e) => e.preventDefault()}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  fontSize: 9,
                  letterSpacing: '0.2em',
                  color: 'var(--accent)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-serif)',
                  padding: 0,
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                REQUEST ITINERARY →
                <motion.span
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: -4,
                    height: 1,
                    background: 'var(--accent)',
                    display: 'block',
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: hovered === i ? '100%' : 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </PageOverlay>
  )
}


