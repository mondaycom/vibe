import { NEW_CORE_IMPORT_PATH } from "../../../src/consts";
import { wrap, renameImportPath, getImports } from "../../../src/utils";
import { TransformationContext } from "../../../types";

// Components that remain in @vibe/core/next and should NOT be moved
const NEXT_ONLY_COMPONENTS = ["List"];

/**
 * Changes imports from '@vibe/core/next' to '@vibe/core'
 * In v4, AttentionBox, Dropdown, DatePicker, Dialog, and Modal
 * have been promoted from @vibe/core/next to @vibe/core.
 * List remains in @vibe/core/next and is left unchanged.
 */
function transform({ j, root }: TransformationContext) {
  const nextImports = getImports(root, `${NEW_CORE_IMPORT_PATH}/next`);

  nextImports.forEach(importPath => {
    const specifiers = importPath.node.specifiers;
    if (!specifiers || specifiers.length === 0) {
      // Bare import (import "@vibe/core/next") — move it
      renameImportPath(importPath, NEW_CORE_IMPORT_PATH);
      return;
    }

    // Split specifiers into promoted (move to @vibe/core) and remaining (stay in /next)
    const promoted = specifiers.filter(s => {
      if (s.type === "ImportSpecifier" && s.imported.type === "Identifier") {
        return !NEXT_ONLY_COMPONENTS.includes(s.imported.name);
      }
      return true;
    });
    const remaining = specifiers.filter(s => !promoted.includes(s));

    if (remaining.length === 0) {
      // All specifiers are promoted — just rename the path
      renameImportPath(importPath, NEW_CORE_IMPORT_PATH);
    } else if (promoted.length === 0) {
      // All specifiers stay in /next — do nothing
    } else {
      // Mixed: split into two import declarations
      importPath.node.specifiers = remaining;
      const newImport = j.importDeclaration(promoted, j.literal(NEW_CORE_IMPORT_PATH));
      j(importPath).insertBefore(newImport);
    }
  });
}

export default wrap(transform);
