import { useMemo, useRef } from "react";
import isEqual from "lodash/isEqual";
import isEmpty from "lodash/isEmpty";

// remove empty values
function removeEmpty(obj: CSSStyleDeclaration) {
  const newObj = { ...obj };
  for (const k in newObj) {
    if (newObj[k] === undefined) {
      delete newObj[k];
    }
  }

  return newObj;
}

export default function useStyle(currentStyle: CSSStyleDeclaration, additionalProps?: CSSStyleDeclaration) {
  const additionalPropsRef = useRef<CSSStyleDeclaration>(additionalProps);
  const currentStyleRef = useRef<CSSStyleDeclaration>(currentStyle);
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
