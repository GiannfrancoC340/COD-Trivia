// Player types
export interface Team {
  name: string;
  years: string;
  logo?: string;
}

export interface Player {
  id: string;
  ign: string;
  realName: string;
  nationality: string;
  role: string;
  teams: Team[];
}

// Event types
export interface Event {
  id: string;
  name: string;
  year: number;
  codTitle: string;
  winner: string; // player IGN
  team: string;
  hints?: string[];
}

// Game state types
export interface GameStats {
  played: number;
  wins: number;
  currentStreak: number;
  maxStreak: number;
}

export interface DailyPuzzle {
  date: string;
  game1PlayerId: string;
  game2EventId: string;
}