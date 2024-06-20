import { ASTPath, Collection, ImportDeclaration, ImportSpecifier, JSCodeshift } from "jscodeshift";
import { CORE_IMPORT_PATH, CORE_NEXT_IMPORT_PATH } from "@/consts";
import { VibeCorePath } from "@/types";

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

export function extractSpecifiersFromImport(
  j: JSCodeshift,
  importDeclarationPath: ASTPath<ImportDeclaration>
): ImportSpecifier[] {
  const specifiers: ImportSpecifier[] = [];
  j(importDeclarationPath)
    .find(ImportSpecifier)
    .forEach(namedImport => {
      specifiers.push(namedImport.node);
    });
  return specifiers;
}

export function removeImport(j: JSCodeshift, path: ASTPath<ImportDeclaration>) {
  j(path).remove();
}

export function renameImportPath(path: ASTPath<ImportDeclaration>, newPathName: string) {
  path.get().node.source.value = newPathName;
}
