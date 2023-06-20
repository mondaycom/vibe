module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['dest'],
  globals: {
    'ts-jest': {
      diagnostics: 'warn',
    },
  },
}
