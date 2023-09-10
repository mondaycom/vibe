// Files on which the rule doesn't apply
const EXCEPTIONAL_ICONS = ["ConnectedDoc.svg"];
const ALLOWED_COLORS = ["currentColor", "none"];

function isEligibleForValidation(svgFile) {
  return svgFile.endsWith(".svg") && !EXCEPTIONAL_ICONS.includes(svgFile);
}

function validateColors(colors, svgFileName, allowedColors = ALLOWED_COLORS) {
  colors.forEach(({ attribute, color }) => {
    if (!allowedColors.includes(color)) {
      throw Error(generateErrorMessage(attribute, color, svgFileName));
    }
  });
}

function extractColorsFromSvg(content) {
  const colorMatches = content.match(/(fill|stroke)=["']([\w#]+)["']/g) || [];
  return colorMatches.map(match => {
    const [, attribute, color] = match.match(/(fill|stroke)=["']([\w#]+)["']/) || [];
    return { attribute, color };
  });
}

function colorErrorMessage(message) {
  return `\x1b[31m${message}\x1b[0m`;
}

function generateErrorMessage(attribute, color, svgFileName) {
  return colorErrorMessage(`validate-icons-colors: Invalid color - ${attribute}="${color}" used in '${svgFileName}'.
      Should be one of the folowing values for outlined icons: ${JSON.stringify(ALLOWED_COLORS)}.
      If color='white' and it's declared in <rect> (when using <clipPath> element), delete it and check if the icon looks fine`);
}

module.exports = {
  EXCEPTIONAL_ICONS,
  ALLOWED_COLORS,
  isEligibleForValidation,
  validateColors,
  extractColorsFromSvg
};
