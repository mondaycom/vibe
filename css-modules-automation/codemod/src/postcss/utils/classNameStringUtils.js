const { camelCase } = require("lodash");
const MONDAY_STYLE_PREFIX = "monday-style-";
const BASE_CLASS_PREFIX_PATTERN = /monday-style-\w+?[-_]+/gm;

function removePrefix(str) {
  if (BASE_CLASS_PREFIX_PATTERN.test(str)) {
    return str.replace(BASE_CLASS_PREFIX_PATTERN, "");
  }
  if (str.startsWith(MONDAY_STYLE_PREFIX)) {
    return str.slice(MONDAY_STYLE_PREFIX.length);
  }
  return str;
}

function convertToCamelCase(str) {
  return camelCase(removePrefix(str));
}

module.exports = { convertToCamelCase, removePrefix };
