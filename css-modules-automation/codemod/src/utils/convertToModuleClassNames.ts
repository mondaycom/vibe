import * as execa from "execa";
import { existsSync } from "fs";
import { join } from "path";
import { printWithCondition } from "./commonProcess/print";

/**
 * 2: Takes a CSS file, parses it with PostCSS into CSS modules syntax, and returns
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
export const convertToModuleClassNames = (filename: string): Map<string, string> => {
  if (!existsSync(filename)) {
    throw new Error("&&& convertToModuleClassNames, referenced CSS file does not exist: " + filename);
  }

  const { stdout, stderr } = execa.sync("node", [join(__dirname, "..", "postcss", "shell.js"), filename]);
  printWithCondition(false, "&&& convertToModuleClassNames, executed, filename", filename);

  if (stderr) {
    throw new Error("&&& convertToModuleClassNames, error: " + stderr);
  }

  return new Map<string, string>(Object.entries(JSON.parse(stdout)));
};
