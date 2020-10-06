import isArray from "lodash/isArray";

export function chainFunctions(funcs, allowBreak = false) {
  return args => {
    // eslint-disable-next-line no-restricted-syntax
    for (const func of funcs) {
      const result = func && func(args);

      if (result === false && allowBreak) {
        return;
      }
    }
  };
}

export function convertToArray(input) {
  return isArray(input) ? input : [input];
}

export function NOOP() {}
