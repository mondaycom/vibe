#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { publishedComponents, publishedTSComponents } = require("../webpack/published-components");

function createFoldersIfNotExist() {
  // if dist is not exist let's create it
  const distDir = path.join(__dirname, `../dist/`);

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }

  // if dist/icons not exist let's create it
  const iconsDir = path.join(distDir, `/icons`);
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir);
  }
}

function buildComponentExport(name, path) {
  return `export { default as ${name} } from "${path}";`;
}

function convertExportsToFile(exportsArray, fileName) {
  const content = exportsArray.join("\n");
  fs.writeFileSync(path.join(__dirname, `../dist/${fileName}`), content, "utf8");
}

function buildComponentsEsmFileByMap(componentsMap, fileName) {
  const exports = Object.keys(componentsMap).map(componentName =>
    buildComponentExport(componentName, `./${componentName}`)
  );
  convertExportsToFile(exports, fileName);
}

function buildComponentsEsmFile() {
  buildComponentsEsmFileByMap(publishedComponents, "esm.js");
}

function buildTSComponentsEsmFile() {
  buildComponentsEsmFileByMap(publishedTSComponents, "ts-esm.js");
}

function buildIconsEsmFile() {
  const icons = fs.readdirSync(path.join(__dirname, "../dist/icons")).filter(file => file !== "index.js");
  const iconsContent = icons
    .map(name => {
      const nameWithoutExtention = name.split(".")[0];
      return `export { default as ${nameWithoutExtention} } from "./${nameWithoutExtention}";`;
    })
    .join("\n");
  fs.writeFileSync(path.join(__dirname, "../dist/icons/index.js"), iconsContent, "utf8");
}

// eslint-disable-next-line no-unused-vars
function buildComponentsTypesIndexFile() {
  const exports = Object.entries(publishedTSComponents).map(([name, path]) =>
    buildComponentExport(name, `./types/${path}`)
  );
  convertExportsToFile(exports, "types.d.ts");
}

createFoldersIfNotExist();
buildComponentsEsmFile();
buildTSComponentsEsmFile();
buildIconsEsmFile();
// we create new d.ts index file but still not give reference to it
// until we finish to migrate all the components to typescript
buildComponentsTypesIndexFile();
