import { isFunction, isArray } from "lodash-es";
import { MutableRefObject } from "react";

export function chainRefFunctions(
  funcsOrRefs: Array<MutableRefObject<HTMLElement> | ((element: HTMLElement) => void | boolean)>,
  allowBreak = false
) {
  return (args: HTMLElement) => {
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

export function chainFunctions(funcs: Array<(args: any) => void | boolean>, allowBreak = false) {
  return (args: any) => {
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

export function convertToArray<T>(input: T | Array<T>): Array<T> {
  return isArray(input) ? input : [input];
}

export function NOOP() {}
