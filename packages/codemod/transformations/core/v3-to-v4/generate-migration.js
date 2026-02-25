#!/usr/bin/env node

/**
 * Helper script to generate new migration files for v3-to-v4
 *
 * Usage:
 *   node generate-migration.js ComponentName
 *
 * This will create:
 *   - ComponentName-component-migration.ts
 *   - __tests__/ComponentName-component-migration.test.ts
 */

const fs = require("fs");
const path = require("path");

const componentName = process.argv[2];

if (!componentName) {
  console.error("Please provide a component name: node generate-migration.js ComponentName");
  process.exit(1);
}

const migrationTemplate = `import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  migratePropsNames
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * ${componentName} component migration for v4
 *
 * Breaking changes:
 * 1. TODO: Document the breaking changes here
 * 2. TODO: Add more changes as they are identified
 */
function transform({ j, root, filePath }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "${componentName}");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    // TODO: Implement the actual migration logic here

    // Example: Rename props
    const propRenames: Record<string, string> = {
      // "oldPropName": "newPropName",
    };

    if (Object.keys(propRenames).length > 0) {
      migratePropsNames(j, elementPath, filePath, componentName, propRenames);
    }

    // Example: Remove deprecated props
    // TODO: Add deprecated prop removal logic if needed

    // Example: Add required props with defaults
    // TODO: Add required prop addition logic if needed
  });
}

export default wrap(transform);
`;

const testTemplate = `import { defineInlineTest } from "jscodeshift/dist/testUtils";
import transform from "../${componentName}-component-migration";

describe("v3-to-v4 ${componentName} Migration", () => {
  // TODO: Add actual test cases based on the breaking changes

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    \`
import { ${componentName} } from "@vibe/core";
<${componentName}>Content</${componentName}>
    \`,
    \`
import { ${componentName} } from "@vibe/core";
<${componentName}>Content</${componentName}>
    \`,
    "should handle basic ${componentName} component"
  );

  // TODO: Add more test cases
  /*
  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    \`
import { ${componentName} } from "@vibe/core";
<${componentName} oldPropName="value">Content</${componentName}>
    \`,
    \`
import { ${componentName} } from "@vibe/core";
<${componentName} newPropName="value">Content</${componentName}>
    \`,
    "should rename oldPropName to newPropName"
  );
  */
});
`;

// Write the migration file
const migrationPath = path.join(__dirname, `${componentName}-component-migration.ts`);
const testPath = path.join(__dirname, "__tests__", `${componentName}-component-migration.test.ts`);

try {
  fs.writeFileSync(migrationPath, migrationTemplate);
  console.log(`✅ Created migration file: ${migrationPath}`);

  fs.writeFileSync(testPath, testTemplate);
  console.log(`✅ Created test file: ${testPath}`);

  console.log(`\n📝 Next steps:`);
  console.log(`1. Edit ${migrationPath} to implement the actual migration logic`);
  console.log(`2. Edit ${testPath} to add comprehensive test cases`);
  console.log(`3. Update the main VIBE4_CHANGELOG.md with the breaking changes`);
  console.log(`4. Run tests: yarn workspace @vibe/codemod test ${componentName}-component-migration`);
} catch (error) {
  console.error("Error creating files:", error);
  process.exit(1);
}
