import * as t from "@babel/types";
import { getTemplateLiteralParts } from "./buildClassnameStringFromTemplateLiteral";

/**
 * Create string with format "monday-style-tooltip-${theme}" from templateLiteral
 * @param node
 */
export const createStringFromTemplateLiteral = (node: t.TemplateLiteral): string => {
  const parts = getTemplateLiteralParts(node);
  const stringTemplateLiteral = parts
    .map(p => (p.type === "TemplateElement" ? p.value : `\$\{${p.value}\}`))
    .join("")
    .trim();
  return stringTemplateLiteral;
};
