#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const execa = require("execa");
const chalk = require("chalk");
const boxt = require("boxt");

const VERSION_STRATEGIES = {
  PATCH: "patch",
  MINOR: "minor",
  MAJOR: "major"
};

const CHANGELOG_HEADERS = {
  TITLE: "# Changelog",
  UNRELEASED_VERSION: "## Unreleased",
  BUGS: "#### Bug Fixes",
  NEW_FEATURES: "#### New Features",
  ICONS: "#### New Icons",
  DEPENDENCIES: "#### Dependency Upgrades",
  COMMITTERS: "#### Committers"
};

const CHANGELOG_PATH = path.join(__dirname, "..", "CHANGELOG.md");

const CHANGES_THAT_BUMP_MINOR = [CHANGELOG_HEADERS.NEW_FEATURES];
const CHANGES_THAT_BUMP_PATCH = [CHANGELOG_HEADERS.BUGS, CHANGELOG_HEADERS.ICONS, CHANGELOG_HEADERS.DEPENDENCIES];

function release() {
  validateGithubAuthToken();
  const rawChangesText = buildChangelogSinceLastVersion();
  const newVersionStrategy = getNewVersionStrategy(rawChangesText);

  // There's nothing to release for, print a friendly message and exit
  if (!newVersionStrategy) {
    logNothingToDo();
  }

  bumpVersion(newVersionStrategy);
  const newChangelogSection = formatChanges(rawChangesText);
  updateChangelog(newChangelogSection);
}

function updateChangelog(newChangelogSection) {
  const currentChangelog = fs.readFileSync(CHANGELOG_PATH, "utf8");

  const newChangelog = currentChangelog.replace(
    CHANGELOG_HEADERS.TITLE,
    [CHANGELOG_HEADERS.TITLE, "", newChangelogSection].join("\n")
  );

  fs.writeFileSync(CHANGELOG_PATH, newChangelog, "utf8");
}

function formatChanges(changelogText) {
  const currentVersion = getCurrentVersion();

  let newchangelogText = changelogText.replace(CHANGELOG_HEADERS.UNRELEASED_VERSION, `## ${currentVersion}`);

  const commitersHeaderIndex = newchangelogText.indexOf(CHANGELOG_HEADERS.COMMITTERS);

  newchangelogText = newchangelogText.substring(0, commitersHeaderIndex);

  newchangelogText = newchangelogText.trim();

  return newchangelogText;
}

function buildChangelogSinceLastVersion() {
  const { stdout } = execa.sync("npx", ["lerna-changelog", "--from", `v${require("../package.json").version}`]);

  return stdout;
}

function getNewVersionStrategy(changelogText) {
  if (CHANGES_THAT_BUMP_MINOR.some(header => changelogText.includes(header))) {
    return VERSION_STRATEGIES.MINOR;
  }

  if (CHANGES_THAT_BUMP_PATCH.some(header => changelogText.includes(header))) {
    return VERSION_STRATEGIES.PATCH;
  }

  return null;
}

function getCurrentVersion() {
  const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "package.json"), "utf8"));

  return packageJson.version;
}

function bumpVersion(strategy) {
  execa.sync("npm", ["version", strategy]);
}

function logNothingToDo() {
  console.log("It seems like there's no need to release a new version, exiting");
  process.exit(1);
}

function validateGithubAuthToken() {
  if (!process.env.GITHUB_AUTH) {
    console.log(
      chalk.red("Please make sure to provide the"),
      chalk.yellow.underline.bold("GITHUB_AUTH"),
      chalk.red("environment variable:")
    );
    console.log();
    console.log(
      boxt(chalk.dim("$ GITHUB_AUTH=... npm run release"), {
        color: "white",
        minWidth: "full"
      })
    );
    process.exit(0);
  }
}

release();
