module.exports = {
  'roots': ['<rootDir>/src'],
  'collectCoverageFrom': ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts', '!src/**/index.js'],
  'setupFiles': ['react-app-polyfill/jsdom'],
  'setupFilesAfterEnv': ['<rootDir>/jest.setup.js'],
  'testMatch': ['<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  'testEnvironment': 'jest-environment-jsdom',
  'transform': {
    '^.+\\.[t|j]sx?$': 'babel-jest',
    '^.+\\.css$': '<rootDir>/config/cssTransform.js',
    '\\.(jpg|jpeg|png|gif|webp|svg|woff|woff2)$': '<rootDir>/config/fileTransform.js',
  },
  resolver: 'jest-pnp-resolver',
  'transformIgnorePatterns': ['node_modules'],
  'modulePaths': ['<rootDir>/src'],
  'moduleDirectories': ['node_modules', 'src'],
  'coverageDirectory': '<rootDir>/coverage',
  'coverageReporters': ['lcov'],
  'moduleNameMapper': {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
  'moduleFileExtensions': ['js', 'jsx', 'json', 'ts', 'tsx'],
  'watchPlugins': ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
