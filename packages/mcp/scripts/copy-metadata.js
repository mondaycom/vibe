import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve project root (packages/mcp/)
const projectRoot = path.resolve(__dirname, "..");

let resolvedSourcePath;
try {
  // Resolve '@vibe/core/meta' to find the actual metadata file path.
  // This relies on Node.js resolution, similar to how the original import worked.
  // It needs @vibe/core to be available in node_modules (as a devDependency).
  resolvedSourcePath = require.resolve("@vibe/core/meta", { paths: [projectRoot] });
} catch (e) {
  console.error("Error: Could not resolve '@vibe/core/meta'.");
  console.error("Ensure '@vibe/core' is listed in devDependencies, installed, and properly exports './meta'.");
  console.error("Original error:", e.message);
  process.exit(1);
}

const srcDir = path.resolve(projectRoot, "src");
const destPath = path.resolve(srcDir, "vibe-metadata.json");

try {
  // Ensure the destination directory exists
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir, { recursive: true });
  }

  // Copy the file to src to later be copied to dist
  fs.copyFileSync(resolvedSourcePath, destPath);
} catch (err) {
  console.error(`Error copying metadata from '${resolvedSourcePath}' to '${destPath}':`, err);
  process.exit(1);
}
