import * as t from "@babel/types";
import { printWithCondition } from "./print";
import { NodePath } from "@babel/traverse";
import { BEMClass } from "./bemHelper";
import { template } from "@babel/core";

/**
 * Replace all bemHelper functions like bemHelper({element: element, state: "state"}) with full classname = `${baseClassName}_${element}__state`
 * @param classNames Set of classnames
 * @param path Path to the CallExpression node
 */
export const replaceBemHelperCallExpressions = (
  classNames: Map<string, string>,
  path: NodePath<t.CallExpression>
): t.StringLiteral | t.Statement | t.Statement[] | undefined => {
  const oldClassNames = Array.from(classNames.keys());
  // TODO now it's just a shortest className, but will have to find classname from BEMClass(...) and const ..._CSS_BASE_CLASS = expressions
  const baseCssClassName = oldClassNames.reduce(function (a, b) {
    return a.length <= b.length ? a : b;
  });
  const bemHelper = BEMClass(baseCssClassName);
  const bemArguments = path.node.arguments;
  if (bemArguments.length === 1 && t.isObjectExpression(bemArguments[0])) {
    const properties = bemArguments[0].properties as t.ObjectProperty[];
    const bemElement = properties.find(p => t.isIdentifier(p.key) && p.key.name === "element")?.value;
    const bemState = properties.find(p => t.isIdentifier(p.key) && p.key.name === "state")?.value;

    if ((!bemElement || bemElement.type === "StringLiteral") && (!bemState || bemState.type === "StringLiteral")) {
      const bemClassName = bemHelper({ element: bemElement?.value, state: bemState?.value });
      printWithCondition(false, "~~~ CallExpression, bemHelper, bemClassName", bemClassName);
      return t.stringLiteral(bemClassName);
    } else if (
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

      return template(`\`${bemClassName}\``)();
    }
  }
};
