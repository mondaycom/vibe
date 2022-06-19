const { parseMondayUiCss, getPropsToAllowedCssVars } = require("../parse-monday-css");
const { PROPS_TO_ALLOWED_VARS } = require("../props-to-allowed-vars");

const ALLOWED_CSS_VARS_WITHOUT_MAPPINGS = ["--font-line-height-30", "--font-line-height-20", "--font-size-10"];

describe("props-to-allowed-vars", () => {
  const { allVarsToCanonicalValue } = parseMondayUiCss();
  const propsToAllowedCssVars = getPropsToAllowedCssVars();

  describe("PROPS_TO_ALLOWED_VARS", () => {
    const allRootCssVarsFromGeneratedCss = Object.keys(allVarsToCanonicalValue);
    const allMappedCssVars = [
      ...new Set(
        Object.values(PROPS_TO_ALLOWED_VARS).reduce((acc, { allowedVars, recommended }) => [...acc, ...allowedVars], [])
      )
    ];

    allMappedCssVars.forEach(cssVarName => {
      it(`should only include css vars that are under :root, without additional selectors - checking ${cssVarName} `, () => {
        //if this fails, this means that we mapped a css prop to a css var that doesn't exist in our CSS output
        const isExistingInCssOutput = allRootCssVarsFromGeneratedCss.includes(cssVarName);

        expect(isExistingInCssOutput).toBeTruthy();
      });
    });

    allRootCssVarsFromGeneratedCss.forEach(varFromGeneratedCss => {
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

    Object.keys(PROPS_TO_ALLOWED_VARS).forEach(cssProp => {
      const { allowedVars, recommended } = PROPS_TO_ALLOWED_VARS[cssProp];
      const valuesToMatchingVars = {};
      allowedVars.forEach(varName => {
        const varValue = allVarsToCanonicalValue[varName];
        valuesToMatchingVars[varValue] = valuesToMatchingVars[varValue] || [];
        valuesToMatchingVars[varValue].push(varName);
      });

      Object.keys(valuesToMatchingVars).forEach(value => {
        it(`should have a recommended var for each value that has multiple variables, for CSS prop ${cssProp} and value ${value}`, () => {
          const matchingVars = valuesToMatchingVars[value];
          if (matchingVars.length === 1) {
            // only one option, no need for a recommendation
            return;
          }
          const recommendationsToApply = intersect(matchingVars, recommended);
          if (recommendationsToApply.length === 1) {
            //only one recommendation, that's good
            return;
          }
          if (recommendationsToApply.length === 0) {
            fail(`Expected "${value}" to have a recommendation when being used in the CSS prop "${cssProp}", since it has multiple options: ${matchingVars.join(
              ", "
            )}
            Please choose a single variable which should be used as a recommendation.`);
          } else {
            fail(`Expected "${value}" to have a single recommendation when being used in the CSS prop "${cssProp}", since it has multiple options: ${matchingVars.join(
              ", "
            )}
            Instead, there were multiple recommendations with the same value: ${recommendationsToApply.join(", ")}. 
            Please choose a single variable which should be used as a recommendation.`);
          }
        });
      });

      Object.keys(propsToAllowedCssVars[cssProp]).forEach(value => {
        it(`should only have recommendations for values that have multiple possible variables, for CSS prop ${cssProp} and value ${value}`, () => {
          const { recommended } = propsToAllowedCssVars[cssProp][value];
          if (!recommended) {
            return;
          }

          const matchingVarsCount = valuesToMatchingVars[value].length;
          if (matchingVarsCount === 0) {
            fail(`Found a recommendation for css prop "${cssProp}" and value "${value}", even though there are no matching variables.
            Recommendations should only be added in cases that there are multiple variables that can be used, and have the same value.`);
          }
          if (matchingVarsCount === 1) {
            fail(`Found a recommendation for css prop "${cssProp}" and value "${value}", even though only one variables matches this value: "${valuesToMatchingVars[value]}".
            Recommendations should only be added in cases that there are multiple variables that can be used, and have the same value.`);
          }
        });
      });
    });
  });
});

//shamelessly copied from https://stackoverflow.com/a/37041756/17779778
function intersect(arr1, arr2) {
  var set1 = new Set(arr1);
  var set2 = new Set(arr2);
  var intersection = new Set([...set1].filter(x => set2.has(x)));
  return Array.from(intersection);
}

function fail(message) {
  throw new Error(message);
}
