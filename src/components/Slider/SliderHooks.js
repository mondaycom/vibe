import { useCallback, useEffect, useRef, useState } from "react";
import { NOOP } from "../../utils/function-utils";
import useResizeObserver from "../../hooks/useResizeObserver";

const UPDATE_SLIDER_SIZE_DEBOUNCE = 200;

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

  useResizeObserver({
    ref: railRef,
    callback: defineRailCoords,
    debounceTime: UPDATE_SLIDER_SIZE_DEBOUNCE
  });

  useEffect(() => {
    defineRailCoords();
  }, [defineRailCoords]);

  return { railCoords, railRef };
}

export function useSliderValue({ defaultValue, isControlled, value }) {
  const initialValue = isControlled ? value : defaultValue;
  const [internalStateValue, setInternalStateValue] = useState(initialValue);
  if (isControlled) {
    return [value, NOOP];
  }
  return [internalStateValue, setInternalStateValue];
}

export function useSliderValues({ defaultValue, value, valueFormatter, valueText }) {
  const isControlled = useIsStateControlledFromOutside(value);
  const [actualValue, setSelectedValue] = useSliderValue({ defaultValue, isControlled, value });
  const actualValueText = ensureValueText(valueText, actualValue, valueFormatter);
  return { actualValue, actualValueText, isControlled, setSelectedValue };
}
