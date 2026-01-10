import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>CoD Esports Trivia</h1>
                <p className="subtitle">Daily puzzles for Call of Duty fans!</p>
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
            </div>
        </div>
    );
}

export default Home;