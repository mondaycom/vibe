import {
  CORE_ICONS_IMPORT_PATH,
  CORE_IMPORT_PATH,
  CORE_INTERACTIONS_IMPORT_PATH,
  CORE_TESTIDS_IMPORT_PATH,
  CORE_TOKENS_IMPORT_PATH,
  NEW_CORE_IMPORT_PATH,
  NEW_ICONS_IMPORT_PATH
} from "src/consts";
import { wrap, renameImportPath, getImports } from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Changes imports from 'monday-ui-react-core' to '@vibe/core'
 * 2. Changes imports from 'monday-ui-react-core/icons' to '@vibe/icons'
 * 3. Changes imports from 'monday-ui-react-core/interactionsTests' to '@vibe/core/interactionsTests'
 * 4. Changes imports from 'monday-ui-react-core/testIds' to '@vibe/core/testIds'
 * 5. Changes imports from 'monday-ui-react-core/tokens' to '@vibe/core/tokens'
 
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

  const interactionsImports = getImports(root, CORE_INTERACTIONS_IMPORT_PATH);

  interactionsImports.forEach(importPath => {
    renameImportPath(importPath, `${NEW_CORE_IMPORT_PATH}/interactionsTests`);
  });

  const testIdsImports = getImports(root, CORE_TESTIDS_IMPORT_PATH);

  testIdsImports.forEach(importPath => {
    renameImportPath(importPath, `${NEW_CORE_IMPORT_PATH}/testIds`);
  });

  const tokensImports = getImports(root, CORE_TOKENS_IMPORT_PATH);

  tokensImports.forEach(importPath => {
    renameImportPath(importPath, `${NEW_CORE_IMPORT_PATH}/tokens`);
  });
}

export default wrap(transform);
