import { Collection, ImportDeclaration } from "jscodeshift";
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
