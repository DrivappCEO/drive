module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'prettier',
    'emotion',
    'react-hooks',
  ],
  rules: {
    'no-tabs': 'off',
    indent: [2, 'tab'],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', 'avoid-escape'],
    semi: ['error', 'always'],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 1,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 1,
    'react-native/sort-styles': [
      'error',
      'asc',
      {
        ignoreClassNames: false,
        ignoreStyleProperties: false,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    'react/jsx-uses-vars': 1,
    'react/jsx-uses-react': 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
  },
};
