#!/usr/bin/env node
import { join, resolve } from "path";
import { spawn, spawnSync } from "child_process";
import * as globby from "globby";
import * as fs from "fs";
import * as path from "path";
import inquirer from "inquirer";
import ora from "ora";
import chalk from "chalk";
import readlineSync from "readline-sync";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const mapMigrationType: { [key: string]: string } = {
  v3: "v2-to-v3"
};

const migrations = Object.keys(mapMigrationType);

const argv = yargs(hideBin(process.argv))
  .option("migration", {
    alias: "m",
    type: "string",
    description: "Migration type to run (e.g., v3)",
    choices: migrations
  })
  .option("target", {
    alias: "t",
    type: "string",
    description: "Target directory to apply transformations",
    default: process.cwd()
  })
  .option("extensions", {
    alias: "x",
    type: "array",
    description: "File extensions to include (e.g., jsx, tsx, js, ts)",
    choices: ["jsx", "tsx", "js", "ts"]
  })
  .option("verbose", {
    alias: "v",
    type: "boolean",
    description: "Enable verbose mode (logs to a file)",
    default: false
  })
  .help().argv;

async function runWizard() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "migration",
      message: "Which migration would you like to run?",
      choices: migrations,
      default: argv.migration || "v3",
      when: !argv.migration
    },
    {
      type: "checkbox",
      name: "extensions",
      message: "Which file extensions would you like to include?",
      choices: [{ name: "jsx", checked: true }, { name: "tsx", checked: true }, { name: "js" }, { name: "ts" }],
      default: argv.extensions || ["jsx", "tsx"],
      when: !argv.extensions
    },
    {
      type: "confirm",
      name: "runOptional",
      message: "Would you like to run the optional migrations as well?",
      default: false,
      when: true
    }
  ]);

  return {
    migration: answers.migration || argv.migration,
    extensions: answers.extensions || argv.extensions,
    runOptional: answers.runOptional || false
  };
}

function printReport(successCount: number, failureCount: number, errorsCount: number, duration: string) {
  if (failureCount) {
    console.log(
      `${chalk.dim(`\nTransformations  `)}${chalk.bold.red(`${failureCount} failed`)} | ${chalk.bold.green(
        `${successCount} succeeded`
      )}`
    );
    console.log(`${chalk.dim(`         Errors  `)}${chalk.bold.red(errorsCount)}`);
  } else {
    console.log(`${chalk.dim(`\nTransformations  `)}${chalk.bold.green(`${successCount} succeeded`)}`);
  }
  console.log(`${chalk.dim(`       Duration  `)}${duration}`);
  console.log(chalk.blue(`\nAutomatic migration finished. Follow the migration guide to continue:`));
  console.log(`${chalk.underline.blue("https://vibe.monday.com/?path=/docs/migration-guide--docs")}\n`);
}

