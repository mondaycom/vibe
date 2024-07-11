import { ASTPath, Collection, ImportDeclaration, ImportSpecifier, JSCodeshift } from "jscodeshift";
import { CORE_IMPORT_PATH, CORE_NEXT_IMPORT_PATH } from "../consts";
import { VibeCorePath } from "../../types";

/**
 * Retrieves all import declarations that matches a path for a root (file).
 */
function getImports(root: Collection, path: VibeCorePath): Collection<ImportDeclaration> {
  return root.find(ImportDeclaration, {
    source: {
      value: path
    }
  });
}

/**
 * Retrieves all "monday-ui-react-core" import declarations for a root.
 */
export function getCoreImportsForFile(root: Collection): Collection<ImportDeclaration> {
  return getImports(root, CORE_IMPORT_PATH);
}

/**
 * Retrieves all "monday-ui-react-core/next" import declarations for a root.
 */
export function getCoreNextImportsForFile(root: Collection): Collection<ImportDeclaration> {
  return getImports(root, CORE_NEXT_IMPORT_PATH);
}

/**
 * Retrieves all import specifiers (named imports) from a given import declaration.
 */
function extractSpecifiersFromImport(j: JSCodeshift, path: ASTPath<ImportDeclaration>): ImportSpecifier[] {
  const specifiers: ImportSpecifier[] = [];
  j(path)
    .find(ImportSpecifier)
    .forEach(namedImport => {
      specifiers.push(namedImport.node);
    });
  return specifiers;
}

/**
 * Checks a collection of import declarations for if a specific component is imported.
 * It returns the name used in the import, either the original name or an alias.
 * Returns null if all import declarations does not include the component.
 */
export function getComponentNameOrAliasFromImports(
  j: JSCodeshift,
  paths: Collection<ImportDeclaration>,
  componentName: string
): string | null {
  let componentNameOrAlias = null;
  paths.forEach(path => {
    const componentImportSpecifier = j(extractSpecifiersFromImport(j, path))
      .filter(spec => spec.node.imported.name === componentName)
      .at(0);
    if (componentImportSpecifier.length) {
      componentNameOrAlias = componentImportSpecifier.get().node.local.name;
    }
  });
  return componentNameOrAlias;
}
