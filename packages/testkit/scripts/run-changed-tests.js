#!/usr/bin/env node

const { execSync, execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

function getChangedFiles() {
  try {
    // Get committed changes since origin/master
    const committedOutput = execSync("git diff --name-only origin/master...HEAD", {
      encoding: "utf8",
      cwd: path.join(__dirname, "../../../")
    });

    // Get working directory changes (unstaged)
    const workingOutput = execSync("git diff --name-only", {
      encoding: "utf8",
      cwd: path.join(__dirname, "../../../")
    });

    // Get staged changes
    const stagedOutput = execSync("git diff --name-only --cached", {
      encoding: "utf8",
      cwd: path.join(__dirname, "../../../")
    });

    // Combine all changes and remove duplicates
    const allChanges = [
      ...committedOutput.split("\n"),
      ...workingOutput.split("\n"),
      ...stagedOutput.split("\n")
    ].filter(Boolean);

    const uniqueChanges = [...new Set(allChanges)];

    return uniqueChanges.filter(
      file =>
        (file.startsWith("packages/core/src/components/") || file.startsWith("packages/testkit/components/")) &&
        (file.endsWith(".tsx") || file.endsWith(".ts")) &&
        !file.includes("__tests__") &&
        !file.includes(".stories.")
    );
  } catch (error) {
    console.log("Could not get changed files, skipping tests");
    return [];
  }
}

function mapComponentsToTests(changedFiles) {
  const testFiles = [];
  const testDir = path.join(__dirname, "../__tests__");

  console.log("Checking for corresponding tests in testkit package:");

  changedFiles.forEach(file => {
    let componentName;

    if (file.startsWith("packages/core/src/components/")) {
      // Extract component name from path like packages/core/src/components/Button/Button.tsx
      const pathParts = file.split("/");
      const componentIndex = pathParts.findIndex(part => part === "components");
      if (componentIndex !== -1 && componentIndex + 1 < pathParts.length) {
        componentName = pathParts[componentIndex + 1];
      }
    } else if (file.startsWith("packages/testkit/components/")) {
      // Extract component name from path like packages/testkit/components/Text.ts
      const fileName = path.basename(file);
      componentName = fileName.replace(/\.(ts|tsx)$/, "");
    }

    if (componentName) {
      const testFile = path.join(testDir, `${componentName}.test.ts`);

      if (fs.existsSync(testFile)) {
        testFiles.push(testFile);
        console.log(`  ✓ ${componentName} - test file found`);
      } else {
        console.log(`  ✗ ${componentName} - no corresponding test file in testkit`);
      }
    }
  });

  return testFiles;
}

function runTests(testFiles) {
  if (testFiles.length === 0) {
    console.log("No test files found for changed components, skipping tests");
    return;
  }

  console.log(`Running ${testFiles.length} test files for changed components:`);
  testFiles.forEach(file => console.log(`  - ${path.basename(file)}`));

  const testFileArgs = testFiles.map(file => path.relative(process.cwd(), file));
  const testFileNames = testFileArgs.map(file => path.basename(file));

  console.log(`\nExecuting: npx playwright test`, testFileNames);
  execFileSync("npx", ["playwright", "test", ...testFileArgs], { stdio: "inherit" });
}

// Main execution
const changedFiles = getChangedFiles();
console.log(
  `Found ${changedFiles.length} changed component files in packages/core/src/components/ and packages/testkit/components/`
);

if (changedFiles.length > 0) {
  changedFiles.forEach(file => console.log(`  - ${file}`));
  console.log("");

  const testFiles = mapComponentsToTests(changedFiles);

  if (testFiles.length > 0) {
    console.log(`\nFound ${testFiles.length} corresponding test files to run.`);
  } else {
    console.log("\nNo corresponding test files found in testkit package.");
  }

  runTests(testFiles);
} else {
  console.log(
    "No changed component files detected in packages/core/src/components/ or packages/testkit/components/, skipping tests"
  );
}
