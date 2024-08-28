import { CORE_ICONS_IMPORT_PATH, CORE_IMPORT_PATH, NEW_CORE_IMPORT_PATH, NEW_ICONS_IMPORT_PATH } from "src/consts";
import { wrap, renameImportPath, getImports } from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Changes imports from 'monday-ui-react-core' to '@vibe/core'
 * 1. Changes imports from 'monday-ui-react-core/icons' to '@vibe/icons'
 */
function transform({ root }: TransformationContext) {
  const coreImports = getImports(root, CORE_IMPORT_PATH);

  coreImports.forEach(importPath => {
    renameImportPath(importPath, NEW_CORE_IMPORT_PATH);
  });

  const iconImports = getImports(root, CORE_ICONS_IMPORT_PATH);

  iconImports.forEach(importPath => {
    renameImportPath(importPath, NEW_ICONS_IMPORT_PATH);
  });
}

export default wrap(transform);
