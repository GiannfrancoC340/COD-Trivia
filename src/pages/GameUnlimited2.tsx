import { useState, useEffect } from 'react';
import type { Event } from '../types';
import { events } from '../data/events';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Toast from '../components/Toast';
import { updateStats, loadStats, getWinToastMessage } from '../utils/stats';
import { copyToClipboard, generateGame2ShareText } from '../utils/share';

function GameUnlimited2() {
  const [guess, setGuess] = useState('');
  const [guesses, setGuesses] = useState<string[]>([]);
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showCopied, setShowCopied] = useState(false);
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const MAX_ATTEMPTS = 6;

  const selectRandomEvent = () => {
    setCurrentEvent(events[Math.floor(Math.random() * events.length)]);
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
    setShowCopied(false);
    selectRandomEvent();
  };

  const handleShare = async () => {
    if (!currentEvent) return;
    const shareText = generateGame2ShareText(guesses.length, gameWon);
    const success = await copyToClipboard(shareText);
    if (success) {
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    }
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
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
    setGuess('');

    if (isCorrect) {
      updateStats('game2-unlimited-stats', true);
      const streak = loadStats('game2-unlimited-stats').currentStreak;
      setToastMessage(getWinToastMessage(streak));
      setGameWon(true);
      setGameOver(true);
      setShowToast(true);
    } else {
      setShowIncorrect(true);
      setTimeout(() => setShowIncorrect(false), 500);
      if (newGuesses.length >= MAX_ATTEMPTS) {
        updateStats('game2-unlimited-stats', false);
        setGameOver(true);
      }
    }
  };

  if (!currentEvent) {
    return (
      <div className="game-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="game-container">
      <Modal
        isOpen={showHowToPlay}
        onClose={() => setShowHowToPlay(false)}
        title="How to Play - Championship Memory"
      >
        <p>Guess which team won a specific Call of Duty championship event!</p>

        <h3>Rules:</h3>
        <ul>
          <li>You have <strong>6 attempts</strong> to guess the correct team</li>
          <li>You'll see the event name, year, and COD title</li>
          <li>Team names are flexible - you can use abbreviations!</li>
        </ul>

        <h3>Accepted Answers:</h3>
        <div className="game-example">
          <p><strong>Full name:</strong> Atlanta FaZe ✓</p>
          <p><strong>City:</strong> Atlanta ✓</p>
          <p><strong>Org:</strong> FaZe ✓</p>
          <p><strong>Abbreviation:</strong> ATL ✓</p>
        </div>

        <h3>Example:</h3>
        <div className="game-example">
          <p><strong>Prompt:</strong> Which team won Major 2?</p>
          <p><strong>Details:</strong> Black Ops 6 • 2025</p>
          <p><strong>Your guess:</strong> OpTic ✓</p>
        </div>

        <h3>Sharing:</h3>
        <div className="emoji-demo">
          🟥🟥🟥🟩 4/6
        </div>
        <p>🟥 = Wrong guess | 🟩 = Correct guess</p>
      </Modal>

      <Modal
        isOpen={showAbout}
        onClose={() => setShowAbout(false)}
        title="About"
      >
        <p>
          <strong>CoD Trivia</strong> is a daily puzzle game for Call of Duty esports fans.
          Test your knowledge of professional players and championship history!
        </p>

        <h3>Two Daily Games:</h3>
        <ul>
          <li><strong>Guess the Pro:</strong> Identify players by their team history</li>
          <li><strong>Championship Memory:</strong> Remember which teams won major events</li>
        </ul>

        <h3>Coverage:</h3>
        <p>
          All data covers the <strong>CDL era</strong> (2020-present), including:
        </p>
        <ul>
          <li>Modern Warfare (2019)</li>
          <li>Black Ops Cold War</li>
          <li>Vanguard</li>
          <li>Modern Warfare II</li>
          <li>Modern Warfare III</li>
          <li>Black Ops 6</li>
          <li>Black Ops 7 (Current)</li>
        </ul>

        <p>
          Created by a CoD esports fan, for CoD esports fans. New puzzles daily!
        </p>
      </Modal>

      <Toast message={toastMessage} show={showToast} onHide={() => setShowToast(false)} />
      <Header
        title="Championship Memory"
        onHowToPlay={() => setShowHowToPlay(true)}
        onAbout={() => setShowAbout(true)}
      />

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
            {guesses.map((g, index) => {
              const isWinningGuess = gameWon && index === guesses.length - 1;
              return (
                <span key={index} className={`guess-chip ${isWinningGuess ? 'correct' : 'incorrect'}`}>
                  {g} {isWinningGuess ? '✓' : '✗'}
                </span>
              );
            })}
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
          <div className="action-buttons">
            <button onClick={handleShare} className="share-btn">
              {showCopied ? '✓ Copied!' : 'Share Results'}
            </button>
            <button onClick={handlePlayAgain} className="play-again-btn">Play Again</button>
          </div>
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
          <div className="action-buttons">
            <button onClick={handleShare} className="share-btn">
              {showCopied ? '✓ Copied!' : 'Share Results'}
            </button>
            <button onClick={handlePlayAgain} className="play-again-btn">Play Again</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameUnlimited2;
