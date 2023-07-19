import logoDarkUrl from './svelte-logo-dark.svg';
import logoLightUrl from './svelte-logo-light.svg';

chrome.devtools.panels.create(
  'Svelte',
  chrome.devtools.panels.themeName === 'dark' ? logoDarkUrl : logoLightUrl,
  chrome.runtime.getURL('/src/panel/index.html'),
  (panel) => {
    panel.onShown.addListener(() => {
      chrome.devtools.inspectedWindow.eval(
        'if (window.__svelte_devtools_select_element) window.__svelte_devtools_select_element($0)',
        (result, err) => err && console.error(err)
      );
    });
  }
);
