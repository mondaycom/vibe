import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve project root (packages/mcp/)
const projectRoot = path.resolve(__dirname, "..");

// Default empty metadata content
const defaultMetadata = JSON.stringify([]);
let resolvedSourcePath;
let usingDefault = false;

try {
  // Resolve '@vibe/core/meta' to find the actual metadata file path.
  // This relies on Node.js resolution, similar to how the original import worked.
  resolvedSourcePath = require.resolve("@vibe/core/meta", { paths: [projectRoot] });
  console.log(`Found metadata at: ${resolvedSourcePath}`);
} catch (e) {
  console.error("Could not resolve '@vibe/core/meta' through normal require resolution.");
  
  // Try to find it manually in the typical locations
  const possiblePaths = [
    // Within monorepo
    path.resolve(projectRoot, "../core/dist/metadata.json"),
    // From node_modules
    path.resolve(projectRoot, "../../node_modules/@vibe/core/dist/metadata.json"),
    // From sibling node_modules
    path.resolve(projectRoot, "../node_modules/@vibe/core/dist/metadata.json"),
    // From within node_modules
    path.resolve(projectRoot, "node_modules/@vibe/core/dist/metadata.json"),
  ];
  
  for (const candidatePath of possiblePaths) {
    if (fs.existsSync(candidatePath)) {
      resolvedSourcePath = candidatePath;
      console.log(`Found metadata file at: ${resolvedSourcePath}`);
      break;
    }
  }
  
  if (!resolvedSourcePath) {
    console.log("Metadata file not found. This is normal during development or in CI.");
    console.log("Creating empty metadata file as a fallback.");
    usingDefault = true;
  }
}

const srcDir = path.resolve(projectRoot, "src");
const destPath = path.resolve(srcDir, "vibe-metadata.json");

try {
  // Ensure the destination directory exists
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir, { recursive: true });
  }

  // Either copy the file or create an empty one
  if (usingDefault) {
    fs.writeFileSync(destPath, defaultMetadata);
    console.log(`Created empty metadata file at: ${destPath}`);
  } else {
    fs.copyFileSync(resolvedSourcePath, destPath);
    console.log(`Copied metadata from: ${resolvedSourcePath} to: ${destPath}`);
  }
} catch (err) {
  console.error(`Error creating/copying metadata to '${destPath}':`, err);
  process.exit(1);
}
