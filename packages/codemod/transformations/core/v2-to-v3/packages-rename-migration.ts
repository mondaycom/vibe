import { CORE_IMPORT_PATH, NEW_CORE_IMPORT_PATH, NEW_ICONS_IMPORT_PATH } from "../../../src/consts";
import { wrap, renameImportPath, getImports } from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Changes imports from 'monday-ui-react-core' to '@ezds/core'
 * 2. Changes imports from 'monday-ui-react-core/icons' to '@ezds/icons'
 * 3. Changes imports from 'monday-ui-react-core/interactionsTests' to '@ezds/core/interactionsTests'
 * 4. Changes imports from 'monday-ui-react-core/testIds' to '@ezds/core/testIds'
 * 5. Changes imports from 'monday-ui-react-core/tokens' to '@ezds/core/tokens'
 
 */
function transform({ root }: TransformationContext) {
  const coreImports = getImports(root, CORE_IMPORT_PATH);

  coreImports.forEach(importPath => {
    renameImportPath(importPath, NEW_CORE_IMPORT_PATH);
  });

  const iconImports = getImports(root, `${CORE_IMPORT_PATH}/icons`);

  iconImports.forEach(importPath => {
    renameImportPath(importPath, NEW_ICONS_IMPORT_PATH);
  });

  const interactionsImports = getImports(root, `${CORE_IMPORT_PATH}/interactionsTests`);

  interactionsImports.forEach(importPath => {
    renameImportPath(importPath, `${NEW_CORE_IMPORT_PATH}/interactionsTests`);
  });

  const testIdsImports = getImports(root, `${CORE_IMPORT_PATH}/testIds`);

  testIdsImports.forEach(importPath => {
    renameImportPath(importPath, `${NEW_CORE_IMPORT_PATH}/testIds`);
  });

  const tokensImports = getImports(root, `${CORE_IMPORT_PATH}/tokens`);

  tokensImports.forEach(importPath => {
    renameImportPath(importPath, `${NEW_CORE_IMPORT_PATH}/tokens`);
  });
}

export default wrap(transform);
