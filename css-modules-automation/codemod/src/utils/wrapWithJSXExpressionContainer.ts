import * as t from "@babel/types";

export const wrapWithJSXExpressionContainer = (
	literalNode: t.StringLiteral
) => {
	const node = literalNode.value as any as t.Node;
	// @ts-ignore
	const stringValue: string = node["value"];
	const res = t.jsxExpressionContainer(t.stringLiteral(stringValue));
	return res;
};