async function main() {
  const answers = await runWizard();

  const migrationType = answers.migration;
  const transformationsDir = join(__dirname, "..", "transformations", "core", mapMigrationType[migrationType]);
  const optionalTransformationsDir = join(transformationsDir, "optional");
  const extensions = answers.extensions;
  const targetDir = argv.target;
  const verbose = argv.verbose;
  const runOptional = answers.runOptional;

  const logFile = resolve(targetDir, "codemod.log");

  if (!fs.existsSync(transformationsDir)) {
    console.error(chalk.red(`Error: Transformations directory does not exist: ${transformationsDir}`));
    process.exit(1);
  }

  function isGitClean() {
    try {
      const status = spawnSync("git", ["status", "--porcelain"], { encoding: "utf-8" }).stdout.trim();
      return status === "";
    } catch (error) {
      console.error(chalk.red("Error checking Git status:"));
      process.exit(1);
    }
  }

  if (!isGitClean()) {
    console.warn(
      chalk.yellow(
        "Warning: Your Git working directory is not clean. It is recommended to only run this script with a clean working directory."
      )
    );

    const proceed = readlineSync.question("Do you want to proceed anyway? (y/N) ");
    if (proceed.toLowerCase() !== "y") {
      console.log("Operation cancelled.");
      process.exit(1);
    }
  }

  const verbosityLevel: number = verbose ? 2 : 0;
  const outputTarget: string = verbose ? `>> "${logFile}"` : "";

  let successCount = 0;
  let failureCount = 0;
  let errorsCount = 0;
  const startTime = Date.now();

  console.log(chalk.green(`Running transformations for migration: ${migrationType} in directory: ${targetDir}`));

  const spinner = ora(`Running transformations...`).start();

  async function runSingleTransformation(transform: string) {
    return new Promise(resolve => {
      const child = spawn(
        "node",
        [
          require.resolve("jscodeshift/bin/jscodeshift"),
          `--extensions=${extensions.join(",")}`,
          "--ignore-pattern=node_modules",
          "--ignore-pattern=**/*.d.ts",
          `--verbose=${verbosityLevel}`,
          "--max-workers=8",
          "--no-babel",
          "-t",
          transform,
          targetDir,
          outputTarget
        ],
        {
          stdio: verbose ? "inherit" : ["inherit", "pipe", "pipe"],
          shell: true,
          env: { ...process.env, FORCE_COLOR: "1" }
        }
      );

      let hasError = false;

      if (child.stderr) {
        child.stderr.on("data", data => {
          const errorOutput = data.toString();
          process.stderr.write(errorOutput);
          if (errorOutput.includes("ERROR")) {
            hasError = true;
            errorsCount++;
          }
        });
      }

      if (child.stdout) {
        child.stdout.on("data", data => {
          const output = data.toString();
          if (output.includes("ERROR")) {
            hasError = true;
            errorsCount++;
          }
        });
      }

      child.on("exit", code => {
        if (code !== 0 || hasError) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  }

  const transformationFiles: string[] = globby.sync(`${transformationsDir}/*.js`, {
    ignore: ["node_modules/**", "**/*.d.ts"]
  });

  if (transformationFiles.length === 0) {
    console.error(chalk.red("No transformation files found. Please check the migration name supplied."));
    process.exit(1);
  }

  const filesToProcessLast = [
    resolve(transformationsDir, "type-imports-migration.js"),
    resolve(transformationsDir, "packages-rename-migration.js")
  ];
  const orderedTransformationFiles = [
    ...transformationFiles.filter(file => !filesToProcessLast.includes(file)),
    ...filesToProcessLast
  ];

  for (let index = 0; index < orderedTransformationFiles.length; index++) {
    const transform = orderedTransformationFiles[index];
    const transformName = path.basename(transform, path.extname(transform));

    spinner.text = `Processing transformation (${index + 1}/${orderedTransformationFiles.length}): ${transformName}`;

    try {
      const result = await runSingleTransformation(transform);

      if (result) {
        successCount++;
        spinner.succeed(chalk.green(`Transformation completed: ${transformName}`));
      } else {
        failureCount++;
        spinner.fail(chalk.red(`Transformation finished with errors: ${transformName}`));
      }
    } catch (error) {
      failureCount++;
      spinner.fail(chalk.red(`Transformation failed: ${transformName}`));
    }

    if (index < orderedTransformationFiles.length - 1) {
      spinner.start();
    }
  }

  if (runOptional && fs.existsSync(optionalTransformationsDir)) {
    console.log(chalk.blue(`\nRunning optional transformations from: ${optionalTransformationsDir}`));

    const optionalTransformationFiles: string[] = globby.sync(`${optionalTransformationsDir}/*.js`, {
      ignore: ["node_modules/**", "**/*.d.ts"]
    });

    for (let index = 0; index < optionalTransformationFiles.length; index++) {
      const transform = optionalTransformationFiles[index];
      const transformName = path.basename(transform, path.extname(transform));

      spinner.text = `Processing optional transformation (${index + 1}/${optionalTransformationFiles.length}): ${transformName}`;

      try {
        const result = await runSingleTransformation(transform);

        if (result) {
          successCount++;
          spinner.succeed(chalk.green(`Optional transformation completed: ${transformName}`));
        } else {
          failureCount++;
          spinner.fail(chalk.red(`Optional transformation finished with errors: ${transformName}`));
        }
      } catch (error) {
        failureCount++;
        spinner.fail(chalk.red(`Optional transformation failed: ${transformName}`));
      }

      if (index < optionalTransformationFiles.length - 1) {
        spinner.start();
      }
    }
  }

  spinner.stop();

  const duration = ((Date.now() - startTime) / 1000).toFixed(2) + "s";

  printReport(successCount, failureCount, errorsCount, duration);

  if (verbose) {
    console.log(chalk.green(`Transformation logs written to ${logFile}`));
  }
}

main();
