import * as t from "@babel/types";
import template from "@babel/template";

/**
 * Replaces all class names within the given className string, with
 * those that are supplied in the map.
 *
 * @param classNames Set of classnames
 * @param importIdentifier Name of the identifier to reference class names via
 * @param className Class name string to replace class names within
 * @returns New classname string
 */
export const replaceClassNamesInStringLiteral = (
	classNames: Set<string>,
	importIdentifier: string,
	literalNode: t.StringLiteral
) => {
	console.log(
		"*** replaceClassNamesInStringLiteral, literalNode.value",
		literalNode.value
	);
	// Check if this is a single class name
	const classNameArr = literalNode.value.trim().split(" ");
	console.log(
		"*** replaceClassNamesInStringLiteral, classNameArr",
		classNameArr
	);
	if (classNameArr.length < 2) {
		console.log(
			"*** replaceClassNamesInStringLiteral, classNameArr.length < 2"
		);

		// If the class name isn't in the modular class name list, skip
		if (!classNames.has(literalNode.value)) {
			console.log(
				"*** replaceClassNamesInStringLiteral, If the class name isn't in the modular class name list, skip, literalNode",
				literalNode
			);
			return literalNode;
		}

		// Otherwise return a computed MemberExpression i.e. styles["className"]
		// const res = t.memberExpression(
		// 	t.identifier(importIdentifier),
		// 	t.stringLiteral(literalNode.value),
		// 	true
		// );
		// const res = t.assignmentExpression(
		// 	"=",
		// 	t.identifier("className"),
		// 	t.stringLiteral(`${importIdentifier}[${literalNode.value}]`)
		// );
		// const res = t.stringLiteral(
		// 	`${importIdentifier}[${literalNode.value}]`
		// );

		const res = t.memberExpression(
			t.identifier(importIdentifier),
			t.stringLiteral(literalNode.value),
			true
		);
		console.log(
			'*** replaceClassNamesInStringLiteral, Otherwise return a computed MemberExpression i.e. styles["className"], res',
			res
		);
		return res;
	}

	// Generate an array of template string parts, consisting of computed entries for
	// any class name which is in the moduler class name list, and regular strings otherwise
	const templateParts = classNameArr.map((v) =>
		classNames.has(v) ? `\${${importIdentifier}["${v}"]}` : v
	);

	console.log(
		"*** replaceClassNamesInStringLiteral, templateParts",
		templateParts
	);
	const res = template(`\`${templateParts.join(" ")}\``)();
	console.log("*** replaceClassNamesInStringLiteral, res", res);
	return res;
};
