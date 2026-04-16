import { useState, useEffect } from 'react';
import type { Event } from '../types';
import { events } from '../data/events';
import Header from '../components/Header';
import Toast from '../components/Toast';
import { updateStats, loadStats, getWinToastMessage } from '../utils/stats';

function Game2() {
  const [guess, setGuess] = useState('');
  const [guesses, setGuesses] = useState<string[]>([]);
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const MAX_ATTEMPTS = 6;

  // Select a random event when component mounts
  const selectRandomEvent = () => {
    const randomEvent = events[Math.floor(Math.random() * events.length)];
    setCurrentEvent(randomEvent);
  };

  useEffect(() => {
    selectRandomEvent();
  }, []);

  const handlePlayAgain = () => {
    setGuess('');
    setGuesses([]);
    setGameWon(false);
    setGameOver(false);
    setShowIncorrect(false);
    setShowToast(false);
    selectRandomEvent();
  };

  const checkAnswer = (userGuess: string, event: Event): boolean => {
    const normalizedGuess = userGuess.toLowerCase().trim();
    return event.acceptedAnswers.some(answer => 
      normalizedGuess === answer.toLowerCase()
    );
  };

  const handleGuess = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!guess.trim() || gameOver || !currentEvent) return;

    const isCorrect = checkAnswer(guess, currentEvent);
    
    setGuesses([...guesses, guess]);
    
    if (isCorrect) {
      updateStats('game2-stats', true);
      const streak = loadStats('game2-stats').currentStreak;
      setToastMessage(getWinToastMessage(streak));
      setGameWon(true);
      setGameOver(true);
      setShowToast(true);
    } else {
      setShowIncorrect(true);
      setTimeout(() => setShowIncorrect(false), 500);

      if (guesses.length >= MAX_ATTEMPTS - 1) {
        updateStats('game2-stats', false);
        setGameOver(true);
      }
    }
    
    setGuess('');
  };

  // Show loading state while event is being selected
  if (!currentEvent) {
    return (
      <div className="game-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="game-container">
      <Toast
        message={toastMessage}
        show={showToast}
        onHide={() => setShowToast(false)}
      />
      <Header title="Championship Memory" />
      
      <p className="attempts">Attempts: {guesses.length}/{MAX_ATTEMPTS}</p>
      
      <div className="event-prompt">
        <h2>Which team won {currentEvent.name}?</h2>
        <p className="event-details">
          {currentEvent.codTitle} • {currentEvent.year}
        </p>
      </div>

      {!gameOver && (
        <form onSubmit={handleGuess} className="guess-form">
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Enter team name..."
            className={`guess-input ${showIncorrect ? 'shake-incorrect' : ''}`}
            autoFocus
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      )}

      {guesses.length > 0 && (
        <div className="previous-guesses">
          <h3>Previous Guesses:</h3>
          <div className="guesses-list">
            {guesses.map((g, index) => (
              <span key={index} className="guess-chip incorrect">
                {g} ✗
              </span>
            ))}
          </div>
        </div>
      )}

      {gameWon && (
        <div className="result-message success">
          <h2>🏆 Correct!</h2>
          <p><strong>{currentEvent.winningTeam}</strong> won {currentEvent.name}!</p>
          <p className="event-subtitle">{currentEvent.codTitle} • {currentEvent.year}</p>
          {guesses.length === 1 ? (
            <p className="perfect-guess">🔥 Perfect! First guess!</p>
          ) : (
            <p>You got it in {guesses.length} {guesses.length === 1 ? 'attempt' : 'attempts'}!</p>
          )}
          <button onClick={handlePlayAgain} className="play-again-btn">
            Play Again
          </button>
        </div>
      )}

      {gameOver && !gameWon && (
        <div className="result-message failure">
          <h2>Game Over</h2>
          <p>The answer was: <strong>{currentEvent.winningTeam}</strong></p>
          <p className="event-subtitle">{currentEvent.codTitle} • {currentEvent.year}</p>
          
          <div className="accepted-answers-info">
            <p className="hint-text">Accepted answers included: {currentEvent.acceptedAnswers.slice(0, 3).join(', ')}</p>
          </div>
          
          <button onClick={handlePlayAgain} className="play-again-btn">
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}

export default Game2;