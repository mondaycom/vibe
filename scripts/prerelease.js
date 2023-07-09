#!/usr/bin/env node

const execa = require("execa");

function getVersionPreid() {
  const branchName = process.env.BRANCH_NAME;
  const commitSHA = process.env.COMMIT_SHA;

  // Find the last occurrence of the '/' character
  const index = branchName.lastIndexOf("/");
  let finalPrName = branchName.replaceAll("_", "-");
  // If the character was found, return the substring after it
  if (index !== -1) {
    finalPrName = branchName.substring(index + 1);
  }

  return `${finalPrName}-${commitSHA.substring(0, 10)}`;
}

function pushBumpedVersion() {
  const preid = getVersionPreid();
  const { stdout } = execa.sync("npm", ["version", "prerelease", `--preid=${preid}`]);
  const versionId = stdout.toString().trim();

  // Notify new prerelease version was created
  console.log(`New prerelease version was created: ${versionId}`);
}

pushBumpedVersion();
