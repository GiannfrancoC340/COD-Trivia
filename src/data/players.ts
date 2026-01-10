// src/data/players.ts
import type { Player } from '../types';

// export interface Player {
//   id: string;
//   ign: string;
//   realName: string;
//   nationality: string;
//   role: string;
//   teams: Team[];
// }

export const players: Player[] = [
    {
        id: '1',
        ign: 'Scump',
        realName: 'Seth Abner',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'OpTic Gaming', years: '2012-2014' },
            { name: 'Envy', years: '2014' },
            { name: 'OpTic Gaming', years: '2014-2019' },
            { name: 'Chicago Huntsmen', years: '2019-2020' },
            { name: 'OpTic Chicago', years: '2020-2021' },
            { name: 'OpTic Texas', years: '2021-2023' }
        ]
    }
]