#!/usr/bin/env node

// Validation rule for icons svg files, to make sure they use only allowed fill/stroke colors

const fs = require("fs");

// Files on which the rule doesn't apply
const EXCEPTIONAL_ICONS = ["ConnectedDoc.svg"];
const OUTLINED_SVGS_PATH = "src/Icons";
const ALLOWED_COLORS = ["currentColor", "none"];

const svgFiles = fs.readdirSync(OUTLINED_SVGS_PATH);
svgFiles.forEach(svgFile => {
  if (!svgFile.endsWith(".svg") || EXCEPTIONAL_ICONS.includes(svgFile)) {
    return;
  }

  const content = fs.readFileSync(`${OUTLINED_SVGS_PATH}/${svgFile}`, "utf8").toString();
  const colors = content
    .match(/(fill|stroke)="(\w*)"/g)
    .filter(match => !!match)
    .map(match => match.replace(/["']/g, "").replace(/(fill|stroke)=/, ""));
  colors.forEach(colorValue => {
    if (!ALLOWED_COLORS.includes(colorValue)) {
      throw Error(generateErrorMessage(colorValue, svgFile));
    }
  });
});

function colorErrorMessage(message) {
  return `\x1b[31m${message}\x1b[0m`;
}

function generateErrorMessage(colorValue, svgFile) {
  return colorErrorMessage(`validate-icons-colors: Invalid fill/stroke color '${colorValue}' used in '${svgFile}'.
      Should be one of the folowing values for outlined icons: ${JSON.stringify(ALLOWED_COLORS)}.
      If color='white' and it's declared in <rect> (when using <clipPath> element), delete it and check if the icon looks fine`);
}
