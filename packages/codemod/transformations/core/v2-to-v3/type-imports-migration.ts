import { CORE_IMPORT_PATH, CORE_TYPES_IMPORT_PATH } from "src/consts";
import { wrap, renameImportPath, getImports } from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Changes imports from 'monday-ui-react-core/types' to 'monday-ui-react-core'
 */
function transform({ root }: TransformationContext) {
  const imports = getImports(root, CORE_TYPES_IMPORT_PATH);

  imports.forEach(importPath => {
    renameImportPath(importPath, CORE_IMPORT_PATH);
  });
}

export default wrap(transform);
