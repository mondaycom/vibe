const postcss = require("postcss");
const postcssrc = require("postcss-load-config");
const postCssModules = require("postcss-modules");
const { readFileSync, writeFileSync } = require("fs");
const prettify = require("postcss-prettify");

function camelCase(str) {
  return str.split(/[-_]+/).reduce((a, b) => a + b.charAt(0).toUpperCase() + b.slice(1));
}

const execute = async filename => {
  let classNames = {};
  const modulesPlugin = postCssModules({
    getJSON: (_, json) => {
      classNames = json;
    },
    generateScopedName: function (name) {
      return camelCase(name);
    }
  });

  const { plugins, options } = await postcssrc({
    filename
  });

  options.from = filename;
  options.to = null;

  const contents = readFileSync(filename).toString();
  const res = await postcss([modulesPlugin, prettify, ...plugins]).process(contents, options);

  // Prettify css: for some reason doesn't work if is inserted to plugins
  const prettifiedRes = prettify.process(res.css);
  writeFileSync(filename, prettifiedRes.css);

  return classNames;
};

module.exports = execute;

// CLI support
if (require.main === module) {
  (async () => {
    let result;
    try {
      result = await execute(process.argv[2]);
      console.log(JSON.stringify(result));
    } catch (e) {
      console.error(e.message);
    }
  })();
}
