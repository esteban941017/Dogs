module.exports = {
  env: {
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: { react: { version: 'detect' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': false,
    'no-unused-vars': false,
    'react/prop-types': false,
    'no-unsafe-finally': false,
    'no-unused-vars': false,
    'react/jsx-key': false,
  },
};
