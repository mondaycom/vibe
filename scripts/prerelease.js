#!/usr/bin/env node

const execa = require("execa");

function getVersionPreid() {
  const branchName = process.env.BRANCH_NAME;
  const commitSHA = process.env.COMMIT_SHA;
  // To get unique package version even if it was run on the same commit
  const timestamp = Date.now().toString().slice(-5);

  // Find the last occurrence of the '/' character
  const index = branchName.lastIndexOf("/");
  let finalPrName = branchName;
  // If the character was found, return the substring after it
  if (index !== -1) {
    finalPrName = branchName.substring(index + 1);
  }

  return `${finalPrName}-${commitSHA}-${timestamp}`;
}

function pushBumpedVersion() {
  const preid = getVersionPreid();
  const { stdout } = execa.sync("npm", ["version", "prerelease", `--preid=${preid}`]);
  const versionId = stdout.toString().trim();

  // Notify new prerelease version was created
  console.log(`New prerelease version was created: ${versionId}`);
}

pushBumpedVersion();
