import { defineManifest } from '@crxjs/vite-plugin';
import { version, description } from './package.json';

const title = 'Svelte DevTools';
const names = {
  build: title,
  serve: `[HMR] ${title}`,
};

export default defineManifest(async (env) => ({
  manifest_version: 3,
  name: names[env.command],
  version,
  description,
  // https://stackoverflow.com/a/60184542/4156752
  icons: {
    16: 'icons/16.png', // used as the favicon for an extension's pages
    32: 'icons/32.png',
    48: 'icons/48.png', // used in the extensions management page (chrome://extensions)
    128: 'icons/128.png', // used during installation and by the Chrome Web Store
  },
  background: {
    service_worker: 'src/background/index.js',
    type: 'module',
  },
  devtools_page: 'src/devtools/index.html',
  homepage_url: 'https://github.com/D3strukt0r/svelte-devtools',
  host_permissions: [
    '*://*/*',
  ],
  permissions: [
    'tabs',
  ],
  web_accessible_resources: [{
    resources: ['src/web-accessible-resources/index.js'],
    matches: ['*://*/*'],
  }],
}));
