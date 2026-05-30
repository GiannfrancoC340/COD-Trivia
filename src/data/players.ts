// src/data/players.ts
import type { Player } from '../types';

// export interface Player {
//   id: string;
//   ign: string;
//   realName: string;
//   nationality: string;
//   role: string;
//   teams: Team[];
//   wikiUrl: string;
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
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Scump'
    },
    // 2019-2020 MW19 Season
    {
        id: '2',
        ign: 'JKap',
        realName: 'Jordan Kaplan',
        nationality: 'USA',
        role: 'Flex',
        teams: [
            { name: 'OpTic Gaming Los Angeles', years: '2019-2020'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/JKap'
    },
    {
        id: '3',
        ign: 'GodRX',
        realName: 'Adam Brown',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Minnesota ROKKR', years: '2019-2020'},
            { name: 'Carolina Royal Ravens', years: '2023-2024'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/GodRx'
    },
    {
        id: '4',
        ign: 'ZooMaa',
        realName: 'Thomas Paparatto',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'New York Subliners', years: '2019-2021'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/ZooMaa'
    },
    {
        id: '5',
        ign: 'Enable',
        realName: 'Ian Wyatt',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Seattle Surge', years: '2019-2020'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Enable'
    },
    {
        id: '6',
        ign: 'Lacefield',
        realName: 'Andres Lacefield',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Los Angeles Guerrillas', years: '2019-2020'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Lacefield'
    },
    {
        id: '7',
        ign: 'Saints',
        realName: 'Renato Forza',
        nationality: 'Peru',
        role: 'Flex',
        teams: [
            { name: 'Los Angeles Guerrillas', years: '2019-2020'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Saints'
    },
    {
        id: '8',
        ign: 'ACHES',
        realName: 'Patrick Price',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Los Angeles Guerrillas', years: '2019-2020'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/ACHES'
    },
    {
        id: '9',
        ign: 'wuskin',
        realName: 'Bradley Marshall',
        nationality: 'UK',
        role: 'AR',
        teams: [
            { name: 'London Royal Ravens', years: '2019-2020'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Wuskin'
    },
    {
        id: '10',
        ign: 'Jurd',
        realName: 'Jordan Crowley',
        nationality: 'Ireland',
        role: 'SMG',
        teams: [
            { name: 'London Royal Ravens', years: '2019-2020'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Jurd'
    },
    {
        id: '11',
        ign: 'Rated',
        realName: 'Rhys Price',
        nationality: 'Wales',
        role: 'AR',
        teams: [
            { name: 'London Royal Ravens', years: '2019-2020'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Rated'
    },
    {
        id: '12',
        ign: 'Maux',
        realName: 'Chance Moncivaez',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Florida Mutineers', years: '2019-2020'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Maux'
    },
    {
        id: '13',
        ign: 'Frosty',
        realName: 'Bradley Bergstrom',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Florida Mutineers', years: '2019-2020'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Frosty'
    },
    {
        id: '14',
        ign: 'Shockz',
        realName: 'Conrad Rymarek',
        nationality: 'Australia',
        role: 'SMG',
        teams: [
            { name: 'Paris Legion', years: '2019-2020'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Shockz'
    },
    {
        id: '15',
        ign: 'Denz',
        realName: 'Denholm Taylor',
        nationality: 'Australia',
        role: 'AR',
        teams: [
            { name: 'Paris Legion', years: '2019-2020'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Denz'
    },
    {
        id: '16',
        ign: 'Louqa',
        realName: 'Luke Rigas',
        nationality: 'Australia',
        role: 'AR',
        teams: [
            { name: 'Paris Legion', years: '2019-2020'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Louqa'
    },
    {
        id: '17',
        ign: 'Pandur',
        realName: 'Casey Romano',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Seattle Surge', years: '2020-2020'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Pandur'
    },
    {
        id: '18',
        ign: 'Karma',
        realName: 'Damon Barlow',
        nationality: 'Canada',
        role: 'Flex',
        teams: [
            { name: 'Seattle Surge', years: '2019-2020'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Karma'
    },
    {
        id: '19',
        ign: 'Fero',
        realName: 'Maurice Henriquez',
        nationality: 'USA',
        role: 'Flex',
        teams: [
            { name: 'Florida Mutineers', years: '2020-2020'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Fero'
    },
    {
        id: '20',
        ign: 'Happy',
        realName: 'Nick Suda',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'New York Subliners', years: '2020-2020'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Happy'
    },
    {
        id: '21',
        ign: 'Blazt',
        realName: 'Rasim Ogresevic',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Los Angeles Guerrillas', years: '2020-2020'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Blazt'
    },
    {
        id: '22',
        ign: 'Hollow',
        realName: 'Darien Chverchko',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'OpTic Gaming Los Angeles', years: '2020-2020'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Hollow'
    },
    {
        id: '23',
        ign: 'Proto',
        realName: 'Nicholas Maldonado',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Seattle Surge', years: '2020-2020'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Proto'
    },

    // 2020-2021 Cold War Season
    {
        id: '24',
        ign: 'Classic',
        realName: 'Nicholas DiCostanzo',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Toronto Ultra', years: '2019-2020'},
            { name: 'Paris Legion', years: '2020-2021'},
            { name: 'Seattle Surge', years: '2021-2021'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Classic'
    },
    {
        id: '25',
        ign: 'Loony',
        realName: 'Daniel Loza',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Toronto Ultra', years: '2019-2020'},
            { name: 'Seattle Surge', years: '2020-2021'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Loony'
    },
    {
        id: '26',
        ign: 'Seany',
        realName: 'Sean O Connor',
        nationality: 'Scotland',
        role: 'AR',
        teams: [
            { name: 'London Royal Ravens', years: '2019-2021'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Seany'
    },
    {
        id: '27',
        ign: 'Zed',
        realName: 'Zach Denyer',
        nationality: 'UK',
        role: 'SMG',
        teams: [
            { name: 'Paris Legion', years: '2019-2020'},
            { name: 'London Royal Ravens', years: '2021-2021'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Zed'
    },
    {
        id: '28',
        ign: 'Alexx',
        realName: 'Alex Carpenter',
        nationality: 'UK',
        role: 'SMG',
        teams: [
            { name: 'Minnesota ROKKR', years: '2019-2020'},
            { name: 'London Royal Ravens', years: '2020-2021'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Alexx'
    },
    {
        id: '29',
        ign: 'Dylan',
        realName: 'Thomas Henderson',
        nationality: 'Northern Ireland',
        role: 'SMG',
        teams: [
            { name: 'London Royal Ravens', years: '2019-2020'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Dylan'
    },
    {
        id: '30',
        ign: 'Apathy',
        realName: 'Bryan Zhelyazkov',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Seattle Surge', years: '2019-2020'},
            { name: 'Los Angeles Guerrillas', years: '2020-2021'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Apathy'
    },
    {
        id: '31',
        ign: 'SiLLY',
        realName: 'Justin Fargo-Palmer',
        nationality: 'USA',
        role: 'Flex',
        teams: [
            { name: 'Minnesota ROKKR', years: '2019-2020'},
            { name: 'Los Angeles Guerrillas', years: '2020-2021'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/SiLLY'
    },
    {
        id: '32',
        ign: 'Cheen',
        realName: 'Martin Chino',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'OpTic Gaming Los Angeles', years: '2019-2020'},
            { name: 'Los Angeles Guerrillas', years: '2021-2021'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Cheen'
    },
    {
        id: '33',
        ign: 'AquA',
        realName: 'Ulysses Silva',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Los Angeles Guerrillas', years: '2019-2020'},
            { name: 'Paris Legion', years: '2020-2021'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/AquA'
    },
    {
        id: '34',
        ign: 'Slacked',
        realName: 'Josiah Berry',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Seattle Surge', years: '2019-2020'},
            { name: 'Florida Mutineers', years: '2020-2021'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Slacked'
    },
    {
        id: '35',
        ign: 'FormaL',
        realName: 'Matthew Piper',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Chicago Huntsmen', years: '2019-2020'},
            { name: 'OpTic Chicago', years: '2020-2021'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/FormaL'
    },
    {
        id: '36',
        ign: 'Decemate',
        realName: 'Jacob Cato',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Los Angeles Guerrillas', years: '2019-2020'},
            { name: 'Seattle Surge', years: '2021-2021'},
            { name: 'New York Subliners', years: '2021-2021'},
            { name: 'Paris Legion', years: '2021-2022'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Decemate'
    },
    {
        id: '37',
        ign: 'Zaptius',
        realName: 'Alex Bonilla',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'London Royal Ravens', years: '2021-2021'},
            { name: 'Paris Legion', years: '2021-2021'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Zaptius'
    },
    {
        id: '38',
        ign: 'Venom',
        realName: 'Carlos Hernandez',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Los Angeles Thieves', years: '2021-2021'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Venom'
    },
    {
        id: '39',
        ign: 'Parasite',
        realName: 'Christopher Duarte',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'London Royal Ravens', years: '2021-2021'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Parasite'
    },
    {
        id: '40',
        ign: 'MentaL',
        realName: 'Billy Putnam',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Los Angeles Guerrillas', years: '2021-2021'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/MentaL'
    },

    // 2021-2022 Vanguard Season
    {
        id: '41',
        ign: 'Crimsix',
        realName: 'Ian Porter',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Dallas Empire', years: '2019-2021'},
            { name: 'New York Subliners', years: '2021-2022'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Crimsix'
    },
    {
        id: '42',
        ign: 'Prestinni',
        realName: 'Preston Sanderson',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Florida Mutineers', years: '2019-2020'},
            { name: 'Chicago Huntsmen', years: '2020-2020'},
            { name: 'Seattle Surge', years: '2020-2021'},
            { name: 'Atlanta FaZe', years: '2021-2022'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Prestinni'
    },
    {
        id: '43',
        ign: 'Gismo',
        realName: 'Joey Owen',
        nationality: 'UK',
        role: 'Flex',
        teams: [
            { name: 'London Royal Ravens', years: '2021-2022'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Gismo'
    },
    {
        id: '44',
        ign: 'Harry',
        realName: 'Harry Payne',
        nationality: 'UK',
        role: 'AR',
        teams: [
            { name: 'London Royal Ravens', years: '2022-2022'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Harry'
    },
    {
        id: '45',
        ign: 'GRVTY',
        realName: 'Thomas Malin',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Paris Legion', years: '2022-2022'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/GRVTY'
    },
    {
        id: '46',
        ign: 'General',
        realName: 'Jordan General',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Chicago Huntsmen', years: '2020-2020'},
            { name: 'OpTic Texas', years: '2022-2022'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/General'
    },
    {
        id: '47',
        ign: 'John',
        realName: 'Johnathan Perez',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Los Angeles Thieves', years: '2021-2021'},
            { name: 'Paris Legion', years: '2021-2022'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/John'
    },
    {
        id: '48',
        ign: 'Royalty',
        realName: 'Matthew Faithfull',
        nationality: 'Canada',
        role: 'SMG',
        teams: [
            { name: 'New York Subliners', years: '2022-2022'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Royalty'
    },

    // 2022-2023 MW2 Season
    {
        id: '49',
        ign: 'Bance',
        realName: 'Benjamin Bance',
        nationality: 'UK',
        role: 'SMG',
        teams: [
            { name: 'Toronto Ultra', years: '2019-2022'},
            { name: 'Minnesota ROKKR', years: '2022-2023'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Bance'
    },
    {
        id: '50',
        ign: 'Temp',
        realName: 'Donovan Laroda',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'New York Subliners', years: '2019-2020'},
            { name: 'Los Angeles Thieves', years: '2020-2021'},
            { name: 'Paris Legion', years: '2021-2022'},
            { name: 'Las Vegas Legion', years: '2022-2023'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Temp'
    },
    {
        id: '51',
        ign: 'Havok',
        realName: 'Colt McLendon',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Florida Mutineers', years: '2019-2021'},
            { name: 'Minnesota ROKKR', years: '2022-2022'},
            { name: 'Florida Mutineers', years: '2022-2023'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Havok'
    },
    {
        id: '52',
        ign: 'Brack',
        realName: 'Carson Newberry',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Toronto Ultra', years: '2019-2020'},
            { name: 'Florida Mutineers', years: '2022-2023'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Brack'
    },
    {
        id: '53',
        ign: 'Skrapz',
        realName: 'Matthew Marshall',
        nationality: 'UK',
        role: 'AR',
        teams: [
            { name: 'London Royal Ravens', years: '2019-2020'},
            { name: 'Paris Legion', years: '2020-2021'},
            { name: 'London Royal Ravens', years: '2022-2023'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Skrapz'
    },
    {
        id: '54',
        ign: 'Uli',
        realName: 'Ulisses Rios',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'London Royal Ravens', years: '2023-2023'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Uli'
    },
    {
        id: '55',
        ign: 'Octane',
        realName: 'Sam Larew',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Seattle Surge', years: '2019-2021'},
            { name: 'Los Angeles Thieves', years: '2021-2023'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Octane'
    },
    {
        id: '56',
        ign: 'Methodz',
        realName: 'Anthony Zinni',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Toronto Ultra', years: '2019-2021'},
            { name: 'Boston Breach', years: '2022-2023'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Methodz_(Anthony_Zinni)'
    },
    {
        id: '57',
        ign: 'Zer0',
        realName: 'Trei Morris',
        nationality: 'UK',
        role: 'AR',
        teams: [
            { name: 'New York Subliners', years: '2019-2020'},
            { name: 'London Royal Ravens', years: '2020-2020'},
            { name: 'London Royal Ravens', years: '2021-2023'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Zer0'
    },
    {
        id: '58',
        ign: 'Prolute',
        realName: 'Byron Vega',
        nationality: 'USA',
        role: 'Flex',
        teams: [
            { name: 'OpTic Texas', years: '2022-2022'},
            { name: 'Las Vegas Legion', years: '2022-2023'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Prolute'
    },
    {
        id: '59',
        ign: 'Davpadie',
        realName: 'David Maslowski',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Florida Mutineers', years: '2021-2022'},
            { name: 'Florida Mutineers', years: '2023-2023'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Davpadie'
    },
    {
        id: '60',
        ign: '2ReaL',
        realName: 'Brendan Stockdale',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Florida Mutineers', years: '2022-2022'},
            { name: 'Las Vegas Legion', years: '2023-2023'},
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/2ReaL'
    },

    // 2023-2024 MW3 Season
    {
        id: '61',
        ign: 'Vikul',
        realName: 'Javier Milagro',
        nationality: 'Spain',
        role: 'SMG',
        teams: [
            { name: 'Florida Mutineers', years: '2022-2023'},
            { name: 'Miami Heretics', years: '2023-2024'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Vikul'
    },
    {
        id: '62',
        ign: 'JurNii',
        realName: 'Juan Antonio González Muñoz',
        nationality: 'Spain',
        role: 'SMG',
        teams: [
            { name: 'Miami Heretics', years: '2023-2024'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/JurNii'
    },
    {
        id: '63',
        ign: 'Assault',
        realName: 'Adam Garcia',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Minnesota ROKKR', years: '2019-2020'},
            { name: 'Los Angeles Guerrillas', years: '2020-2021'},
            { name: 'Los Angeles Guerrillas', years: '2023-2024'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Assault'
    },
    {
        id: '64',
        ign: 'Diamondcon',
        realName: 'Conor Johst',
        nationality: 'Canada',
        role: 'AR',
        teams: [
            { name: 'New York Subliners', years: '2021-2021'},
            { name: 'Los Angeles Guerrillas', years: '2023-2024'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Diamondcon'
    },
    {
        id: '65',
        ign: 'Fame',
        realName: 'Kevin Bonanno',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Minnesota ROKKR', years: '2022-2023'},
            { name: 'Los Angeles Guerrillas', years: '2023-2024'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Fame'
    },
    {
        id: '66',
        ign: 'iLLeY',
        realName: 'Indervir Dhaliwal',
        nationality: 'Canada',
        role: 'Flex',
        teams: [
            { name: 'Dallas Empire', years: '2019-2021'},
            { name: 'OpTic Texas', years: '2021-2023'},
            { name: 'Seattle Surge', years: '2023-2024'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/ILLeY'
    },
    {
        id: '67',
        ign: 'Accuracy',
        realName: 'Lamar Abedi',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'New York Subliners', years: '2019-2020'},
            { name: 'Minnesota ROKKR', years: '2020-2021'},
            { name: 'Seattle Surge', years: '2021-2023'},
            { name: 'Minnesota ROKKR', years: '2023-2024'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Accuracy'
    },
    {
        id: '68',
        ign: 'Clayster',
        realName: 'James Eubanks',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Dallas Empire', years: '2019-2020'},
            { name: 'New York Subliners', years: '2020-2022'},
            { name: 'Las Vegas Legion', years: '2022-2023'},
            { name: 'Carolina Royal Ravens', years: '2023-2024'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Clayster'
    },
    {
        id: '69',
        ign: 'Standy',
        realName: 'Eli Bentz',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Minnesota ROKKR', years: '2021-2022'},
            { name: 'Toronto Ultra', years: '2022-2023'},
            { name: 'Las Vegas Legion', years: '2023-2024'},
            { name: 'Minnesota ROKKR', years: '2024-2024'},
            { name: 'Carolina Royal Ravens', years: '2026-'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Standy'
    },
    {
        id: '70',
        ign: 'EriKBooM',
        realName: 'Eric Ferrer',
        nationality: 'Spain',
        role: 'SMG',
        teams: [
            { name: 'Miami Heretics', years: '2024-2024'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/EriKBooM'
    },
    {
        id: '71',
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
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Asim'
    },
    {
        id: '72',
        ign: 'Breszy',
        realName: 'Paul Breszynski',
        nationality: 'France',
        role: 'AR',
        teams: [
            { name: 'Paris Legion', years: '2019-2020'},
            { name: 'Seattle Surge', years: '2024-2024'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Breszy'
    },
    {
        id: '73',
        ign: 'Gunless',
        realName: 'Peirce Hillman',
        nationality: 'Canada',
        role: 'Flex',
        teams: [
            { name: 'Chicago Huntsmen', years: '2019-2020'},
            { name: 'Seattle Surge', years: '2020-2021'},
            { name: 'Los Angeles Guerrillas', years: '2021-2022'},
            { name: 'Minnesota ROKKR', years: '2024-2024'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Gunless'
    },
    {
        id: '74',
        ign: 'Flames',
        realName: 'John-Alexander Dieguez',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Los Angeles Guerrillas', years: '2024-2024'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Flames'
    },
    {
        id: '75',
        ign: 'Pentagrxm',
        realName: 'Nathaniel Thomas',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Boston Breach', years: '2024-2024'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Pentagrxm'
    },
    {
        id: '76',
        ign: 'MajorManiak',
        realName: 'Michael Szymaniak',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Atlanta FaZe', years: '2019-2020'},
            { name: 'Minnesota ROKKR', years: '2020-2022'},
            { name: 'Florida Mutineers', years: '2022-2023'},
            { name: 'Boston Breach', years: '2024-2024'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/MajorManiak'
    },

    // 2024-2025 BO6 season
    {
        id: '77',
        ign: 'Owakening',
        realName: 'Joseph Conley',
        nationality: 'USA',
        role: 'Flex',
        teams: [
            { name: 'Florida Mutineers', years: '2020-2022'},
            { name: 'Boston Breach', years: '2022-2023'},
            { name: 'Minnesota ROKKR', years: '2023-2024'},
            { name: 'Boston Breach', years: '2024-2025' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Owakening'
    },
    {
        id: '78',
        ign: 'Lynz',
        realName: 'Thomas Gregorio',
        nationality: 'France',
        role: 'SMG',
        teams: [
            { name: 'Minnesota ROKKR', years: '2023-2024'},
            { name: 'Los Angeles Guerrillas M8', years: '2024-2025' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Lynz'
    },
    {
        id: '79',
        ign: 'Priestahh',
        realName: 'Preston Greiner',
        nationality: 'USA',
        role: 'Flex',
        teams: [
            { name: 'Atlanta FaZe', years: '2019-2020'},
            { name: 'Minnesota ROKKR', years: '2020-2022'},
            { name: 'New York Subliners', years: '2022-2023'},
            { name: 'Boston Breach', years: '2023-2024'},
            { name: 'Los Angeles Guerrillas M8', years: '2024-2025' },
            { name: 'Las Vegas Falcons', years: '2025-2025'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Priestahh'
    },
    {
        id: '80',
        ign: 'Attach',
        realName: 'Dillon Price',
        nationality: 'USA',
        role: 'Flex',
        teams: [
            { name: 'New York Subliners', years: '2019-2020'},
            { name: 'Minnesota ROKKR', years: '2020-2023'},
            { name: 'Las Vegas Legion', years: '2023-2024'},
            { name: 'Cloud9 New York', years: '2024-2025' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Attach'
    },
    {
        id: '81',
        ign: 'Gio',
        realName: 'Giovanni Webster',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Las Vegas Legion', years: '2024-2024'},
            { name: 'Minnesota ROKKR', years: '2024-2025'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Gio'
    },
    {
        id: '82',
        ign: 'PaulEhx',
        realName: 'Paul Avila',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'London Royal Ravens', years: '2021-2021'},
            { name: 'New York Subliners', years: '2022-2022'},
            { name: 'London Royal Ravens', years: '2022-2023'},
            { name: 'Minnesota ROKKR', years: '2024-2025'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/PaulEhx'
    },
    {
        id: '83',
        ign: 'Lucky',
        realName: 'Alejandro Lopez',
        nationality: 'Spain',
        role: 'AR',
        teams: [
            { name: 'Toronto Ultra', years: '2019-2020'},
            { name: 'Miami Heretics', years: '2023-2025' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Lucky_(Alejandro_L%C3%B3pez)'
    },
    {
        id: '84',
        ign: 'Hicksy',
        realName: 'Charlie Hicks',
        nationality: 'UK',
        role: 'SMG',
        teams: [
            { name: 'Toronto Ultra', years: '2022-2023'},
            { name: 'Vancouver Surge', years: '2024-2025'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Hicksy'
    },
    {
        id: '85',
        ign: 'Roxas',
        realName: 'Salman Alkhuzayyim',
        nationality: 'Saudi Arabia',
        role: 'AR',
        teams: [
            { name: 'Las Vegas Falcons', years: '2024-2025'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Roxas'
    },
    {
        id: '86',
        ign: 'KingAbody',
        realName: 'Abdulelah Alrajhi',
        nationality: 'Saudi Arabia',
        role: 'SMG',
        teams: [
            { name: 'Las Vegas Falcons', years: '2024-2025'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/KingAbody'
    },
    {
        id: '87',
        ign: 'Khhx',
        realName: 'Khalid Almadhi',
        nationality: 'Saudi Arabia',
        role: 'AR',
        teams: [
            { name: 'Las Vegas Falcons', years: '2024-2025'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Khhx'
    },
    {
        id: '88',
        ign: 'd7oom',
        realName: 'Abdulrahman Althunayan',
        nationality: 'Saudi Arabia',
        role: 'SMG',
        teams: [
            { name: 'Las Vegas Falcons', years: '2024-2025'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/D7oom'
    },
    {
        id: '89',
        ign: 'KiinG',
        realName: 'Khalid Kaabi',
        nationality: 'Saudi Arabia',
        role: 'SMG',
        teams: [
            { name: 'Las Vegas Falcons', years: '2024-2025'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/KiinG'
    },
    {
        id: '90',
        ign: 'WXSL',
        realName: 'Fahad Alkahtani',
        nationality: 'Saudi Arabia',
        role: 'AR',
        teams: [
            { name: 'Las Vegas Falcons', years: '2024-2025'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/WXSL'
    },
    {
        id: '91',
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
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Arcitys'
    },
    {
        id: '92',
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
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/FeLo'
    },
    {
        id: '93',
        ign: 'oJohnny',
        realName: 'Giancarlos Carrasco',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Paris Legion', years: '2022-2022'},
            { name: 'Las Vegas Legion', years: '2024-2024'},
            { name: 'Los Angeles Guerrillas M8', years: '2025-2025'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/OJohnny'
    },
    {
        id: '94',
        ign: 'Wrecks',
        realName: 'Dillon Slotter',
        nationality: 'USA',
        role: 'Flex',
        teams: [
            { name: 'Carolina Royal Ravens', years: '2025-2025'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Wrecks'
    },
    
    // 2025-2026 BO7 Season
    // Boston Breach
    {
        id: '95',
        ign: 'Snoopy',
        realName: 'Eric Perez',
        nationality: 'Mexico',
        role: 'SMG',
        teams: [
            { name: 'Boston Breach', years: '2023-2026' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Snoopy'
    },
    {
        id: '96',
        ign: 'Cammy',
        realName: 'Cameron McKilligan',
        nationality: 'Scotland',
        role: 'AR',
        teams: [
            { name: 'Toronto Ultra', years: '2019-2022' },
            { name: 'Minnesota ROKKR', years: '2022-2023' },
            { name: 'Los Angeles Thieves', years: '2023-2024' },
            { name: 'Boston Breach', years: '2024-2026' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Cammy'
    },
    {
        id: '97',
        ign: 'Purj',
        realName: 'Evan Perez',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Las Vegas Legion', years: '2023-2024' },
            { name: 'Boston Breach', years: '2024-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Purj'
    },
    {
        id: '98',
        ign: 'Nastie',
        realName: 'Byron Plumridge',
        nationality: 'UK',
        role: 'Flex',
        teams: [
            { name: 'London Royal Ravens', years: '2021-2023' },
            { name: 'Los Angeles Thieves', years: '2024-2024' },
            { name: 'Vancouver Surge', years: '2024-2025' },
            { name: 'Boston Breach', years: '2025-2026' },
            { name: 'G2 Minnesota', years: '2026-'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Nastie'
    },

    // Carolina Royal Ravens
    {
        id: '99',
        ign: 'Craze',
        realName: 'Jay Mallhi',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Carolina Royal Ravens', years: '2025-2026' },
            { name: 'Vancouver Surge', years: '2026-'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Craze'
    },
    {
        id: '100',
        ign: 'Lurqxx',
        realName: 'Logan Brown',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Carolina Royal Ravens', years: '2025-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Lurqxx'
    },
    {
        id: '101',
        ign: 'Nero',
        realName: 'Dylan Koch',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Boston Breach', years: '2022-2023'},
            { name: 'Las Vegas Legion', years: '2023-2024'},
            { name: 'Minnesota ROKKR', years: '2024-2025'},
            { name: 'Carolina Royal Ravens', years: '2025-2026' },
            { name: 'Vancouver Surge', years: '2026-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Nero'
    },
    {
        id: '102',
        ign: 'Exceed',
        realName: 'Kaden Stockdale',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Minnesota ROKKR', years: '2019-2020'},
            { name: 'Los Angeles Guerrillas', years: '2023-2023'},
            { name: 'Carolina Royal Ravens', years: '2026-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Exceed'
    },
    {
        id: '103',
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
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/SlasheR'
    },

    // Cloud9 New York
    {
        id: '104',
        ign: 'Afro',
        realName: 'Marcus Reid',
        nationality: 'UK',
        role: 'SMG',
        teams: [
            { name: 'London Royal Ravens', years: '2021-2022'},
            { name: 'Minnesota ROKKR', years: '2022-2023'},
            { name: 'Los Angeles Thieves', years: '2023-2024'},
            { name: 'Cloud9 New York', years: '2025-2026' },
            { name: 'Boston Breach', years: '2026-'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Afro'
    },
    {
        id: '105',
        ign: 'Beans',
        realName: 'Ben McMellon',
        nationality: 'UK',
        role: 'Flex',
        teams: [
            { name: 'Boston Breach', years: '2022-2024'},
            { name: 'Carolina Royal Ravens', years: '2024-2024'},
            { name: 'Toronto Ultra', years: '2024-2025'},
            { name: 'Cloud9 New York', years: '2025-2026' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Beans'
    },
    {
        id: '106',
        ign: 'Mack',
        realName: 'Makenzie Kelley',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'New York Subliners', years: '2020-2021'},
            { name: 'Seattle Surge', years: '2021-2023'},
            { name: 'Cloud9 New York', years: '2024-2026' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Mack'
    },
    {
        id: '107',
        ign: 'Vivid',
        realName: 'Reece Drost',
        nationality: 'USA',
        role: 'Flex',
        teams: [
            { name: 'Los Angeles Guerrillas', years: '2020-2021'},
            { name: 'Dallas Empire', years: '2021-2021'},
            { name: 'Florida Mutineers', years: '2021-2022'},
            { name: 'Boston Breach', years: '2022-2023'},
            { name: 'Minnesota ROKKR', years: '2023-2024'},
            { name: 'Carolina Royal Ravens', years: '2024-2025'},
            { name: 'Cloud9 New York', years: '2025-2026' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Vivid'
    },

    // FaZe Vegas
    {
        id: '108',
        ign: 'Simp',
        realName: 'Chris Lehr',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Atlanta FaZe', years: '2019-2025'},
            { name: 'FaZe Vegas', years: '2025-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Simp'
    },
    {
        id: '109',
        ign: 'Abuzah',
        realName: 'Jordan Francois',
        nationality: 'Belgium',
        role: 'AR',
        teams: [
            { name: 'Seattle Surge', years: '2023-2024'},
            { name: 'Vancouver Surge', years: '2024-2025'},
            { name: 'FaZe Vegas', years: '2025-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Abuzah'
    },
    {
        id: '110',
        ign: '04',
        realName: 'Jovan Rodriguez',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Seattle Surge', years: '2024-2024'},
            { name: 'Vancouver Surge', years: '2024-2025'},
            { name: 'FaZe Vegas', years: '2025-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/04'
    },
    {
        id: '111',
        ign: 'Drazah',
        realName: 'Zack Jordan',
        nationality: 'USA',
        role: 'Flex',
        teams: [
            { name: 'OpTic Gaming Los Angeles', years: '2020-2020'},
            { name: 'Los Angeles Thieves', years: '2020-2023'},
            { name: 'Atlanta FaZe', years: '2023-2025'},
            { name: 'FaZe Vegas', years: '2025-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Drazah'
    },

    // G2 Minnesota
    {
        id: '112',
        ign: 'Estreal',
        realName: 'Justice McMillan',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Los Angeles Guerrillas', years: '2023-2024'},
            { name: 'Minnesota ROKKR', years: '2024-2025'},
            { name: 'G2 Minnesota', years: '2025-2026' },
            { name: 'Paris Gentlemates', years: '2026-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Estreal'
    },
    {
        id: '113',
        ign: 'Kremp',
        realName: 'Kyle Harworth',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Boston Breach', years: '2023-2023'},
            { name: 'Los Angeles Thieves', years: '2024-2024'},
            { name: 'Cloud9 New York', years: '2024-2025'},
            { name: 'G2 Minnesota', years: '2025-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Kremp'
    },
    {
        id: '114',
        ign: 'Mamba',
        realName: 'Paul Solano',
        nationality: 'Mexico',
        role: 'Flex',
        teams: [
            { name: 'G2 Minnesota', years: '2025-2026' },
            { name: 'Vancouver Surge', years: '2026-'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Mamba'
    },
    {
        id: '115',
        ign: 'Skyz',
        realName: 'Cesar Bueno',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Florida Mutineers', years: '2019-2022'},
            { name: 'New York Subliners', years: '2022-2024'},
            { name: 'Los Angeles Guerrillas M8', years: '2024-2025'},
            { name: 'OpTic Texas', years: '2025-2025'},
            { name: 'G2 Minnesota', years: '2025-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Skyz'
    },

    // Los Angeles Thieves
    {
        id: '116',
        ign: 'Hydra',
        realName: 'Paco Rusiewiez',
        nationality: 'France',
        role: 'SMG',
        teams: [
            { name: 'New York Subliners', years: '2020-2024'},
            { name: 'Los Angeles Thieves', years: '2024-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/HyDra'
    },
    {
        id: '117',
        ign: 'Scrap',
        realName: 'Thomas Ernst',
        nationality: 'USA',
        role: 'Flex',
        teams: [
            { name: 'Toronto Ultra', years: '2022-2024'},
            { name: 'Los Angeles Thieves', years: '2024-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Scrap'
    },
    {
        id: '118',
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
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Kenny'
    },
    {
        id: '119',
        ign: 'Abezy',
        realName: 'Tyler Pharris',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Atlanta FaZe', years: '2019-2025'},
            { name: 'Los Angeles Thieves', years: '2025-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/ABeZy'
    },

    // Miami Heretics
    {
        id: '120',
        ign: 'MettalZ',
        realName: 'Adrian Serrano',
        nationality: 'Spain',
        role: 'SMG',
        teams: [
            { name: 'Toronto Ultra', years: '2019-2020'},
            { name: 'Miami Heretics', years: '2023-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/MettalZ'
    },
    {
        id: '121',
        ign: 'SupeR',
        realName: 'Diego Escudero',
        nationality: 'Spain',
        role: 'Flex',
        teams: [
            { name: 'Miami Heretics', years: '2024-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/SupeR_(Diego_Escudero)'
    },
    {
        id: '122',
        ign: 'RenKoR',
        realName: 'David Isern',
        nationality: 'Spain',
        role: 'AR',
        teams: [
            { name: 'Miami Heretics', years: '2024-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/RenKoR'
    },
    {
        id: '123',
        ign: 'Traixx',
        realName: 'Nicolas Monaco',
        nationality: 'Argentina',
        role: 'SMG',
        teams: [
            { name: 'Miami Heretics', years: '2025-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Traixx'
    },

    // OpTic Texas
    {
        id: '124',
        ign: 'Shotzzy',
        realName: 'Anthony Cuevas-Castro',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Dallas Empire', years: '2019-2021'},
            { name: 'OpTic Texas', years: '2021-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Shotzzy'
    },
    {
        id: '125',
        ign: 'Dashy',
        realName: 'Brandon Otell',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'OpTic Gaming Los Angeles', years: '2019-2020'},
            { name: 'OpTic Chicago', years: '2020-2021'},
            { name: 'OpTic Texas', years: '2021-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Dashy'
    },
    {
        id: '126',
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
            { name: 'OpTic Texas', years: '2024-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Huke'
    },
    {
        id: '127',
        ign: 'Mercules',
        realName: 'Mason Ramsey',
        nationality: 'USA',
        role: 'Flex',
        teams: [
            { name: 'Toronto Ultra', years: '2025-2025'},
            { name: 'OpTic Texas', years: '2025-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Mercules'
    },

    // Paris Gentlemates
    {
        id: '128',
        ign: 'Sib',
        realName: 'Daunte Gray',
        nationality: 'USA',
        role: 'Flex',
        teams: [
            { name: 'Seattle Surge', years: '2021-2023'},
            { name: 'New York Subliners', years: '2023-2024'},
            { name: 'Cloud9 New York', years: '2024-2025'},
            { name: 'Paris Gentlemates', years: '2025-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Sib'
    },
    {
        id: '129',
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
            { name: 'Paris Gentlemates', years: '2025-2026' },
            { name: 'G2 Minnesota', years: '2026-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Envoy'
    },
    {
        id: '130',
        ign: 'Ghosty',
        realName: 'Daniel Rothe',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'OpTic Texas', years: '2023-2023'},
            { name: 'Los Angeles Thieves', years: '2023-2025'},
            { name: 'Paris Gentlemates', years: '2025-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Ghosty'
    },
    {
        id: '131',
        ign: 'Neptune',
        realName: 'Travis McCloud',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Florida Mutineers', years: '2021-2021'},
            { name: 'New York Subliners', years: '2021-2022'},
            { name: 'Los Angeles Guerrillas', years: '2022-2023'},
            { name: 'Vancouver Surge', years: '2025-2025'},
            { name: 'Paris Gentlemates', years: '2025-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Neptune'
    },

    // Riyadh Falcons
    {
        id: '132',
        ign: 'Pred',
        realName: 'Amer Zulbeari',
        nationality: 'Australia',
        role: 'SMG',
        teams: [
            { name: 'Seattle Surge', years: '2021-2023'},
            { name: 'OpTic Texas', years: '2023-2025'},
            { name: 'Las Vegas Falcons', years: '2025-2025'},
            { name: 'Riyadh Falcons', years: '2025-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Pred'
    },
    {
        id: '133',
        ign: 'Exnid',
        realName: 'Saud Alotai',
        nationality: 'Saudi Arabia',
        role: 'SMG',
        teams: [
            { name: 'Las Vegas Falcons', years: '2024-2025'},
            { name: 'Riyadh Falcons', years: '2025-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Exnid'
    },
    {
        id: '134',
        ign: 'KiSMET',
        realName: 'Matthew Tinsley',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Paris Legion', years: '2019-2020'},
            { name: 'New York Subliners', years: '2022-2024'},
            { name: 'Los Angeles Guerrillas M8', years: '2024-2025'},
            { name: 'Riyadh Falcons', years: '2025-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/KiSMET'
    },
    {
        id: '135',
        ign: 'Cellium',
        realName: 'McArthur Jovel',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Atlanta FaZe', years: '2019-2025'},
            { name: 'Riyadh Falcons', years: '2025-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Cellium'
    },

    // Toronto KOI
    {
        id: '136',
        ign: 'CleanX',
        realName: 'Tobias Juul Jonsson',
        nationality: 'Denmark',
        role: 'SMG',
        teams: [
            { name: 'Toronto Ultra', years: '2019-2025'},
            { name: 'Toronto KOI', years: '2025-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/CleanX'
    },
    {
        id: '137',
        ign: 'Insight',
        realName: 'Jamie Craven',
        nationality: 'UK',
        role: 'AR',
        teams: [
            { name: 'Toronto Ultra', years: '2020-2025'},
            { name: 'Toronto KOI', years: '2025-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Insight'
    },
    {
        id: '138',
        ign: 'Reeal',
        realName: 'Jose Manuel Fernandez',
        nationality: 'Spain',
        role: 'SMG',
        teams: [
            { name: 'Carolina Royal Ravens', years: '2023-2024'},
            { name: 'Miami Heretics', years: '2024-2025'},
            { name: 'Toronto KOI', years: '2025-2026' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/ReeaL'
    },
    {
        id: '139',
        ign: 'JoeDeceives',
        realName: 'Joseph Romero',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Los Angeles Guerrillas', years: '2023-2023'},
            { name: 'Los Angeles Thieves', years: '2023-2024'},
            { name: 'Toronto Ultra', years: '2024-2025'},
            { name: 'Toronto KOI', years: '2025-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/JoeDeceives'
    },

    // Vancouver Surge
    {
        id: '140',
        ign: 'Abe',
        realName: 'Ronald Abraham',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Toronto Ultra', years: '2025-2025'},
            { name: 'Vancouver Surge', years: '2025-2026' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Abe'
    },
    {
        id: '141',
        ign: 'Lunarz',
        realName: 'Noah Whillock',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Los Angeles Guerrillas M8', years: '2025-2025'},
            { name: 'Vancouver Surge', years: '2025-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Lunarz'
    },
    {
        id: '142',
        ign: 'Gwinn',
        realName: 'Isaiah Gwinn',
        nationality: 'USA',
        role: 'SMG',
        teams: [
            { name: 'Carolina Royal Ravens', years: '2023-2025'},
            { name: 'Cloud9 New York', years: '2025-2025'},
            { name: 'Vancouver Surge', years: '2025-2026' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Gwinn'
    },
    {
        id: '143',
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
            { name: 'Vancouver Surge', years: '2026-2026' },
            { name: 'Boston Breach', years: '2026-'}
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/TJHaLy'
    },
    {
        id: '144',
        ign: 'Lqgend',
        realName: 'Kaci Sabri',
        nationality: 'France',
        role: 'SMG',
        teams: [
            { name: 'Vancouver Surge', years: '2025-2026' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Lqgend'
    },

    // Substitutes
    {
        id: '145',
        ign: 'Nium',
        realName: 'Jeremiah Harrison',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Los Angeles Thieves', years: '2026-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Nium'
    },
    {
        id: '146',
        ign: 'Kips',
        realName: 'Nicholas Lyons',
        nationality: 'USA',
        role: 'Flex',
        teams: [
            { name: 'Toronto KOI', years: '2026-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Kips'
    },
    {
        id: '147',
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
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Capsidal'
    },
    {
        id: '148',
        ign: 'Spart',
        realName: 'Kris Cervantez',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Los Angeles Guerrillas', years: '2020-2023'},
            { name: 'Cloud9 New York', years: '2025-2025'},
            { name: 'Boston Breach', years: '2026-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Spart'
    },
    {
        id: '149',
        ign: 'Fire',
        realName: 'Luis Rivera',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Paris Legion', years: '2020-2021'},
            { name: 'Carolina Royal Ravens', years: '2026-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Fire'
    },
    {
        id: '150',
        ign: 'Nejra',
        realName: 'Jonathan Pabon',
        nationality: 'Puerto Rico',
        role: 'SMG',
        teams: [
            { name: 'Cloud9 New York', years: '2026-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Nejra'
    },
    {
        id: '151',
        ign: 'Okis',
        realName: 'Arnel Avdagic',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Cloud9 New York', years: '2026-2026' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Okis'
    },
    {
        id: '152',
        ign: 'Encourage',
        realName: 'Jordan Byrd',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Cloud9 New York', years: '2026-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Encourage'
    },
    {
        id: '153',
        ign: 'Hide',
        realName: 'Jacob Bustillos',
        nationality: 'Mexico',
        role: 'SMG',
        teams: [
            { name: 'Cloud9 New York', years: '2026-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Hide'
    },
    {
        id: '154',
        ign: 'Wevy',
        realName: 'Jason Medina',
        nationality: 'USA',
        role: 'AR',
        teams: [
            { name: 'Cloud9 New York', years: '2026-' }
        ],
        wikiUrl: 'https://cod-esports.fandom.com/wiki/Wevy'
    },
]
