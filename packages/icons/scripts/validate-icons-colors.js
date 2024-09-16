#!/usr/bin/env node

// Validation rule for icons svg files, to make sure they use only allowed fill/stroke colors
// Usage: node scripts/validate-icons-colors.js

import { extractColorsFromSvg, isEligibleForValidation, validateColors } from "./utils.js";
import fs from "fs";

const SVGS_PATH = "src/svg";

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

validateAllSvgsInPath(SVGS_PATH);
