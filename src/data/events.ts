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

];