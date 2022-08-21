const { camelCase } = require("lodash");
const PREFIX = "monday-style-";

function removeCommonPrefix(str) {
  if (str.startsWith(PREFIX)) {
    return str.slice(PREFIX.length);
  }
  if (str.startsWith(`'${PREFIX}`)) {
    return "'" + str.slice(PREFIX.length + 1);
  }
  return str;
}

function convertToCamelCase(str) {
  return camelCase(removeCommonPrefix(str));
}

module.exports = { convertToCamelCase, removeCommonPrefix };
