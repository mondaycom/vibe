import * as t from "@babel/types";
import { StringLiteral } from "@babel/types";
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
): t.StringLiteral | t.MemberExpression => {
  const classNameString = path.node.value;
  const literalNode = path.node;
  print("*** replaceClassNamesInStringLiteral, classNameString", classNameString);

  // If the class name isn't in the modular class name list, skip
  if (!classNames.has(classNameString)) {
    print(
      "*** replaceClassNamesInStringLiteral, If the class name isn't in the modular class name list, skip, literalNode",
      literalNode
    );
    path.skip();
    return literalNode;
  }

  const res = t.memberExpression(t.identifier(importIdentifier), t.stringLiteral(classNameString), true);
  print(
    '*** replaceClassNamesInStringLiteral, Otherwise return a computed MemberExpression i.e. styles["className"], res',
    res
  );
  return res;
};
