module.exports = {
  extends: ['prettier'],
  globals: {
    __DEV__: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    semi: [1, 'always'],
    'no-use-before-define': 'off',
    'max-len': 'off',
    'react/jsx-no-target-blank': 'off',
    'space-before-function-paren': 'off',
    'react/no-did-mount-set-state': 'off',
    'no-unused-vars': 'off',
  },
};
