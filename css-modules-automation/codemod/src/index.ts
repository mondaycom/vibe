import { PluginObj, types as t, Visitor } from "@babel/core";
import { NodePath } from "@babel/traverse";
import { defaults } from "lodash";
import { dirname, resolve } from "path";
import { convertToModuleClassNames } from "./utils/convertToModuleClassNames";
import { isCssImportDeclaration } from "./utils/isCssImportDeclaration";
import { wrapWithJSXExpressionContainer } from "./utils/wrapWithJSXExpressionContainer";
import { print, printNodeType, printWithCondition } from "./utils/print";
import { isClassNamesImportDeclaration } from "./utils/isClassNamesImportDeclaration";
import { ImportDeclaration, StringLiteral } from "@babel/types";
import { isComponentFile } from "./utils/isComponentFile";
import { isFileContainsCssImports } from "./utils/isFileContainsCssImports";
import { replaceClassNamesInStringLiteral } from "./utils/replaceClassNamesInStringLiteral";
import { splitClassNames } from "./utils/splitClassNames";
import { renameClassnamesToCxCallExpression, wrapWithCxCallExpression } from "./utils/wrapWithCxCallExpression";
import { isCxCallExpression } from "./utils/isCxCallExpression";
import { renameStylesheetFile } from "./utils/renameStylesheetFile";

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
    const pathNodeStringValue = path.node.value;
    const parentPath = path.parentPath;

    print("### index, path isStringLiteral, pathNodeStringValue = ", pathNodeStringValue);
    printNodeType("### index, path.type", path);
    printNodeType("### index, parentPath.type", parentPath);

    // Ignore strings inside object lookups i.e. obj["className"]
    if (parentPath.isMemberExpression()) {
      return;
    }

    // Replace all className strings with styles["className"]
    const newPath = replaceClassNamesInStringLiteral(classNames, opts.importIdentifier, path);
    if (path.shouldSkip) {
      // Classnames is not found in set of classnames from .scss file
      return;
    }

    // Conditional style
    if (parentPath.isObjectProperty()) {
      // If the literal is inside an object property definition, we need to change
      // it to be a computed value instead.
      const parentNode = parentPath.node as t.ObjectProperty;
      print("### index, stringLiteralReplacementVisitors, isObjectProperty, parentNode.value = ", parentNode.value);
      const overrideNewPath = t.objectProperty(newPath as any, parentNode.value, true, false);
      const insertedPaths = parentPath.replaceInline([
        overrideNewPath,
        t.objectProperty(t.stringLiteral(path.node.value), parentNode.value, true, false)
      ]);
      insertedPaths.forEach(p => {
        p.skip();
      });
      print("### index, stringLiteralReplacementVisitors, isObjectProperty, insertedPaths", insertedPaths);
      return;
    }
    // Otherwise just replace the literal completely
    else {
      print(
        `### index, stringLiteralReplacementVisitors, isLiteral, pathNodeStringValue = ${pathNodeStringValue}, newPath = `,
        newPath
      );
      const insertedPaths = path.replaceInline([newPath, t.stringLiteral(path.node.value)]);
      insertedPaths.forEach(p => {
        p.skip();
      });

      print("### index, stringLiteralReplacementVisitors, isLiteral, insertedPaths", insertedPaths);
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
    const node = path.node.value;

    // If 'className="..."' then convert to 'className={"..."}'
    if (!t.isJSXExpressionContainer(node) && path.node.value?.type === "StringLiteral") {
      // Converting to JSX expression
      const newPath = wrapWithJSXExpressionContainer(path);
      path.replaceWith(t.jsxAttribute(path.node.name, newPath));
      return;
    }

    // If 'className={classnames(...)}' then convert to 'className={cx(...)}'
    if (t.isJSXExpressionContainer(node)) {
      const nodeExpression = node.expression;
      if (
        t.isCallExpression(nodeExpression) &&
        nodeExpression.callee.type === "Identifier" &&
        nodeExpression.callee.name.toLowerCase() === "classnames"
      ) {
        const newPath = renameClassnamesToCxCallExpression(nodeExpression);
        path.replaceWith(t.jsxAttribute(path.node.name, newPath));
        return;
      }
    }

    // If 'className={...}' then convert to 'className={cx(...)}'
    if (t.isJSXExpressionContainer(node) && !isCxCallExpression(node.expression)) {
      const newPath = wrapWithCxCallExpression(node);
      path.replaceWith(t.jsxAttribute(path.node.name, newPath));
      return;
    }

    // Split className={cx("1 2 3")} into className={cx("1", "2", "3")}
    if (t.isJSXExpressionContainer(node) && isCxCallExpression(node.expression)) {
      const callExpression = node.expression as t.CallExpression;
      if (callExpression.arguments.some(a => a.type === "StringLiteral" && a.value.includes(" "))) {
        const newPath = splitClassNames(callExpression);
        path.replaceWith(t.jsxAttribute(path.node.name, newPath));
        return;
      }
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
    try {
      const { hub, node } = path;
      // @ts-ignore
      const file = hub["file"];

      try {
        if (!isComponentFile(file)) {
          print("### index, importVisitors, isComponentFile = false", file.opts.filename);
          return;
        }

        // Inserts "import cx from classNames;"
        if (!state.cxImported && isFileContainsCssImports(file)) {
          path.insertBefore(
            t.importDeclaration([t.importDefaultSpecifier(t.identifier("cx"))], t.stringLiteral("classnames"))
          );
          state.cxImported = true;
          print("### index, importVisitors, new cx import inserted");
        }

        // Remove duplicated imports from classnames
        if (isClassNamesImportDeclaration(node) && node.start !== undefined) {
          print("### index, importVisitors, cx import removed!");
          path.remove();
          return;
        }

        // Ignore imports of non-CSS files
        if (!isCssImportDeclaration(node)) {
          return;
        }
      } catch (e) {
        console.log("### error - b");
      }

      // Calculate the file path relative to the current file
      let scssFilename;
      try {
        scssFilename = resolve(dirname(file.opts.filename), node.source.value);
      } catch (e) {
        console.log("### error - a");
      }

      let classNames: Set<string>;
      try {
        // Get all relevant class names from the file
        classNames = convertToModuleClassNames(scssFilename);
        printWithCondition(true, "### index, convertToModuleClassNames, classNames", classNames);

        // Replace the existing import with a wildcard import, namespaced under
        // a module-scope identifier we can reference the keys of. This will be
        // the CSS module classname map provided by webpack css-loader with modules
        // enabled usually, or possibly PostCSS modules plugin like we use here.
        path.replaceWith(
          t.importDeclaration(
            [t.importNamespaceSpecifier(t.identifier(state.opts.importIdentifier))],
            t.stringLiteral(node.source.value.replace(".scss", ".module.scss"))
          )
        );
      } catch (e) {
        console.log("### error - c", e);
      }

      // Traverse the top-level program path for JSX className attributes
      try {
        file.path.traverse(classNameAttributeVisitors, {
          ...state,
          classNames
        });
        renameStylesheetFile(node.source.value);
      } catch (e) {
        console.log("### error - d", e, file);
      }
    } catch (e) {
      console.log("### error - e", e);
    }
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
