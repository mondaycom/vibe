import chalk from "chalk";
/**
 * Logs a warning message about the usage of both deprecated and new props in same component.
 */
export function logPropMigrationError(
  filePath: string,
  componentName: string,
  deprecatedPropName: string,
  newPropName: string
): void {
  const message =
    `${packageName()} ${error()} ${componentNameStyle(componentName)} in ${filePathStyle(filePath || "path/to/file")} uses both ` +
    `${deprecatedPropNameStyle(deprecatedPropName)} and ${newPropNameStyle(newPropName)}. ` +
    `Skipping update. Please review this usage and refer to the migration guide for further instructions.`;

  console.error(message);
}

// chalk styling
const packageName = () => chalk.dim("[@vibe/codemod]");
const error = () => chalk.black.bgRed("Error");
const filePathStyle = (path: string) => chalk.bold(path);
const componentNameStyle = (name: string) => chalk.bold.yellow.bgBlack(name);
const deprecatedPropNameStyle = (name: string) => chalk.italic.red(name + " (deprecated)");
const newPropNameStyle = (name: string) => chalk.italic.green(name);
