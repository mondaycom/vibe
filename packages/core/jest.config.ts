import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["node_modules/", "src/components/Icon/Icons/"],
  globals: {
    extensionsToTreatAsEsm: [".ts", ".tsx", ".js", ".jsx"]
  },
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node", "mdx"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy"
  },
  modulePaths: ["<rootDir>/src"],
  preset: "ts-jest/presets/default",
  roots: ["<rootDir>"],
  setupFiles: ["<rootDir>/jest.init.js"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  snapshotSerializers: [require.resolve("snapshot-diff/serializer.js")],
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/__tests__/**/*.test.[jt]s?(x)"],
  transform: {
    "^.+\\.[j]sx?$": "babel-jest",
    "^.+\\.mdx?$": "@storybook/addon-docs/jest-transform-mdx",
    "^.+\\.(tx|tsx)$": [
      "ts-jest",
      {
        useESM: true
      }
    ],
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|svg)$":
      "<rootDir>/__mocks__/fileMock.js"
  },
  transformIgnorePatterns: ["node_modules/(?!monday-ui-style)/"]
};

export default config;
