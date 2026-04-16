import type { GameStats } from '../types';

const DEFAULT_STATS: GameStats = {
  played: 0,
  wins: 0,
  currentStreak: 0,
  maxStreak: 0,
};

export function loadStats(key: string): GameStats {
  const raw = localStorage.getItem(key);
  if (!raw) return { ...DEFAULT_STATS };
  return JSON.parse(raw) as GameStats;
}

export function updateStats(key: string, won: boolean): void {
  const stats = loadStats(key);
  stats.played += 1;
  if (won) {
    stats.wins += 1;
    stats.currentStreak += 1;
    stats.maxStreak = Math.max(stats.maxStreak, stats.currentStreak);
  } else {
    stats.currentStreak = 0;
  }
  localStorage.setItem(key, JSON.stringify(stats));
}

export function winPercent(stats: GameStats): number {
  if (stats.played === 0) return 0;
  return Math.round((stats.wins / stats.played) * 100);
}

export function getWinToastMessage(streak: number): string {
  if (streak >= 10) return `🔥 ${streak} win streak! Absolutely unstoppable!`;
  if (streak >= 5)  return `🔥 ${streak} win streak! You're on fire!`;
  if (streak >= 3)  return `⚡ ${streak} in a row! Keep it going!`;
  return '🎉 Correct! Nice one!';
}
