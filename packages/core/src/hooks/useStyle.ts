import { type CSSProperties, useMemo, useRef } from "react";
import { isEqual } from "es-toolkit";

const isEmpty = (value?: unknown): boolean => {
  if (value == null) {
    return true;
  }

  if (typeof value === "string" || Array.isArray(value) || (typeof value === "object" && "length" in value)) {
    return value.length === 0;
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }

  return true;
};

// remove empty values
function removeEmpty(obj: CSSProperties) {
  const newObj = { ...obj };
  for (const k in newObj) {
    if (newObj[k as keyof typeof newObj] === undefined) {
      delete newObj[k as keyof typeof newObj];
    }
  }

  return newObj;
}

export default function useStyle(currentStyle: CSSProperties, additionalProps?: CSSProperties) {
  const additionalPropsRef = useRef<CSSProperties>(additionalProps);
  const currentStyleRef = useRef<CSSProperties>(currentStyle);
  // using deep equal in order to allow sending new object for additionalProps
  // but with the same values inside i.e. '{ color, width }'
  if (!isEqual(additionalPropsRef.current, additionalProps)) {
    additionalPropsRef.current = additionalProps;
  }
  if (!isEqual(currentStyleRef.current, currentStyle)) {
    currentStyleRef.current = currentStyle;
  }
  const currentStyleObj = currentStyleRef.current;
  const additionalPropsObj = additionalPropsRef.current;
  return useMemo(() => {
    const nonEmptyObj = removeEmpty(additionalPropsObj);
    if (isEmpty(nonEmptyObj)) return currentStyleObj;
    return {
      ...currentStyleObj,
      ...nonEmptyObj
    };
  }, [currentStyleObj, additionalPropsObj]);
}
