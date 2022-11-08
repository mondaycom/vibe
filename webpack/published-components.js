const path = require("path");
const { exposeIcons } = require("../src/utils/icon-utils");
const { publishedJSComponents } = require("./published-js-components");
const { publishedTSComponents } = require("./published-ts-components");
const publishedComponents = { ...publishedJSComponents, ...publishedTSComponents };

const SRC_PATH = path.join(__dirname, "../src");

function getPublishedList(publishedList, mergedObject = {}) {
  return Object.entries(publishedList).reduce(
    (acc, [componentName, componentPath]) => ({
      ...acc,
      [componentName]: path.join(SRC_PATH, componentPath)
    }),
    mergedObject
  );
}
function getPublishedStorybookInfra() {
  return getPublishedList(publishedComponents);
}

function getPublishedComponents() {
  return getPublishedList(publishedComponents, exposeIcons);
}

module.exports = {
  publishedComponents,
  publishedJSComponents,
  publishedTSComponents,
  getPublishedComponents,
  getPublishedStorybookInfra,
  exposeIcons
};
