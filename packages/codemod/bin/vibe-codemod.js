#!/usr/bin/env node
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { execSync } from "child_process";
import * as globby from "globby";
import * as fs from "fs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import readlineSync from "readline-sync";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const transformationsDir = resolve(__dirname, "../transformations/core/v2-to-v3");

const argv = yargs(hideBin(process.argv))
  .option("target", {
    alias: "t",
    type: "string",
    description: "Target directory to apply transformations",
    default: process.cwd()
  })
  .option("extended-extensions", {
    alias: "x",
    type: "boolean",
    description: "Include js, jsx, ts, tsx extensions; otherwise use jsx, tsx by default",
    default: false
  })
  .help().argv;

const targetDir = resolve(argv.target);
const logFile = resolve(targetDir, "codemod.log");
const extensions = argv["extended-extensions"] ? "js,jsx,ts,tsx" : "jsx,tsx";

function isGitClean() {
  try {
    const status = execSync("git status --porcelain", { encoding: "utf-8" }).trim();
    return status === "";
  } catch (error) {
    console.error("Error checking Git status:", error.message);
    process.exit(1);
  }
}

if (!isGitClean()) {
  console.warn(
    "Warning: Your Git working directory is not clean. It is recommended to only run this script with a clean working directory."
  );

  const proceed = readlineSync.question("Do you want to proceed anyway? (y/N) ");
  if (proceed.toLowerCase() !== "y") {
    console.log("Operation cancelled.");
    process.exit(1);
  }
}

if (!fs.existsSync(transformationsDir)) {
  console.error(`Transformations directory does not exist: ${transformationsDir}`);
  process.exit(1);
}

const transformationFiles = globby.sync(`${transformationsDir}/*.ts`);
if (transformationFiles.length === 0) {
  console.error("No transformation files found. Please check the directory path.");
  process.exit(1);
}

const filesToProcessLast = [
  resolve(transformationsDir, "type-imports-migration.ts"),
  resolve(transformationsDir, "packages-rename-migration.ts")
];

const orderedTransformationFiles = [
  ...transformationFiles.filter(file => !filesToProcessLast.includes(file)),
  ...filesToProcessLast
];

orderedTransformationFiles.forEach(transform => {
  const command = `jscodeshift -t "${transform}" --extensions=${extensions} --ignore-pattern="node_modules" --ignore-pattern="**/*.d.ts" --verbose=2 "${targetDir}" >> "${logFile}"`;
  try {
    console.log(`Running transformation: ${transform}`);
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error(`Error applying transformation: ${transform}`, error.message);
  }
});

try {
  const changedFiles = execSync("git diff --name-only", { encoding: "utf-8" }).trim();
  if (changedFiles) {
    const prettierCommand = `npx prettier --write ${changedFiles.split("\n").join(" ")}`;
    execSync(prettierCommand, { stdio: "inherit" });
  } else {
    console.log("No files to format.");
  }
} catch (error) {
  console.error("Error running Prettier:", error.message);
}
