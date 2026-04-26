// Player types
export interface Team {
  name: string;
  years: string;
}

export interface Player {
  id: string;
  ign: string;
  realName: string;
  nationality: string;
  role: 'SMG' | 'AR' | 'Flex';
  teams: Team[];
}

// Event types
export interface Event {
  id: string;
  name: string;
  year: number;
  codTitle: string;
  winningTeam: string;        // Changed from 'winner' and 'team'
  acceptedAnswers: string[];  // Array of valid answers (OpTic, OpTic Texas, OPT, etc.)
}

export interface Settings {
  hardMode: boolean;
  noAnimations: boolean;
  lightMode: boolean;
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