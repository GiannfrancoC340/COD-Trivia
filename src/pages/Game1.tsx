import { useState } from 'react';
import type { Player } from '../types';

function Game1() {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // Mock player data for now
  const mockPlayer: Player = {
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
  };

  const handleGuess = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentGuess.trim() || gameOver) return;

    const isCorrect = currentGuess.toLowerCase() === mockPlayer.ign.toLowerCase();
    
    setGuesses([...guesses, currentGuess]);
    
    if (isCorrect) {
      setGameWon(true);
      setGameOver(true);
    } else if (guesses.length >= 5) {
      setGameOver(true);
    }
    
    setCurrentGuess('');
  };

  const teamsToShow = Math.min(guesses.length + 1, mockPlayer.teams.length);

  return (
    <div className="game-container">
      <h1>Guess the Pro</h1>
      <p className="attempts">Attempts: {guesses.length}/6</p>

      <div className="teams-display">
        {mockPlayer.teams.slice(0, teamsToShow).map((team, index) => (
          <div key={index} className="team-card">
            <h3>{team.name}</h3>
            <p>{team.years}</p>
          </div>
        ))}
      </div>

      {!gameOver && (
        <form onSubmit={handleGuess} className="guess-form">
          <input
            type="text"
            value={currentGuess}
            onChange={(e) => setCurrentGuess(e.target.value)}
            placeholder="Enter player IGN..."
            className="guess-input"
            autoFocus
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      )}

      {guesses.length > 0 && (
        <div className="previous-guesses">
          <h3>Previous Guesses:</h3>
          {guesses.map((guess, index) => (
            <span key={index} className="guess-chip">{guess}</span>
          ))}
        </div>
      )}

      {gameWon && (
        <div className="result-message success">
          <h2>🎉 Correct!</h2>
          <p>You guessed {mockPlayer.ign} in {guesses.length} attempts!</p>
        </div>
      )}

      {gameOver && !gameWon && (
        <div className="result-message failure">
          <h2>Game Over</h2>
          <p>The answer was: {mockPlayer.ign}</p>
        </div>
      )}
    </div>
  );
}

export default Game1;