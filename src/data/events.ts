import type { Event } from '../types';

// export interface Event {
//     id: string;
//     name: string;
//     year: number;
//     codTitle: string;
//     winningTeam: string;        // Changed from 'winner' and 'team'
//     acceptedAnswers: string[];  // Array of valid answers (OpTic, OpTic Texas, OPT, etc.)
//   }

export const events: Event[] = [
  // 2024-2025 BO6 Season
  {
    id: '1',
    name: 'Major 1',
    year: 2025,
    codTitle: 'Black Ops 6',
    winningTeam: 'Atlanta FaZe',
    acceptedAnswers: ['atlanta faze', 'faze', 'atl', 'atlanta']
  },
  {
    id: '2',
    name: 'Major 2',
    year: 2025,
    codTitle: 'Black Ops 6',
    winningTeam: 'Atlanta FaZe',
    acceptedAnswers: ['atlanta faze', 'faze', 'atlanta', 'atl']
  },
  {
    id: '3',
    name: 'Major 3',
    year: 2025,
    codTitle: 'Black Ops 6',
    winningTeam: 'Los Angeles Thieves',
    acceptedAnswers: ['los angeles thieves', 'thieves', 'lat', 'la thieves', 'la', 'los angeles']
  },
  {
    id: '4',
    name: 'Major 4',
    year: 2025,
    codTitle: 'Black Ops 6',
    winningTeam: 'Los Angeles Thieves',
    acceptedAnswers: ['los angeles thieves', 'thieves', 'lat', 'la thieves', 'la', 'los angeles']
  },
  {
    id: '5',
    name: 'Champs',
    year: 2025,
    codTitle: 'Black Ops 6',
    winningTeam: 'OpTic Texas',
    acceptedAnswers: ['optic texas', 'optic', 'tex', 'texas', 'texas optic']
  },
  {
    id: '6',
    name: 'EWC',
    year: 2025,
    codTitle: 'Black Ops 6',
    winningTeam: 'OpTic Texas',
    acceptedAnswers: ['optic texas', 'optic', 'tex', 'texas', 'texas optic']
  },

  // 2023-2024 MW3 Season
  {
    id: '7',
    name: 'Major 1',
    year: 2024,
    codTitle: 'Modern Warfare 3',
    winningTeam: 'Toronto Ultra',
    acceptedAnswers: ['toronto ultra', 'ultra', 'tor', 'toronto']
  },
  {
    id: '8',
    name: 'Major 2',
    year: 2024,
    codTitle: 'Modern Warfare 3',
    winningTeam: 'Atlanta FaZe',
    acceptedAnswers: ['atlanta faze', 'faze', 'atlanta', 'atl']
  },
  {
    id: '9',
    name: 'Major 3',
    year: 2024,
    codTitle: 'Modern Warfare 3',
    winningTeam: 'OpTic Texas',
    acceptedAnswers: ['optic texas', 'optic', 'tex', 'texas', 'texas optic']
  },
  {
    id: '10',
    name: 'Major 4',
    year: 2024,
    codTitle: 'Modern Warfare 3',
    winningTeam: 'New York Subliners',
    acceptedAnswers: ['new york subliners', 'subliners', 'NY', 'NYSL', 'new york', 'ny subliners']
  },
  {
    id: '11',
    name: 'Champs',
    year: 2024,
    codTitle: 'Modern Warfare 3',
    winningTeam: 'OpTic Texas',
    acceptedAnswers: ['optic texas', 'optic', 'tex', 'texas', 'texas optic']
  },
  {
    id: '12',
    name: 'EWC',
    year: 2024,
    codTitle: 'Modern Warfare 3',
    winningTeam: 'Atlanta FaZe',
    acceptedAnswers: ['atlanta faze', 'faze', 'atlanta', 'atl']
  },

  // 2022-2023 MW2 Season
  {
    id: '13',
    name: 'Major 1',
    year: 2023,
    codTitle: 'Modern Warfare 2',
    winningTeam: 'New York Subliners',
    acceptedAnswers: ['new york subliners', 'subliners', 'NY', 'NYSL', 'new york', 'ny subliners']
  },
  {
    id: '14',
    name: 'Major 2',
    year: 2023,
    codTitle: 'Modern Warfare 2',
    winningTeam: 'Atlanta FaZe',
    acceptedAnswers: ['atlanta faze', 'faze', 'atlanta', 'atl']
  },
  {
    id: '15',
    name: 'Major 3',
    year: 2023,
    codTitle: 'Modern Warfare 2',
    winningTeam: 'Toronto Ultra',
    acceptedAnswers: ['toronto ultra', 'ultra', 'tor', 'toronto']
  },
  {
    id: '16',
    name: 'Major 4',
    year: 2023,
    codTitle: 'Modern Warfare 2',
    winningTeam: 'Los Angeles Thieves',
    acceptedAnswers: ['los angeles thieves', 'thieves', 'lat', 'la thieves', 'la', 'los angeles']
  },
  {
    id: '17',
    name: 'Major 5',
    year: 2023,
    codTitle: 'Modern Warfare 2',
    winningTeam: 'New York Subliners',
    acceptedAnswers: ['new york subliners', 'subliners', 'NY', 'NYSL', 'new york', 'ny subliners']
  },
  {
    id: '18',
    name: 'Champs',
    year: 2023,
    codTitle: 'Modern Warfare 2',
    winningTeam: 'New York Subliners',
    acceptedAnswers: ['new york subliners', 'subliners', 'NY', 'NYSL', 'new york', 'ny subliners']
  },

  // 2025-2026 BO7 Season
  {
    id: '19',
    name: 'Major 1',
    year: 2026,
    codTitle: 'Black Ops 7',
    winningTeam: 'Paris Gentlemates',
    acceptedAnswers: ['paris gentlemates', 'gentlemates', 'm8', 'paris', 'gm8', 'paris m8']
  },
  {
    id: '20',
    name: 'Major 2',
    year: 2026,
    codTitle: 'Black Ops 7',
    winningTeam: 'FaZe Vegas',
    acceptedAnswers: ['vegas faze', 'faze', 'vegas', 'vgs', 'faze vegas']
  },

  // 2021-2022 Vanguard Season
  {
    id: '21',
    name: 'Kickoff Classic',
    year: 2022,
    codTitle: 'Vanguard',
    winningTeam: 'Toronto Ultra',
    acceptedAnswers: ['toronto ultra', 'ultra', 'tor', 'toronto']
  },
  {
    id: '22',
    name: 'Major 1',
    year: 2022,
    codTitle: 'Vanguard',
    winningTeam: 'OpTic Texas',
    acceptedAnswers: ['optic texas', 'optic', 'tex', 'texas', 'texas optic']
  },
  {
    id: '23',
    name: 'Major 2',
    year: 2022,
    codTitle: 'Vanguard',
    winningTeam: 'Los Angeles Guerrillas',
    acceptedAnswers: ['los angeles guerrillas', 'guerrillas', 'lag', 'la guerrillas', 'la', 'los angeles']
  },
  {
    id: '24',
    name: 'Pro-Am Classic',
    year: 2022,
    codTitle: 'Vanguard',
    winningTeam: 'New York Subliners',
    acceptedAnswers: ['new york subliners', 'subliners', 'NY', 'NYSL', 'new york', 'ny subliners']
  },
  {
    id: '25',
    name: 'Major 3',
    year: 2022,
    codTitle: 'Vanguard',
    winningTeam: 'Seattle Surge',
    acceptedAnswers: ['seattle surge', 'surge', 'SEA', 'seattle']
  },
  {
    id: '26',
    name: 'Major 4',
    year: 2022,
    codTitle: 'Vanguard',
    winningTeam: 'Los Angeles Thieves',
    acceptedAnswers: ['los angeles thieves', 'thieves', 'lat', 'la thieves', 'la', 'los angeles']
  },
  {
    id: '27',
    name: 'Champs',
    year: 2022,
    codTitle: 'Vanguard',
    winningTeam: 'Los Angeles Thieves',
    acceptedAnswers: ['los angeles thieves', 'thieves', 'lat', 'la thieves', 'la', 'los angeles']
  },

  // 2020-2021 Cold War Season
  {
    id: '28',
    name: 'Major 1',
    year: 2021,
    codTitle: 'Cold War',
    winningTeam: 'Atlanta FaZe',
    acceptedAnswers: ['atlanta faze', 'faze', 'atlanta', 'atl']
  },
  {
    id: '29',
    name: 'Major 2',
    year: 2021,
    codTitle: 'Cold War',
    winningTeam: 'Toronto Ultra',
    acceptedAnswers: ['toronto ultra', 'ultra', 'tor', 'toronto']
  },
  {
    id: '30',
    name: 'Major 3',
    year: 2021,
    codTitle: 'Cold War',
    winningTeam: 'Atlanta FaZe',
    acceptedAnswers: ['atlanta faze', 'faze', 'atlanta', 'atl']
  },
  {
    id: '31',
    name: 'Major 4',
    year: 2021,
    codTitle: 'Cold War',
    winningTeam: 'Atlanta FaZe',
    acceptedAnswers: ['atlanta faze', 'faze', 'atlanta', 'atl']
  },
  {
    id: '32',
    name: 'Major 5',
    year: 2021,
    codTitle: 'Cold War',
    winningTeam: 'Minnesota ROKKR',
    acceptedAnswers: ['minnesota rokkr', 'rokkr', 'minnesota', 'min', 'Rokkr']
  },
  {
    id: '33',
    name: 'Champs',
    year: 2021,
    codTitle: 'Cold War',
    winningTeam: 'Atlanta FaZe',
    acceptedAnswers: ['atlanta faze', 'faze', 'atlanta', 'atl']
  },
];