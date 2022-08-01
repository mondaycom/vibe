import * as t from "@babel/types";
import { printWithCondition } from "./print";

/**
 * Build classname string concatenating parts of TemplateLiteral
 * Example: `before--${ANCHOR_LIST_ITEM_CSS_BASE_CLASS}--after` -> `${camelCase("before--" + ANCHOR_LIST_ITEM_CSS_BASE_CLASS + "--after")}`
 * @param node TemplateLiteral node
 */
export const buildClassnameStringFromTemplateLiteral = (node: t.TemplateLiteral): string => {
  const quasis = node.quasis.map(q => ({
    value: q.value.cooked,
    start: q.start,
    type: q.type as string
  }));
  const expressions = (node.expressions as t.Identifier[]).map(e => ({
    value: e.name,
    start: e.start,
    type: e.type as string
  }));
  const parts: { start: number | null | undefined; type: string; value: string | undefined }[] = [
    ...quasis,
    ...expressions
  ]
    .filter(p => !!p.value)
    .sort((a, b) => {
      if (a?.start && b?.start) {
        return a.start > b.start ? 1 : -1;
      }
      return 0;
    });

  printWithCondition(false, "))) buildStringFromTemplateLiteral, parts", parts);

  let newString = "";
  for (let i = 0; i < parts.length; ++i) {
    const p = parts[i];
    if (p.type === "TemplateElement") {
      if (i !== 0) newString += " + ";
      newString += `"${p.value}"`;
      if (i !== parts.length - 1) newString += " + ";
    } else {
      newString += p.value;
    }
  }
  newString = `\`\$\{camelCase(${newString})\}\``;

  printWithCondition(false, "))) buildStringFromTemplateLiteral, newString", newString);

  return newString;
};
