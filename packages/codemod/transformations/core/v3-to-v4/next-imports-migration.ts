import { NEW_CORE_IMPORT_PATH } from "../../../src/consts";
import { wrap, renameImportPath, getImports } from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * Changes imports from '@vibe/core/next' to '@vibe/core'
 * In v4, AttentionBox, Dropdown, DatePicker, Dialog, and Modal
 * have been promoted from @vibe/core/next to @vibe/core.
 */
function transform({ root }: TransformationContext) {
  const nextImports = getImports(root, `${NEW_CORE_IMPORT_PATH}/next`);

  nextImports.forEach(importPath => {
    renameImportPath(importPath, NEW_CORE_IMPORT_PATH);
  });
}

export default wrap(transform);
