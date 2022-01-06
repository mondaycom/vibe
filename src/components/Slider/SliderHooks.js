import { useCallback, useEffect, useRef, useState } from "react";

function ensureSingleValueText(valueText, value, formatter) {
  if (valueText) {
    return valueText;
  }
  if (typeof value === "undefined") {
    return undefined;
  }
  if (typeof formatter !== "function") {
    return value;
  }
  return formatter(value);
}

function ensureValueText(valueText, value, formatter) {
  if (!Array.isArray(value)) {
    return ensureSingleValueText(valueText, value, formatter);
  }
  return value.map((valueSingle, index) => {
    const valueTextSingle = Array.isArray(valueText) ? valueText[index] : undefined;
    return ensureSingleValueText(valueTextSingle, valueSingle, formatter);
  });
}

export function useIsStateControlledFromOutside(value) {
  const [isControlled] = useState(typeof value !== "undefined");
  return isControlled;
}

export function useSliderRail() {
  const railRef = useRef(null);
  const [railCoords, setRailCoords] = useState({ left: 0, right: 100, width: 100 });

  const defineRailCoords = useCallback(() => {
    if (!railRef.current) {
      return;
    }
    const railRect = railRef.current.getBoundingClientRect();
    const { left, right, width } = railRect;
    setRailCoords({ left, right, width });
  }, [railRef, setRailCoords]);

  useSliderResize(defineRailCoords);

  useEffect(() => {
    defineRailCoords();
  }, [defineRailCoords]);

  return { railCoords, railRef };
}

// TODO: can be used as global common/shared util-hooks
export function useSliderResize(onResize) {
  const handleResize = useCallback(() => {
    if (typeof onResize === "function") {
      onResize();
    }
  }, [onResize]);

  useEffect(() => {
    // TODO: enhance by ResizeObserve
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
}

export function useSliderValue({ defaultValue, isControlled, value }) {
  const initialValue = isControlled ? value : defaultValue;
  const [internalStateValue, setInternalStateValue] = useState(initialValue);
  if (isControlled) {
    return [value, () => {}];
  }
  return [internalStateValue, setInternalStateValue];
}

export function useSliderValues({ defaultValue, value, valueFormatter, valueText }) {
  const isControlled = useIsStateControlledFromOutside(value);
  const [actualValue, setSelectedValue] = useSliderValue({ defaultValue, isControlled, value });
  const actualValueText = ensureValueText(valueText, actualValue, valueFormatter);
  return { actualValue, actualValueText, isControlled, setSelectedValue };
}
