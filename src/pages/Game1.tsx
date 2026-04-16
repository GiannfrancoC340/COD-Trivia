import { useState, useEffect, useRef } from 'react';
import type { Player } from '../types';
import { players } from '../data/players';
import Header from '../components/Header';
import Toast from '../components/Toast';
import { updateStats, loadStats, getWinToastMessage } from '../utils/stats';

function Game1() {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);

  const selectRandomPlayer = () => {
    const randomPlayer = players[Math.floor(Math.random() * players.length)];
    setCurrentPlayer(randomPlayer);
  };

  useEffect(() => {
    selectRandomPlayer();
  }, []);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCurrentGuess(value);

    if (value.trim().length > 0) {
      const alreadyGuessed = guesses.map(g => g.toLowerCase());
      const filtered = players
        .map(p => p.ign)
        .filter(
          ign =>
            ign.toLowerCase().includes(value.toLowerCase()) &&
            !alreadyGuessed.includes(ign.toLowerCase())
        );
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (ign: string) => {
    setCurrentGuess(ign);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const handlePlayAgain = () => {
    setGuesses([]);
    setCurrentGuess('');
    setGameWon(false);
    setGameOver(false);
    setShowIncorrect(false);
    setShowToast(false);
    setSuggestions([]);
    setShowSuggestions(false);
    selectRandomPlayer();
  };

  const handleGuess = (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentGuess.trim() || gameOver || !currentPlayer) return;

    setShowSuggestions(false);

    const isCorrect = currentGuess.toLowerCase() === currentPlayer.ign.toLowerCase();

    setGuesses([...guesses, currentGuess]);

    if (isCorrect) {
      updateStats('game1-stats', true);
      const streak = loadStats('game1-stats').currentStreak;
      setToastMessage(getWinToastMessage(streak));
      setGameWon(true);
      setGameOver(true);
      setShowToast(true);
    } else {
      setShowIncorrect(true);
      setTimeout(() => setShowIncorrect(false), 500);

      if (guesses.length >= 5) {
        updateStats('game1-stats', false);
        setGameOver(true);
      }
    }

    setCurrentGuess('');
  };

  if (!currentPlayer) {
    return (
      <div className="game-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  const teamsToShow = Math.min(guesses.length + 1, currentPlayer.teams.length);

  return (
    <div className="game-container">
      <Toast
        message={toastMessage}
        show={showToast}
        onHide={() => setShowToast(false)}
      />
      <Header title="Guess the Pro" />

      <p className="attempts">Attempts: {guesses.length}/6</p>

      <div className="teams-display">
        {currentPlayer.teams.slice(0, teamsToShow).map((team, index) => (
          <div
            key={index}
            className={`team-card ${index === teamsToShow - 1 && guesses.length > 0 ? 'new-reveal' : ''}`}
          >
            <h3>{team.name}</h3>
            <p>{team.years}</p>
          </div>
        ))}
      </div>

      {!gameOver && (
        <form onSubmit={handleGuess} className="guess-form">
          <div className="autocomplete-wrapper">
            <input
              ref={inputRef}
              type="text"
              value={currentGuess}
              onChange={handleInputChange}
              onFocus={() => {
                if (suggestions.length > 0) setShowSuggestions(true);
              }}
              placeholder="Enter player IGN..."
              className={`guess-input ${showIncorrect ? 'shake-incorrect' : ''}`}
              autoComplete="off"
              autoFocus
            />
            {showSuggestions && (
              <ul className="suggestions-list" ref={suggestionsRef}>
                {suggestions.map((ign) => (
                  <li
                    key={ign}
                    className="suggestion-item"
                    onMouseDown={() => handleSuggestionClick(ign)}
                  >
                    {ign}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button type="submit" className="submit-btn">Guess</button>
        </form>
      )}

      {guesses.length > 0 && (
        <div className="previous-guesses">
          <h3>Previous Guesses:</h3>
          <div className="guesses-list">
            {guesses.map((guess, index) => (
              <span key={index} className="guess-chip incorrect">
                {guess} ✗
              </span>
            ))}
          </div>
        </div>
      )}

      {gameWon && (
        <div className="result-message success">
          <h2>🎉 Correct!</h2>
          <p>You guessed <strong>{currentPlayer.ign}</strong> in {guesses.length} {guesses.length === 1 ? 'attempt' : 'attempts'}!</p>
          <p className="player-info">{currentPlayer.realName} • {currentPlayer.nationality} • {currentPlayer.role}</p>
          <button onClick={handlePlayAgain} className="play-again-btn">
            Play Again
          </button>
        </div>
      )}

      {gameOver && !gameWon && (
        <div className="result-message failure">
          <h2>Game Over</h2>
          <p>The answer was: <strong>{currentPlayer.ign}</strong></p>
          <p className="player-info">{currentPlayer.realName} • {currentPlayer.nationality} • {currentPlayer.role}</p>
          <div className="all-teams">
            <h3>Full Team History:</h3>
            {currentPlayer.teams.map((team, index) => (
              <div key={index} className="team-reveal">
                {team.name} ({team.years})
              </div>
            ))}
          </div>
          <button onClick={handlePlayAgain} className="play-again-btn">
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}

export default Game1;
