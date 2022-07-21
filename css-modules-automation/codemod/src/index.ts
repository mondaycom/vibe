import { PluginObj, types as t, Visitor } from "@babel/core";
import { NodePath } from "@babel/traverse";
import { defaults } from "lodash";
import { dirname, resolve } from "path";
import { getModuleClassNames } from "./utils/getModuleClassNames";
import { isCssImportDeclaration } from "./utils/isCssImportDeclaration";
import { replaceClassNamesInStringLiteral } from "./utils/replaceClassNamesInStringLiteral";

type PluginOptions = {
	importIdentifier: "styles";
};

type State = {
	opts: PluginOptions;
	classNames: Set<string>;
};

const PLUGIN_DEFAULTS = {
	importIdentifier: "styles"
};

/**
 * These visitors take a string literal, checks to see if it's a valid CSS module
 * class name (from `State.classNames`), and if so replaces them with the corresponding
 * CSS module lookup e.g. `style["className"]`.
 */
const stringLiteralReplacementVisitors: Visitor<State> = {
	StringLiteral: (path, { classNames, opts }) => {
		// Ignore strings inside object lookups i.e. obj["className"]
		if (path.parentPath.isMemberExpression()) {
			return;
		}

		// Generate a new string
		const newPath = replaceClassNamesInStringLiteral(
			classNames,
			opts.importIdentifier,
			path.node
		);

		// If the literal is inside an object property definition, we need to change
		// it to be a computed value instead.
		const isProperty = path.parentPath.isObjectProperty();
		if (isProperty) {
			const parentPath = path.parentPath as NodePath<t.ObjectProperty>;
			parentPath.replaceWith(
				t.objectProperty(newPath, parentPath.node.value, true, false)
			);
		}

		// Otherwise just replace the literal completely
		else {
			path.replaceWith(newPath as any);
		}
	}
};

/**
 * These visitors look within JSX `className` attributes, looking for string literals
 * which we can process into `style["className"]` lookups, as well as variable references
 * in the containing scope which also contain string literals.
 */
const classNameReplacementVisitors: Visitor<State> = {
	...stringLiteralReplacementVisitors,

	Identifier: ({ node, scope }, state) => {
		const binding = scope.getBinding(node.name);
		if (binding == null) {
			return;
		}

		binding.path.traverse(stringLiteralReplacementVisitors, state);
	}
};

/**
 * Theese visitors process all JSX `className` attributes and traverses them
 * them using the `replacementVisitors`.
 */
const classNameAttributeVisitors: Visitor<State> = {
	JSXAttribute: (path, state) => {
		const { name } = path.node.name;
		if (name !== "className") {
			return;
		}

		path.traverse(classNameReplacementVisitors, state);
	}
};

/**
 * These visitors process top-level import statements, looking for all CSS imports.
 * When found, we'll retrieve and parse the CSS using PostCSS, to return the top
 * level CSS module class names that can be used in the code. We'll then store this
 * information in `State.classNames`, to be used in the above processing steps
 */
const importVisitors: Visitor<State> = {
	ImportDeclaration: (path, state) => {
		const { hub, node } = path;

		// Ignore imports of non-CSS files
		if (!isCssImportDeclaration(node)) {
			return;
		}

		// Calculate the file path relative to the current file
		const scssFilename = resolve(
			dirname(hub.file.opts.filename),
			node.source.value
		);

		// Get all relevant class names from the file
		const classNames = getModuleClassNames(scssFilename);

		// Replace the existing import with a wildcard import, namespaced under
		// a module-scope identifier we can reference the keys of. This will be
		// the CSS module classname map provided by webpack css-loader with modules
		// enabled usually, or possibly PostCSS modules plugin like we use here.
		path.replaceWith(
			t.importDeclaration(
				[
					t.importNamespaceSpecifier(
						t.identifier(state.opts.importIdentifier)
					)
				],
				node.source
			)
		);

		// Traverse the top-level program path for JSX className attributes
		hub.file.path.traverse(classNameAttributeVisitors, {
			...state,
			classNames
		});
	}
};

export default (): PluginObj<State> => ({
	name: "react-css-modules",
	visitor: {
		Program: (programPath, state) => {
			programPath.traverse(importVisitors, {
				...state,
				opts: defaults({}, state.opts, PLUGIN_DEFAULTS)
			});
		}
	}
});
