#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { publishedComponents } = require("../webpack/published-components");

function buildComponentsEsmFile() {
  const content = Object.keys(publishedComponents)
    .map(componentName => `export { default as ${componentName} } from "./${componentName}";`)
    .join("\n");

  fs.writeFileSync(path.join(__dirname, "../dist/esm.js"), content, "utf8");
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

buildComponentsEsmFile();
buildIconsEsmFile();
