import { ASTPath, Collection, ImportDeclaration, ImportSpecifier, JSCodeshift } from "jscodeshift";
import { CORE_IMPORT_PATH, CORE_NEXT_IMPORT_PATH } from "../consts";
import { VibeCorePath } from "../types";

function getImports(root: Collection, path: VibeCorePath): Collection<ImportDeclaration> {
  return root.find(ImportDeclaration, {
    source: {
      value: path
    }
  });
}

export function getCoreImportsForFile(root: Collection) {
  return getImports(root, CORE_IMPORT_PATH);
}

export function getCoreNextImportsForFile(root: Collection) {
  return getImports(root, CORE_NEXT_IMPORT_PATH);
}

export function updateImportSpecifiers(
  importDeclarationPath: ASTPath<ImportDeclaration>,
  specifiers: ImportSpecifier[] = [],
  replace: boolean = false
): void {
  const importNode = importDeclarationPath.node;

  if (replace || !importNode.specifiers) {
    importNode.specifiers = specifiers;
    return;
  }

  importNode.specifiers.push(...specifiers);
}

export function updateComponentImportName(
  j: JSCodeshift,
  importDeclarationPath: ASTPath<ImportDeclaration>,
  oldName: string,
  newName: string
) {
  j(importDeclarationPath)
    .find(ImportSpecifier)
    .forEach(specifierPath => {
      if (specifierPath.node.imported.name === oldName) {
        specifierPath.node.imported = j.identifier(newName);
      }
    });
}

export function extractSpecifiersFromImport(j: JSCodeshift, path: ASTPath<ImportDeclaration>): ImportSpecifier[] {
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

export function removeImport(j: JSCodeshift, path: ASTPath<ImportDeclaration>) {
  j(path).remove();
}

export function renameImportPath(path: ASTPath<ImportDeclaration>, newPathName: string) {
  path.get().node.source.value = newPathName;
}
