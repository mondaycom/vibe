#!/usr/bin/env node

const {
  createFoldersIfNotExist,
  buildComponentsEsmFile,
  buildTSComponentsEsmFile,
  buildStorybookComponentsEsmFile,
  buildIconsEsmFile,
  buildComponentsTypesIndexFile
} = require("./build-utils");

createFoldersIfNotExist();
buildComponentsEsmFile();
buildTSComponentsEsmFile();
buildStorybookComponentsEsmFile();
buildIconsEsmFile();
// we create new d.ts index file but still not give reference to it in our package.json file
// until we finish to migrate all the components to typescript
buildComponentsTypesIndexFile();
