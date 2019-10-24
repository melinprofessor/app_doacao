module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      sourceType: 'module',
      ecmaVersion: 2018
    }
  },
  env: {
    es6: true,
    jest: true
  },
  plugins: ['react', 'react-native', 'prettier'],
  rules: {
    // React
    // "react/require-extension": "off",
    "quotes": [2, "single", { "avoidEscape": true }],
    'no-use-before-define': 'off',
    'react/forbid-prop-types': 'error',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/no-set-state': 'error',
    'react/no-string-refs': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': 'error',
    'react/require-extension': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/sort-prop-types': 'error',

    'react/static-property-placement': ['error', 'static public field'],
    'react/state-in-constructor': [2, 'always'],
    'react/wrap-multilines': [2, 'always'],

    // JSX
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-curly-spacing': ['error', 'always'],
    'react/jsx-equals-spacing': 'error',
    'react/jsx-first-prop-new-line': 'error',
    'react/jsx-handler-names': 'error',
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-indent': ['error', 2],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': ['error', { maximum: 3 }],
    'react/jsx-no-bind': 'error',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': 'error',
    'react/jsx-tag-spacing': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-newline': [
      2,
      { multiline: 'consistent', singleline: 'consistent' }
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ]
  }
};
