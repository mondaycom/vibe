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
  classNames: Map<string, string>,
  importIdentifier: string,
  path: NodePath<StringLiteral>
): t.StringLiteral | t.MemberExpression => {
  const oldClassNameString = path.node.value;
  const newClassNameString: string = (classNames.has(oldClassNameString) && classNames.get(oldClassNameString)) || "";

  const literalNode = path.node;
  print("*** replaceClassNamesInStringLiteral, oldClassNameString", oldClassNameString);

  // If the class name isn't in the modular class name list, skip
  if (classNames && !classNames.has(oldClassNameString)) {
    print(
      "*** replaceClassNamesInStringLiteral, If the class name isn't in the modular class name list, skip, literalNode",
      literalNode
    );
    path.skip();
    return literalNode;
  }

  const res = t.memberExpression(t.identifier(importIdentifier), t.identifier(newClassNameString));
  print(
    '*** replaceClassNamesInStringLiteral, Otherwise return a computed MemberExpression i.e. styles["className"], res',
    res
  );
  return res;
};
