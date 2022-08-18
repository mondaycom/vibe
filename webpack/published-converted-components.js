const path = require("path");
const publishedComponents = {
  Button: "components/Button/Button",
  AlertBannerButton: "components/AlertBanner/AlertBannerButton",
  ToastButton: "components/Toast/ToastButton/ToastButton"
};
const SRC_PATH = path.join(__dirname, "../src");

function getPublishedComponents() {
  return Object.entries(publishedComponents).reduce((acc, [componentName, componentPath]) => ({
    ...acc,
    [componentName]: path.join(SRC_PATH, componentPath)
  }));
}

module.exports = {
  publishedComponents,
  getPublishedComponents
};
