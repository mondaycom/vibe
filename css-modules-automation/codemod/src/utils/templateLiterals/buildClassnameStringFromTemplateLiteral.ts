import * as t from "@babel/types";
import { printWithCondition } from "../commonProcess/print";
import { buildStringFromCallExpression } from "./buildStringFromCallExpression";
import { State } from "../../index";
import { isTemplateLiteralPartBaseClassIdentifier } from "../logical/IsTemplateLiteralPartBaseClassIdentifier";
import { removePrefix } from "../../postcss/utils/classNameStringUtils";
import { buildStringFromMemberExpression } from "./buildStringFromMemberExpression";

export type TemplateLiteralPart = {
  value: string | undefined;
  start: number | undefined | null;
  type: string;
};

export const getTemplateLiteralParts = (node: t.TemplateLiteral): TemplateLiteralPart[] => {
  printWithCondition(true, "))) getTemplateLiteralParts, node.quasis", node.quasis);
  printWithCondition(true, "))) getTemplateLiteralParts, node.expressions", node.expressions);

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

    if (e.type === "MemberExpression") {
      return {
        value: buildStringFromMemberExpression(e),
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

  printWithCondition(true, "))) getTemplateLiteralParts, parts", parts);
  return parts;
};

/**
 * Build classname string concatenating parts of TemplateLiteral
 * Example: `before--${ANCHOR_LIST_ITEM_CSS_BASE_CLASS}--after` -> `${camelCase("before--" + ANCHOR_LIST_ITEM_CSS_BASE_CLASS + "--after")}`
 * @param node TemplateLiteral node
 * @param addCamelCaseWrapping should result be wrapped in camelCase function or not
 * @param separateIdentifiers
 * @param state
 */
export const buildClassnameStringFromTemplateLiteral = (
  node: t.TemplateLiteral,
  state: State,
  addCamelCaseWrapping: boolean = true,
  separateIdentifiers: boolean = true
): string => {
  printWithCondition(true, "))) buildStringFromTemplateLiteral, node", node);

  const parts: TemplateLiteralPart[] = getTemplateLiteralParts(node);
  printWithCondition(true, "))) buildStringFromTemplateLiteral, parts", parts);

  let newString = "";
  for (let i = 0; i < parts.length; ++i) {
    const p = parts[i];
    if (p.type === "TemplateElement") {
      if (separateIdentifiers) {
        printWithCondition(true, "))) buildStringFromTemplateLiteral, TemplateElement", i, p);
        const baseClassNameIsPrev: boolean =
          i !== 0 && isTemplateLiteralPartBaseClassIdentifier(parts[i - 1], state.baseCssClass);
        const baseClassNameIsNext: boolean =
          i !== parts.length - 1 && isTemplateLiteralPartBaseClassIdentifier(parts[i + 1], state.baseCssClass);
        printWithCondition(true, "))) buildStringFromTemplateLiteral, baseClassNameIsPrev", baseClassNameIsPrev);
        printWithCondition(true, "))) buildStringFromTemplateLiteral, baseClassNameIsNext", baseClassNameIsNext);
        printWithCondition(true, "))) buildStringFromTemplateLiteral, before newString", newString);

        if (!baseClassNameIsPrev && i !== 0) newString += " + ";
        if (!baseClassNameIsPrev || i === 0) newString += "'";
        newString += p.value;
        if (!baseClassNameIsNext || i === parts.length - 1) newString += "'";
        if (!baseClassNameIsNext && i !== parts.length - 1) newString += " + ";
        printWithCondition(true, "))) buildStringFromTemplateLiteral, after newString", newString);
      } else {
        newString += p.value;
      }
    } else {
      if (separateIdentifiers) {
        if (isTemplateLiteralPartBaseClassIdentifier(p, state.baseCssClass)) {
          if (i === 0) newString += "'";
          newString += state.baseCssClass?.value;
          if (i === parts.length - 1) newString += "'";
        } else {
          newString += p.value;
        }
      } else {
        newString += `\$\{${p.value}\}`;
      }
    }
    printWithCondition(true, "))) buildStringFromTemplateLiteral, newString", newString);
  }

  // if (newString.startsWith("'") && newString.endsWith("'") && !newString.slice(1, newString.length - 1).includes("'")) {
  //   newString = newString.slice(1, newString.length - 1);
  // }

  printWithCondition(true, "))) buildStringFromTemplateLiteral, newString remove prefix", newString);
  newString = removePrefix(newString);

  const emptyStringRegex = /\s?\+?\s?''\s?\+?\s?/g;
  if (emptyStringRegex.test(newString)) {
    newString = newString.replaceAll(emptyStringRegex, "");
  }

  if (addCamelCaseWrapping) {
    newString = `\`\$\{camelCase(${newString})\}\``;
  }

  printWithCondition(true, "))) buildStringFromTemplateLiteral, newString", newString);

  return newString;
};
