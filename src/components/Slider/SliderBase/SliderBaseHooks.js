import { useEffect, useRef, useState } from "react";
import useMergeRefs from "../../../hooks/useMergeRefs";

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

export function useSliderInteractions({ min, max, ref }) {
  const thumbRef = useRef(null);
  const refs = {
    rail: useRef(null),
    thumb: useMergeRefs({ refs: [ref, thumbRef] })
  };
  const [coords, setCoords] = useState({ left: 0, right: 100, width: 100 });

  function defineCoords() {
    const railRect = refs.rail.current.getBoundingClientRect();
    const { left, right, width } = railRect;
    console.log("coords", railRect, { left, right, width });
    setCoords({ left, right, width });
  }

  function moveToPx(fromStartInPx) {
    console.log("moveToPx", fromStartInPx);
    const valuePoints = max - min;
    const pxToValuePoints = coords.width / valuePoints;
    const fromMinInValuePoints = Math.round(fromStartInPx / pxToValuePoints);
    const newValue = min + fromMinInValuePoints;
    console.log("--->", { fromStartInPx, valuePoints, pxToValuePoints, fromMinInValuePoints, newValue });
    return newValue;
  }

  useSliderResize(() => {
    defineCoords();
  });

  useEffect(() => {
    defineCoords();
  }, []);

  return { coords, moveToPx, refs };
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
  }, []);
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
  const [actualValue, setValue] = useSliderValue({ isControlled, value, valueDefault });
  const actualValueText = ensureValueText(valueText, actualValue, valueFormatter);
  return { actualValue, actualValueText, isControlled, setValue };
}
