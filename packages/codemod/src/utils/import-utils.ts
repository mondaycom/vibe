import { ASTPath, Collection, ImportDeclaration, ImportSpecifier, JSCodeshift } from "jscodeshift";
import { CORE_IMPORT_PATH, CORE_NEXT_IMPORT_PATH } from "../consts";
import { VibeCorePath } from "../../types";

function getImports(root: Collection, path: VibeCorePath): Collection<ImportDeclaration> {
  return root.find(ImportDeclaration, {
    source: {
      value: path
    }
  });
}

export function getCoreImportsForFile(root: Collection): Collection<ImportDeclaration> {
  return getImports(root, CORE_IMPORT_PATH);
}

export function getCoreNextImportsForFile(root: Collection): Collection<ImportDeclaration> {
  return getImports(root, CORE_NEXT_IMPORT_PATH);
}

function extractSpecifiersFromImport(j: JSCodeshift, path: ASTPath<ImportDeclaration>): ImportSpecifier[] {
  const specifiers: ImportSpecifier[] = [];
  j(path)
    .find(ImportSpecifier)
    .forEach(namedImport => {
      specifiers.push(namedImport.node);
    });
  return specifiers;
}

export function getComponentNameOrAliasFromImports(
  j: JSCodeshift,
  paths: Collection<ImportDeclaration>,
  componentName: string
): string | null {
  let actualName = null;
  paths.forEach(path => {
    const componentImportSpecifier = j(extractSpecifiersFromImport(j, path))
      .filter(spec => spec.node.imported.name === componentName)
      .at(0);
    if (componentImportSpecifier.length) {
      actualName = componentImportSpecifier.get().node.local.name;
    }
  });
  return actualName;
}
