import { wrap, getImports, findImportsThatIncludesSpecifier, removeSpecifierFromImport } from "../../../src/utils";
import { NEW_CORE_IMPORT_PATH } from "../../../src/consts";
import { TransformationContext } from "../../../types";

/**
 * Type import migrations for v3 to v4
 *
 * 1. Remove VibeComponent type import from @vibe/core
 *    VibeComponent has been removed in v4 as it didn't allow proper typing.
 *    Replace with React.ForwardRefExoticComponent<T & React.RefAttributes<P>> from React.
 */
function transform({ j, root }: TransformationContext) {
  const coreImports = getImports(root, NEW_CORE_IMPORT_PATH);

  // Remove VibeComponent from @vibe/core imports
  const vibeComponentImports = findImportsThatIncludesSpecifier(j, coreImports, "VibeComponent");
  vibeComponentImports.forEach(path => {
    removeSpecifierFromImport(j, path, "VibeComponent");
  });
}

export default wrap(transform);
