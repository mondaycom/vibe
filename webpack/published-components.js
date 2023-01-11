const path = require("path");
const { exposeIcons } = require("../src/utils/icon-utils");
const { publishedJSComponents } = require("./published-js-components");
const { publishedTSComponents } = require("./published-ts-components");
const { publishedStorybookComponents } = require("./published-storybook-components");

const SRC_PATH = path.join(__dirname, "../src");

const publishedComponents = { ...publishedJSComponents, ...publishedTSComponents, ...publishedStorybookComponents };

function getPublishedComponents() {
  return Object.entries(publishedComponents).reduce(
    (acc, [componentName, componentPath]) => ({
      ...acc,
      [componentName]: [path.join(SRC_PATH, componentPath), path.join(SRC_PATH, "/style-imports.js")]
    }),
    exposeIcons()
  );
}

module.exports = {
  publishedComponents,
  publishedJSComponents,
  publishedTSComponents,
  publishedStorybookComponents,
  getPublishedComponents,
  exposeIcons
};
