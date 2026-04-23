import type { Player, Event } from '../types';
import { players } from '../data/players';
import { events } from '../data/events';

const getDaysSinceEpoch = (date: Date): number => {
  const epoch = new Date('2025-01-01');
  const diff = date.getTime() - epoch.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
};

export interface DailyGameState {
  date: string;
  completed: boolean;
  won: boolean;
  guesses: string[];
  playerId: string;
}

const todayKey = (): string => new Date().toLocaleDateString();

export const getDailyPlayer = (): Player => {
  const sorted = [...players].sort((a, b) => Number(a.id) - Number(b.id));
  const dayIndex = getDaysSinceEpoch(new Date());
  return sorted[dayIndex % sorted.length];
};

export const getDailyGameState = (): DailyGameState | null => {
  const raw = localStorage.getItem('daily-game-state');
  if (!raw) return null;
  const state: DailyGameState = JSON.parse(raw);
  if (state.date !== todayKey()) return null;
  return state;
};

export const saveDailyGameState = (partial: Omit<DailyGameState, 'date'>): void => {
  localStorage.setItem('daily-game-state', JSON.stringify({ ...partial, date: todayKey() }));
};

export const getRandomPlayer = (): Player => {
  return players[Math.floor(Math.random() * players.length)];
};

export interface DailyGame2State {
  date: string;
  completed: boolean;
  won: boolean;
  guesses: string[];
  eventId: string;
}

export const getDailyEvent = (): Event => {
  const sorted = [...events].sort((a, b) => Number(a.id) - Number(b.id));
  const dayIndex = getDaysSinceEpoch(new Date());
  return sorted[dayIndex % sorted.length];
};

export const getDailyGame2State = (): DailyGame2State | null => {
  const raw = localStorage.getItem('daily-game2-state');
  if (!raw) return null;
  const state: DailyGame2State = JSON.parse(raw);
  if (state.date !== todayKey()) return null;
  return state;
};

export const saveDailyGame2State = (partial: Omit<DailyGame2State, 'date'>): void => {
  localStorage.setItem('daily-game2-state', JSON.stringify({ ...partial, date: todayKey() }));
};
