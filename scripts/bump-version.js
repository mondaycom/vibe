#!/usr/bin/env node
/* eslint no-console: 0 */

const { exec } = require("child_process");
const fs = require("fs");

const BumpTypes = {
  MAJOR: 0,
  MINOR: 1,
  PATCH: 2
};

function bumpVersion(bumpType) {
  console.log("reading package.json from", process.cwd());
  const packageJson = JSON.parse(fs.readFileSync(`${process.cwd()}/package.json`, "utf-8"));

  exec(
    `npm info ${packageJson.name} --json`,
    {
      cwd: process.cwd()
    },
    (error, stdout) => {
      if (error) {
        console.error("Could not bump version due to an error");
        console.error(error);
        process.exit(1);
      }

      const packageInfo = JSON.parse(stdout);
      const latestVersion = packageInfo["dist-tags"].latest;
      console.log("latest version is:", latestVersion);

      const version = latestVersion.split(".");

      version[bumpType] = (Number(version[bumpType]) + 1).toString();
      for (let i = bumpType + 1; i < version.length; i++) {
        version[i] = "0";
      }

      const bumpVersion = version.join(".");

      console.log("Bumping version to:", bumpVersion);

      packageJson.version = bumpVersion;

      fs.writeFileSync("./package.json", JSON.stringify(packageJson, null, 2));
      console.log("New version saved in package.json file");
      process.exit(0);
    }
  );
}

module.exports = {
  bumpVersion,
  BumpTypes
};
