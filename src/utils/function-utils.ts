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

/**
 * Ids generator function (12 symbols). If IDs are generated more than 1 millisecond apart, they are 100% unique.
 */
export function generateUuid() {
  return Date.now().toString(36) + Math.random().toString(36).substring(8);
}
