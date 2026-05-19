import type { Event } from '../types';

// export interface Event {
//     id: string;
//     name: string;
//     year: number;
//     codTitle: string;
//     winningTeam: string;        // Changed from 'winner' and 'team'
//     acceptedAnswers: string[];  // Array of valid answers (OpTic, OpTic Texas, OPT, etc.)
//     youtubeUrl: string;         // YouTube link of Grand Finals VOD
//   }

export const events: Event[] = [
  // 2024-2025 BO6 Season
  {
    id: '1',
    name: 'Major 1',
    year: 2025,
    codTitle: 'Black Ops 6',
    winningTeam: 'Atlanta FaZe',
    acceptedAnswers: ['atlanta faze', 'faze', 'atl', 'atlanta'],
    youtubeUrl: 'https://youtu.be/Ew-VnTpuZHA?si=5SKIcQaXo9U568a8'
  },
  {
    id: '2',
    name: 'Major 2',
    year: 2025,
    codTitle: 'Black Ops 6',
    winningTeam: 'Atlanta FaZe',
    acceptedAnswers: ['atlanta faze', 'faze', 'atlanta', 'atl'],
    youtubeUrl: 'https://youtu.be/179T7dTy8CY?si=I9TWGnjMVTC5iXmT'
  },
  {
    id: '3',
    name: 'Major 3',
    year: 2025,
    codTitle: 'Black Ops 6',
    winningTeam: 'Los Angeles Thieves',
    acceptedAnswers: ['los angeles thieves', 'thieves', 'lat', 'la thieves'],
    youtubeUrl: 'https://youtu.be/jemhMqzoUbY?si=kj6sNZ0zkNjDekNn'
  },
  {
    id: '4',
    name: 'Major 4',
    year: 2025,
    codTitle: 'Black Ops 6',
    winningTeam: 'Los Angeles Thieves',
    acceptedAnswers: ['los angeles thieves', 'thieves', 'lat', 'la thieves'],
    youtubeUrl: 'https://youtu.be/TqgHSE3wCSc?si=rIpmxgpI-36DRFEh'
  },
  {
    id: '5',
    name: 'Champs',
    year: 2025,
    codTitle: 'Black Ops 6',
    winningTeam: 'OpTic Texas',
    acceptedAnswers: ['optic texas', 'optic', 'tex', 'texas', 'texas optic'],
    youtubeUrl: 'https://youtu.be/ho4yMYHbPIA?si=meRwnbmhrS0EoKoB'
  },
  {
    id: '6',
    name: 'EWC',
    year: 2025,
    codTitle: 'Black Ops 6',
    winningTeam: 'OpTic Texas',
    acceptedAnswers: ['optic texas', 'optic', 'tex', 'texas', 'texas optic'],
    youtubeUrl: 'https://youtu.be/hRQnwpNDRAU?si=Bs3v7heSMElTC3iN'
  },

  // 2023-2024 MW3 Season
  {
    id: '7',
    name: 'Major 1',
    year: 2024,
    codTitle: 'Modern Warfare 3',
    winningTeam: 'Toronto Ultra',
    acceptedAnswers: ['toronto ultra', 'ultra', 'tor', 'toronto'],
    youtubeUrl: 'https://youtu.be/MbBdLBhEzDI?si=zQOgfVDrFlXKJYWK'
  },
  {
    id: '8',
    name: 'Major 2',
    year: 2024,
    codTitle: 'Modern Warfare 3',
    winningTeam: 'Atlanta FaZe',
    acceptedAnswers: ['atlanta faze', 'faze', 'atlanta', 'atl'],
    youtubeUrl: 'https://youtu.be/gslc4qUTlTY?si=OySbQesPAw9dRK5V'
  },
  {
    id: '9',
    name: 'Major 3',
    year: 2024,
    codTitle: 'Modern Warfare 3',
    winningTeam: 'OpTic Texas',
    acceptedAnswers: ['optic texas', 'optic', 'tex', 'texas', 'texas optic'],
    youtubeUrl: 'https://youtu.be/lBYdLmo0zOQ?si=EI-YzClVYpYiUe6g'
  },
  {
    id: '10',
    name: 'Major 4',
    year: 2024,
    codTitle: 'Modern Warfare 3',
    winningTeam: 'New York Subliners',
    acceptedAnswers: ['new york subliners', 'subliners', 'NY', 'NYSL', 'new york', 'ny subliners'],
    youtubeUrl: 'https://youtu.be/4Dr3Gb-4BHM?si=J7In6Xz94O0QE6dy'
  },
  {
    id: '11',
    name: 'Champs',
    year: 2024,
    codTitle: 'Modern Warfare 3',
    winningTeam: 'OpTic Texas',
    acceptedAnswers: ['optic texas', 'optic', 'tex', 'texas', 'texas optic'],
    youtubeUrl: 'https://youtu.be/1_GdtK1O4as?si=a8Gov5SvYsTzEoz1'
  },
  {
    id: '12',
    name: 'EWC',
    year: 2024,
    codTitle: 'Modern Warfare 3',
    winningTeam: 'Atlanta FaZe',
    acceptedAnswers: ['atlanta faze', 'faze', 'atlanta', 'atl'],
    youtubeUrl: 'https://youtu.be/sJL4KQ269F8?si=GFZrnSxi8Z-mGxTT'
  },

  // 2022-2023 MW2 Season
  {
    id: '13',
    name: 'Major 1',
    year: 2023,
    codTitle: 'Modern Warfare 2',
    winningTeam: 'New York Subliners',
    acceptedAnswers: ['new york subliners', 'subliners', 'NY', 'NYSL', 'new york', 'ny subliners'],
    youtubeUrl: 'https://youtu.be/REnitKGBQSc?si=TchIvVtJdmXJ6HwZ'
  },
  {
    id: '14',
    name: 'Major 2',
    year: 2023,
    codTitle: 'Modern Warfare 2',
    winningTeam: 'Atlanta FaZe',
    acceptedAnswers: ['atlanta faze', 'faze', 'atlanta', 'atl'],
    youtubeUrl: 'https://youtu.be/VxBu_wg8hGA?si=C6Tus4qERlpNsaGq'
  },
  {
    id: '15',
    name: 'Major 3',
    year: 2023,
    codTitle: 'Modern Warfare 2',
    winningTeam: 'Toronto Ultra',
    acceptedAnswers: ['toronto ultra', 'ultra', 'tor', 'toronto'],
    youtubeUrl: 'https://youtu.be/ChkZ7JC98SU?si=okWo1_7RHepSAKqU'
  },
  {
    id: '16',
    name: 'Major 4',
    year: 2023,
    codTitle: 'Modern Warfare 2',
    winningTeam: 'Los Angeles Thieves',
    acceptedAnswers: ['los angeles thieves', 'thieves', 'lat', 'la thieves'],
    youtubeUrl: 'https://youtu.be/BGkKdq5Ad1s?si=VmJz7RNSEKatDov6'
  },
  {
    id: '17',
    name: 'Major 5',
    year: 2023,
    codTitle: 'Modern Warfare 2',
    winningTeam: 'New York Subliners',
    acceptedAnswers: ['new york subliners', 'subliners', 'NY', 'NYSL', 'new york', 'ny subliners'],
    youtubeUrl: 'https://youtu.be/LP6mewOgySU?si=EEGHG68Wsj9CszgN'
  },
  {
    id: '18',
    name: 'Champs',
    year: 2023,
    codTitle: 'Modern Warfare 2',
    winningTeam: 'New York Subliners',
    acceptedAnswers: ['new york subliners', 'subliners', 'NY', 'NYSL', 'new york', 'ny subliners'],
    youtubeUrl: 'https://www.youtube.com/live/BT11dLPaxvc?si=HbwN48lo2G3p2ucc'
  },

  // 2025-2026 BO7 Season
  {
    id: '19',
    name: 'Major 1',
    year: 2026,
    codTitle: 'Black Ops 7',
    winningTeam: 'Paris Gentlemates',
    acceptedAnswers: ['paris gentlemates', 'gentlemates', 'm8', 'paris', 'gm8', 'paris m8'],
    youtubeUrl: 'https://youtu.be/jm752QUzGa8?si=J47oLgH3sEO-_Ne3'
  },
  {
    id: '20',
    name: 'Major 2',
    year: 2026,
    codTitle: 'Black Ops 7',
    winningTeam: 'FaZe Vegas',
    acceptedAnswers: ['vegas faze', 'faze', 'vegas', 'vgs', 'faze vegas'],
    youtubeUrl: 'https://youtu.be/K1_-qUo3FzY?si=snH-sqmOZ0VXodkh'
  },
  {
    id: '47',
    name: 'Major 3',
    year: 2026,
    codTitle: 'Black Ops 7',
    winningTeam: 'Los Angeles Thieves',
    acceptedAnswers: ['los angeles thieves', 'thieves', 'lat', 'la thieves'],
    youtubeUrl: 'https://youtu.be/Ew6mHrMBeAg?si=I_o3e8dl7FK3YH1j'
  },

  // 2021-2022 Vanguard Season
  {
    id: '21',
    name: 'Kickoff Classic',
    year: 2022,
    codTitle: 'Vanguard',
    winningTeam: 'Toronto Ultra',
    acceptedAnswers: ['toronto ultra', 'ultra', 'tor', 'toronto'],
    youtubeUrl: 'https://youtu.be/BvVnY0AlNo0?si=R_yNz640XX1IQKMM'
  },
  {
    id: '22',
    name: 'Major 1',
    year: 2022,
    codTitle: 'Vanguard',
    winningTeam: 'OpTic Texas',
    acceptedAnswers: ['optic texas', 'optic', 'tex', 'texas', 'texas optic'],
    youtubeUrl: 'https://youtu.be/RRS8PfHRAhE?si=k9P7v8gxMEJXRdSB'
  },
  {
    id: '23',
    name: 'Major 2',
    year: 2022,
    codTitle: 'Vanguard',
    winningTeam: 'Los Angeles Guerrillas',
    acceptedAnswers: ['los angeles guerrillas', 'guerrillas', 'lag', 'la guerrillas'],
    youtubeUrl: 'https://youtu.be/f7pylGtS0CY?si=La_ECuOqbUXUj2ys'
  },
  {
    id: '24',
    name: 'Pro-Am Classic',
    year: 2022,
    codTitle: 'Vanguard',
    winningTeam: 'New York Subliners',
    acceptedAnswers: ['new york subliners', 'subliners', 'NY', 'NYSL', 'new york', 'ny subliners'],
    youtubeUrl: 'https://youtu.be/gjHG9IXYSxA?si=8X9_4qJDN2fMl4cK'
  },
  {
    id: '25',
    name: 'Major 3',
    year: 2022,
    codTitle: 'Vanguard',
    winningTeam: 'Seattle Surge',
    acceptedAnswers: ['seattle surge', 'surge', 'SEA', 'seattle'],
    youtubeUrl: 'https://youtu.be/6y_fM5NGgAw?si=ZAmyVLL5vHr2wOCT'
  },
  {
    id: '26',
    name: 'Major 4',
    year: 2022,
    codTitle: 'Vanguard',
    winningTeam: 'Los Angeles Thieves',
    acceptedAnswers: ['los angeles thieves', 'thieves', 'lat', 'la thieves'],
    youtubeUrl: 'https://youtu.be/kPpvs3mW4kQ?si=z2JDce5wspgY7N0H'
  },
  {
    id: '27',
    name: 'Champs',
    year: 2022,
    codTitle: 'Vanguard',
    winningTeam: 'Los Angeles Thieves',
    acceptedAnswers: ['los angeles thieves', 'thieves', 'lat', 'la thieves'],
    youtubeUrl: 'https://youtu.be/xXQgc9ELtEk?si=z2-szWaBGyJBoCc4'
  },

  // 2020-2021 Cold War Season
  {
    id: '28',
    name: 'Major 1',
    year: 2021,
    codTitle: 'Cold War',
    winningTeam: 'Atlanta FaZe',
    acceptedAnswers: ['atlanta faze', 'faze', 'atlanta', 'atl'],
    youtubeUrl: 'https://youtu.be/OkW_emHf5RU?si=eMNULAoJxp5gctmq'
  },
  {
    id: '29',
    name: 'Major 2',
    year: 2021,
    codTitle: 'Cold War',
    winningTeam: 'Toronto Ultra',
    acceptedAnswers: ['toronto ultra', 'ultra', 'tor', 'toronto'],
    youtubeUrl: 'https://youtu.be/BfPCQ7CssLg?si=JPg8lp4R_zwRskyg'
  },
  {
    id: '30',
    name: 'Major 3',
    year: 2021,
    codTitle: 'Cold War',
    winningTeam: 'Atlanta FaZe',
    acceptedAnswers: ['atlanta faze', 'faze', 'atlanta', 'atl'],
    youtubeUrl: 'https://youtu.be/FehDbSaX6rE?si=7dm6C8guiWurv352'
  },
  {
    id: '31',
    name: 'Major 4',
    year: 2021,
    codTitle: 'Cold War',
    winningTeam: 'Atlanta FaZe',
    acceptedAnswers: ['atlanta faze', 'faze', 'atlanta', 'atl'],
    youtubeUrl: 'https://youtu.be/Mok0WwYWeLw?si=aTr1AGEurmKDewdV'
  },
  {
    id: '32',
    name: 'Major 5',
    year: 2021,
    codTitle: 'Cold War',
    winningTeam: 'Minnesota ROKKR',
    acceptedAnswers: ['minnesota rokkr', 'rokkr', 'minnesota', 'min', 'Rokkr'],
    youtubeUrl: 'https://youtu.be/tMPh5a0kW70?si=3IgEBcRVMmhxdWNs'
  },
  {
    id: '33',
    name: 'Champs',
    year: 2021,
    codTitle: 'Cold War',
    winningTeam: 'Atlanta FaZe',
    acceptedAnswers: ['atlanta faze', 'faze', 'atlanta', 'atl'],
    youtubeUrl: 'https://youtu.be/eUfDCcxPxBY?si=b07OjRErJ9VtJbEB'
  },

  // 2019-2020 MW19 Season
  {
    id: '34',
    name: 'London Home Series Week 2',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'Chicago Huntsmen',
    acceptedAnswers: ['chicago huntsmen', 'huntsmen', 'chicago', 'chi'],
    youtubeUrl: 'https://youtu.be/DHKXoW90lu0?si=82S5HOGXq3EXlqoV'
  },
  {
    id: '35',
    name: 'Atlanta Home Series',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'Atlanta FaZe',
    acceptedAnswers: ['atlanta faze', 'faze', 'atlanta', 'atl'],
    youtubeUrl: 'https://youtu.be/cTn_Yp7kKos?si=4oJIOTOWwG7HcvEt'
  },
  {
    id: '36',
    name: 'Los Angeles Home Series',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'Dallas Empire',
    acceptedAnswers: ['dallas empire', 'empire', 'dallas', 'dal'],
    youtubeUrl: 'https://youtu.be/_gHIdm-8w-c?si=3G47y0N2QCfXHVDO'
  },
  {
    id: '37',
    name: 'Dallas Home Series',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'Florida Mutineers',
    acceptedAnswers: ['florida mutineers', 'mutineers', 'florida', 'fl'],
    youtubeUrl: 'https://youtu.be/8F86U0geGdQ?si=oOioK5XEU9Jy4V3h'
  },
  {
    id: '38',
    name: 'Chicago Home Series',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'Dallas Empire',
    acceptedAnswers: ['dallas empire', 'empire', 'dallas', 'dal'],
    youtubeUrl: 'https://youtu.be/gpB-GM3mTpk?si=MoNnkSl9wtjcL9Md'
  },
  {
    id: '39',
    name: 'Florida Home Series',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'Atlanta FaZe',
    acceptedAnswers: ['atlanta faze', 'faze', 'atlanta', 'atl'],
    youtubeUrl: 'https://youtu.be/G6gx7YH0nv8?si=YRLgMUvG8s_IzTvs'
  },
  {
    id: '40',
    name: 'Seattle Home Series',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'Chicago Huntsmen',
    acceptedAnswers: ['chicago huntsmen', 'huntsmen', 'chicago', 'chi'],
    youtubeUrl: 'https://youtu.be/Ko_xKC91uKY?si=qNEGpHrDTm5Tf07z'
  },
  {
    id: '41',
    name: 'Minnesota Home Series',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'Florida Mutineers',
    acceptedAnswers: ['florida mutineers', 'mutineers', 'florida', 'fl'],
    youtubeUrl: 'https://youtu.be/1Q5FOkluleo?si=vppSJ1VrfNupqVYN'
  },
  {
    id: '42',
    name: 'Paris Home Series',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'Florida Mutineers',
    acceptedAnswers: ['florida mutineers', 'mutineers', 'florida', 'fl'],
    youtubeUrl: 'https://youtu.be/xICysoxRPZM?si=-iNsdCio9m5XW0VQ'
  },
  {
    id: '43',
    name: 'New York Home Series',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'New York Subliners',
    acceptedAnswers: ['new york subliners', 'subliners', 'NY', 'NYSL', 'new york', 'ny subliners'],
    youtubeUrl: 'https://youtu.be/9rOLtodMcRk?si=ll90OJFkHattGu1d'
  },
  {
    id: '44',
    name: 'London Home Series Week 12',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'Dallas Empire',
    acceptedAnswers: ['dallas empire', 'empire', 'dallas', 'dal'],
    youtubeUrl: 'https://youtu.be/RXGaz-xiZHU?si=9zxlQ9MozeNKK4rt'
  },
  {
    id: '45',
    name: 'Toronto Home Series',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'Toronto Ultra',
    acceptedAnswers: ['toronto ultra', 'ultra', 'tor', 'toronto'],
    youtubeUrl: 'https://youtu.be/FK928vale0M?si=e521XbXJ9QYTNJ2Y'
  },
  {
    id: '46',
    name: 'Champs',
    year: 2020,
    codTitle: 'Modern Warfare',
    winningTeam: 'Dallas Empire',
    acceptedAnswers: ['dallas empire', 'empire', 'dallas', 'dal'],
    youtubeUrl: 'https://youtu.be/qg-VzH8tvVQ?si=I5GayQK6L444lAjU'
  },
];