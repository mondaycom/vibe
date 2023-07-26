#!/usr/bin/env node
const execa = require("execa");
const fs = require("fs");

function getChangelog() {
  const { stdout } = execa.sync("changelog", ["monday-ui-style", "all", "-m"]);
  return stdout;
}

function formatChangelog(markdown) {
  let formattedMarkdown = markdown.replaceAll(/\n\s\s\* version bump\n/g, "");
  formattedMarkdown = formattedMarkdown.substring(0, formattedMarkdown.indexOf("\n\n0.1.127 / 2022-07-17"));
  return formattedMarkdown;
}

function writeToFile(markdown) {
  fs.writeFileSync("./CHANGELOG.md", markdown);
}

const changelog = getChangelog();
const formattedChangelog = formatChangelog(changelog);
writeToFile(formattedChangelog);
