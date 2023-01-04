module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'eslint-config-airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
    'import/prefer-default-export': 0,
  },
};
