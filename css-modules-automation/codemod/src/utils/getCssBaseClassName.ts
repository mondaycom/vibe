import { printWithCondition } from "./print";

export type CssBaseClass = {
  variableName: string | undefined;
  value: string;
};

/**
 * Returns cssBaseClassName either from code via regex, either from oldClassNames
 * @param oldClassNames
 * @param code
 */
export const getCssBaseClassName = (oldClassNames: string[], code: string | undefined): CssBaseClass => {
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
        return { variableName: undefined, value: bemClass.replace('"', "") };
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
  }

  // Return the shortest string
  return {
    variableName: undefined,
    value: oldClassNames.reduce(function (a, b) {
      return a.length <= b.length ? a : b;
    })
  };
};
