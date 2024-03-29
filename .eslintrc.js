module.exports = {
  env: {
    browser: false,
    es2021: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    camelcase: 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'new-cap': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
  },
};
