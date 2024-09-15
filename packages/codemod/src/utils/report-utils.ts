import chalk from "chalk";
/**
 * Logs an error message about the usage of both deprecated and new props in same component with different values.
 */
export function logPropMigrationError(
  filePath: string,
  componentName: string,
  deprecatedPropName: string,
  newPropName: string
): void {
  const message =
    `\n\n${error()} ${componentNameStyle(componentName)} ${filePathStyle(filePath)}:` +
    `\n\tComponent uses both ${deprecatedPropNameStyle(deprecatedPropName)} and ${newPropNameStyle(newPropName)}. \n`;

  console.error(message);
}

// chalk styling
const error = () => chalk.red(" ERROR ");
const componentNameStyle = (name: string) => chalk.bold.bgYellow.black(` ${name} `);
const filePathStyle = (path: string) => chalk.bold(path);
const deprecatedPropNameStyle = (name: string) => chalk.italic.red(`"${name}" (deprecated)`);
const newPropNameStyle = (name: string) => chalk.italic.green(`"${name}"`);
