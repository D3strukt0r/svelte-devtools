import { defineManifest } from '@crxjs/vite-plugin';
import { version, description } from './package.json';

const names = {
  build: 'Svelte DevTools',
  serve: `[INTERNAL] Svelte DevTools`,
};

export default defineManifest(async (env) => ({
  manifest_version: 3,
  name: names[env.command],
  version,
  description,
  icons: {
    16: 'icon-16.png',
    24: 'icon-24.png',
    48: 'icon-48.png',
    96: 'icon-96.png',
    128: 'icon-128.png',
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
