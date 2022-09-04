#!/usr/bin/env node
const { createFoldersIfNotExist, buildTSComponentsEsmFile } = require("./build-utils");

createFoldersIfNotExist();
buildTSComponentsEsmFile();
