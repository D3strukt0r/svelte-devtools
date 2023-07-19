import path from 'path';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { crx } from '@crxjs/vite-plugin';
import manifest from './manifest.config';

export default defineConfig({
  plugins: [
    svelte(),
    crx({ manifest }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      external: ['chrome'],
      input: {
        panel: 'src/panel/index.html',
        // 'web-accessible-resources': 'src/web-accessible-resources/index.js',
      },
      //      output: {
      //        banner: (chunk) => {
      //          if (chunk.name === 'web-accessible-resources') {
      //            return `if (!window.tag) {
      //              window.tag = document.createElement('script')
      //              window.tag.text = \``;
      //          }
      //          return '';
      //        },
      //        footer: (chunk) => {
      //          if (chunk.name === 'web-accessible-resources') {
      //            return `\`
      //  if (window.sessionStorage.SvelteDevToolsProfilerEnabled === "true") window.tag.text = window.tag.text.replace('let profilerEnabled = false;', '\$&\\nstartProfiler();')
      //  document.children[0].append(window.tag)
      //  const sendMessage = chrome.runtime.sendMessage
      //  const postMessage = window.postMessage.bind(window)
      //  chrome.runtime.onMessage.addListener((message, sender) => {
      //    const fromBackground = sender && sender.id === chrome.runtime.id
      //    if (!fromBackground) {
      //      console.error('Message from unexpected sender', sender, message)
      //      return
      //    }
      //    switch (message.type) {
      //      case 'startProfiler':
      //        window.sessionStorage.SvelteDevToolsProfilerEnabled = "true"
      //        break
      //      case 'stopProfiler':
      //        // fallthrough
      //      case 'clear':
      //        delete window.sessionStorage.SvelteDevToolsProfilerEnabled
      //        break
      //    }
      //    postMessage(message)
      //  })
      //  window.addEventListener(
      //    'message',
      //    e => e.source == window && sendMessage(e.data),
      //    false
      //  )
      //  window.addEventListener('unload', () => sendMessage({ type: 'clear' }))
      // }`;
      //          }
      //          return '';
      //        },
      //      }
    },
  },
});
