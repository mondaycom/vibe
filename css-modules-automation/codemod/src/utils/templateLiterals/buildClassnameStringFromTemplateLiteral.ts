import * as t from "@babel/types";
import { printWithCondition } from "../commonProcess/print";
import { buildStringFromCallExpression } from "./buildStringFromCallExpression";
import { State } from "../../index";

export type TemplateLiteralPart = {
  value: string | undefined;
  start: number | undefined | null;
  type: string;
};

export const getTemplateLiteralParts = (node: t.TemplateLiteral): TemplateLiteralPart[] => {
  printWithCondition(false, "))) getTemplateLiteralParts, node.quasis", node.quasis);
  printWithCondition(false, "))) getTemplateLiteralParts, node.expressions", node.expressions);

  const quasis: TemplateLiteralPart[] = node.quasis.map(q => ({
    value: q.value.cooked,
    start: q.start,
    type: q.type as string
  }));
  const expressions: TemplateLiteralPart[] = node.expressions.map(e => {
    if (e.type === "Identifier") {
      return {
        value: e.name,
        start: e.start,
        type: e.type as string
      };
    }

    if (e.type === "CallExpression") {
      return {
        value: buildStringFromCallExpression(e),
        start: e.start,
        type: e.type as string
      };
    }

    return {
      value: undefined,
      start: e.start,
      type: e.type as string
    };
  });
  const parts: TemplateLiteralPart[] = [...quasis, ...expressions]
    .filter(p => !!p.value)
    .sort((a, b) => {
      if (a?.start && b?.start) {
        return a.start > b.start ? 1 : -1;
      }
      return 0;
    });

  printWithCondition(false, "))) getTemplateLiteralParts, parts", parts);
  return parts;
};

/**
 * Build classname string concatenating parts of TemplateLiteral
 * Example: `before--${ANCHOR_LIST_ITEM_CSS_BASE_CLASS}--after` -> `${camelCase("before--" + ANCHOR_LIST_ITEM_CSS_BASE_CLASS + "--after")}`
 * @param node TemplateLiteral node
 * @param addCamelCaseWrapping should resut be wrapped in camelCase function or not
 * @param separateIdentifiers
 * @param state
 */
export const buildClassnameStringFromTemplateLiteral = (
  node: t.TemplateLiteral,
  state: State,
  addCamelCaseWrapping: boolean = true,
  separateIdentifiers: boolean = true
): string => {
  const parts: TemplateLiteralPart[] = getTemplateLiteralParts(node);

  let newString = "";
  for (let i = 0; i < parts.length; ++i) {
    const p = parts[i];
    if (p.type === "TemplateElement") {
      if (separateIdentifiers) {
        if (i !== 0 && parts[i - 1].type !== "Identifier" && parts[i - 1].value === state.baseCssClass?.variableName)
          newString += ' + "';
        newString += p.value;
        if (
          i !== parts.length - 1 &&
          parts[i + 1].type !== "Identifier" &&
          parts[i + 1].value === state.baseCssClass?.variableName
        )
          newString += '" + ';
      } else {
        newString += p.value;
      }
    } else {
      if (separateIdentifiers) {
        if (p.type === "Identifier" && p.value === state.baseCssClass?.variableName) {
          newString += state.baseCssClass?.value;
        } else {
          newString += p.value;
        }
      } else {
        newString += `\$\{${p.value}\}`;
      }
    }
    printWithCondition(false, "))) buildStringFromTemplateLiteral, newString", newString);
  }

  if (addCamelCaseWrapping && newString.includes("+")) {
    newString = `\`\$\{camelCase(${newString})\}\``;
  }

  printWithCondition(false, "))) buildStringFromTemplateLiteral, newString", newString);

  return newString;
};
