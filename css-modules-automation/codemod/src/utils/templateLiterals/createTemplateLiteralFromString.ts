import * as t from "@babel/types";
import { printWithCondition } from "../commonProcess/print";

/**
 * Create templateLiteral from string with format "monday-style-tooltip-${theme}"
 * @param templateString
 */
export const createTemplateLiteralFromString = (templateString: string): t.TemplateLiteral => {
  const quasis: t.TemplateElement[] = [];
  const expressions: (t.Expression | t.TSType)[] = [];

  let start = 0;
  let stringLeft = templateString;
  printWithCondition(false, "~~~ createTemplateLiteralOutOfString, templateString", templateString);
  while (stringLeft) {
    printWithCondition(false, "~~~ createTemplateLiteralOutOfString, iteration, stringLeft", stringLeft);
    if (stringLeft.indexOf("${") > 0) {
      const expressionPart = stringLeft.substr(0, stringLeft.indexOf("${"));
      printWithCondition(false, "~~~ createTemplateLiteralOutOfString, iteration, expressionPart", expressionPart);
      quasis.push({ ...t.templateElement({ raw: expressionPart, cooked: expressionPart }), start: ++start });
      stringLeft = stringLeft.substr(stringLeft.indexOf("${"));
    } else {
      if (stringLeft.indexOf("${") == 0) {
        const quasisPart = stringLeft.substring(2, stringLeft.indexOf("}"));
        printWithCondition(false, "~~~ createTemplateLiteralOutOfString, iteration, quasisPart", quasisPart);
        expressions.push({ ...t.identifier(quasisPart), start: ++start });
        const closedQuasisIndex = stringLeft.indexOf("}");
        if (closedQuasisIndex !== stringLeft.length - 1) {
          stringLeft = stringLeft.substr(closedQuasisIndex + 1);
        } else {
          stringLeft = "";
        }
      }
    }
  }

  quasis.push({ ...t.templateElement({ raw: "", cooked: "" }, true), start: ++start });
  const res = t.templateLiteral(quasis, expressions);
  printWithCondition(false, "~~~ createTemplateLiteralOutOfString, res", res);
  return res;
};
