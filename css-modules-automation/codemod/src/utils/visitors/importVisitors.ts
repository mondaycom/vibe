import { Visitor } from "@babel/core";
import { NodePath } from "@babel/traverse";
import * as t from "@babel/types";
import { print, printWithCondition } from "../commonProcess/print";
import { isClassNamesImportDeclaration } from "../logical/isClassNamesImportDeclaration";
import { isBemHelperImportDeclaration } from "../logical/isBemHelperImportDeclaration";
import { isCssImportDeclaration } from "../logical/isCssImportDeclaration";
import { dirname, resolve } from "path";
import { convertToModuleClassNames } from "../convertToModuleClassNames";
import { markFileForRenaming } from "../markFileForRenaming";
import { bemHelperCallExpressionsVisitors } from "./bemHelperCallExpressionsVisitors";
import { templateLiteralReplacementVisitors } from "./templateLiteralReplacementVisitors";
import { classNameAttributeVisitors } from "./classNameAttributeVisitors";
import { addCamelCaseImportVisitors } from "./addCamelCaseImportVisitors";
import { State } from "../../index";
import { baseClassIdentifiersReplacementVisitors } from "./baseClassIdentifiersReplacementVisitors";
import { getCssBaseClass } from "../getCssBaseClass";
import { shouldFileBeProcessed } from "../logical/shouldFileBeProcessed";
import { objectPropertyClassnameIdentifiersReplacementVisitors } from "./objectPropertyClassnameIdentifiersReplacementVisitors";
import { classNamesCallExpressionRenameVisitors } from "./classNamesCallExpressionRenameVisitors";
import { getCssModulesFileName } from "../getCssModulesFileName";
import { markFileForPrettier } from "../markFileForPrettier";

/**
 * Map: key - processed .scss file, value - map (key - old classname, value - new modular classname)
 */
const filesClassNamesMap: Map<string, Map<string, string>> = new Map();

/**
 * Set of processed .jsx files
 */
const filesJsxSet: Set<string> = new Set();

const classNamesImportDeclaration = t.importDeclaration(
  [t.importDefaultSpecifier(t.identifier("cx"))],
  t.stringLiteral("classnames")
);

/**
 * 2: These visitors process top-level import statements, looking for all CSS imports.
 * When found, we'll retrieve and parse the CSS using PostCSS, to return the top
 * level CSS module class names that can be used in the code. We'll then store this
 * information in `State.classNames`, to be used in the above processing steps
 */
export const importVisitors: Visitor<State> = {
  ImportDeclaration: (path: NodePath<t.ImportDeclaration>, state: State) => {
    const { hub, node } = path;

    // @ts-ignore
    const file = hub["file"];
    const filename: string = file.opts.filename;

    // Check if file is to be processed further or not
    if (!shouldFileBeProcessed(file)) {
      path.stop();
      return;
    }

    // Inserts "import cx from classNames;"
    if (!state.cxImported) {
      path.insertBefore(classNamesImportDeclaration);
      state.cxImported = true;
      print("### importVisitors, new cx import inserted");
    }

    // Remove duplicated imports from classnames
    if (state.cxImported && isClassNamesImportDeclaration(node) && node.start !== undefined) {
      print("### importVisitors, cx import removed!");
      path.remove();
      return;
    }

    // Remove bemHelper import
    if (isBemHelperImportDeclaration(node)) {
      print("### importVisitors, bemHelper import removed!");
      path.remove();
      return;
    }

    // Ignore imports of non-CSS files
    if (!isCssImportDeclaration(node)) {
      return;
    }

    // Calculate the file path relative to the current file
    const scssFilename: string = resolve(dirname(filename), node.source.value);
    // Get all relevant class names from the file
    let classNames: Map<string, string>;
    if (!filesClassNamesMap.has(scssFilename)) {
      // 3: process .scss file
      classNames = convertToModuleClassNames(scssFilename);
      filesClassNamesMap.set(scssFilename, classNames);
      markFileForRenaming(scssFilename);
      markFileForPrettier(scssFilename);
    } else {
      classNames = filesClassNamesMap.get(scssFilename)!;
    }
    printWithCondition(false, "### importVisitors, classNames", classNames);

    // Update state with classNames
    state.classNames = classNames;

    // Replace the existing import with a wildcard import, namespaced under
    // a module-scope identifier we can reference the keys of. This will be
    // the CSS module classname map provided by webpack css-loader with modules
    // enabled usually, or possibly PostCSS modules plugin like we use here.
    path.replaceWith(
      t.importDeclaration(
        [t.importDefaultSpecifier(t.identifier(state.opts.importIdentifier))],
        t.stringLiteral(getCssModulesFileName(node.source.value))
      )
    );

    // Ensure this is run only once per file
    if (!filesJsxSet.has(filename)) {
      const oldClassNamesArray = Array.from(classNames.keys());

      // Update state with baseCssClass
      state.baseCssClass = getCssBaseClass(oldClassNamesArray, path.hub.getCode());
      printWithCondition(false, "### importVisitors, state.baseCssClassName", state.baseCssClass);

      // 4*: Rename all classNames(...) occurrences to cx(...)
      file.path.traverse(classNamesCallExpressionRenameVisitors, state);

      // 4: Traverse the top-level program path for BEM call expressions
      file.path.traverse(bemHelperCallExpressionsVisitors, state);

      // 5: Wrap baseClass usages with templateLiteral
      file.path.traverse(baseClassIdentifiersReplacementVisitors, state);

      // 6: Replace className identifier in objectProperty with stringLiteral
      file.path.traverse(objectPropertyClassnameIdentifiersReplacementVisitors, state);

      // 7: Traverse for TemplateLiterals in className attributes values
      file.path.traverse(templateLiteralReplacementVisitors, state);

      // 8-10: Traverse the top-level program path for JSX className attributes
      file.path.traverse(classNameAttributeVisitors, state);

      // 11: Adds camel case import if needed
      if (state.camelCaseImportNeeded && !state.camelCaseImported) {
        file.path.traverse(addCamelCaseImportVisitors, state);
      }

      markFileForPrettier(filename);
      filesJsxSet.add(filename);
    }
  }
};
