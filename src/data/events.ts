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
    acceptedAnswers: ['los angeles thieves', 'thieves', 'lat', 'la thieves']
  },
  {
    id: '4',
    name: 'Major 4',
    year: 2025,
    codTitle: 'Black Ops 6',
    winningTeam: 'Los Angeles Thieves',
    acceptedAnswers: ['los angeles thieves', 'thieves', 'lat', 'la thieves']
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
    acceptedAnswers: ['los angeles thieves', 'thieves', 'lat', 'la thieves']
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
    acceptedAnswers: ['los angeles guerrillas', 'guerrillas', 'lag', 'la guerrillas']
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
    acceptedAnswers: ['los angeles thieves', 'thieves', 'lat', 'la thieves']
  },
  {
    id: '27',
    name: 'Champs',
    year: 2022,
    codTitle: 'Vanguard',
    winningTeam: 'Los Angeles Thieves',
    acceptedAnswers: ['los angeles thieves', 'thieves', 'lat', 'la thieves']
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

  // 2019-2020 MW19 Season
  {
    id: '34',
    name: 'London Home Series Week 2',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'Chicago Huntsmen',
    acceptedAnswers: ['chicago huntsmen', 'huntsmen', 'chicago', 'chi']
  },
  {
    id: '35',
    name: 'Atlanta Home Series',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'Atlanta FaZe',
    acceptedAnswers: ['atlanta faze', 'faze', 'atlanta', 'atl']
  },
  {
    id: '36',
    name: 'Los Angeles Home Series',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'Dallas Empire',
    acceptedAnswers: ['dallas empire', 'empire', 'dallas', 'dal']
  },
  {
    id: '37',
    name: 'Dallas Home Series',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'Florida Mutineers',
    acceptedAnswers: ['florida mutineers', 'mutineers', 'florida', 'fl']
  },
  {
    id: '38',
    name: 'Chicago Home Series',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'Dallas Empire',
    acceptedAnswers: ['dallas empire', 'empire', 'dallas', 'dal']
  },
  {
    id: '39',
    name: 'Florida Home Series',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'Atlanta FaZe',
    acceptedAnswers: ['atlanta faze', 'faze', 'atlanta', 'atl']
  },
  {
    id: '40',
    name: 'Seattle Home Series',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'Chicago Huntsmen',
    acceptedAnswers: ['chicago huntsmen', 'huntsmen', 'chicago', 'chi']
  },
  {
    id: '41',
    name: 'Minnesota Home Series',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'Florida Mutineers',
    acceptedAnswers: ['florida mutineers', 'mutineers', 'florida', 'fl']
  },
  {
    id: '42',
    name: 'Paris Home Series',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'Florida Mutineers',
    acceptedAnswers: ['florida mutineers', 'mutineers', 'florida', 'fl']
  },
  {
    id: '43',
    name: 'New York Home Series',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'New York Subliners',
    acceptedAnswers: ['new york subliners', 'subliners', 'NY', 'NYSL', 'new york', 'ny subliners']
  },
  {
    id: '44',
    name: 'London Home Series Week 12',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'Dallas Empire',
    acceptedAnswers: ['dallas empire', 'empire', 'dallas', 'dal']
  },
  {
    id: '45',
    name: 'Toronto Home Series',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'Toronto Ultra',
    acceptedAnswers: ['toronto ultra', 'ultra', 'tor', 'toronto']
  },
  {
    id: '46',
    name: 'Champs',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'Dallas Empire',
    acceptedAnswers: ['dallas empire', 'empire', 'dallas', 'dal']
  },
];