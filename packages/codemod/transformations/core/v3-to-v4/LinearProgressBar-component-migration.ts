import {
  wrap,
  getImports,
  getComponentNameOrAliasFromImports,
  findComponentElements
} from "../../../src/utils";
import { NEW_CORE_IMPORT_PATH } from "../../../src/consts";
import { TransformationContext } from "../../../types";

/**
 * LinearProgressBar migration for v3 to v4:
 * 1. Rename LinearProgressBar import to ProgressBar
 * 2. Rename LinearProgressBarProps type import to ProgressBarProps
 * 3. Rename JSX usage from <LinearProgressBar> to <ProgressBar>
 */
function transform({ j, root }: TransformationContext) {
  const imports = getImports(root, NEW_CORE_IMPORT_PATH);

  // Rename the component import specifier
  imports.find(j.ImportSpecifier).forEach(specifier => {
    const imported = specifier.node.imported;
    if (imported.type === "Identifier") {
      if (imported.name === "LinearProgressBar") {
        // If no local alias, rename both imported and local
        if (!specifier.node.local || specifier.node.local.name === "LinearProgressBar") {
          imported.name = "ProgressBar";
          specifier.node.local = j.identifier("ProgressBar");
        } else {
          // Has an alias — only rename the imported name
          imported.name = "ProgressBar";
        }
      }
      if (imported.name === "LinearProgressBarProps") {
        if (!specifier.node.local || specifier.node.local.name === "LinearProgressBarProps") {
          imported.name = "ProgressBarProps";
          specifier.node.local = j.identifier("ProgressBarProps");
        } else {
          imported.name = "ProgressBarProps";
        }
      }
    }
  });

  // Rename JSX elements from LinearProgressBar to ProgressBar
  const componentName = getComponentNameOrAliasFromImports(j, imports, "ProgressBar") || "LinearProgressBar";

  // Find all JSX elements named LinearProgressBar and rename them
  root.find(j.JSXIdentifier, { name: "LinearProgressBar" }).forEach(path => {
    path.node.name = "ProgressBar";
  });

  // Rename any remaining references (e.g. in type annotations)
  root.find(j.Identifier, { name: "LinearProgressBarProps" }).forEach(path => {
    // Don't rename import specifiers (already handled above)
    if (path.parent.node.type !== "ImportSpecifier") {
      path.node.name = "ProgressBarProps";
    }
  });
}

export default wrap(transform);
