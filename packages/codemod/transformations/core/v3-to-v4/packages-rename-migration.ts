import { wrap, renameImportPath, getImports } from "../../../src/utils";
import { TransformationContext } from "../../../types";

const OLD_STYLE_IMPORT_PATH = "monday-ui-style";
const NEW_STYLE_IMPORT_PATH = "@vibe/style";

/**
 * Changes imports from 'monday-ui-style' to '@vibe/style'
 */
function transform({ root }: TransformationContext) {
  const styleImports = getImports(root, OLD_STYLE_IMPORT_PATH);

  styleImports.forEach(importPath => {
    const currentPath = importPath.node.source.value as string;
    const newPath = currentPath.replace(OLD_STYLE_IMPORT_PATH, NEW_STYLE_IMPORT_PATH);
    renameImportPath(importPath, newPath);
  });
}

export default wrap(transform);
