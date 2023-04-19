const execa = require("execa");
const { stdout } = execa.sync("npx", ["lerna-changelog", "--from", `v${require("../package.json").version}`]);
console.log(stdout);
