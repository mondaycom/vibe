#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
// @ts-ignore
// Right now we create types only for components we converted to typescript and we wrote in published-converted-components.
// After we will convert all the source files we will change the import to webpack/published-converted-components
const { publishedComponents } = require("../webpack/published-converted-components");

function buildComponentsTypesIndexFile() {
  const content = Object.entries(publishedComponents)
    .map(([name, path]) => `export { default as ${name} } from "./types/${path}";`)
    .join("\n");

  fs.writeFileSync(path.join(__dirname, "../dist/types.d.ts"), content, "utf8");
}

buildComponentsTypesIndexFile();
