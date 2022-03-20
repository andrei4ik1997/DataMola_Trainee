module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'max-classes-per-file': ['error', { ignoreExpressions: true, max: 5 }],
    'no-use-before-define': ['error', { classes: false }],
    'no-underscore-dangle': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': ['error', 'after'],
    'max-len': ['error', { code: 150 }],
  },
};
