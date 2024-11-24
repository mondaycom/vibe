import { CORE_IMPORT_PATH } from "../../../src/consts";
import { wrap, renameImportPath, getCoreNextImportsForFile } from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Changes imports from 'monday-ui-react-core/next' to 'monday-ui-react-core'
 */
function transform({ root }: TransformationContext) {
  const imports = getCoreNextImportsForFile(root);

  imports.forEach(importPath => {
    renameImportPath(importPath, CORE_IMPORT_PATH);
  });
}

export default wrap(transform);
