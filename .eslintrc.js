module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  overrides: [
    {
      files: ['**/*.test.js', '**/*.spec.js'],
      env: {
        jest: true,
      },
      globals: {
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
      },
    },
    {
      files: ['**/react-interview.js'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      extends: ['airbnb'],
      rules: {
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-restricted-syntax': 'off',
    'no-prototype-builtins': 'off',
    'no-param-reassign': 'off',
    'no-multi-assign': 'off',
    'no-use-before-define': 'off',
    'func-names': 'off',
    'no-plusplus': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};
