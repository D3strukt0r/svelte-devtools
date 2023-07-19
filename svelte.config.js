import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: [
    vitePreprocess(),
    // {
    //   markup: input => {
    //     const code = input.content
    //       .replace(/(>|})\s+(?![^]*?<\/(?:script|style)>|[^<]*?>|[^{]*?})/g, '$1')
    //       .replace(/(?<!<[^>]*?|{[^}]*?)\s+(<|{)(?![^]*<\/(?:script|style)>)/g, '$1')
    //     return { code }
    //   }
    // },
  ],
  onwarn: (warning, handler) => {
    if (
      [
        'a11y-click-events-have-key-events',
        'a11y-mouse-events-have-key-events',
        'a11y-no-static-element-interactions',
        'a11y-no-noninteractive-element-interactions',
      ].includes(warning.code)
    ) {
      return;
    }
    handler(warning);
  },
};
