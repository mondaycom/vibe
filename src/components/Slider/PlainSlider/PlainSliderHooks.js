import { useEffect, useRef, useState } from "react";
import { createBemHelper, ensureValueText } from "../SliderCommons";

export function useControlledOrInternal(value) {
  const [isControlled] = useState(typeof value !== "undefined");
  return isControlled;
}

// TODO: can be used as global common/shared util-hookd
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

export function useSliderInteractions({ min, max }) {
  const refs = {
    rail: useRef(null),
    thumb: useRef(null)
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
  const [finalValue, setValue] = useSliderValue({ isControlled, value, valueDefault });
  const finalValueText = ensureValueText(valueText, finalValue, valueFormatter);
  return { finalValue, finalValueText, isControlled, setValue };
}

export function usePlainSlider({ ariaLabel, ariaLabeledBy, classNameBase, max, min, size }) {
  const consumerBem = createBemHelper(classNameBase);
  const subProps = {
    rail: {
      className: consumerBem("rail")
    },
    thumb: {
      ariaLabel,
      ariaLabeledBy,
      className: consumerBem("thumb"),
      max,
      min,
      size
    },
    track: {
      className: consumerBem("track")
    },
    filledTrack: {
      className: consumerBem("filled-track"),
      dimension: 0
    }
  };
  return { subProps };
}
