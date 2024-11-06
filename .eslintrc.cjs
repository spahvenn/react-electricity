// .eslintrc.cjs
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended' // Enables eslint-plugin-prettier and eslint-config-prettier
  ],
  plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'prettier'],
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Customize your rules
    'prettier/prettier': 'error', // Show prettier errors as ESLint errors
    'react/react-in-jsx-scope': 'off', // Vite does not require React to be in scope
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Optional: turn off explicit return types
  },
};