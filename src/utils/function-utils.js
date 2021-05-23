import isArray from "lodash/isArray";
import isFunction from "lodash/isFunction";

export function chainRefFunctions(funcsOrRefs, allowBreak = false) {
  return args => {
    for (let i = 0; i < funcsOrRefs.length; i++) {
      const funcOrRef = funcsOrRefs[i];
      try {
        let result;
        if (isFunction(funcOrRef)) {
          result = funcOrRef(args);
        } else if (funcOrRef) {
          funcOrRef.current = args;
        }
        if (result === false && allowBreak) {
          return;
        }
      } catch (e) {
        console.error(e);
        return;
      }
    }
  };
}

export function chainFunctions(funcs, allowBreak = false) {
  return args => {
    // eslint-disable-next-line no-restricted-syntax
    for (let i = 0; i < funcs.length; i++) {
      const func = funcs[i];
      try {
        const result = func && func(args);
        if (result === false && allowBreak) {
          return;
        }
      } catch (e) {
        console.error(e);
        return;
      }
    }
  };
}

export function convertToArray(input) {
  return isArray(input) ? input : [input];
}

export function NOOP() {}
