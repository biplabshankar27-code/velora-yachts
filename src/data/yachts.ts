export interface YachtSpecItem {
  label: string
  value: string
}

export interface YachtSpecCategory {
  category: string
  specs: YachtSpecItem[]
}

export interface Yacht {
  id: string
  name: string
  tagline: string
  quickSpecs: YachtSpecItem[]
  fullSpecs: YachtSpecCategory[]
}

export const yachts: Yacht[] = [
  {
    id: 'ocean-eclipse',
    name: 'OCEAN ECLIPSE',
    tagline: 'REFINED CRUISING FOR THE DISCERNING FEW',
    quickSpecs: [
      { label: 'LENGTH', value: '28M' },
      { label: 'BEAM', value: '6.8M' },
      { label: 'CRUISING SPEED', value: '22 KNOTS' },
      { label: 'GUESTS', value: 'UP TO 12' },
      { label: 'CABINS', value: '4 EN-SUITE' },
      { label: 'CREW', value: '5' },
    ],
    fullSpecs: [
      {
        category: 'DIMENSIONS',
        specs: [
          { label: 'LENGTH OVERALL', value: '28.0M / 92FT' },
          { label: 'BEAM', value: '6.8M' },
          { label: 'DRAFT', value: '2.1M' },
          { label: 'GROSS TONNAGE', value: '168 GT' },
        ],
      },
      {
        category: 'PERFORMANCE',
        specs: [
          { label: 'CRUISING SPEED', value: '22 KNOTS' },
          { label: 'TOP SPEED', value: '26 KNOTS' },
          { label: 'RANGE', value: '3,200 NM' },
          { label: 'ENGINES', value: '2× MTU 10V 2000' },
        ],
      },
      {
        category: 'CONSTRUCTION',
        specs: [
          { label: 'HULL', value: 'GRP SANDWICH' },
          { label: 'SUPERSTRUCTURE', value: 'CARBON COMPOSITE' },
          { label: 'BUILT', value: '2019 — REFIT 2023' },
          { label: 'NAVAL ARCHITECT', value: 'AZURE YACHT DESIGN' },
        ],
      },
      {
        category: 'ONBOARD COMFORT',
        specs: [
          { label: 'GUESTS', value: 'UP TO 12' },
          { label: 'CABINS', value: '4 EN-SUITE' },
          { label: 'CREW', value: '5' },
          { label: 'TENDERS', value: '1× 5.2M + JET SKIS' },
        ],
      },
      {
        category: 'NAVIGATION & SAFETY',
        specs: [
          { label: 'RADAR', value: 'TWIN OPEN-ARRAY' },
          { label: 'AUTOPILOT', value: 'DUAL REDUNDANT' },
          { label: 'SAFETY', value: 'SOLAS CATEGORY A' },
          { label: 'COMMUNICATIONS', value: 'SAT-C + VSAT' },
        ],
      },
    ],
  },
  {
    id: 'black-sovereign',
    name: 'BLACK SOVEREIGN',
    tagline: 'POWER AND PRECISION REDEFINED',
    quickSpecs: [
      { label: 'LENGTH', value: '32M' },
      { label: 'BEAM', value: '7.4M' },
      { label: 'TOP SPEED', value: '28 KNOTS' },
      { label: 'GUESTS', value: 'UP TO 10' },
      { label: 'CABINS', value: '5 EN-SUITE' },
      { label: 'CREW', value: '6' },
    ],
    fullSpecs: [
      {
        category: 'DIMENSIONS',
        specs: [
          { label: 'LENGTH OVERALL', value: '32.0M / 105FT' },
          { label: 'BEAM', value: '7.4M' },
          { label: 'DRAFT', value: '2.3M' },
          { label: 'GROSS TONNAGE', value: '215 GT' },
        ],
      },
      {
        category: 'PERFORMANCE',
        specs: [
          { label: 'CRUISING SPEED', value: '24 KNOTS' },
          { label: 'TOP SPEED', value: '28 KNOTS' },
          { label: 'RANGE', value: '2,800 NM' },
          { label: 'ENGINES', value: '2× MTU 12V 4000' },
        ],
      },
      {
        category: 'CONSTRUCTION',
        specs: [
          { label: 'HULL', value: 'STEEL & ALUMINIUM' },
          { label: 'SUPERSTRUCTURE', value: 'ALUMINIUM' },
          { label: 'BUILT', value: '2020 — REFIT 2024' },
          { label: 'NAVAL ARCHITECT', value: 'SOVEREIGN MARINE' },
        ],
      },
      {
        category: 'ONBOARD COMFORT',
        specs: [
          { label: 'GUESTS', value: 'UP TO 10' },
          { label: 'CABINS', value: '5 EN-SUITE' },
          { label: 'CREW', value: '6' },
          { label: 'TENDERS', value: '1× 6.4M CHASE + DIVE GEAR' },
        ],
      },
      {
        category: 'NAVIGATION & SAFETY',
        specs: [
          { label: 'RADAR', value: 'TWIN OPEN-ARRAY' },
          { label: 'AUTOPILOT', value: 'DUAL REDUNDANT' },
          { label: 'SAFETY', value: 'SOLAS CATEGORY A' },
          { label: 'COMMUNICATIONS', value: 'SAT-C + VSAT' },
        ],
      },
    ],
  },
  {
    id: 'azure-horizon',
    name: 'AZURE HORIZON',
    tagline: 'WHERE THE SEA MEETS THE SKY',
    quickSpecs: [
      { label: 'LENGTH', value: '25M' },
      { label: 'BEAM', value: '6.2M' },
      { label: 'RANGE', value: '4,100 NM' },
      { label: 'GUESTS', value: '8 + 12 CREW' },
      { label: 'DECK', value: 'SUN DECK WITH JACUZZI' },
      { label: 'BUILD', value: '2021' },
    ],
    fullSpecs: [
      {
        category: 'DIMENSIONS',
        specs: [
          { label: 'LENGTH OVERALL', value: '25.0M / 82FT' },
          { label: 'BEAM', value: '6.2M' },
          { label: 'DRAFT', value: '1.9M' },
          { label: 'GROSS TONNAGE', value: '140 GT' },
        ],
      },
      {
        category: 'PERFORMANCE',
        specs: [
          { label: 'CRUISING SPEED', value: '14 KNOTS' },
          { label: 'TOP SPEED', value: '18 KNOTS' },
          { label: 'RANGE', value: '4,100 NM' },
          { label: 'ENGINES', value: '2× CATERPILLAR C18' },
        ],
      },
      {
        category: 'CONSTRUCTION',
        specs: [
          { label: 'HULL', value: 'GRP SANDWICH' },
          { label: 'SUPERSTRUCTURE', value: 'GRP COMPOSITE' },
          { label: 'BUILT', value: '2021' },
          { label: 'NAVAL ARCHITECT', value: 'HORIZON MARINE' },
        ],
      },
      {
        category: 'ONBOARD COMFORT',
        specs: [
          { label: 'GUESTS', value: '8 + 12 CREW' },
          { label: 'CABINS', value: '4 EN-SUITE' },
          { label: 'DECK', value: 'SUN DECK WITH JACUZZI' },
          { label: 'TENDERS', value: '1× 4.8M + SEABOB FLEET' },
        ],
      },
      {
        category: 'NAVIGATION & SAFETY',
        specs: [
          { label: 'RADAR', value: 'TWIN OPEN-ARRAY' },
          { label: 'AUTOPILOT', value: 'DUAL REDUNDANT' },
          { label: 'SAFETY', value: 'SOLAS CATEGORY A' },
          { label: 'COMMUNICATIONS', value: 'SAT-C + VSAT' },
        ],
      },
    ],
  },
]
