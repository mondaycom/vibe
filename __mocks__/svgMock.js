/**
 * Custom Jest transformer for SVG files
 * Replace SVG file contents by a pseudo <svg /> JSX element containing only a data-filename attribute
 *
 * To make this work with Jest you need to update your Jest configuration with this:
 *   "transform": {
 *     "^.+\\.js$": "babel-jest",
 *     "^.+\\.svg$": "path/to/svg-transform.js"
 *   }
 *
 * Ref: http://facebook.github.io/jest/docs/en/tutorial-react.html#custom-transformers
 */
const path = require("path");
const babel = require("babel-core");
const reactPreset = require("babel-preset-react");

module.exports = {
  process(src, filename) {
    return "";
  }
};
