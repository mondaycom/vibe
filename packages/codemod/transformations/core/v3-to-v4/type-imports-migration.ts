import { wrap, getImports } from "../../../src/utils";
import { NEW_CORE_IMPORT_PATH } from "../../../src/consts";
import { TransformationContext } from "../../../types";

const REMOVED_TYPE_IMPORTS = ["VibeComponent", "withStaticProps", "withStaticPropsWithoutForwardRef"];

/**
 * Type import migrations for v3 to v4:
 * 1. Remove VibeComponent type import (use forwardRef inference instead)
 * 2. Remove withStaticProps utility import
 * 3. Remove withStaticPropsWithoutForwardRef utility import
 */
function transform({ j, root }: TransformationContext) {
  const coreImports = getImports(root, NEW_CORE_IMPORT_PATH);

  coreImports.forEach(importDecl => {
    const specifiers = importDecl.node.specifiers;
    if (!specifiers) return;

    // Filter out removed type imports
    const remaining = specifiers.filter(specifier => {
      if (specifier.type === "ImportSpecifier" && specifier.imported.type === "Identifier") {
        return !REMOVED_TYPE_IMPORTS.includes(specifier.imported.name);
      }
      return true;
    });

    if (remaining.length === 0) {
      // All specifiers removed — remove the entire import declaration
      j(importDecl).remove();
    } else if (remaining.length < specifiers.length) {
      // Some specifiers removed — update the declaration
      importDecl.node.specifiers = remaining;
    }
  });

  // Also check @vibe/shared imports
  const sharedImports = getImports(root, "@vibe/shared");

  sharedImports.forEach(importDecl => {
    const specifiers = importDecl.node.specifiers;
    if (!specifiers) return;

    const remaining = specifiers.filter(specifier => {
      if (specifier.type === "ImportSpecifier" && specifier.imported.type === "Identifier") {
        return !REMOVED_TYPE_IMPORTS.includes(specifier.imported.name);
      }
      return true;
    });

    if (remaining.length === 0) {
      j(importDecl).remove();
    } else if (remaining.length < specifiers.length) {
      importDecl.node.specifiers = remaining;
    }
  });
}

export default wrap(transform);
