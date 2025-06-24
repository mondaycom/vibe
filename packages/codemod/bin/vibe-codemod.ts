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
  v3: "v2-to-v3",
  enums: "v2-to-v3/enums"
};

const migrations = Object.keys(mapMigrationType);

const argv = yargs(hideBin(process.argv))
  .option("migration", {
    alias: "m",
    type: "string",
    description: "Migration type to run (e.g., v3, enums)",
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
  .option("yes", {
    alias: "y",
    type: "boolean",
    description: "Skip confirmation prompts (auto-proceed with dirty git)",
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
    }
  ]);

  return {
    migration: answers.migration || argv.migration,
    extensions: answers.extensions || argv.extensions
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
  const extensions = answers.extensions;
  const targetDir = argv.target;
  const verbose = argv.verbose;

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

  const isVibeCoreInstalled = checkIfPackageExists("@vibe/core");
  if (migrationType === "v3" && !isVibeCoreInstalled) {
    console.log(chalk.yellow("Warning: You need to install @vibe/core package to fully apply the v3 migration."));
  }
  if (migrationType === "enums" && !isVibeCoreInstalled) {
    console.log(chalk.red("Error: Please install @vibe/core to run the enum migration."));
    process.exit(1);
  }

  if (!isGitClean()) {
    console.warn(
      chalk.yellow(
        "Warning: Your Git working directory is not clean. It is recommended to only run this script with a clean working directory."
      )
    );

    if (argv.yes) {
      console.log(chalk.blue("Auto-proceeding due to --yes flag..."));
    } else {
      const proceed = readlineSync.question("Do you want to proceed anyway? (y/N) ");
      if (proceed.toLowerCase() !== "y") {
        console.log("Operation cancelled.");
        process.exit(1);
      }
    }
  }

  async function processTransformations(transformationFiles: string[], type = "Transformation") {
    for (let index = 0; index < transformationFiles.length; index++) {
      const transform = transformationFiles[index];
      const transformName = path.basename(transform, path.extname(transform));

      spinner.text = `Processing ${type.toLowerCase()} (${index + 1}/${transformationFiles.length}): ${transformName}`;

      try {
        const result = await runSingleTransformation(transform);

        if (result) {
          successCount++;
          spinner.succeed(chalk.green(`${type} completed: ${transformName}`));
        } else {
          failureCount++;
          spinner.fail(chalk.red(`${type} finished with errors: ${transformName}`));
        }
      } catch (error) {
        failureCount++;
        spinner.fail(chalk.red(`${type} failed: ${transformName}`));
      }

      if (index < transformationFiles.length - 1) {
        spinner.start();
      }
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

  const filesToProcessLast =
    migrationType === "v3"
      ? [
          resolve(transformationsDir, "next-imports-migration.js"),
          resolve(transformationsDir, "type-imports-migration.js"),
          resolve(transformationsDir, "packages-rename-migration.js")
        ]
      : [];
  const orderedTransformationFiles = [
    ...transformationFiles.filter(file => !filesToProcessLast.includes(file)),
    ...filesToProcessLast
  ];

  await processTransformations(orderedTransformationFiles);

  spinner.stop();

  const duration = ((Date.now() - startTime) / 1000).toFixed(2) + "s";

  printReport(successCount, failureCount, errorsCount, duration);

  if (verbose) {
    console.log(chalk.green(`Transformation logs written to ${logFile}`));
  }
}

function checkIfPackageExists(packageName: string): boolean {
  const packageJsonPath = path.resolve(process.cwd(), "package.json");
  if (!fs.existsSync(packageJsonPath)) {
    console.error(chalk.red(`Error: package.json not found at ${packageJsonPath}`));
    process.exit(1);
  }
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
  const dependencies = packageJson.dependencies || {};
  const version = dependencies[packageName];
  return !!version;
}

main();
