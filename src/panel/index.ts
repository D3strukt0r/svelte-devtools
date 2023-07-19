import './index.css';
import App from './App.svelte';

function setDarkMode(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}

setDarkMode(chrome.devtools.panels.themeName);
if (chrome.devtools.panels.onThemeChanged) {
  chrome.devtools.panels.onThemeChanged.addListener(setDarkMode);
}

const app = new App({
  target: document.body,
});

export default app;
