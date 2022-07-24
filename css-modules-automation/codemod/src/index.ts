import { PluginObj, types as t, Visitor } from "@babel/core";
import { NodePath } from "@babel/traverse";
import { defaults } from "lodash";
import { dirname, resolve } from "path";
import { getModuleClassNames } from "./utils/getModuleClassNames";
import { isCssImportDeclaration } from "./utils/isCssImportDeclaration";
import { replaceClassNamesInStringLiteral } from "./utils/replaceClassNamesInStringLiteral";
import { wrapWithJSXExpressionContainer } from "./utils/wrapWithJSXExpressionContainer";
import { print, printNodeType } from "./utils/print";
import { isClassNamesImportDeclaration } from "./utils/isClassNamesImportDeclaration";
import { ImportDeclaration, StringLiteral } from "@babel/types";
import { isComponentFile } from "./utils/isComponentFile";
import { isFileContainsCssImports } from "./utils/isFileContainsCssImports";
import { renameClassnamesToCxCallExpression, wrapWithCxCallExpression } from "./utils/wrapWithCxCallExpression";
import { isCxCallExpression } from "./utils/isCxCallExpression";

type PluginOptions = {
  importIdentifier: "styles";
};

type State = {
  opts: PluginOptions;
  classNames: Set<string>;
  cxImported: boolean;
};

const PLUGIN_DEFAULTS = {
  importIdentifier: "styles"
};

/**
 * These visitors take a string literal, checks to see if it's a valid CSS module
 * class name (from `State.classNames`), and if so replaces them with the corresponding
 * CSS module lookup e.g. `style["className"]`.
 */
const stringLiteralReplacementVisitors: Visitor<State> = {
  StringLiteral: (path: NodePath<StringLiteral>, { classNames, opts }) => {
    // Ignore strings inside object lookups i.e. obj["className"]
    print("### index, path isStringLiteral, path.node.value = ", path.node.value);

    const parentPath = path.parentPath;

    if (parentPath.isMemberExpression()) {
      return;
    }

    printNodeType("### index, path.type", path);
    printNodeType("### index, parentPath.type", parentPath);

    // If 'className="..."' then convert to 'className={"..."}'
    if (parentPath.isJSXAttribute()) {
      // Converting to JSX expression
      print("### index, wrapWithJSXExpressionContainer");
      const newPath = wrapWithJSXExpressionContainer(parentPath);
      path.replaceWith(newPath);
      return;
    }

    // If 'className={classnames(...)}' then convert to 'className={cx(...)}'
    if (
      parentPath.isCallExpression() &&
      parentPath.node.callee.type === "Identifier" &&
      parentPath.node.callee.name.toLowerCase() === "classnames"
    ) {
      const newPath = renameClassnamesToCxCallExpression(parentPath);
      parentPath.replaceWith(newPath);
    }

    // If 'className={...}' then convert to 'className={cx(...)}'
    if (parentPath.isJSXExpressionContainer() && !isCxCallExpression(path as NodePath)) {
      print("### index, parentPath.isCallExpression, path", path);
      const newPath = wrapWithCxCallExpression(parentPath);
      path.replaceWith(newPath);
      return;
    }

    // Replace all className strings with styles["className"]
    const newPath = replaceClassNamesInStringLiteral(classNames, opts.importIdentifier, path);
    if (path.shouldSkip) {
      path.replaceWith(newPath);
      return;
    }

    const isObjectProperty = parentPath.isObjectProperty();
    print("### index, isObjectProperty", isObjectProperty);

    if (isObjectProperty) {
      // If the literal is inside an object property definition, we need to change
      // it to be a computed value instead.
      const overrideParentPath = parentPath as NodePath<t.ObjectProperty>;

      print("### index, parentPath.node.value = ", overrideParentPath.node.value);
      const overrideNewPath = t.objectProperty(newPath as any, overrideParentPath.node.value, true, false);
      print("### index, overrideNewPath = ", overrideNewPath);
      overrideParentPath.replaceWith(overrideNewPath);
    }
    // Otherwise just replace the literal completely
    else {
      print(
        `### index, Otherwise just replace the literal completely, path.node.value = ${path.node.value}, newPath = `,
        newPath
      );

      path.replaceWith(newPath as any);
      return;
    }
  }
};

/**
 * These visitors look within JSX `className` attributes, looking for string literals
 * which we can process into `style["className"]` lookups, as well as variable references
 * in the containing scope which also contain string literals.
 */
const classNameReplacementVisitors: Visitor<State> = {
  ...stringLiteralReplacementVisitors,

  Identifier: ({ node, scope }, state) => {
    const binding = scope.getBinding(node.name);
    if (binding == null) {
      return;
    }

    binding.path.traverse(stringLiteralReplacementVisitors, state);
  }
};

/**
 * Theese visitors process all JSX `className` attributes and traverses them
 * them using the `replacementVisitors`.
 */
const classNameAttributeVisitors: Visitor<State> = {
  JSXAttribute: (path, state) => {
    const { name } = path.node.name;
    if (name !== "className") {
      return;
    }

    path.traverse(classNameReplacementVisitors, state);
  }
};

/**
 * These visitors process top-level import statements, looking for all CSS imports.
 * When found, we'll retrieve and parse the CSS using PostCSS, to return the top
 * level CSS module class names that can be used in the code. We'll then store this
 * information in `State.classNames`, to be used in the above processing steps
 */
const importVisitors: Visitor<State> = {
  ImportDeclaration: (path: NodePath<ImportDeclaration>, state: State) => {
    const { hub, node } = path;
    // @ts-ignore
    const file = hub["file"];

    if (!isComponentFile(file)) {
      print("### index, isComponentJsxFile = false", file.opts.filename);
      return;
    }

    // Inserts "import cx from classNames;"
    if (!state.cxImported && isFileContainsCssImports(file)) {
      path.insertBefore(
        t.importDeclaration([t.importDefaultSpecifier(t.identifier("cx"))], t.stringLiteral("classnames"))
      );
      state.cxImported = true;
      print("### index, new cx import inserted");
    }

    // Remove duplicated imports from classnames
    if (isClassNamesImportDeclaration(node) && node.start !== undefined) {
      print("### index, cx import removed!");
      path.remove();
      return;
    }

    // Ignore imports of non-CSS files
    if (!isCssImportDeclaration(node)) {
      return;
    }

    // Calculate the file path relative to the current file
    const scssFilename = resolve(dirname(file.opts.filename), node.source.value);

    // Get all relevant class names from the file
    const classNames = getModuleClassNames(scssFilename);

    // Replace the existing import with a wildcard import, namespaced under
    // a module-scope identifier we can reference the keys of. This will be
    // the CSS module classname map provided by webpack css-loader with modules
    // enabled usually, or possibly PostCSS modules plugin like we use here.
    path.replaceWith(
      t.importDeclaration([t.importNamespaceSpecifier(t.identifier(state.opts.importIdentifier))], node.source)
    );

    // Traverse the top-level program path for JSX className attributes
    file.path.traverse(classNameAttributeVisitors, {
      ...state,
      classNames
    });
  }
};

export default (): PluginObj<State> => ({
  name: "react-css-modules",
  visitor: {
    Program: (programPath, state) => {
      programPath.traverse(importVisitors, {
        ...state,
        opts: defaults({}, state.opts, PLUGIN_DEFAULTS)
      });
    }
  }
});
