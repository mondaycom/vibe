const fs = require("fs");
const path = require("path");

const rootPath = process.cwd();
const distIndexPath = path.join(rootPath, "packages/core/dist/src/index.js");
const componentsPath = path.join(rootPath, "packages/components");
const sizeLimitConfigPath = path.join(rootPath, ".size-limit.js");

function generateSizeLimitConfig() {
  const allComponents = [];

  // Process core package components
  if (fs.existsSync(distIndexPath)) {
    const indexContent = fs.readFileSync(distIndexPath, "utf8");
    const exportRegex = /export\{.*?\}from"(\.\/components\/[^"]+\.js)";/g;

    let match;
    while ((match = exportRegex.exec(indexContent)) !== null) {
      const relativePath = match[1];
      const fullPath = path.join("packages/core/dist/src/", relativePath).replace(/\\/g, "/");
      allComponents.push({
        path: fullPath
      });
    }
    console.log(`Found ${allComponents.length} core components.`);
  } else {
    console.log(`Core dist index file not found at ${distIndexPath}.`);
  }

  // Process component packages
  if (fs.existsSync(componentsPath)) {
    const componentPackages = fs
      .readdirSync(componentsPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    for (const packageName of componentPackages) {
      const packageDistPath = path.join(componentsPath, packageName, "dist/index.js");
      if (fs.existsSync(packageDistPath)) {
        const relativePath = path.join("packages/components", packageName, "dist/index.js").replace(/\\/g, "/");
        allComponents.push({
          path: relativePath
        });
        console.log(`Added component package: ${packageName}`);
      } else {
        console.log(`Dist file not found for component package: ${packageName}`);
      }
    }
  } else {
    console.log(`Components directory not found at ${componentsPath}.`);
  }

  if (allComponents.length === 0) {
    console.log("No components found, writing empty size-limit config.");
    fs.writeFileSync(sizeLimitConfigPath, "module.exports = [];");
    return;
  }

  const configContent = `module.exports = ${JSON.stringify(allComponents, null, 2)};`;
  fs.writeFileSync(sizeLimitConfigPath, configContent);
  console.log(`Generated .size-limit.js with ${allComponents.length} total components (core + component packages).`);
}

generateSizeLimitConfig();
