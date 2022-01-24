import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useResizeObserver from "../../hooks/useResizeObserver";
import { NOOP } from "../../utils/function-utils";
import { UPDATE_SLIDER_SIZE_DEBOUNCE } from "./SliderConstants";
import { ensureValueText } from "./SliderHelpers";

function _useIsStateControlledFromOutside(value) {
  const [isControlled] = useState(typeof value !== "undefined");
  return isControlled;
}

function _useSliderValue({ defaultValue, isControlled, value }) {
  const initialValue = isControlled ? value : defaultValue;
  const [internalStateValue, setInternalStateValue] = useState(initialValue);
  if (isControlled) {
    return [value, NOOP];
  }
  return [internalStateValue, setInternalStateValue];
}

export function useSliderActionsContextValue({
  actualValue,
  focused,
  getDragging,
  getSelectedValue,
  max,
  min,
  onChange,
  ranged,
  setActive,
  setFocused,
  setDragging,
  setSelectedValue,
  step
}) {
  const _changeValueOrValues = useCallback(
    newValueOrValues => {
      setSelectedValue(newValueOrValues);
      if (typeof onChange === "function") {
        onChange(newValueOrValues);
      }
    },
    [setSelectedValue, onChange]
  );

  const _validateValue = useCallback(
    ({ index, newValue }) => {
      if (newValue === "" || Number.isNaN(Number(newValue))) {
        return index === 1 ? max : min;
      }
      if (newValue > max) {
        return max;
      }
      if (newValue < min) {
        return min;
      }
      return newValue;
    },
    [min, max]
  );

  const _calculateNewValues = useCallback(
    thumb => {
      const [startValue, endValue] = [...getSelectedValue()];
      if (thumb.index === 1) {
        return [startValue, _validateValue(thumb)];
      }
      return [_validateValue(thumb), endValue];
    },
    [_validateValue, getSelectedValue]
  );

  const _manageRangedValues = useCallback(
    (thumb, { switchCb }) => {
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
    switchTo => {
      setActive(switchTo);
      setFocused(switchTo);
      setDragging(switchTo);
    },
    [setActive, setFocused, setDragging]
  );

  const changeThumbValue = useCallback(
    (newValue, { thumbIndex, cancelFocus } = {}) => {
      if (!ranged) {
        _changeValueOrValues(_validateValue({ newValue }));
        return;
      }
      const currentThumb = { newValue, index: thumbIndex ?? focused };
      const switchCb = cancelFocus ? NOOP : setFocused;
      const newValues = _manageRangedValues(currentThumb, { switchCb });
      _changeValueOrValues(newValues);
    },
    [_changeValueOrValues, _manageRangedValues, _validateValue, focused, ranged, setFocused]
  );

  const drugThumb = useCallback(
    newValue => {
      if (!ranged) {
        _changeValueOrValues(_validateValue({ newValue }));
        return;
      }
      const currentThumb = { newValue, index: getDragging() ?? 0 };
      const newValues = _manageRangedValues(currentThumb, { switchCb: _switchDraggingThumb });
      _changeValueOrValues(newValues);
    },
    [_changeValueOrValues, _manageRangedValues, _switchDraggingThumb, _validateValue, getDragging, ranged]
  );

  const decreaseValue = useCallback(
    consumerStep => {
      const currentValue = ranged ? actualValue[focused] : actualValue;
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
    consumerStep => {
      const currentValue = ranged ? actualValue[focused] : actualValue;
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

export function useDragging() {
  const [dragging, setStateDragging] = useState(null);
  const draggingRef = useRef(null);

  const setDragging = useCallback(
    index => {
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

export function useSliderValues({ defaultValue, value, valueFormatter, valueText }) {
  const isControlled = _useIsStateControlledFromOutside(value);
  const [actualValue, setStateSelectedValue] = _useSliderValue({ defaultValue, isControlled, value });
  const valueRef = useRef(actualValue);
  const setSelectedValue = useCallback(
    newValue => {
      setStateSelectedValue(newValue);
      valueRef.current = newValue;
    },
    [valueRef, setStateSelectedValue]
  );

  const getSelectedValue = useCallback(() => valueRef.current, [valueRef]);

  const actualValueText = ensureValueText(valueText, actualValue, valueFormatter);
  return { actualValue, actualValueText, getSelectedValue, isControlled, setSelectedValue };
}
