const rootDir = process.cwd();

module.exports = {
  rootDir,
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node', 'mdx'],
  moduleNameMapper: {
    '\\.module\\.scss$': 'identity-obj-proxy',
    '^lodash-es(.*)': '<rootDir>/node_modules/lodash$1',
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  modulePathIgnorePatterns: ['<rootDir>/dist', '<rootDir>/build'],
  preset: 'ts-jest/presets/default',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  transformIgnorePatterns: ['/node_modules/(?!monday-ui-react-core)'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.(tx|tsx)$': 'ts-jest',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|svg)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
};
