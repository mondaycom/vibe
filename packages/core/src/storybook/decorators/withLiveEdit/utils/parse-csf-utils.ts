import { transformFromAst } from "@babel/standalone";
import { parse } from "@babel/parser";
import {
  File,
  Program,
  Expression,
  Statement,
  ObjectProperty,
  FunctionExpression,
  ArrowFunctionExpression,
  isObjectExpression,
  isBlockStatement,
  isExpressionStatement,
  isObjectProperty,
  isIdentifier,
  isArrowFunctionExpression,
  isFunctionExpression
} from "@babel/types";

const parseCsfToAst = (csfString: string) => {
  return parse(csfString, {
    plugins: ["typescript", "jsx"],
    sourceType: "module"
  });
};

function findRenderProperty(body: Statement[]): ObjectProperty {
  return body
    .flatMap(node =>
      isExpressionStatement(node) && isObjectExpression(node.expression) ? node.expression.properties : []
    )
    .find(prop => isObjectProperty(prop) && isIdentifier(prop.key) && prop.key.name === "render") as ObjectProperty;
}

function prepareTransformTarget(renderProperty: ObjectProperty): Program {
  const { value } = renderProperty;
  const isFunction = isFunctionExpression(value) || isArrowFunctionExpression(value);
  if (!isFunction) {
    // e.g. render: something
    const expression = value as Expression;
    return {
      type: "Program",
      body: [{ type: "ExpressionStatement", expression }],
      directives: [],
      sourceType: "module"
    };
  }

  // e.g. render: () => {...}, render: () => (...), render()
  const { body } = value as FunctionExpression | ArrowFunctionExpression;

  return {
    type: "Program",
    body: [
      {
        type: "ExpressionStatement",
        expression: isBlockStatement(body) ? value : body
      }
    ],
    directives: [],
    sourceType: "module"
  };
}

function transformAstToCode(ast: File): string {
  // docs says transformFromAst is void, but it is not because of a breaking change
  const { code } = transformFromAst(ast, null, { presets: [] }) as unknown as { code: string };
  return code;
}

export function extractRenderAttributeFromCsf(csfString: string) {
  const originalAst = parseCsfToAst(csfString);

  const renderProperty = findRenderProperty(originalAst.program.body);
  if (!renderProperty) {
    return null;
  }

  const transformTarget = prepareTransformTarget(renderProperty);
  if (!transformTarget) {
    return null;
  }

  const transformedAst: File = {
    type: "File",
    program: transformTarget
  };

  return transformAstToCode(transformedAst);
}
