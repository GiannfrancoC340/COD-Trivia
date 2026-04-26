import { useState, useRef, useMemo, useEffect } from 'react';
import { useNavigate, useBlocker } from 'react-router-dom';
import type { Settings as SettingsType } from '../types';
import { loadSettings, saveSettings, applySettings, DEFAULT_SETTINGS } from '../utils/settings';
import Modal from '../components/Modal';
import './Settings.css';

function Settings() {
  const navigate = useNavigate();
  const initialSettings = useRef<SettingsType>(loadSettings());
  const [draft, setDraft] = useState<SettingsType>(() => ({ ...initialSettings.current }));

  const isDirty = useMemo(
    () => JSON.stringify(draft) !== JSON.stringify(initialSettings.current),
    [draft]
  );

  const [pendingNavigate, setPendingNavigate] = useState(false);
  const blocker = useBlocker(!pendingNavigate && isDirty);

  useEffect(() => {
    if (pendingNavigate) navigate(-1);
  }, [pendingNavigate, navigate]);

  const toggle = (key: keyof SettingsType) => {
    setDraft(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const save = () => {
    saveSettings(draft);
    applySettings(draft);
    initialSettings.current = { ...draft };
  };

  const handleSave = () => {
    save();
    setPendingNavigate(true);
  };

  const handleRevert = () => {
    const defaults = { ...DEFAULT_SETTINGS };
    setDraft(defaults);
    saveSettings(defaults);
    applySettings(defaults);
    initialSettings.current = { ...defaults };
  };

  return (
    <div className="settings-container">
      <Modal
        isOpen={blocker.state === 'blocked'}
        onClose={() => blocker.reset?.()}
        title="Unsaved Changes"
      >
        <p className="settings-blocker-msg">You have unsaved changes. What would you like to do?</p>
        <div className="settings-blocker-actions">
          <button className="settings-save-btn" onClick={() => { save(); blocker.proceed?.(); }}>
            Save &amp; Leave
          </button>
          <button className="settings-revert-btn" onClick={() => blocker.proceed?.()}>
            Discard &amp; Leave
          </button>
          <button className="settings-revert-btn" onClick={() => blocker.reset?.()}>
            Keep Editing
          </button>
        </div>
      </Modal>

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
        <button
          className={`settings-save-btn${isDirty ? ' dirty' : ''}`}
          onClick={handleSave}
        >
          {isDirty ? '● Save Changes' : 'Save'}
        </button>
        <button className="settings-revert-btn" onClick={handleRevert}>Revert to Defaults</button>
      </div>
    </div>
  );
}

export default Settings;
