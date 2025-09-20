import { wrap, getImports, findImportsThatIncludesSpecifier, renameImportPath } from "../../../src/utils";
import { NEW_CORE_IMPORT_PATH, NEW_CORE_NEXT_IMPORT_PATH } from "../../../src/consts";
import { TransformationContext } from "../../../types";

/**
 * Changes Dropdown imports from '@vibe/core' to '@vibe/core/next'
 * Only affects imports that include the Dropdown component
 */
function transform({ j, root }: TransformationContext) {
  const coreImports = getImports(root, NEW_CORE_IMPORT_PATH);
  const dropdownImports = findImportsThatIncludesSpecifier(j, coreImports, "Dropdown");

  dropdownImports.forEach(importPath => {
    renameImportPath(importPath, NEW_CORE_NEXT_IMPORT_PATH);
  });
}

export default wrap(transform);
