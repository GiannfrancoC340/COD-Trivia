import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { GameStats } from '../types';
import { loadStats, winPercent } from '../utils/stats';
import './Stats.css';

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="stat-card">
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function GameStatsSection({ title, storageKey }: { title: string; storageKey: string }) {
  const [stats, setStats] = useState<GameStats | null>(null);

  useEffect(() => {
    setStats(loadStats(storageKey));
  }, [storageKey]);

  if (!stats) return null;

  return (
    <div className="stats-section">
      <h2>{title}</h2>
      <div className="stats-grid">
        <StatCard label="Played" value={stats.played} />
        <StatCard label="Wins" value={stats.wins} />
        <StatCard label="Losses" value={stats.played - stats.wins} />
        <StatCard label="Win %" value={`${winPercent(stats)}%`} />
        <StatCard label="Current Streak" value={stats.currentStreak} />
        <StatCard label="Max Streak" value={stats.maxStreak} />
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="stats-container">
      <div className="stats-header">
        <Link to="/" className="back-link">← Back</Link>
        <h1>Statistics</h1>
      </div>

      <GameStatsSection title="Guess the Pro (Daily)" storageKey="game1-stats" />
      <GameStatsSection title="Guess the Pro (Unlimited)" storageKey="game1-unlimited-stats" />
      <GameStatsSection title="Championship Memory (Daily)" storageKey="game2-stats" />
      <GameStatsSection title="Championship Memory (Unlimited)" storageKey="game2-unlimited-stats" />
    </div>
  );
}

export default Stats;