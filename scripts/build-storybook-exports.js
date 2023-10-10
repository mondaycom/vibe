#!/usr/bin/env node

const { createFoldersIfNotExist, buildStorybookComponentsIndexFile } = require("./build-utils");

createFoldersIfNotExist();

buildStorybookComponentsIndexFile();
