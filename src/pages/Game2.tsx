import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import type { Event } from '../types';
import { events } from '../data/events';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Toast from '../components/Toast';
import { updateStats, loadStats, getWinToastMessage } from '../utils/stats';
import { getDailyEvent, getDailyGame2State, saveDailyGame2State } from '../utils/dailyPuzzle';
import { copyToClipboard, generateGame2ShareText } from '../utils/share';
import { loadSettings } from '../utils/settings';

const allTeams = Array.from(
  new Map(events.map(e => [e.winningTeam, e.acceptedAnswers])).entries()
).map(([winningTeam, acceptedAnswers]) => ({ winningTeam, acceptedAnswers }));

function Game2() {
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
  const [countdown, setCountdown] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [hardMode] = useState(() => loadSettings().hardMode);

  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);

  const MAX_ATTEMPTS = 6;

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

  useEffect(() => {
    const dailyEvent = getDailyEvent();
    const state = getDailyGame2State();

    if (state) {
      const storedEvent = events.find(e => e.id === state.eventId) ?? dailyEvent;
      setCurrentEvent(storedEvent);
      setGuesses(state.guesses);
      if (state.completed) {
        setGameOver(true);
        setGameWon(state.won);
      }
    } else {
      setCurrentEvent(dailyEvent);
    }
  }, []);

  // Countdown to midnight
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      const diff = midnight.getTime() - now.getTime();
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setCountdown(
        `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const handleShare = async () => {
    if (!currentEvent) return;
    const shareText = generateGame2ShareText(guesses.length, gameWon);
    const success = await copyToClipboard(shareText);
    if (success) {
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setGuess(value);
    if (!hardMode && value.trim().length > 0) {
      const lower = value.toLowerCase();
      const filtered = allTeams
        .filter(team =>
          team.winningTeam.toLowerCase().includes(lower) ||
          team.acceptedAnswers.some(a => a.toLowerCase().includes(lower))
        )
        .map(team => team.winningTeam);
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (teamName: string) => {
    setGuess(teamName);
    setSuggestions([]);
    setShowSuggestions(false);
    inputRef.current?.focus();
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
    setSuggestions([]);
    setShowSuggestions(false);

    if (isCorrect) {
      saveDailyGame2State({ completed: true, won: true, guesses: newGuesses, eventId: currentEvent.id });
      updateStats('game2-stats', true);
      const streak = loadStats('game2-stats').currentStreak;
      setToastMessage(getWinToastMessage(streak));
      setGameWon(true);
      setGameOver(true);
      setShowToast(true);
    } else {
      saveDailyGame2State({ completed: newGuesses.length >= MAX_ATTEMPTS, won: false, guesses: newGuesses, eventId: currentEvent.id });
      setShowIncorrect(true);
      setTimeout(() => setShowIncorrect(false), 500);
      if (newGuesses.length >= MAX_ATTEMPTS) {
        updateStats('game2-stats', false);
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

        <p><strong>A new event every day!</strong></p>
      </Modal>

      <Modal
        isOpen={showAbout}
        onClose={() => setShowAbout(false)}
        title="About"
      >
        <p>
          <strong>CDL Trivia</strong> is a daily puzzle game for Call of Duty esports fans.
          Test your knowledge of professional players and championship history in the CDL era!
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
          <div className="autocomplete-wrapper">
            <input
              ref={inputRef}
              type="text"
              value={guess}
              onChange={handleInputChange}
              onFocus={() => { if (suggestions.length > 0) setShowSuggestions(true); }}
              placeholder="Enter team name..."
              className={`guess-input ${showIncorrect ? 'shake-incorrect' : ''}`}
              autoComplete="off"
              autoFocus
            />
            {showSuggestions && (
              <ul className="suggestions-list" ref={suggestionsRef}>
                {suggestions.map((team) => (
                  <li key={team} className="suggestion-item" onMouseDown={() => handleSuggestionClick(team)}>
                    {team}
                  </li>
                ))}
              </ul>
            )}
          </div>
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
          <div className="countdown">Next puzzle in: <strong>{countdown}</strong></div>
          <div className="action-buttons">
            <button onClick={handleShare} className="share-btn">
              {showCopied ? '✓ Copied!' : 'Share Results'}
            </button>
            <Link to="/stats" className="result-link-btn">View Stats</Link>
            <Link to="/unlimited/game2" className="result-link-btn">Play Unlimited</Link>
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
          <div className="countdown">Next puzzle in: <strong>{countdown}</strong></div>
          <div className="action-buttons">
            <button onClick={handleShare} className="share-btn">
              {showCopied ? '✓ Copied!' : 'Share Results'}
            </button>
            <Link to="/stats" className="result-link-btn">View Stats</Link>
            <Link to="/unlimited/game2" className="result-link-btn">Play Unlimited</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Game2;
