import { wrap, renameImportPath } from "../../../src/utils";
import { TransformationContext } from "../../../types";
import { ImportDeclaration } from "jscodeshift";

const OLD_STYLE_IMPORT_PATH = "monday-ui-style";
const NEW_STYLE_IMPORT_PATH = "@vibe/style";

/**
 * Changes imports from 'monday-ui-style' (and subpaths) to '@vibe/style'
 */
function transform({ j, root }: TransformationContext) {
  root
    .find(ImportDeclaration)
    .filter(path => {
      const source = path.node.source.value as string;
      return source === OLD_STYLE_IMPORT_PATH || source.startsWith(`${OLD_STYLE_IMPORT_PATH}/`);
    })
    .forEach(importPath => {
      const currentPath = importPath.node.source.value as string;
      const newPath = currentPath.replace(OLD_STYLE_IMPORT_PATH, NEW_STYLE_IMPORT_PATH);
      renameImportPath(importPath, newPath);
    });
}

export default wrap(transform);
