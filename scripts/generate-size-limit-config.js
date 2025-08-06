const fs = require("fs");
const path = require("path");

const rootPath = process.cwd();
const distIndexPath = path.join(rootPath, "packages/core/dist/src/index.js");
const sizeLimitConfigPath = path.join(rootPath, ".size-limit.js");

function generateSizeLimitConfig() {
  if (!fs.existsSync(distIndexPath)) {
    console.log(`dist index file not found at ${distIndexPath}, writing empty size-limit config.`);
    fs.writeFileSync(sizeLimitConfigPath, "module.exports = [];");
    return;
  }

  const indexContent = fs.readFileSync(distIndexPath, "utf8");
  const exportRegex = /export\{.*?\}from"(\.\/components\/[^"]+\.js)";/g;

  let match;
  const components = [];
  while ((match = exportRegex.exec(indexContent)) !== null) {
    const relativePath = match[1];
    const fullPath = path.join("packages/core/dist/src/", relativePath).replace(/\\/g, "/");
    components.push({
      path: fullPath,
      webpack: false
    });
  }

  const configContent = `module.exports = ${JSON.stringify(components, null, 2)};`;
  fs.writeFileSync(sizeLimitConfigPath, configContent);
  console.log(`Generated .size-limit.js with ${components.length} components.`);
}

generateSizeLimitConfig();
