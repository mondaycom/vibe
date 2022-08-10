import { Visitor } from "@babel/core";
import { NodePath } from "@babel/traverse";
import * as t from "@babel/types";
import { print, printWithCondition } from "../commonProcess/print";
import { getModularClassnameForStringLiteral } from "../getModularClassnameForStringLiteral";
import { State } from "../../index";

/**
 * 8: These visitors take a string literal, checks to see if it's a valid CSS module
 * class name (from `State.classNames`), and if so replaces them with the corresponding
 * CSS module lookup e.g. `style.className`.
 */
export const stringLiteralReplacementVisitors: Visitor<State> = {
  StringLiteral: (path: NodePath<t.StringLiteral>, { classNames, opts }) => {
    const pathNodeStringValue = path.node.value;
    const parentPath = path.parentPath;

    print("### stringLiteralReplacementVisitors, pathNodeStringValue = ", pathNodeStringValue);
    print("### stringLiteralReplacementVisitors, parentPath.node = ", parentPath.node);

    // Ignore strings inside object lookups i.e. obj["className"]
    if (parentPath.isMemberExpression()) {
      return;
    }

    // Ignore strings inside variable declarations i.e. `const CSS_BASE_CLASS = "base-class";`
    if (parentPath.isVariableDeclarator() && parentPath.node.id.type === "Identifier") {
      //  && parentPath.node.id.name.includes("CSS_BASE_CLASS")
      return;
    }
    // Replace all className strings with styles.className
    const newPath = getModularClassnameForStringLiteral(classNames, opts.importIdentifier, path.node);
    if (!newPath) {
      // Classnames is not found in set of classnames from .scss file
      return;
    }

    // Conditional style
    if (parentPath.isObjectProperty()) {
      // If the literal is inside an object property definition, we need to change
      // it to be a computed value instead.
      const parentNode = parentPath.node as t.ObjectProperty;
      print("### stringLiteralReplacementVisitors, isObjectProperty, parentNode.value = ", parentNode.value);
      const overrideNewPath = t.objectProperty(newPath as any, parentNode.value, true, false);
      const insertedPaths = parentPath.replaceInline([
        overrideNewPath,
        t.objectProperty(t.stringLiteral(path.node.value), parentNode.value, true, false)
      ]);
      insertedPaths.forEach(p => {
        p.skip();
        p.getPrevSibling().skip();
      });
      print("### stringLiteralReplacementVisitors, isObjectProperty, insertedPaths", insertedPaths);
    }
    // Otherwise just replace the literal completely
    else {
      printWithCondition(
        false,
        `### stringLiteralReplacementVisitors, isLiteral, pathNodeStringValue = ${pathNodeStringValue}`
      );
      printWithCondition(false, "### stringLiteralReplacementVisitors, path.parentPath", path.parentPath);

      const insertedPaths = path.replaceInline([newPath, t.stringLiteral(path.node.value)]);
      insertedPaths.forEach(p => {
        p.skip();
        p.getPrevSibling().skip();
      });
      printWithCondition(false, "### stringLiteralReplacementVisitors, isLiteral, insertedPaths", insertedPaths);
    }
  }
};
