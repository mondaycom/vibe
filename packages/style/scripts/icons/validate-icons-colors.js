#!/usr/bin/env node

// Validation rule for icons svg files, to make sure they use only allowed fill/stroke colors
// Usage: node scripts/icons/validate-icons-colors.js

const { extractColorsFromSvg, isEligibleForValidation, validateColors } = require("./utils");
const fs = require("fs");

const OUTLINED_SVGS_PATH = "src/Icons";

function validateSvgFile(name, content) {
  const colors = extractColorsFromSvg(content);
  validateColors(colors, name);
}

function readSvgFileContent(svgFilePath) {
  return fs.readFileSync(svgFilePath, "utf8").toString();
}

function validateAllSvgsInPath(path) {
  const svgFiles = fs.readdirSync(path).filter(isEligibleForValidation);
  svgFiles.forEach(svgFileName => validateSvgFile(svgFileName, readSvgFileContent(`${path}/${svgFileName}`)));
}

validateAllSvgsInPath(OUTLINED_SVGS_PATH);
