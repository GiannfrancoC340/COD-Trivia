import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Settings as SettingsType } from '../types';
import { loadSettings, saveSettings, applySettings, DEFAULT_SETTINGS } from '../utils/settings';
import './Settings.css';

function Settings() {
  const navigate = useNavigate();
  const [draft, setDraft] = useState<SettingsType>(() => loadSettings());

  const toggle = (key: keyof SettingsType) => {
    setDraft(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    saveSettings(draft);
    applySettings(draft);
    navigate(-1);
  };

  const handleRevert = () => {
    const defaults = { ...DEFAULT_SETTINGS };
    setDraft(defaults);
    saveSettings(defaults);
    applySettings(defaults);
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
        <h1>Settings</h1>
        <div className="settings-header-spacer" />
      </div>

      <div className="settings-list">
        <div className="settings-row">
          <div className="settings-label">
            <span className="settings-title">Hard Mode</span>
            <span className="settings-desc">Disables autocomplete — type player names from memory</span>
          </div>
          <button
            className={`toggle${draft.hardMode ? ' on' : ''}`}
            onClick={() => toggle('hardMode')}
            aria-label="Toggle Hard Mode"
          />
        </div>

        <div className="settings-row">
          <div className="settings-label">
            <span className="settings-title">No Animations</span>
            <span className="settings-desc">Disables all transitions and motion effects</span>
          </div>
          <button
            className={`toggle${draft.noAnimations ? ' on' : ''}`}
            onClick={() => toggle('noAnimations')}
            aria-label="Toggle No Animations"
          />
        </div>

        <div className="settings-row">
          <div className="settings-label">
            <span className="settings-title">Light Mode</span>
            <span className="settings-desc">Switches to a light color theme</span>
          </div>
          <button
            className={`toggle${draft.lightMode ? ' on' : ''}`}
            onClick={() => toggle('lightMode')}
            aria-label="Toggle Light Mode"
          />
        </div>
      </div>

      <div className="settings-actions">
        <button className="settings-save-btn" onClick={handleSave}>Save</button>
        <button className="settings-revert-btn" onClick={handleRevert}>Revert to Defaults</button>
      </div>
    </div>
  );
}

export default Settings;
