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
  COMMITTERS: "#### Committers"
};

const CHANGELOG_PATH = path.join(__dirname, "..", "CHANGELOG.md");

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
  commitAndPush();
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
  try {
    const { stdout } = execa.sync("lerna-changelog", ["--from=latest"]);

    return stdout;
  } catch (e) {
    console.log("e:", e);
  }
}

function commitAndPush() {
  const version = getCurrentVersion();

  execa.sync("git", ["add", "."]);
  execa.sync("git", ["commit", "-m", `Release version ${version}`]);
  execa.sync("git", ["push"]);
}

function getNewVersionStrategy(changelogText) {
  if (changelogText.includes(CHANGELOG_HEADERS.NEW_FEATURES)) {
    return VERSION_STRATEGIES.MINOR;
  }

  if (changelogText.includes(CHANGELOG_HEADERS.BUGS)) {
    return VERSION_STRATEGIES.PATCH;
  }

  return null;
}

function getCurrentVersion() {
  const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "package.json"), "utf8"));

  return packageJson.version;
}

function bumpVersion(strategy) {
  execa.sync("npm", ["version", strategy, "--git-tag-version=false"]);
}

function logNothingToDo() {
  console.log("It seems like there's no need to release a new version, exiting");
  process.exit(0);
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
