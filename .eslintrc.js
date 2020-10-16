module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'import',
    'jsx-a11y',
    'react',
    'graphql',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-deprecated': 'warn',
    'no-console': [
      'error',
    ],
    'react/jsx-filename-extension': 'off',
  },
}
