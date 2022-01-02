import { useEffect, useRef, useState } from "react";

function ensureValueText(valueText, value, formatter) {
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

export function useControlledOrInternal(value) {
  const [isControlled] = useState(typeof value !== "undefined");
  return isControlled;
}

export function useSliderInteractions({ min, max, step }) {
  const railRef = useRef(null);
  const [coords, setCoords] = useState({ left: 0, right: 100, width: 100 });

  function defineCoords() {
    const railRect = railRef.current.getBoundingClientRect();
    const { left, right, width } = railRect;
    setCoords({ left, right, width });
  }

  function moveToPx(offsetInPx) {
    const valuePoints = max - min;
    const pxToValuePoints = coords.width / valuePoints;
    const offsetInValuePoints = Math.round(offsetInPx / pxToValuePoints) + min;
    const steppedOffset = Math.round(offsetInValuePoints / step) * step;
    console.log("moveToPx", { offsetInPx, offsetInValuePoints, step, steppedOffset, min, max });
    const newValue = steppedOffset;
    if (newValue < min) {
      return min;
    }
    if (newValue > max) {
      return max;
    }
    return newValue;
  }

  useSliderResize(() => {
    defineCoords();
  });

  useEffect(() => {
    defineCoords();
  }, []);

  return { coords, moveToPx, railRef };
}

// TODO: can be used as global common/shared util-hooks
export function useSliderResize(onResize) {
  function handleResize() {
    if (typeof onResize === "function") {
      onResize();
    }
  }
  useEffect(() => {
    // TODO: enhance by ResizeObserve
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [onResize]);
}

export function useSliderValue({ isControlled, value, valueDefault }) {
  const initialValue = isControlled ? value : valueDefault;
  const [internalStateValue, setInternalStateValue] = useState(initialValue);
  if (isControlled) {
    return [value, () => {}];
  }
  return [internalStateValue, setInternalStateValue];
}

export function useSliderValues({ value, valueDefault, valueFormatter, valueText }) {
  const isControlled = useControlledOrInternal(value);
  const [actualValue, setSelectedValue] = useSliderValue({ isControlled, value, valueDefault });
  const actualValueText = ensureValueText(valueText, actualValue, valueFormatter);
  return { actualValue, actualValueText, isControlled, setSelectedValue };
}
