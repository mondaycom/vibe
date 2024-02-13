#!/usr/bin/env node
const execa = require("execa");
const fs = require("fs");

function getChangelog() {
  // TODO changelog only works fine for last 50 versions - replace with other package someday
  const { stdout } = execa.sync("changelog", ["monday-ui-style", "50", "-m"]);
  return stdout;
}

function formatChangelog(markdown) {
  return markdown.replaceAll(/\n\s\s\* version bump\n/g, "");
}

function writeToFile(markdown) {
  fs.writeFileSync("./CHANGELOG.md", markdown);
}

const changelog = getChangelog();
const formattedChangelog = formatChangelog(changelog);
writeToFile(formattedChangelog);
