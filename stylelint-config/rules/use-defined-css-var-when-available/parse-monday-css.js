const postcss = require("postcss");
const fs = require("fs");
const path = require("path");
const { PROPS_TO_ALLOWED_VARS } = require("./props-to-allowed-vars");

function getReferencedPropFromVar(value) {
  // var(--my-var) => --my-var
  const VAR_REGEX = /^var\((--.+)\)/;

  return VAR_REGEX.exec(value)[1];
}

function readCssFromDefaultPath() {
  const stylesCssPath = path.resolve(__dirname, "../../../dist/index.min.css");
  return fs.readFileSync(stylesCssPath).toString();
}

function parseMondayUiCss(css = readCssFromDefaultPath()) {
  const ast = postcss.parse(css);

  const varsToCanonicalValue = {}; // css vars that are mapped to canonical values. e.g. {"--color-primary": "#131313"}
  const canonicalValuesToVars = {}; // matching css vars for each canonical value. e.g. {"16px": ["--font-size-h3", "--spacing-medium"]}
  const referenceTokens = {}; // css vars that are pointing to other css vars. e.g. {"--color-primary": "--color-red"}
  const referenceTokensToCanonicalValue = {}; // maps between reference token names to canonical values. e.g. if "--font-size-h5: var(--font-size-30)" and "--font-size-30: 16px", then {"--font-size-h5": "16px"}

  ast.walkDecls(/^--/, decl => {
    if (!decl.parent || decl.parent.selector !== ":root") {
      return; // we only care about truly global variables
    }
    const { prop, value } = decl;
    const isValueCssProp = value.includes("var(--");
    if (!isValueCssProp) {
      // this is a declaration of a new css var
      varsToCanonicalValue[prop] = value;
      canonicalValuesToVars[value] = canonicalValuesToVars[value] || [];
      if (!canonicalValuesToVars[value].includes(prop)) {
        canonicalValuesToVars[value].push(prop);
      }
    } else {
      referenceTokens[prop] = value;
    }
  });

  Object.keys(referenceTokens).forEach(referenceToken => {
    const tokenValue = referenceTokens[referenceToken];
    let referencedVar = getReferencedPropFromVar(tokenValue);
    while (referenceTokens[referencedVar]) {
      referencedVar = referenceTokens[referencedVar];
    }
    const referencedCanonicalValue = varsToCanonicalValue[referencedVar];
    if (referencedCanonicalValue) {
      referenceTokensToCanonicalValue[referenceToken] = referencedCanonicalValue;
    }
  });

  const allVarsToCanonicalValue = {}; //maps between all vars (reference or not) to the canonical value

  Object.keys(varsToCanonicalValue).forEach(varName => {
    allVarsToCanonicalValue[varName] = varsToCanonicalValue[varName];
  });
  Object.keys(referenceTokensToCanonicalValue).forEach(varName => {
    allVarsToCanonicalValue[varName] = referenceTokensToCanonicalValue[varName];
  });

  return { allVarsToCanonicalValue };
}

/**
 * @returns {{[cssProp: string]: {[value: string]: {allowedVars: string[], recommended: string | undefined}}}}: a map between a css prop to expected CSS vars replacements per values, and a recommendation if exists.
 * For example:
 {
    padding: {
      {
        "8px": { allowedVars: [ "--spacing-small" ] },
        "16px": { allowedVars: [ "--spacing-medium" ] },
      }
    },
    "font-size":{
      "14px": { 
        allowedVars: [ "--font-size-general-label", "--font-size-subtext" ],
        recommended: "--font-size-general-label"
      },
    }
  }
 */
function getPropsToAllowedCssVars() {
  const { allVarsToCanonicalValue } = parseMondayUiCss();
  const propsToReplacementConfig = {};
  Object.keys(PROPS_TO_ALLOWED_VARS).forEach(prop => {
    const { allowedVars, recommended } = PROPS_TO_ALLOWED_VARS[prop];
    if (!allowedVars) {
      return;
    }
    propsToReplacementConfig[prop] = {};
    allowedVars.forEach(varName => {
      const varCanonicalValue = allVarsToCanonicalValue[varName];
      if (!varCanonicalValue) {
        return;
      }
      propsToReplacementConfig[prop][varCanonicalValue] = propsToReplacementConfig[prop][varCanonicalValue] || {
        allowedVars: []
      };
      propsToReplacementConfig[prop][varCanonicalValue].allowedVars.push(varName);
      if (recommended && recommended.includes(varName)) {
        propsToReplacementConfig[prop][varCanonicalValue].recommended = varName;
      }
    });
  });

  return propsToReplacementConfig;
}

module.exports = {
  parseMondayUiCss,
  getPropsToAllowedCssVars
};
