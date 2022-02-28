import { useMemo, useRef } from "react";
import isEqual from "lodash/isEqual";

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
    if (!additionalPropsObj) return currentStyleObj;
    return {
      ...currentStyleObj,
      ...additionalPropsObj
    };
  }, [currentStyleObj, additionalPropsObj]);

  return style;
}
