import { useNavigate } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  title: string;
  onHowToPlay?: () => void;
  onAbout?: () => void;
}

function Header({ title, onHowToPlay, onAbout }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="game-header">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back
      </button>
      <h1>{title}</h1>
      <div className="header-icons">
        {onHowToPlay && (
          <button 
            onClick={onHowToPlay} 
            className="icon-btn"
            aria-label="How to Play"
            title="How to Play"
          >
            📖
          </button>
        )}
        {onAbout && (
          <button 
            onClick={onAbout} 
            className="icon-btn"
            aria-label="About"
            title="About"
          >
            ℹ️
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;