import { ImportDeclaration } from "@babel/types";
import { extname } from "path";

const VALID_EXTENSIONS = new Set(["scss", "css", "less", "postcss", "pcss"]);

export const isCssImportDeclaration = (node: ImportDeclaration) => {
	// Ignore imports of non-CSS files
	const filename = node.source.value;
	if (!VALID_EXTENSIONS.has(extname(filename).substr(1))) {
		return false;
	}

	// Ignore imports that already have a name
	if (node.specifiers.length > 0) {
		return false;
	}

	return true;
};
