import { ImportDeclaration } from "jscodeshift";
import {
  getCoreImportsForFile,
  wrap,
  getComponentNameOrAliasFromImports,
  updateImportSpecifierName,
  findComponentElements,
  findImportsThatIncludesSpecifier,
  removeSpecifierFromImport,
  updateComponentName,
  updateComponentNamespaceProps
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Remove the 'InputField' import if 'TextField' is already imported from 'monday-ui-react-core'
 * 2. Update the 'InputField' import to 'TextField' (or 'TextField as InputField' if 'TextField' is already imported from other source)
 * 3. Update the component name jsx usage from 'InputField' to 'TextField'
 */
function transform({ j, root }: TransformationContext) {
  const coreImports = getCoreImportsForFile(root);
  if (!coreImports.length) return;

  const coreOldInputFieldComponentImports = findImportsThatIncludesSpecifier(j, coreImports, "InputField");
  if (!coreOldInputFieldComponentImports.length) return;

  const allImports = root.find(ImportDeclaration);

  // This finds all imports that has 'TextField' as imported specifier
  const rootTextFieldImports = findImportsThatIncludesSpecifier(j, allImports, "TextField");

  // Check in addition if the import of 'TextField' that was found is from Vibe
  const isTextFieldAlreadyImportedFromCore = rootTextFieldImports.some(
    path => path.node.source?.value === "monday-ui-react-core"
  );

  // Keep the original alias if it exists
  const componentName = getComponentNameOrAliasFromImports(j, coreOldInputFieldComponentImports.at(0), "InputField");
  const hasAlias = !!componentName && componentName !== "InputField";

  // if 'TextField' specifier already exists in file (not from Vibe!) alias should be added to the new import
  const newAlias = rootTextFieldImports.length ? "InputField" : "";
  const alias = hasAlias ? componentName : newAlias;

  if (isTextFieldAlreadyImportedFromCore) {
    removeSpecifierFromImport(j, coreOldInputFieldComponentImports.at(0).get(), "InputField");
  } else {
    updateImportSpecifierName(j, coreOldInputFieldComponentImports.at(0).get(), "InputField", "TextField", alias);
  }

  const elements = findComponentElements(root, componentName || "InputField");
  if (!elements.length) return;

  elements.forEach(elementPath => {
    updateComponentName(j, elementPath, alias || "TextField");
    updateComponentNamespaceProps(j, elementPath, "InputField", alias || "TextField");
  });
}

export default wrap(transform);
