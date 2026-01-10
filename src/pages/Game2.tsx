import { useState } from 'react';
import type { Event } from '../types';

function Game2() {
  const [guess, setGuess] = useState('');
  const [hintsRevealed, setHintsRevealed] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // Mock event data
  const mockEvent: Event = {
    id: '1',
    name: 'CoD Champs',
    year: 2019,
    codTitle: 'Black Ops 4',
    winner: 'Simp',
    team: 'eUnited',
    hints: [
      'This player was a rookie',
      'They played SMG',
      'Won MVP at the event'
    ]
  };

  const handleGuess = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!guess.trim() || gameOver) return;

    const isCorrect = guess.toLowerCase() === mockEvent.winner.toLowerCase();
    
    if (isCorrect) {
      setGameWon(true);
      setGameOver(true);
    } else if (hintsRevealed >= (mockEvent.hints?.length || 0)) {
      setGameOver(true);
    } else {
      setHintsRevealed(hintsRevealed + 1);
    }
    
    setGuess('');
  };

  return (
    <div className="game-container">
      <h1>Championship Memory</h1>
      
      <div className="event-prompt">
        <h2>Who won {mockEvent.name}?</h2>
        <p className="event-details">
          {mockEvent.codTitle} • {mockEvent.year}
        </p>
      </div>

      {hintsRevealed > 0 && mockEvent.hints && (
        <div className="hints-container">
          <h3>Hints:</h3>
          {mockEvent.hints.slice(0, hintsRevealed).map((hint, index) => (
            <div key={index} className="hint">
              💡 {hint}
            </div>
          ))}
        </div>
      )}

      {!gameOver && (
        <form onSubmit={handleGuess} className="guess-form">
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Enter player IGN..."
            className="guess-input"
            autoFocus
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      )}

      {gameWon && (
        <div className="result-message success">
          <h2>🏆 Correct!</h2>
          <p>{mockEvent.winner} ({mockEvent.team}) won {mockEvent.name} {mockEvent.year}!</p>
        </div>
      )}

      {gameOver && !gameWon && (
        <div className="result-message failure">
          <h2>Game Over</h2>
          <p>The answer was: {mockEvent.winner} ({mockEvent.team})</p>
        </div>
      )}
    </div>
  );
}

export default Game2;