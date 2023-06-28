#!/usr/bin/env node

const { createFoldersIfNotExist, buildComponentsTypesIndexFile } = require("./build-utils");
createFoldersIfNotExist();

buildComponentsTypesIndexFile();
