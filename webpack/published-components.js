const path = require("path");
const { exposeIcons } = require("../src/utils/icon-utils");
const { publishedJSComponents } = require("./published-js-components");
const { publishedTSComponents } = require("./published-ts-components");
const { publishedStorybookComponents } = require("./published-storybook-components");
const publishedComponents = { ...publishedJSComponents, ...publishedTSComponents };

const SRC_PATH = path.join(__dirname, "../src");
const STORYBOOK_PATH = path.join(__dirname, "../src/storybook");

function getPublishedComponents() {
  return Object.entries(publishedComponents).reduce(
    (acc, [componentName, componentPath]) => ({
      ...acc,
      [componentName]: path.join(SRC_PATH, componentPath)
    }),
    exposeIcons()
  );
}

function getPublishedStorybookComponents() {
  const res = {};
  Object.entries(publishedStorybookComponents).forEach(([componentName, componentPath]) => {
    res[`storybook/${componentName}`] = path.join(STORYBOOK_PATH, componentPath);
  });
  return res;
}

function getPublishedStorybookComponentsPaths() {
  return Object.entries(publishedStorybookComponents).map(([_componentName, componentPath]) =>
    path.join(STORYBOOK_PATH, componentPath)
  );
}

module.exports = {
  publishedComponents,
  publishedJSComponents,
  publishedTSComponents,
  publishedStorybookComponents,
  getPublishedComponents,
  getPublishedStorybookComponents,
  getPublishedStorybookComponentsPaths,
  exposeIcons
};
