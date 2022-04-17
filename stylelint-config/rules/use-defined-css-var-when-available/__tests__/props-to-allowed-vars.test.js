const { parseMondayUiCss } = require("../parse-monday-css");
const { PROPS_TO_ALLOWED_VARS } = require("../props-to-allowed-vars");

const ALLOWED_CSS_VARS_WITHOUT_MAPPINGS = ["--font-line-height-30", "--font-line-height-20", "--font-size-10"];

describe("props-to-allowed-vars", () => {
  describe("PROPS_TO_ALLOWED_VARS", () => {
    const allRootCssVarsFromGeneratedCss = Object.keys(parseMondayUiCss().allVarsToCanonicalValue);
    const allMappedCssVars = [
      ...new Set(Object.values(PROPS_TO_ALLOWED_VARS).reduce((acc, cssVars) => [...acc, ...cssVars], [])),
    ];

    allMappedCssVars.forEach((cssVarName) => {
      it(`should only include css vars that are under :root, without additional selectors - checking ${cssVarName} `, () => {
        //if this fails, this means that we mapped a css prop to a css var that doesn't exist in our CSS output
        const isExistingInCssOutput = allRootCssVarsFromGeneratedCss.includes(cssVarName);

        expect(isExistingInCssOutput).toBeTruthy();
      });
    });

    allRootCssVarsFromGeneratedCss.forEach((varFromGeneratedCss) => {
      it(`should map the css var ${varFromGeneratedCss} to valid css props that can use it`, () => {
        const isCssVarMapped = allMappedCssVars.includes(varFromGeneratedCss);

        if (!ALLOWED_CSS_VARS_WITHOUT_MAPPINGS.includes(varFromGeneratedCss)) {
          // If this fails, a CSS var was added without mapping it to recommended CSS props.
          // Without this mapping, we won't be able to recommend the proper usage of the CSS var.
          // Please add your var to PROPS_TO_ALLOWED_VARS
          expect(isCssVarMapped).toBeTruthy();
        } else {
          // If this fails, a CSS var was whitelisted as a variable without mapping, but it has mapping in PROPS_TO_ALLOWED_VARS.
          // Either remove the CSS var from ALLOWED_CSS_VARS_WITHOUT_MAPPINGS, or remove the CSS var mapping from PROPS_TO_ALLOWED_VARS.
          expect(isCssVarMapped).toBeFalsy();
        }
      });
    });
  });
});
