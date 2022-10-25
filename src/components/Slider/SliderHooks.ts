import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useResizeObserver from "../../hooks/useResizeObserver";
import { NOOP } from "../../utils/function-utils";
import { UPDATE_SLIDER_SIZE_DEBOUNCE } from "./SliderConstants";
import { ensureValueText } from "./SliderHelpers";

function _useIsStateControlledFromOutside(value: number | number[]): boolean {
  const [isControlled] = useState(typeof value !== "undefined");
  return isControlled;
}

function _useSliderValue(
  defaultValue: number | number[],
  isControlled: boolean,
  value: number | number[]
): [number | number[], (value: number | number[]) => void] {
  const initialValue = isControlled ? (value as number[]) : defaultValue;
  const [internalStateValue, setInternalStateValue] = useState(initialValue);
  if (isControlled) {
    return [value as number, NOOP];
  }
  return [internalStateValue, setInternalStateValue];
}

export function useSliderActionsContextValue(
  actualValue: number | number[],
  focused: number,
  getDragging: () => number,
  getSelectedValue: () => number | number[],
  max: number,
  min: number,
  onChange: (value: number | number[]) => void,
  ranged: boolean,
  setActive: (value: number) => void,
  setFocused: (value: number) => void,
  setDragging: (value: number) => void,
  setSelectedValue: (value: number | number[]) => void,
  step: number
) {
  const _changeValueOrValues = useCallback(
    (newValueOrValues: number | number[]) => {
      setSelectedValue(newValueOrValues);
      if (typeof onChange === "function") {
        onChange(newValueOrValues);
      }
    },
    [setSelectedValue, onChange]
  );

  const _validateValue = useCallback(
    (index: number, newValue: number | number[] | string): number => {
      if (newValue === "" || Number.isNaN(Number(newValue))) {
        return index === 1 ? max : min;
      }
      if (newValue > max) {
        return max;
      }
      if (newValue < min) {
        return min;
      }
      return newValue as number;
    },
    [min, max]
  );

  const _calculateNewValues = useCallback(
    (thumb: { index: number; newValue: number | number[] | string }): number[] => {
      const [startValue, endValue] = [...(getSelectedValue() as number[])];
      if (thumb.index === 1) {
        return [startValue, _validateValue(thumb.index, thumb.newValue)];
      }
      return [_validateValue(thumb.index, thumb.newValue), endValue];
    },
    [_validateValue, getSelectedValue]
  );

  const _manageRangedValues = useCallback(
    (thumb: { index: number; newValue: number | number[] | string }, switchCb: (value: number) => void = NOOP) => {
      const [startValue, endValue] = _calculateNewValues(thumb);
      if (startValue < endValue) {
        // no need to switch, same thumb stay active
        return [startValue, endValue];
      }
      // switch active thumb + end and start values
      switchCb(thumb.index === 0 ? 1 : 0);
      return [endValue, startValue];
    },
    [_calculateNewValues]
  );

  const _switchDraggingThumb = useCallback(
    (switchTo: number) => {
      setActive(switchTo);
      setFocused(switchTo);
      setDragging(switchTo);
    },
    [setActive, setFocused, setDragging]
  );

  const changeThumbValue = useCallback(
    (newValue: number | string, thumbIndex: number = undefined, cancelFocus = false) => {
      if (!ranged) {
        _changeValueOrValues(_validateValue(null, newValue));
        return;
      }
      const currentThumb = { newValue, index: thumbIndex ?? focused };
      const switchCb = cancelFocus ? NOOP : setFocused;
      const newValues = _manageRangedValues(currentThumb, switchCb);
      _changeValueOrValues(newValues);
    },
    [_changeValueOrValues, _manageRangedValues, _validateValue, focused, ranged, setFocused]
  );

  const drugThumb = useCallback(
    (newValue: number | number[]) => {
      if (!ranged) {
        _changeValueOrValues(_validateValue(null, newValue));
        return;
      }
      const currentThumb = { newValue, index: getDragging() ?? 0 };
      const newValues = _manageRangedValues(currentThumb, _switchDraggingThumb);
      _changeValueOrValues(newValues);
    },
    [_changeValueOrValues, _manageRangedValues, _switchDraggingThumb, _validateValue, getDragging, ranged]
  );

  const decreaseValue = useCallback(
    (consumerStep: number) => {
      const currentValue = ranged ? (actualValue as number[])[focused] : (actualValue as number);
      if (currentValue === min) {
        return;
      }
      const finalStep = consumerStep || step;
      const newValue = currentValue - finalStep;
      changeThumbValue(newValue);
    },
    [actualValue, changeThumbValue, focused, min, ranged, step]
  );

  const increaseValue = useCallback(
    (consumerStep?: number) => {
      const currentValue = ranged ? (actualValue as number[])[focused] : (actualValue as number);
      if (currentValue === max) {
        return;
      }
      const finalStep = consumerStep || step;
      const newValue = currentValue + finalStep;
      changeThumbValue(newValue);
    },
    [actualValue, changeThumbValue, focused, max, ranged, step]
  );

  return useMemo(
    () => ({
      changeThumbValue,
      decreaseValue,
      drugThumb,
      increaseValue,
      setActive,
      setDragging,
      setFocused
    }),
    [changeThumbValue, decreaseValue, drugThumb, increaseValue, setActive, setDragging, setFocused]
  );
}

export function useDragging(): [number, (value: number) => void, () => number] {
  const [dragging, setStateDragging] = useState<number>(null);
  const draggingRef = useRef(null);

  const setDragging = useCallback(
    (index: number) => {
      setStateDragging(index);
      draggingRef.current = index;
    },
    [setStateDragging, draggingRef]
  );
  const getDragging = useCallback(() => draggingRef.current, [draggingRef]);
  return [dragging, setDragging, getDragging];
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

export function useSliderValues(
  defaultValue: number | number[],
  value: number | number[],
  valueFormatter: (value: number) => string,
  valueText: string
): {
  actualValue: number | number[];
  actualValueText: string | string[];
  getSelectedValue: () => number | number[];
  isControlled: boolean;
  setSelectedValue: (value: number) => void;
} {
  const isControlled = _useIsStateControlledFromOutside(value);
  const [actualValue, setStateSelectedValue] = _useSliderValue(defaultValue, isControlled, value);
  const valueRef = useRef(actualValue);
  const setSelectedValue = useCallback(
    (newValue: number) => {
      setStateSelectedValue(newValue);
      valueRef.current = newValue;
    },
    [valueRef, setStateSelectedValue]
  );

  const getSelectedValue = useCallback(() => valueRef.current, [valueRef]);

  const actualValueText = ensureValueText(valueText, actualValue, valueFormatter);
  return { actualValue, actualValueText, getSelectedValue, isControlled, setSelectedValue };
}
