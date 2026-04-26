import type { Settings } from '../types';

const SETTINGS_KEY = 'cod-trivia-settings';

export const DEFAULT_SETTINGS: Settings = {
  hardMode: false,
  noAnimations: false,
  lightMode: false,
};

export function loadSettings(): Settings {
  const raw = localStorage.getItem(SETTINGS_KEY);
  if (!raw) return { ...DEFAULT_SETTINGS };
  return { ...DEFAULT_SETTINGS, ...(JSON.parse(raw) as Partial<Settings>) };
}

export function saveSettings(settings: Settings): void {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

export function applySettings(settings: Settings): void {
  document.body.classList.toggle('light-mode', settings.lightMode);
  document.body.classList.toggle('no-animations', settings.noAnimations);
}
