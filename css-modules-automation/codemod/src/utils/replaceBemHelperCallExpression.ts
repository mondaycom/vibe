import * as t from "@babel/types";
import { printWithCondition } from "./print";
import { NodePath } from "@babel/traverse";
import { BEMClass } from "./bemHelper";

/**
 * Replace all bemHelper functions like bemHelper({element: element, state: "state"}) with full classname = `${baseClassName}_${element}__state`
 * @param classNames Set of classnames
 * @param path Path to the CallExpression node
 */
export const replaceBemHelperCallExpression = (
  classNames: Map<string, string>,
  path: NodePath<t.CallExpression>
): t.StringLiteral | t.TemplateLiteral | t.CallExpression | t.Statement | t.Statement[] => {
  // TODO Refactor - simplify the logic

  const oldClassNames = Array.from(classNames.keys());
  // TODO now it's just a shortest className, but will have to find classname from BEMClass(...) and const ..._CSS_BASE_CLASS = expressions
  const baseCssClassName = oldClassNames.reduce(function (a, b) {
    return a.length <= b.length ? a : b;
  });
  const bemHelper = BEMClass(baseCssClassName);
  const bemArguments = path.node.arguments;
  // Arguments should contain one object {element: ..., state: ...}
  if (bemArguments.length === 1 && t.isObjectExpression(bemArguments[0])) {
    const properties = bemArguments[0].properties as t.ObjectProperty[];
    const bemElement = properties.find(p => t.isIdentifier(p.key) && p.key.name === "element")?.value;
    const bemState = properties.find(p => t.isIdentifier(p.key) && p.key.name === "state")?.value;

    // If all arguments are StringLiterals
    if ((!bemElement || bemElement.type === "StringLiteral") && (!bemState || bemState.type === "StringLiteral")) {
      const bemClassName = bemHelper({ element: bemElement?.value, state: bemState?.value });
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
      printWithCondition(true, "~~~ CallExpression, bemHelper, bemClassName", bemClassName);

      const quasis: t.TemplateElement[] = [];
      const expressions: (t.Expression | t.TSType)[] = [];

      let start = 0;
      let stringLeft = bemClassName;
      while (stringLeft) {
        printWithCondition(true, "~~~ CallExpression, bemHelper, iteration, stringLeft", stringLeft);
        if (stringLeft.indexOf("${") > 0) {
          const expressionPart = stringLeft.substr(0, stringLeft.indexOf("${"));
          printWithCondition(true, "~~~ CallExpression, bemHelper, iteration, expressionPart", expressionPart);
          quasis.push({ ...t.templateElement({ raw: expressionPart, cooked: expressionPart }), start: ++start });
          stringLeft = stringLeft.substr(stringLeft.indexOf("${"));
        } else {
          if (stringLeft.indexOf("${") == 0) {
            const quasisPart = stringLeft.substring(2, stringLeft.indexOf("}"));
            printWithCondition(true, "~~~ CallExpression, bemHelper, iteration, quasisPart", quasisPart);
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

      quasis.push({ ...t.templateElement({ raw: "", cooked: "" }), start: ++start });

      return t.templateLiteral(quasis, expressions);
    }
  }
  printWithCondition(true, "~~~ CallExpression, bemHelper, wasn't able to replace path", path);
  path.skip();
  return path.node;
};
