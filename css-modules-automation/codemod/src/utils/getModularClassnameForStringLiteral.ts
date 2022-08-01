import * as t from "@babel/types";
import { StringLiteral } from "@babel/types";
import { printWithCondition } from "./print";

/**
 * Check if given classname exists in classnames, if yes, then return styles.newClassName, otherwise return original classname
 *
 * @param classNames Set of classnames
 * @param importIdentifier Name of the identifier to reference class names via
 * @param node StringLiteral node
 * @returns New classname string
 */
export const getModularClassnameForStringLiteral = (
  classNames: Map<string, string>,
  importIdentifier: string,
  node: StringLiteral
): t.StringLiteral | t.MemberExpression => {
  const oldClassNameString = node.value;
  const newClassNameString: string = (classNames.has(oldClassNameString) && classNames.get(oldClassNameString)) || "";

  printWithCondition(false, "*** getModularClassnameForStringLiteral, oldClassNameString", oldClassNameString);

  // If the class name isn't in the modular class name list, skip
  if (classNames && !classNames.has(oldClassNameString)) {
    printWithCondition(
      false,
      "*** getModularClassnameForStringLiteral, If the class name isn't in the modular class name list, skip, literalNode",
      node
    );
    return node;
  }

  const res = t.memberExpression(t.identifier(importIdentifier), t.identifier(newClassNameString));
  printWithCondition(
    false,
    '*** getModularClassnameForStringLiteral, Otherwise return a computed MemberExpression i.e. styles["className"], res',
    res
  );
  return res;
};
