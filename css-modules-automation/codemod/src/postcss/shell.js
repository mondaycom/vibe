const postcss = require("postcss");
const postcssrc = require("postcss-load-config");
const postCssModules = require("postcss-modules");
const prettify = require("postcss-prettify");
const { readFileSync, writeFileSync } = require("fs");
const replaceSingleLineCommentsWithMultiline = require("./utils/replaceSingleLineCommentsWithMultiline");
const removeEmptyLinesBetweenImports = require("./utils/removeEmptyLinesBetweenImports");
const convertToCamelCase = require("./utils/convertToCamelCase");

const execute = async filename => {
  let classNames = {};
  const modulesPlugin = postCssModules({
    getJSON: (_, json) => {
      classNames = json;
    },
    generateScopedName: function (name) {
      return convertToCamelCase(name);
    }
  });

  const { plugins, options } = await postcssrc({
    filename
  });

  options.from = filename;
  options.to = null;

  const contents = readFileSync(filename).toString();
  const res = await postcss([modulesPlugin, ...plugins]).process(contents, options);

  // Prettify css: for some reason doesn't work if is inserted to plugins
  const cssWithMultilineComments = replaceSingleLineCommentsWithMultiline(res.css);
  const prettifiedRes = prettify.process(cssWithMultilineComments);
  const prettifiedCss = removeEmptyLinesBetweenImports(prettifiedRes.css);

  // Write css to the same file
  writeFileSync(filename, prettifiedCss);

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
