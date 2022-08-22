#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { publishedComponents, publishedTSComponents } = require("../webpack/published-components");

function buildComponentExport(name, path) {
  return `export { default as ${name} } from "${path}";`;
}

function convertExportsToFile(exportsArray, fileName) {
  const content = exportsArray.join("\n");
  fs.writeFileSync(path.join(__dirname, `../dist/${fileName}`), content, "utf8");
}

function buildComponentsEsmFile() {
  const exports = Object.keys(publishedComponents).map(componentName =>
    buildComponentExport(componentName, `./${componentName}`)
  );
  convertExportsToFile(exports, "esm.js");
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

function buildComponentsTypesIndexFile() {
  const exports = Object.entries(publishedTSComponents).map(([name, path]) =>
    buildComponentExport(name, `./types/${path}`)
  );
  convertExportsToFile(exports, "types.d.ts");
}

buildComponentsEsmFile();
buildIconsEsmFile();
buildComponentsTypesIndexFile();
