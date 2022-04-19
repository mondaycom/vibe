import { useMemo, useRef } from "react";
import isEqual from "lodash/isEqual";
import isEmpty from "lodash/isEmpty";

// remove empty values
const removeEmpty = obj => {
  if (!obj) return obj;
  const newObj = {};
  Object.keys(obj).forEach(key => {
    if (obj[key] !== undefined) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};

export default function useStyle(currentStyle, additionalProps) {
  const additionalPropsRef = useRef(additionalProps);
  const currentStyleRef = useRef(currentStyle);
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
  const style = useMemo(() => {
    const nonEmptyObj = removeEmpty(additionalPropsObj);
    if (isEmpty(nonEmptyObj)) return currentStyleObj;
    return {
      ...currentStyleObj,
      ...nonEmptyObj
    };
  }, [currentStyleObj, additionalPropsObj]);

  return style;
}
