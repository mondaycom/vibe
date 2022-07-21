import execa from "execa";
import { existsSync } from "fs";
import { join } from "path";

/**
 * Takes a CSS file, parses it with PostCSS into CSS modules syntax, and returns
 * all valid class names that can be used by it
 *
 * PostCSS implements async processors, so we can't call it directly from within the plugin
 * itself since everything is syncronous. What we can do however, is call an external script
 * syncronously that will await the result for us.
 *
 * TODO: This is gross... need to figure out a way to call it directly???
 *
 * @param filename Fully qualified filename (path) to the CSS file
 * @returns Set of valid classnames within the CSS file
 */
export const getModuleClassNames = (filename: string) => {
	if (!existsSync(filename)) {
		throw new Error("Referenced CSS file does not exist: " + filename);
	}

	const { stdout, stderr } = execa.sync("node", [
		join(__dirname, "..", "postcss", "shell.js"),
		filename
	]);

	if (stderr) {
		throw new Error(stderr);
	}

	return new Set<string>(Object.keys(JSON.parse(stdout)));
};
