module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'plugin:svelte/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte']
  },
  plugins: ['import', '@typescript-eslint'],
  rules: {
    'max-len': ['error', { code: 120 }], // Max 120 characters wide
    indent: ['error', 2], // Use indentation of 2
    semi: ['error', 'always'], // Always add ;
    'no-restricted-syntax': ['off', { selector: 'ForOfStatement' }], // Allow for-of loops
    'no-underscore-dangle': ['error', { // Allow certain dangles "_X"
      'allow': [
        '_shouldUseCapture',
        '__svelte_devtools_select_element',
        '__svelte_devtools_inject_state',
        '__listeners',
      ]
    }],
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}], // Allow imports from dev-dependencies
    'no-unused-vars': 'off', // Turn off unused vars, because it doesn't work with typescript ...
    '@typescript-eslint/no-unused-vars': ['error'], // ... and use the typescript version instead
    'no-shadow': 'off', // Turn off shadowing, because it doesn't work with typescript ...
    '@typescript-eslint/no-shadow': ['error'], // ... and use the typescript version instead
  },
  settings: {
    'import/resolver': {
      typescript: {},
      alias: [
        ['@', './src'],
      ],
    },
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
    webextensions: true,
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ]
};
