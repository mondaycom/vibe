/* eslint-disable no-undef */
const fs = require("fs");

const ICONS_PATH = "src/components/Icon/Icons/components";

function exposeIcons() {
  const files = fs.readdirSync(ICONS_PATH);

  return files.reduce((acc, file) => {
    acc[`/icons/${file.split(".")[0]}`] = `${ICONS_PATH}/${file}`;
    return acc;
  }, {});
}

module.exports = {
  exposeIcons
};
