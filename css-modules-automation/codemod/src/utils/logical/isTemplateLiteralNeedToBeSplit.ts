import * as t from "@babel/types";
import { createStringFromTemplateLiteral } from "../templateLiterals/createStringFromTemplateLiteral";

/**
 * Returns true if template literal contains spaces inside
 * @param node
 */
export const isTemplateLiteralNeedToBeSplit = (node: t.TemplateLiteral): boolean => {
  const stringTemplateLiteral = createStringFromTemplateLiteral(node);
  return stringTemplateLiteral.includes(" ");
};
