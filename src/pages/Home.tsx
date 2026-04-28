import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import './Home.css';

function Home() {
    const navigate = useNavigate();
    const [showHowToPlay, setShowHowToPlay] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    return (
        <div className="home-container">
            <Modal
                isOpen={showHowToPlay}
                onClose={() => setShowHowToPlay(false)}
                title="How to Play"
            >
                <h3>Guess the Pro</h3>
                <p>Identify the Call of Duty professional player based on their team history.</p>
                <ul>
                    <li>You have <strong>6 attempts</strong> to guess the correct player</li>
                    <li>Each wrong guess reveals another team from their career</li>
                    <li>Teams are shown from their CDL career (2020-present)</li>
                    <li>Use the autocomplete to help with player names</li>
                </ul>

                <h3>Championship Memory</h3>
                <p>Guess which team won a specific Call of Duty championship event.</p>
                <ul>
                    <li>You have <strong>6 attempts</strong> to guess the correct team</li>
                    <li>You'll see the event name, year, and COD title</li>
                    <li>Team names are flexible — abbreviations accepted!</li>
                </ul>

                <h3>Streaks:</h3>
                <ul>
                    <li>Your streak increases by 1 each time you win a game</li>
                    <li>A single loss resets your streak back to 0</li>
                    <li>Skipping a day does <strong>not</strong> break your streak</li>
                </ul>

                <h3>Sharing:</h3>
                <div className="emoji-demo">
                    🟥🟥🟩 3/6
                </div>
                <p>🟥 = Wrong guess | 🟩 = Correct guess</p>

                <p><strong>A new puzzle every day!</strong></p>
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

            <header className="home-header">
                <h1>CoD Esports Trivia</h1>
                <p className="subtitle">Daily puzzles for Call of Duty fans!</p>
                <div className="home-header-icon-row">
                    <div className="home-header-icons">
                        <button
                            onClick={() => setShowHowToPlay(true)}
                            className="icon-btn"
                            aria-label="How to Play"
                            title="How to Play"
                        >
                            📖
                        </button>
                        <button
                            onClick={() => setShowAbout(true)}
                            className="icon-btn"
                            aria-label="About"
                            title="About"
                        >
                            ℹ️
                        </button>
                    </div>
                    <button
                        onClick={() => navigate('/settings')}
                        className="icon-btn home-settings-btn"
                        aria-label="Settings"
                        title="Settings"
                    >
                        ⚙️
                    </button>
                </div>
            </header>

            <div className="game-cards">
                <Link to="/game1" className="game-card">
                    <h2>Guess the Pro</h2>
                    <p>Identify the player from their team history</p>
                    <button className="play-btn">Play Now</button>
                </Link>

                <Link to="/game2" className="game-card">
                    <h2>Championship Memory</h2>
                    <p>Guess who won each championship</p>
                    <button className="play-btn">Play Now</button>
                </Link>

                <Link to="/unlimited" className="game-card">
                    <h2>Unlimited Mode</h2>
                    <p>Play as many rounds as you want — random player every time</p>
                    <button className="play-btn">Play Now</button>
                </Link>
            </div>

            <div className="stats-link-container">
                <Link to="/stats" className="stats-link">View Statistics</Link>
            </div>
        </div>
    );
}

export default Home;