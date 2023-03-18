module.exports = {
  testMatch: ['**/__tests__/**/*.test.js'],
  modulePaths: ['<rootDir>/src'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
