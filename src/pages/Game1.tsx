import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import type { Player } from '../types';
import { players } from '../data/players';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Toast from '../components/Toast';
import { updateStats, loadStats, getWinToastMessage } from '../utils/stats';
import { loadSettings } from '../utils/settings';
import { getDailyPlayer, getDailyGameState, saveDailyGameState } from '../utils/dailyPuzzle';
import { copyToClipboard, generateGame1ShareText } from '../utils/share';

function Game1() {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [hardMode] = useState(() => loadSettings().hardMode);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [countdown, setCountdown] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const dailyPlayer = getDailyPlayer();
    const state = getDailyGameState();

    if (state) {
      const storedPlayer = players.find(p => p.id === state.playerId) ?? dailyPlayer;
      setCurrentPlayer(storedPlayer);
      setGuesses(state.guesses);
      if (state.completed) {
        setGameOver(true);
        setGameWon(state.won);
      }
    } else {
      setCurrentPlayer(dailyPlayer);
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
    if (!hardMode && value.trim().length > 0) {
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

  const handleShare = async () => {
    if (!currentPlayer) return;
    const shareText = generateGame1ShareText(guesses.length, gameWon);
    const success = await copyToClipboard(shareText);
    if (success) {
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    }
  };

  const handleGuess = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentGuess.trim() || gameOver || !currentPlayer) return;

    setShowSuggestions(false);
    const isCorrect = currentGuess.toLowerCase() === currentPlayer.ign.toLowerCase();
    const newGuesses = [...guesses, currentGuess];
    setGuesses(newGuesses);
    setCurrentGuess('');

    if (isCorrect) {
      saveDailyGameState({ completed: true, won: true, guesses: newGuesses, playerId: currentPlayer.id });
      updateStats('game1-stats', true);
      const streak = loadStats('game1-stats').currentStreak;
      setToastMessage(getWinToastMessage(streak));
      setGameWon(true);
      setGameOver(true);
      setShowToast(true);
    } else {
      saveDailyGameState({ completed: newGuesses.length >= 6, won: false, guesses: newGuesses, playerId: currentPlayer.id });
      setShowIncorrect(true);
      setTimeout(() => setShowIncorrect(false), 500);
      if (newGuesses.length >= 6) {
        updateStats('game1-stats', false);
        setGameOver(true);
      }
    }
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
      <Modal
        isOpen={showHowToPlay}
        onClose={() => setShowHowToPlay(false)}
        title="How to Play - Guess the Pro"
      >
        <p>Guess the Call of Duty professional player based on their team history!</p>

        <h3>Rules:</h3>
        <ul>
          <li>You have <strong>6 attempts</strong> to guess the correct player</li>
          <li>Each wrong guess reveals another team from their career</li>
          <li>Teams are shown from their CDL career (2020-present)</li>
          <li>Use the autocomplete to help with player names</li>
        </ul>

        <h3>Example:</h3>
        <div className="game-example">
          <p><strong>Team Revealed:</strong> Atlanta FaZe (2020-2024)</p>
          <p><strong>Your guess:</strong> Simp ✓</p>
        </div>

        <h3>Sharing:</h3>
        <p>After completing the game, share your results!</p>
        <div className="emoji-demo">
          🟥🟥🟩 3/6
        </div>
        <p>🟥 = Wrong guess | 🟩 = Correct guess</p>

        <p><strong>A new player every day!</strong></p>
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
        title="Guess the Pro"
        onHowToPlay={() => setShowHowToPlay(true)}
        onAbout={() => setShowAbout(true)}
      />

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
              onFocus={() => { if (suggestions.length > 0) setShowSuggestions(true); }}
              placeholder="Enter player IGN..."
              className={`guess-input ${showIncorrect ? 'shake-incorrect' : ''}`}
              autoComplete="off"
              autoFocus
            />
            {showSuggestions && (
              <ul className="suggestions-list" ref={suggestionsRef}>
                {suggestions.map((ign) => (
                  <li key={ign} className="suggestion-item" onMouseDown={() => handleSuggestionClick(ign)}>
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
            {guesses.map((guess, index) => {
              const isWinningGuess = gameWon && index === guesses.length - 1;
              return (
                <span key={index} className={`guess-chip ${isWinningGuess ? 'correct' : 'incorrect'}`}>
                  {guess} {isWinningGuess ? '✓' : '✗'}
                </span>
              );
            })}
          </div>
        </div>
      )}

      {gameWon && (
        <div className="result-message success">
          <h2>🎉 Correct!</h2>
          <p>You guessed <strong>{currentPlayer.ign}</strong> in {guesses.length} {guesses.length === 1 ? 'attempt' : 'attempts'}!</p>
          <p className="player-info">{currentPlayer.realName} • {currentPlayer.nationality} • {currentPlayer.role}</p>
          {currentPlayer.id === '150' && (
            <div className="in-memoriam">
              <span>🕊️</span>
              <p>In memory of Fero — Maurice Henriquez</p>
              <p className="in-memoriam-years">2000 – 2020</p>
            </div>
          )}
          <div className="countdown">Next puzzle in: <strong>{countdown}</strong></div>
          <div className="action-buttons">
            <button onClick={handleShare} className="share-btn">
              {showCopied ? '✓ Copied!' : 'Share Results'}
            </button>
            <Link to="/stats" className="result-link-btn">View Stats</Link>
            <Link to="/unlimited/game1" className="result-link-btn">Play Unlimited</Link>
          </div>
        </div>
      )}

      {gameOver && !gameWon && (
        <div className="result-message failure">
          <h2>Game Over</h2>
          <p>The answer was: <strong>{currentPlayer.ign}</strong></p>
          <p className="player-info">{currentPlayer.realName} • {currentPlayer.nationality} • {currentPlayer.role}</p>
          {currentPlayer.id === '150' && (
            <div className="in-memoriam">
              <span>🕊️</span>
              <p>In memory of Fero — Maurice Henriquez</p>
              <p className="in-memoriam-years">2000 – 2020</p>
            </div>
          )}
          <div className="all-teams">
            <h3>Full Team History:</h3>
            {currentPlayer.teams.map((team, index) => (
              <div key={index} className="team-reveal">
                {team.name} ({team.years})
              </div>
            ))}
          </div>
          <div className="countdown">Next puzzle in: <strong>{countdown}</strong></div>
          <div className="action-buttons">
            <button onClick={handleShare} className="share-btn">
              {showCopied ? '✓ Copied!' : 'Share Results'}
            </button>
            <Link to="/stats" className="result-link-btn">View Stats</Link>
            <Link to="/unlimited/game1" className="result-link-btn">Play Unlimited</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Game1;