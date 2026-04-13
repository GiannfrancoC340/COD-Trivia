import { useState, useEffect } from 'react';
import type { Player } from '../types';
import { players } from '../data/players';

function Game1() {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  // Select a random player when component mounts
  useEffect(() => {
    const randomPlayer = players[Math.floor(Math.random() * players.length)];
    setCurrentPlayer(randomPlayer);
  }, []);

  const handleGuess = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentGuess.trim() || gameOver || !currentPlayer) return;

    const isCorrect = currentGuess.toLowerCase() === currentPlayer.ign.toLowerCase();
    
    setGuesses([...guesses, currentGuess]);
    
    if (isCorrect) {
      setGameWon(true);
      setGameOver(true);
    } else if (guesses.length >= 5) {
      setGameOver(true);
    }
    
    setCurrentGuess('');
  };

  // Show loading state while player is being selected
  if (!currentPlayer) {
    return <div className="game-container">Loading...</div>;
  }

  const teamsToShow = Math.min(guesses.length + 1, currentPlayer.teams.length);

  return (
    <div className="game-container">
      <h1>Guess the Pro</h1>
      <p className="attempts">Attempts: {guesses.length}/6</p>

      <div className="teams-display">
        {currentPlayer.teams.slice(0, teamsToShow).map((team, index) => (
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
          <button type="submit" className="submit-btn">Guess</button>
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
          <p>You guessed {currentPlayer.ign} in {guesses.length} attempts!</p>
        </div>
      )}

      {gameOver && !gameWon && (
        <div className="result-message failure">
          <h2>Game Over</h2>
          <p>The answer was: {currentPlayer.ign}</p>
        </div>
      )}
    </div>
  );
}

export default Game1;