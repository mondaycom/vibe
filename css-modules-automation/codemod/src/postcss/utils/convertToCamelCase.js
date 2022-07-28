function convertToCamelCase(str) {
  return str.split(/[-_]+/).reduce((a, b) => a + b.charAt(0).toUpperCase() + b.slice(1));
}

module.exports = convertToCamelCase;
