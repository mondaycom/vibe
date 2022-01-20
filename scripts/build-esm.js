#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { publishedComponents } = require("../webpack/published-components");

const content = Object.keys(publishedComponents)
  .map(componentName => `export { default as ${componentName} } from "./${componentName}";`)
  .join("\n");

fs.writeFileSync(path.join(__dirname, "../dist/esm.js"), content, "utf8");
