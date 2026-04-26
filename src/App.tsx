import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Game1 from './pages/Game1';
import Game2 from './pages/Game2';
import UnlimitedHome from './pages/UnlimitedHome';
import GameUnlimited from './pages/GameUnlimited';
import GameUnlimited2 from './pages/GameUnlimited2';
import Stats from './pages/Stats';
import SettingsPage from './pages/Settings';
import { loadSettings, applySettings } from './utils/settings';
import './App.css';

function AppLayout() {
  useEffect(() => {
    applySettings(loadSettings());
  }, []);

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/game1', element: <Game1 /> },
      { path: '/game2', element: <Game2 /> },
      { path: '/unlimited', element: <UnlimitedHome /> },
      { path: '/unlimited/game1', element: <GameUnlimited /> },
      { path: '/unlimited/game2', element: <GameUnlimited2 /> },
      { path: '/stats', element: <Stats /> },
      { path: '/settings', element: <SettingsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
