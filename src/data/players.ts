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
            { name: 'Chicago Huntsmen', years: '2019-2020' },
            { name: 'OpTic Chicago', years: '2020-2021' },
            { name: 'OpTic Texas', years: '2021-2023' }
        ]
    },
    // 2025-2026 BO7 Season
    // Boston Breach
    {
        id: '2',
        ign: 'Snoopy',
        realName: 'Eric Perez',
        nationality: 'Mexico',
        role: 'SMG',
        teams: [
            { name: 'Boston Breach', years: '2023-2026' }
        ]
    },
    {
        id: '3',
        ign: 'Cammy',
        realName: 'Cameron McKilligan',
        nationality: 'Scotland',
        role: 'AR',
        teams: [
            { name: 'Toronto Ultra', years: '2019-2022' },
            { name: 'Minnesota ROKKR', years: '2022-2023' },
            { name: 'Los Angeles Thieves', years: '2023-2024' },
            { name: 'Boston Breach', years: '2024-2026' }
        ]
    },
    {
        id: '4',
        ign: 'Purj',
        realName: 'Evan Perez',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Las Vegas Legion', years: '2023-2024' },
            { name: 'Boston Breach', years: '2024-2026' }
        ]
    },
    {
        id: '5',
        ign: 'Nastie',
        realName: 'Byron Plumridge',
        nationality: 'UK',
        role: 'AR',
        teams: [
            { name: 'London Royal Ravens', years: '2021-2023' },
            { name: 'Los Angeles Thieves', years: '2024-2024' },
            { name: 'Vancouver Surge', years: '2024-2025' },
            { name: 'Boston Breach', years: '2025-2026' }
        ]
    },

    // Carolina Royal Ravens
    {
        id: '6',
        ign: 'Craze',
        realName: 'Jay Mallhi',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Carolina Royal Ravens', years: '2025-2026' }
        ]
    },
    {
        id: '7',
        ign: 'Lurqxx',
        realName: 'Logan Brown',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Carolina Royal Ravens', years: '2025-2026' }
        ]
    },
    {
        id: '8',
        ign: 'Nero',
        realName: 'Dylan Koch',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Boston Breach', years: '2022-2023'},
            { name: 'Las Vegas Legion', years: '2023-2024'},
            { name: 'Minnesota ROKKR', years: '2024-2025'},
            { name: 'Carolina Royal Ravens', years: '2025-2026' }
        ]
    },
    {
        id: '9',
        ign: 'Exceed',
        realName: 'Kaden Stockdale',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Minnesota ROKKR', years: '2019-2020'},
            { name: 'Los Angeles Guerrillas', years: '2023-2023'},
            { name: 'Carolina Royal Ravens', years: '2026-2026' }
        ]
    },
    {
        id: '10',
        ign: 'SlasheR',
        realName: 'Austin Liddicoat',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'OpTic Gaming Los Angeles', years: '2019-2020'},
            { name: 'Los Angeles Thieves', years: '2020-2021'},
            { name: 'Los Angeles Guerrillas', years: '2021-2022'},
            { name: 'Atlanta FaZe', years: '2022-2023'},
            { name: 'Boston Breach', years: '2023-2024'},
            { name: 'Carolina Royal Ravens', years: '2024-2026' }
        ]
    },

    // Cloud9 New York
    {
        id: '11',
        ign: 'Afro',
        realName: 'Marcus Reid',
        nationality: 'UK',
        role: 'SMG',
        teams: [
            { name: 'London Royal Ravens', years: '2021-2022'},
            { name: 'Minnesota ROKKR', years: '2022-2023'},
            { name: 'Los Angeles Thieves', years: '2023-2024'},
            { name: 'Cloud9 New York', years: '2025-2026' },
            { name: 'Boston Breach', years: '2026-2026'}
        ]
    },
    {
        id: '12',
        ign: 'Beans',
        realName: 'Ben McMellon',
        nationality: 'UK',
        role: 'AR',
        teams: [
            { name: 'Boston Breach', years: '2022-2024'},
            { name: 'Carolina Royal Ravens', years: '2024-2024'},
            { name: 'Toronto Ultra', years: '2024-2025'},
            { name: 'Cloud9 New York', years: '2025-2026' }
        ]
    },
    {
        id: '13',
        ign: 'Mack',
        realName: 'Makenzie Kelley',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'New York Subliners', years: '2020-2021'},
            { name: 'Seattle Surge', years: '2021-2023'},
            { name: 'Cloud9 New York', years: '2024-2026' }
        ]
    },
    {
        id: '14',
        ign: 'Vivid',
        realName: 'Reece Drost',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Los Angeles Guerrillas', years: '2020-2021'},
            { name: 'Dallas Empire', years: '2021-2021'},
            { name: 'Florida Mutineers', years: '2021-2022'},
            { name: 'Boston Breach', years: '2022-2023'},
            { name: 'Minnesota ROKKR', years: '2023-2024'},
            { name: 'Carolina Royal Ravens', years: '2024-2025'},
            { name: 'Cloud9 New York', years: '2025-2026' }
        ]
    },

    // FaZe Vegas
    {
        id: '15',
        ign: 'Simp',
        realName: 'Chris Lehr',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Atlanta FaZe', years: '2019-2025'},
            { name: 'FaZe Vegas', years: '2025-2026' }
        ]
    },
    {
        id: '16',
        ign: 'Abuzah',
        realName: 'Jordan Francois',
        nationality: 'Belgium',
        role: 'AR',
        teams: [
            { name: 'Seattle Surge', years: '2023-2024'},
            { name: 'Vancouver Surge', years: '2024-2025'},
            { name: 'FaZe Vegas', years: '2025-2026' }
        ]
    },
    {
        id: '17',
        ign: '04',
        realName: 'Jovan Rodriguez',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Seattle Surge', years: '2024-2024'},
            { name: 'Vancouver Surge', years: '2024-2025'},
            { name: 'FaZe Vegas', years: '2025-2026' }
        ]
    },
    {
        id: '18',
        ign: 'Drazah',
        realName: 'Zack Jordan',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'OpTic Gaming Los Angeles', years: '2020-2020'},
            { name: 'Los Angeles Thieves', years: '2020-2023'},
            { name: 'Atlanta FaZe', years: '2023-2025'},
            { name: 'FaZe Vegas', years: '2025-2026' }
        ]
    },

    // G2 Minnesota
    {
        id: '19',
        ign: 'Estreal',
        realName: 'Justice McMillan',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Los Angeles Guerrillas', years: '2023-2024'},
            { name: 'Minnesota ROKKR', years: '2024-2025'},
            { name: 'G2 Minnesota', years: '2025-2026' }
        ]
    },
    {
        id: '20',
        ign: 'Kremp',
        realName: 'Kyle Harworth',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Boston Breach', years: '2023-2023'},
            { name: 'Los Angeles Thieves', years: '2024-2024'},
            { name: 'Cloud9 New York', years: '2024-2025'},
            { name: 'G2 Minnesota', years: '2025-2026' }
        ]
    },
    {
        id: '21',
        ign: 'Mamba',
        realName: 'Paul Solano',
        nationality: 'Mexico',
        role: 'AR',
        teams: [
            { name: 'G2 Minnesota', years: '2025-2026' }
        ]
    },
    {
        id: '22',
        ign: 'Skyz',
        realName: 'Cesar Bueno',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Florida Mutineers', years: '2019-2022'},
            { name: 'New York Subliners', years: '2022-2024'},
            { name: 'Los Angeles Guerrillas M8', years: '2024-2025'},
            { name: 'OpTic Texas', years: '2025-2025'},
            { name: 'G2 Minnesota', years: '2025-2026' }
        ]
    },

    // Los Angeles Thieves
    {
        id: '23',
        ign: 'Hydra',
        realName: 'Paco Rusiewiez',
        nationality: 'France',
        role: 'SMG',
        teams: [
            { name: 'New York Subliners', years: '2020-2024'},
            { name: 'Los Angeles Thieves', years: '2024-2026' }
        ]
    },
    {
        id: '24',
        ign: 'Scrap',
        realName: 'Thomas Ernst',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Toronto Ultra', years: '2022-2024'},
            { name: 'Los Angeles Thieves', years: '2024-2026' }
        ]
    },
    {
        id: '25',
        ign: 'Kenny',
        realName: 'Kenneth Williams',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'OpTic Gaming Los Angeles', years: '2019-2020'},
            { name: 'Los Angeles Thieves', years: '2020-2023'},
            { name: 'OpTic Texas', years: '2023-2025'},
            { name: 'Minnesota ROKKR', years: '2025-2025'},
            { name: 'Los Angeles Thieves', years: '2025-2026' }
        ]
    },
    {
        id: '26',
        ign: 'Abezy',
        realName: 'Tyler Pharris',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Atlanta FaZe', years: '2019-2025'},
            { name: 'Los Angeles Thieves', years: '2025-2026' }
        ]
    },

    // Miami Heretics
    {
        id: '27',
        ign: 'MettalZ',
        realName: 'Adrian Serrano',
        nationality: 'Spain',
        role: 'SMG',
        teams: [
            { name: 'Toronto Ultra', years: '2019-2020'},
            { name: 'Miami Heretics', years: '2023-2026' }
        ]
    },
    {
        id: '28',
        ign: 'SupeR',
        realName: 'Diego Escudero',
        nationality: 'Spain',
        role: 'AR',
        teams: [
            { name: 'Miami Heretics', years: '2024-2026' }
        ]
    },
    {
        id: '29',
        ign: 'RenKoR',
        realName: 'David Isern',
        nationality: 'Spain',
        role: 'AR',
        teams: [
            { name: 'Miami Heretics', years: '2024-2026' }
        ]
    },
    {
        id: '30',
        ign: 'Traixx',
        realName: 'Nicolas Monaco',
        nationality: 'Argentina',
        role: 'SMG',
        teams: [
            { name: 'Miami Heretics', years: '2025-2026' }
        ]
    },

    // OpTic Texas
    {
        id: '31',
        ign: 'Shotzzy',
        realName: 'Anthony Cuevas-Castro',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Dallas Empire', years: '2019-2021'},
            { name: 'OpTic Texas', years: '2021-2026' }
        ]
    },
    {
        id: '32',
        ign: 'Dashy',
        realName: 'Brandon Otell',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'OpTic Gaming Los Angeles', years: '2019-2020'},
            { name: 'OpTic Chicago', years: '2020-2021'},
            { name: 'OpTic Texas', years: '2021-2026' }
        ]
    },
    {
        id: '33',
        ign: 'Huke',
        realName: 'Cuyler Garland',
        nationality: 'Saudi Arabia',
        role: 'SMG',
        teams: [
            { name: 'Dallas Empire', years: '2019-2021'},
            { name: 'Los Angeles Thieves', years: '2021-2021'},
            { name: 'Los Angeles Guerrillas', years: '2021-2023'},
            { name: 'OpTic Texas', years: '2023-2023'},
            { name: 'Seattle Surge', years: '2023-2024'},
            { name: 'OpTic Texas', years: '2024-2026' }
        ]
    },
    {
        id: '34',
        ign: 'Mercules',
        realName: 'Mason Ramsey',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Toronto Ultra', years: '2025-2025'},
            { name: 'OpTic Texas', years: '2025-2026' }
        ]
    },

    // Paris Gentlemates
    {
        id: '35',
        ign: 'Sib',
        realName: 'Daunte Gray',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Seattle Surge', years: '2021-2023'},
            { name: 'New York Subliners', years: '2023-2024'},
            { name: 'Cloud9 New York', years: '2024-2025'},
            { name: 'Paris Gentlemates', years: '2025-2026' }
        ]
    },
    {
        id: '36',
        ign: 'Envoy',
        realName: 'Dylan Hannon',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Chicago Huntsmen', years: '2019-2020'},
            { name: 'OpTic Chicago', years: '2020-2021'},
            { name: 'Los Angeles Thieves', years: '2021-2023'},
            { name: 'Toronto Ultra', years: '2023-2024'},
            { name: 'Los Angeles Thieves', years: '2024-2025'},
            { name: 'Paris Gentlemates', years: '2025-2206' }
        ]
    },
    {
        id: '37',
        ign: 'Ghosty',
        realName: 'Daniel Rothe',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'OpTic Texas', years: '2023-2023'},
            { name: 'Los Angeles Thieves', years: '2023-2025'},
            { name: 'Paris Gentlemates', years: '2025-2026' }
        ]
    },
    {
        id: '38',
        ign: 'Neptune',
        realName: 'Travis McCloud',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Florida Mutineers', years: '2021-2021'},
            { name: 'New York Subliners', years: '2021-2022'},
            { name: 'Los Angeles Guerrillas', years: '2022-2023'},
            { name: 'Vancouver Surge', years: '2025-2025'},
            { name: 'Paris Gentlemates', years: '2025-2026' }
        ]
    },

    // Riyadh Falcons
    {
        id: '39',
        ign: 'Pred',
        realName: 'Amer Zulbeari',
        nationality: 'Australia',
        role: 'SMG',
        teams: [
            { name: 'Seattle Surge', years: '2021-2023'},
            { name: 'OpTic Texas', years: '2023-2025'},
            { name: 'Las Vegas Falcons', years: '2025-2025'},
            { name: 'Riyadh Falcons', years: '2025-2026' }
        ]
    },
    {
        id: '40',
        ign: 'Exnid',
        realName: 'Saud Alotai',
        nationality: 'Saudi Arabia',
        role: 'SMG',
        teams: [
            { name: 'Las Vegas Falcons', years: '2024-2025'},
            { name: 'Riyadh Falcons', years: '2025-2026' }
        ]
    },
    {
        id: '41',
        ign: 'KiSMET',
        realName: 'Matthew Tinsley',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Paris Legion', years: '2019-2020'},
            { name: 'New York Subliners', years: '2022-2024'},
            { name: 'Los Angeles Guerrillas M8', years: '2024-2025'},
            { name: 'Riyadh Falcons', years: '2025-2026' }
        ]
    },
    {
        id: '42',
        ign: 'Cellium',
        realName: 'McArthur Jovel',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Atlanta FaZe', years: '2019-2025'},
            { name: 'Riyadh Falcons', years: '2025-2026' }
        ]
    },

    // Toronto KOI
    {
        id: '43',
        ign: 'CleanX',
        realName: 'Tobias Juul Jonsson',
        nationality: 'Denmark',
        role: 'SMG',
        teams: [
            { name: 'Toronto Ultra', years: '2019-2025'},
            { name: 'Toronto KOI', years: '2025-2026' }
        ]
    },
    {
        id: '44',
        ign: 'Insight',
        realName: 'Jamie Craven',
        nationality: 'UK',
        role: 'AR',
        teams: [
            { name: 'Toronto Ultra', years: '2020-2025'},
            { name: 'Toronto KOI', years: '2025-2026' }
        ]
    },
    {
        id: '45',
        ign: 'Reeal',
        realName: 'Jose Manuel Fernandez',
        nationality: 'Spain',
        role: 'SMG',
        teams: [
            { name: 'Carolina Royal Ravens', years: '2023-2024'},
            { name: 'Miami Heretics', years: '2024-2025'},
            { name: 'Toronto KOI', years: '2025-2026' }
        ]
    },
    {
        id: '46',
        ign: 'JoeDeceives',
        realName: 'Joseph Romero',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Los Angeles Guerrillas', years: '2023-2023'},
            { name: 'Los Angeles Thieves', years: '2023-2024'},
            { name: 'Toronto Ultra', years: '2024-2025'},
            { name: 'Toronto KOI', years: '2025-2026' }
        ]
    },

    // Vancouver Surge
    {
        id: '47',
        ign: 'Abe',
        realName: 'Ronald Abraham',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Toronto Ultra', years: '2025-2025'},
            { name: 'Vancouver Surge', years: '2025-2026' }
        ]
    },
    {
        id: '48',
        ign: 'Lunarz',
        realName: 'Noah Whillock',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Los Angeles Guerrillas M8', years: '2025-2025'},
            { name: 'Vancouver Surge', years: '2025-2026' }
        ]
    },
    {
        id: '49',
        ign: 'Gwinn',
        realName: 'Isaiah Gwinn',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Carolina Royal Ravens', years: '2023-2025'},
            { name: 'Cloud9 New York', years: '2025-2025'},
            { name: 'Vancouver Surge', years: '2025-2026' }
        ]
    },
    {
        id: '50',
        ign: 'TJHaLy',
        realName: 'Thomas Haly',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'OpTic Gaming Los Angeles', years: '2019-2020'},
            { name: 'Los Angeles Thieves', years: '2020-2021'},
            { name: 'Boston Breach', years: '2022-2022'},
            { name: 'Las Vegas Legion', years: '2022-2023'},
            { name: 'Carolina Royal Ravens', years: '2024-2025'},
            { name: 'Las Vegas Falcons', years: '2025-2025'},
            { name: 'Vancouver Surge', years: '2026-2026' }
        ]
    },
    {
        id: '51',
        ign: 'Lqgend',
        realName: 'Kaci Sabri',
        nationality: 'France',
        role: 'SMG',
        teams: [
            { name: 'Vancouver Surge', years: '2025-2026' }
        ]
    },

    // Substitutes
    {
        id: '52',
        ign: 'Nium',
        realName: 'Jeremiah Harrison',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Los Angeles Thieves', years: '2026-2026' }
        ]
    },
    {
        id: '53',
        ign: 'Kips',
        realName: 'Nicholas Lyons',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Toronto KOI', years: '2026-2026' }
        ]
    },
    {
        id: '54',
        ign: 'Capsidal',
        realName: 'Kenyen Sutton',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Boston Breach', years: '2022-2022'},
            { name: 'Florida Mutineers', years: '2023-2023'},
            { name: 'Boston Breach', years: '2023-2024'},
            { name: 'Cloud9 New York', years: '2025-2025'},
            { name: 'Vancouver Surge', years: '2026-2026' }
        ]
    },
    {
        id: '55',
        ign: 'Spart',
        realName: 'Kris Cervantez',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Los Angeles Guerrillas', years: '2021-2023'},
            { name: 'Cloud9 New York', years: '2025-2025'},
            { name: 'Boston Breach', years: '2026-2026' }
        ]
    },

    // 2024-2025 BO6 season
    {
        id: '56',
        ign: 'Owakening',
        realName: 'Joseph Conley',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Florida Mutineers', years: '2020-2022'},
            { name: 'Boston Breach', years: '2022-2023'},
            { name: 'Minnesota ROKKR', years: '2023-2024'},
            { name: 'Boston Breach', years: '2024-2025' }
        ]
    },
    {
        id: '57',
        ign: 'Lynz',
        realName: 'Thomas Gregorio',
        nationality: 'France',
        role: 'SMG',
        teams: [
            { name: 'Minnesota ROKKR', years: '2023-2024'},
            { name: 'Los Angeles Guerrillas M8', years: '2024-2025' }
        ]
    },
    {
        id: '58',
        ign: 'Priestahh',
        realName: 'Preston Greiner',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Atlanta FaZe', years: '2019-2020'},
            { name: 'Minnesota ROKKR', years: '2020-2022'},
            { name: 'New York Subliners', years: '2022-2023'},
            { name: 'Boston Breach', years: '2023-2024'},
            { name: 'Los Angeles Guerrillas M8', years: '2024-2025' },
            { name: 'Las Vegas Falcons', years: '2025-2025'}
        ]
    },
    {
        id: '59',
        ign: 'Attach',
        realName: 'Dillon Price',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'New York Subliners', years: '2019-2020'},
            { name: 'Minnesota ROKKR', years: '2020-2023'},
            { name: 'Las Vegas Legion', years: '2023-2024'},
            { name: 'Cloud9 New York', years: '2024-2025' }
        ]
    },
    {
        id: '60',
        ign: 'Gio',
        realName: 'Giovanni Webster',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Las Vegas Legion', years: '2024-2024'},
            { name: 'Minnesota ROKKR', years: '2024-2025'}
        ]
    },
    {
        id: '61',
        ign: 'PaulEhx',
        realName: 'Paul Avila',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'London Royal Ravens', years: '2021-2021'},
            { name: 'New York Subliners', years: '2022-2022'},
            { name: 'London Royal Ravens', years: '2022-2023'},
            { name: 'Minnesota ROKKR', years: '2024-2025'}
        ]
    },
    {
        id: '62',
        ign: 'Lucky',
        realName: 'Alejandro Lopez',
        nationality: 'Spain',
        role: 'AR',
        teams: [
            { name: 'Toronto Ultra', years: '2019-2020'},
            { name: 'Miami Heretics', years: '2023-2025' }
        ]
    },
    {
        id: '63',
        ign: 'Hicksy',
        realName: 'Charlie Hicks',
        nationality: 'UK',
        role: 'SMG',
        teams: [
            { name: 'Toronto Ultra', years: '2022-2023'},
            { name: 'Vancouver Surge', years: '2024-2025'}
        ]
    },
    {
        id: '64',
        ign: 'Roxas',
        realName: 'Salman Alkhuzayyim',
        nationality: 'Saudi Arabia',
        role: 'AR',
        teams: [
            { name: 'Las Vegas Falcons', years: '2024-2025'}
        ]
    },
    {
        id: '65',
        ign: 'KingAbody',
        realName: 'Abdulelah Alrajhi',
        nationality: 'Saudi Arabia',
        role: 'AR',
        teams: [
            { name: 'Las Vegas Falcons', years: '2024-2025'}
        ]
    },
    {
        id: '66',
        ign: 'Khhx',
        realName: 'Khalid Almadhi',
        nationality: 'Saudi Arabia',
        role: 'SMG',
        teams: [
            { name: 'Las Vegas Falcons', years: '2024-2025'}
        ]
    },
    {
        id: '67',
        ign: 'd7oom',
        realName: 'Abdulrahman Althunayan',
        nationality: 'Saudi Arabia',
        role: 'AR',
        teams: [
            { name: 'Las Vegas Falcons', years: '2024-2025'}
        ]
    },
    {
        id: '68',
        ign: 'KiinG',
        realName: 'Khalid Kaabi',
        nationality: 'Saudi Arabia',
        role: 'SMG',
        teams: [
            { name: 'Las Vegas Falcons', years: '2024-2025'}
        ]
    },
    {
        id: '70',
        ign: 'WXSL',
        realName: 'Fahad Alkahtani',
        nationality: 'Saudi Arabia',
        role: 'AR',
        teams: [
            { name: 'Las Vegas Falcons', years: '2024-2025'}
        ]
    },
    {
        id: '71',
        ign: 'Arcitys',
        realName: 'Alec Sanderson',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Chicago Huntsmen', years: '2019-2020'},
            { name: 'Atlanta FaZe', years: '2020-2022'},
            { name: 'Los Angeles Guerrillas', years: '2022-2023'},
            { name: 'Seattle Surge', years: '2023-2024'},
            { name: 'Las Vegas Falcons', years: '2025-2025'}
        ]
    },
    {
        id: '72',
        ign: 'FeLo',
        realName: 'Tyler Johnson',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Dallas Empire', years: '2021-2021'},
            { name: 'Paris Legion', years: '2021-2022'},
            { name: 'Florida Mutineers', years: '2023-2023'},
            { name: 'Carolina Royal Ravens', years: '2024-2024'},
            { name: 'Los Angeles Guerrillas M8', years: '2025-2025'}
        ]
    },
    {
        id: '73',
        ign: 'oJohnny',
        realName: 'Giancarlos Carrasco',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Paris Legion', years: '2022-2022'},
            { name: 'Las Vegas Legion', years: '2024-2024'},
            { name: 'Los Angeles Guerrillas M8', years: '2025-2025'}
        ]
    },
    {
        id: '74',
        ign: 'Wrecks',
        realName: 'Dillon Slotter',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Carolina Royal Ravens', years: '2025-2025'}
        ]
    },
    
    // 2023-2024 MW3 Season
    {
        id: '75',
        ign: 'Vikul',
        realName: 'Javier Milagro',
        nationality: 'Spain',
        role: 'SMG',
        teams: [
            { name: 'Florida Mutineers', years: '2022-2023'},
            { name: 'Miami Heretics', years: '2023-2024'}
        ]
    },
    {
        id: '76',
        ign: 'JurNii',
        realName: 'Juan Antonio González Muñoz',
        nationality: 'Spain',
        role: 'AR',
        teams: [
            { name: 'Miami Heretics', years: '2023-2024'}
        ]
    },
    {
        id: '77',
        ign: 'Assault',
        realName: 'Adam Garcia',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Minnesota ROKKR', years: '2019-2020'},
            { name: 'Los Angeles Guerrillas', years: '2020-2021'},
            { name: 'Los Angeles Guerrillas', years: '2023-2024'}
        ]
    },
    {
        id: '78',
        ign: 'Diamondcon',
        realName: 'Conor Johst',
        nationality: 'Canada',
        role: 'AR',
        teams: [
            { name: 'New York Subliners', years: '2021-2021'},
            { name: 'Los Angeles Guerrillas', years: '2023-2024'}
        ]
    },
    {
        id: '79',
        ign: 'Fame',
        realName: 'Kevin Bonanno',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Minnesota ROKKR', years: '2022-2023'},
            { name: 'Los Angeles Guerrillas', years: '2023-2024'}
        ]
    },
    {
        id: '80',
        ign: 'iLLeY',
        realName: 'Indervir Dhaliwal',
        nationality: 'Canada',
        role: 'AR',
        teams: [
            { name: 'Dallas Empire', years: '2019-2021'},
            { name: 'OpTic Texas', years: '2021-2023'},
            { name: 'Seattle Surge', years: '2023-2024'}
        ]
    },
    {
        id: '81',
        ign: 'Accuracy',
        realName: 'Lamar Abedi',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'New York Subliners', years: '2019-2020'},
            { name: 'Minnesota ROKKR', years: '2020-2021'},
            { name: 'Seattle Surge', years: '2021-2023'},
            { name: 'Minnesota ROKKR', years: '2023-2024'}
        ]
    },
    {
        id: '82',
        ign: 'Clayster',
        realName: 'James Eubanks',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Dallas Empire', years: '2019-2020'},
            { name: 'New York Subliners', years: '2020-2022'},
            { name: 'Las Vegas Legion', years: '2022-2023'},
            { name: 'Carolina Royal Ravens', years: '2023-2024'}
        ]
    },
    {
        id: '83',
        ign: 'Standy',
        realName: 'Eli Bentz',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Minnesota ROKKR', years: '2021-2022'},
            { name: 'Toronto Ultra', years: '2022-2023'},
            { name: 'Las Vegas Legion', years: '2023-2024'},
            { name: 'Minnesota ROKKR', years: '2024-2024'}
        ]
    },
    {
        id: '84',
        ign: 'EriKBooM',
        realName: 'Eric Ferrer',
        nationality: 'Spain',
        role: 'AR',
        teams: [
            { name: 'Miami Heretics', years: '2024-2024'}
        ]
    },
    {
        id: '85',
        ign: 'Asim',
        realName: 'Obaid Asim',
        nationality: 'Canada',
        role: 'SMG',
        teams: [
            { name: 'Minnesota ROKKR', years: '2019-2020'},
            { name: 'New York Subliners', years: '2021-2021'},
            { name: 'Los Angeles Guerrillas', years: '2021-2022'},
            { name: 'London Royal Ravens', years: '2022-2023'},
            { name: 'Boston Breach', years: '2024-2024'},
            { name: 'Las Vegas Legion', years: '2024-2024'}
        ]
    },
    {
        id: '86',
        ign: 'Breszy',
        realName: 'Paul Breszynski',
        nationality: 'France',
        role: 'AR',
        teams: [
            { name: 'Paris Legion', years: '2019-2020'},
            { name: 'Seattle Surge', years: '2024-2024'}
        ]
    },
    {
        id: '87',
        ign: 'Gunless',
        realName: 'Peirce Hillman',
        nationality: 'Canada',
        role: 'AR',
        teams: [
            { name: 'Chicago Huntsmen', years: '2019-2020'},
            { name: 'Seattle Surge', years: '2020-2021'},
            { name: 'Los Angeles Guerrillas', years: '2021-2022'},
            { name: 'Minnesota ROKKR', years: '2024-2024'}
        ]
    },
    {
        id: '88',
        ign: 'Flames',
        realName: 'John-Alexander Dieguez',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Los Angeles Guerrillas', years: '2024-2024'}
        ]
    },
    {
        id: '89',
        ign: 'Pentagrxm',
        realName: 'Nathaniel Thomas',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Boston Breach', years: '2024-2024'}
        ]
    },
    {
        id: '90',
        ign: 'MajorManiak',
        realName: 'Michael Szymaniak',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Atlanta FaZe', years: '2019-2020'},
            { name: 'Minnesota ROKKR', years: '2020-2022'},
            { name: 'Florida Mutineers', years: '2022-2023'},
            { name: 'Boston Breach', years: '2024-2024'}
        ]
    },

    // 2022-2023 MW2 Season
    {
        id: '91',
        ign: 'Bance',
        realName: 'Benjamin Bance',
        nationality: 'UK',
        role: 'SMG',
        teams: [
            { name: 'Toronto Ultra', years: '2019-2022'},
            { name: 'Minnesota ROKKR', years: '2022-2023'}
        ]
    },
    {
        id: '92',
        ign: 'Temp',
        realName: 'Donovan Laroda',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'New York Subliners', years: '2019-2020'},
            { name: 'Los Angeles Thieves', years: '2020-2021'},
            { name: 'Paris Legion', years: '2021-2022'},
            { name: 'Las Vegas Legion', years: '2022-2023'}
        ]
    },
    {
        id: '93',
        ign: 'Havok',
        realName: 'Colt McLendon',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Florida Mutineers', years: '2019-2021'},
            { name: 'Minnesota ROKKR', years: '2022-2022'},
            { name: 'Florida Mutineers', years: '2022-2023'}
        ]
    },
    {
        id: '94',
        ign: 'Brack',
        realName: 'Carson Newberry',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Toronto Ultra', years: '2019-2020'},
            { name: 'Florida Mutineers', years: '2022-2023'}
        ]
    },
    {
        id: '95',
        ign: 'Skrapz',
        realName: 'Matthew Marshall',
        nationality: 'UK',
        role: 'AR',
        teams: [
            { name: 'London Royal Ravens', years: '2019-2020'},
            { name: 'Paris Legion', years: '2020-2021'},
            { name: 'London Royal Ravens', years: '2022-2023'}
        ]
    },
    {
        id: '96',
        ign: 'Uli',
        realName: 'Ulisses Rios',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'London Royal Ravens', years: '2023-2023'}
        ]
    },
    {
        id: '97',
        ign: 'Octane',
        realName: 'Sam Larew',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Seattle Surge', years: '2019-2021'},
            { name: 'Los Angeles Thieves', years: '2021-2023'}
        ]
    },
    {
        id: '98',
        ign: 'Methodz',
        realName: 'Anthony Zinni',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Toronto Ultra', years: '2019-2021'},
            { name: 'Boston Breach', years: '2022-2023'}
        ]
    },
    {
        id: '99',
        ign: 'Zer0',
        realName: 'Trei Morris',
        nationality: 'UK',
        role: 'AR',
        teams: [
            { name: 'New York Subliners', years: '2019-2020'},
            { name: 'London Royal Ravens', years: '2020-2020'},
            { name: 'London Royal Ravens', years: '2021-2023'}
        ]
    },
    {
        id: '100',
        ign: 'Prolute',
        realName: 'Byron Vega',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'OpTic Texas', years: '2022-2022'},
            { name: 'Las Vegas Legion', years: '2022-2023'},
        ]
    },
    {
        id: '101',
        ign: 'Davpadie',
        realName: 'David Maslowski',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Florida Mutineers', years: '2021-2022'},
            { name: 'Florida Mutineers', years: '2023-2023'},
        ]
    },
    {
        id: '102',
        ign: '2ReaL',
        realName: 'Brendan Stockdale',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Florida Mutineers', years: '2022-2022'},
            { name: 'Las Vegas Legion', years: '2023-2023'},
        ]
    },

    // 2021-2022 Vanguard Season
    {
        id: '69',
        ign: 'Crimsix',
        realName: 'Ian Porter',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Dallas Empire', years: '2019-2021'},
            { name: 'New York Subliners', years: '2021-2022'},
        ]
    },
]