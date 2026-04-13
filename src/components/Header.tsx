import { useNavigate } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="game-header">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back
      </button>
      <h1>{title}</h1>
      <div className="spacer"></div>
    </header>
  );
}

export default Header;