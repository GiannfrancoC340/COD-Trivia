import { Link } from 'react-router-dom';
import './UnlimitedHome.css';

function UnlimitedHome() {
  return (
    <div className="unlimited-container">
      <div className="unlimited-header">
        <Link to="/" className="back-link">← Back</Link>
        <h1>Unlimited Mode</h1>
      </div>

      <p className="unlimited-subtitle">Play as many rounds as you want — no daily limits</p>

      <div className="unlimited-cards">
        <Link to="/unlimited/game1" className="unlimited-card">
          <h2>Guess the Pro</h2>
          <p>Identify the player from their team history</p>
          <button className="play-btn">Play Now</button>
        </Link>

        <Link to="/unlimited/game2" className="unlimited-card">
          <h2>Championship Memory</h2>
          <p>Guess who won each championship</p>
          <button className="play-btn">Play Now</button>
        </Link>
      </div>
    </div>
  );
}

export default UnlimitedHome;
