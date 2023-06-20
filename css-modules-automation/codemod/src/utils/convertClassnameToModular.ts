import * as t from "@babel/types";
import { printWithCondition } from "./commonProcess/print";

/**
 * Check if given classname exists in classnames, if yes, then return styles.newClassName, otherwise return original classname
 *
 * @param classNames Set of classnames
 * @param importIdentifier Name of the identifier to reference class names via
 * @param oldClassNameString StringLiteral className
 * @returns New classname string
 */
export const convertClassnameToModular = (
  classNames: Map<string, string>,
  importIdentifier: string,
  oldClassNameString: string | undefined
): null | t.MemberExpression => {
  if (!oldClassNameString) {
    return null;
  }

  const newClassNameString: string = (classNames.has(oldClassNameString) && classNames.get(oldClassNameString)) || "";

  printWithCondition(false, "*** getModularClassnameForStringLiteral, oldClassNameString", oldClassNameString);

  // If the class name isn't in the modular class name list, skip
  if (classNames && !classNames.has(oldClassNameString)) {
    printWithCondition(
      false,
      "*** getModularClassnameForStringLiteral, skip cause class name isn't in the modular class name list",
      oldClassNameString
    );
    return null;
  }

  const res = t.memberExpression(t.identifier(importIdentifier), t.identifier(newClassNameString));
  printWithCondition(false, "*** getModularClassnameForStringLiteral, return MemberExpression, res = ", res);
  return res;
};
