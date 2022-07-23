import * as t from "@babel/types";
import { StringLiteral } from "@babel/types";
import template from "@babel/template";
import { print } from "./print";
import { NodePath } from "@babel/traverse";

/**
 * Replaces all class names within the given className string, with importIdentifier["className"], if className exists in classNames
 *
 * @param classNames Set of classnames
 * @param importIdentifier Name of the identifier to reference class names via
 * @param path Path to the StringLiteral node
 * @returns New classname string
 */
export const replaceClassNamesInStringLiteral = (
  classNames: Set<string>,
  importIdentifier: string,
  path: NodePath<StringLiteral>
): t.StringLiteral | t.MemberExpression | t.Statement => {
  const literalNode = path.node;
  print("*** replaceClassNamesInStringLiteral, literalNode.value", literalNode.value);
  // Check if this is a single class name
  const classNameArr = literalNode.value.trim().split(" ");
  print("*** replaceClassNamesInStringLiteral, classNameArr", classNameArr);
  if (classNameArr.length < 2) {
    print("*** replaceClassNamesInStringLiteral, classNameArr.length < 2");

    // If the class name isn't in the modular class name list, skip
    if (!classNames.has(literalNode.value)) {
      print(
        "*** replaceClassNamesInStringLiteral, If the class name isn't in the modular class name list, skip, literalNode",
        literalNode
      );
      path.skip();
      return literalNode;
    }

    // printNodeType("*** replaceClassNamesInStringLiteral, printNodeType", literalNode)
    const res = t.memberExpression(t.identifier(importIdentifier), t.stringLiteral(literalNode.value), true);
    print(
      '*** replaceClassNamesInStringLiteral, Otherwise return a computed MemberExpression i.e. styles["className"], res',
      res
    );
    return res;
  }

  // Generate an array of template string parts, consisting of computed entries for
  // any class name which is in the moduler class name list, and regular strings otherwise
  const templateParts = classNameArr.map(v => (classNames.has(v) ? `\${${importIdentifier}["${v}"]}` : v));

  print("*** replaceClassNamesInStringLiteral, templateParts", templateParts);
  const res = template(`\`${templateParts.join(" ")}\``)() as t.Statement;
  print("*** replaceClassNamesInStringLiteral, res", res);
  return res;
};
