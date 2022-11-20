#!/usr/bin/env node

const {
  createFoldersIfNotExist,
  buildComponentsTypesIndexFile,
  buildStorybookComponentsIndexFile
} = require("./build-utils");

createFoldersIfNotExist();

buildStorybookComponentsIndexFile();

// we create new d.ts index file but still not give reference to it in our package.json file
// until we finish to migrate all the components to typescript
buildComponentsTypesIndexFile();
