/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

const JEST_END_FILES = process.env.TEST_END_FILES || "jest";

module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["node_modules/", "src/components/Icon/Icons/"],
  globals: {
    extensionsToTreatAsEsm: [".ts", ".tsx", ".js", ".jsx"],
    "ts-jest": {
      useESM: true
    }
  },
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node", "mdx"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy"
  },
  modulePaths: ["<rootDir>/src"],
  preset: "ts-jest/presets/default",
  roots: ["<rootDir>"],
  setupFiles: ["<rootDir>/jest.init.js"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  snapshotSerializers: [require.resolve("snapshot-diff/serializer.js")],
  testEnvironment: "jsdom",
  testMatch: [`**/__tests__/**/*.${JEST_END_FILES}.[jt]s?(x)`],
  transform: {
    "^.+\\.[j]sx?$": "babel-jest",
    "^.+\\.mdx?$": "@storybook/addon-docs/jest-transform-mdx",
    "^.+\\.(tx|tsx)$": "ts-jest",
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|svg)$":
      "<rootDir>/__mocks__/fileMock.js"
  },
  transformIgnorePatterns: ["node_modules/(?!monday-ui-style)/"]
};
