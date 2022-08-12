import { printWithCondition } from "./commonProcess/print";

export type CssBaseClass = {
  variableName: string | undefined;
  value: string | undefined;
};

/**
 * Returns cssBaseClassName either from code via regex, either from oldClassNames
 * @param oldClassNames
 * @param code
 */
export const getCssBaseClass = (oldClassNames: string[], code: string | undefined): CssBaseClass => {
  if (code) {
    // Get BEMClass argument value
    const bemClassMatches = code.match(/const(\s)*(\w)*\s*=\s*BEMClass\(.*\);/);
    if (bemClassMatches?.length) {
      const bemClassFirstMatch = bemClassMatches[0];
      printWithCondition(false, "$$$ getCssBaseClassName, bemClassFirstMatch", bemClassFirstMatch);
      const bemClass = bemClassFirstMatch.replace(/const(\s)*(\w)*\s*=\s*BEMClass\(/, "").replace(/\);/, "");
      printWithCondition(false, "$$$ getCssBaseClassName, bemClass", bemClass);

      // It can either be a string, variable
      if (bemClass.includes('"')) {
        // string - return string  value
        return { variableName: undefined, value: bemClass.replaceAll('"', "") };
      } else {
        // variable - return variable value
        const baseClassMatches = code.match(RegExp("const(\\s)*(\\w)*" + bemClass + "(\\s)*=(\\s)*(.)*;"));
        if (baseClassMatches?.length) {
          const baseClassFirstMatch = baseClassMatches[0];
          printWithCondition(false, "$$$ getCssBaseClassName, baseClassFirstMatch", baseClassFirstMatch);
          const baseClass = baseClassFirstMatch
            .replace(RegExp("const(\\s)*(\\w)*" + bemClass + '(\\s)*=(\\s)"'), "")
            .replace('";', "");
          printWithCondition(false, "$$$ getCssBaseClassName, baseClass", baseClass);
          return { variableName: bemClass, value: baseClass };
        }
      }
    }

    // If unsuccessful then try to get plain baseClass declaration
    const baseCssClassMatches = code.match(/const(.)*(BASE_CSS_CLASS|CSS_BASE_CLASS)(\s)*=(\s)*"(.)*"(\s)*;/);
    if (baseCssClassMatches?.length) {
      const baseCssClassFirstMatch = baseCssClassMatches[0];
      printWithCondition(false, "$$$ getCssBaseClassName, baseCssClassFirstMatch", baseCssClassFirstMatch);

      const baseCssClassVariableName = baseCssClassFirstMatch
        .replace(/const(\s)*/, "")
        .replace(/(\s)*=(\s)*"(.)*"(\s)*;/, "");
      printWithCondition(false, "$$$ getCssBaseClassName, baseCssClassVariableName", baseCssClassVariableName);

      const baseCssClassValue = baseCssClassFirstMatch.slice(
        baseCssClassFirstMatch.indexOf('"') + 1,
        baseCssClassFirstMatch.lastIndexOf('"')
      );
      printWithCondition(false, "$$$ getCssBaseClassName, baseCssClassValue", baseCssClassValue);
      return { variableName: baseCssClassVariableName, value: baseCssClassValue };
    }
  }

  // Return the shortest string
  return {
    variableName: undefined,
    value: oldClassNames.length
      ? oldClassNames.reduce(function (a, b) {
          return a.length <= b.length ? a : b;
        })
      : undefined
  };
};
