import * as t from "@babel/types";
import { printWithCondition } from "./commonProcess/print";
import { NodePath } from "@babel/traverse";
import { BEMClass } from "./bemHelper";
import { State } from "../index";
import { createTemplateLiteralFromString } from "./templateLiterals/createTemplateLiteralFromString";

/**
 * Replace all bemHelper functions like bemHelper({element: element, state: "state"}) with full classname = `${baseClassName}_${element}__state`
 * @param path Path to the CallExpression node
 * @param state current commonProcess state
 */
export const replaceBemHelperCallExpression = (
  state: State,
  path: NodePath<t.CallExpression>
): t.StringLiteral | t.TemplateLiteral | t.CallExpression | t.Statement | t.Statement[] => {
  // TODO Refactor - simplify the logic
  printWithCondition(false, "~~~ CallExpression, bemHelper, path", path);

  const bemArguments = path.node.arguments;
  // Arguments should contain one object {element: ..., state: ...}
  if (bemArguments.length === 1 && t.isObjectExpression(bemArguments[0])) {
    const properties = bemArguments[0].properties as t.ObjectProperty[];
    const bemElement = properties.find(p => t.isIdentifier(p.key) && p.key.name === "element")?.value;
    const bemState = properties.find(p => t.isIdentifier(p.key) && p.key.name === "state")?.value;

    printWithCondition(false, "~~~ CallExpression, bemHelper, state.baseCssClass", state.baseCssClass);
    const bemHelper = BEMClass(state.baseCssClass?.value);

    // If all arguments are StringLiterals
    if ((!bemElement || bemElement.type === "StringLiteral") && (!bemState || bemState.type === "StringLiteral")) {
      const bemClassName = bemHelper({
        element: bemElement?.type === "StringLiteral" ? bemElement?.value : undefined,
        state: bemState?.type === "StringLiteral" ? bemState?.value : undefined
      });
      printWithCondition(false, "~~~ CallExpression, bemHelper, bemClassName", bemClassName);
      return t.stringLiteral(bemClassName);
    } else if (
      //
      (!bemElement || bemElement.type === "StringLiteral" || bemElement.type === "Identifier") &&
      (!bemState || bemState.type === "StringLiteral" || bemState.type === "Identifier")
    ) {
      // Either state either element is Identifier (variable)
      let bemElementString = bemElement && bemElement.type === "StringLiteral" && bemElement.value;
      let bemStateString = bemState && bemState.type === "StringLiteral" && bemState.value;
      if (bemElement?.type === "Identifier") {
        bemElementString = `\$\{${bemElement.name}\}`;
      }
      if (bemState?.type === "Identifier") {
        bemStateString = `\$\{${bemState.name}\}`;
      }
      printWithCondition(false, "~~~ CallExpression, bemHelper, bemElementString", bemElementString);
      printWithCondition(false, "~~~ CallExpression, bemHelper, bemStateString", bemStateString);

      const bemClassName = bemHelper({ element: bemElementString, state: bemStateString });
      printWithCondition(false, "~~~ CallExpression, bemHelper, bemClassName", bemClassName);

      return createTemplateLiteralFromString(bemClassName);
    }
  }
  printWithCondition(true, "~~~ CallExpression, bemHelper, wasn't able to replace path", path);
  path.skip();
  return path.node;
};
