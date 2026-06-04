import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

const coreRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

const scripts = [
  { name: "components metadata", cmd: "tsx src/scripts/generate-metadata.ts" },
  { name: "examples", cmd: "tsx src/scripts/extract-examples.ts" },
  { name: "accessibility", cmd: "tsx src/scripts/extract-accessibility.ts" }
];

for (const script of scripts) {
  console.log(`\n--- Building ${script.name} ---`);
  try {
    execSync(script.cmd, { cwd: coreRoot, stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to build ${script.name}`);
    process.exit(1);
  }
}

console.log("\nAll metadata builds complete");
