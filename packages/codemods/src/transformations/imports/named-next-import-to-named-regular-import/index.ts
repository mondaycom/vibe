import { API, ASTPath, FileInfo, ImportDeclaration, ImportSpecifier } from "jscodeshift";
import {
  setup,
  getCoreImportsForFile,
  getCoreNextImportsForFile,
  removeImport,
  extractSpecifiersFromImport,
  updateImportSpecifiers,
  renameImportPath
} from "@/utils";
import { CORE_IMPORT_PATH } from "@/consts";

/**
 * Transforms "next" import declarations into "regular" import declarations.
 *
 * This codemod merges all named import specifiers from imports sourced from "monday-ui-react-core/next"
 * into the first encountered "monday-ui-react-core" import declaration. If no "regular" import declaration
 * exists, it transforms the first "next" import declaration into a "regular" import declaration.
 *
 * The function follows these steps:
 * 1. Collect all named import specifiers from each "next" import.
 * 2. If "regular" imports are present:
 *    - Add all named specifiers from "next" imports to the first "regular" import.
 *    - Remove all "next" imports.
 * 3. If no "regular" imports are present:
 *    - Replace the first "next" import's source path with the "regular" import path.
 *    - Merge all named specifiers from subsequent "next" imports into this transformed import.
 *    - Remove all other "next" imports.
 *
 * Notes:
 * - This function assumes that "next" imports might have multiple occurrences and merges them efficiently.
 * - This function does not handle multiple occurrences of "regular" imports. This is on purpose to keep the transformation focused.
 * - It ensures that the transformation maintains the original order of imports.
 * - Important: This codemod is designed to handle named imports only and will not modify default or namespace imports.
 */
export default function namedNextImportToNamedRegularImport(fileInfo: FileInfo, api: API): string {
  const [j, root] = setup(api, fileInfo);

  const regularImports = getCoreImportsForFile(root);
  const nextImports = getCoreNextImportsForFile(root);

  if (!nextImports.length) return root.toSource();

  const nextSpecifiers: ImportSpecifier[] = [];
  nextImports.forEach((nextImportPath, nextImportIndex) => {
    const specifiers = extractSpecifiersFromImport(j, nextImportPath);
    if (specifiers.length) {
      nextSpecifiers.push(...specifiers);
      if (regularImports.length || nextImportIndex > 0) {
        removeImport(j, nextImportPath);
      }
    }
  });

  if (regularImports.length) {
    const firstRegularImport: ASTPath<ImportDeclaration> = regularImports.at(0).get();
    updateImportSpecifiers(firstRegularImport, nextSpecifiers);
  } else {
    const firstNextImport: ASTPath<ImportDeclaration> = nextImports.at(0).get();
    updateImportSpecifiers(firstNextImport, nextSpecifiers, true);
    renameImportPath(firstNextImport, CORE_IMPORT_PATH);
  }

  return root.toSource();
}
