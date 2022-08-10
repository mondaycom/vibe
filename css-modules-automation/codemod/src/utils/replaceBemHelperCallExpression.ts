import * as t from "@babel/types";
import { Expression, PatternLike } from "@babel/types";
import { printWithCondition } from "./commonProcess/print";
import { NodePath } from "@babel/traverse";
import { State } from "../index";
import { buildClassnameStringFromTemplateLiteral } from "./templateLiterals/buildClassnameStringFromTemplateLiteral";
import { createTemplateLiteralFromString } from "./templateLiterals/createTemplateLiteralFromString";

const getBemArgumentStringValue = (node: Expression | PatternLike | undefined, state: State): string | undefined => {
  if (!node) {
    return undefined;
  }

  if (t.isStringLiteral(node)) {
    return node.value;
  }

  if (t.isIdentifier(node)) {
    return `\$\{${node.name}\}`;
  }

  if (t.isTemplateLiteral(node)) {
    return buildClassnameStringFromTemplateLiteral(node, state, false, false);
  }

  return undefined;
};

/**
 * Replace all bemHelper functions like bemHelper({element: element, state: "state"}) with full classname = `${baseClassName}_${element}__state`
 * @param path Path to the CallExpression node
 * @param state current commonProcess state
 */
export const replaceBemHelperCallExpression = (
  state: State,
  path: NodePath<t.CallExpression>
): t.StringLiteral | t.TemplateLiteral | t.CallExpression | t.Statement | t.Statement[] => {
  printWithCondition(false, "~~~ CallExpression, bemHelper, path", path);

  const bemArguments = path.node.arguments;
  // Arguments should contain one object {element: ..., state: ...}
  if (bemArguments.length === 1 && t.isObjectExpression(bemArguments[0])) {
    const properties = bemArguments[0].properties as t.ObjectProperty[];
    const bemElement = properties.find(p => t.isIdentifier(p.key) && p.key.name === "element")?.value;
    const bemState = properties.find(p => t.isIdentifier(p.key) && p.key.name === "state")?.value;

    printWithCondition(false, "~~~ CallExpression, bemHelper, state.baseCssClass", state.baseCssClass);
    printWithCondition(false, "~~~ CallExpression, bemHelper, bemElement", bemElement);
    printWithCondition(false, "~~~ CallExpression, bemHelper, bemState", bemState);

    let bemElementStringValue: string | undefined = getBemArgumentStringValue(bemElement, state);
    bemElementStringValue = bemElementStringValue ? `_${bemElementStringValue}` : "";
    let bemStateStringValue: string | undefined = getBemArgumentStringValue(bemState, state);
    bemStateStringValue = bemStateStringValue ? `--${bemStateStringValue}` : "";

    printWithCondition(false, "~~~ CallExpression, bemHelper, bemElementStringValue", bemElementStringValue);
    printWithCondition(false, "~~~ CallExpression, bemHelper, bemStateStringValue", bemStateStringValue);

    const bemClassName = `${state.baseCssClass?.value}${bemElementStringValue}${bemStateStringValue}`;
    printWithCondition(false, "~~~ CallExpression, bemHelper, bemClassName", bemClassName);

    if (!bemClassName.includes("${")) {
      return t.stringLiteral(bemClassName);
    } else {
      return createTemplateLiteralFromString(bemClassName);
    }
  }
  printWithCondition(true, "~~~ CallExpression, bemHelper, wasn't able to replace path", path);
  path.skip();
  return path.node;
};
