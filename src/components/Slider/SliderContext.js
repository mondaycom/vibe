import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { BASE_SIZES } from "../../constants";
import { createTestIdHelper } from "../../helpers/testid-helper";
import { NOOP } from "../../utils/function-utils";
import { calculatePageStep, getCurrentValue, validateValue } from "./SliderHelpers";
import { useSliderValues } from "./SliderHooks";

const uiDefaults = {
  active: null,
  ariaLabel: undefined,
  ariaLabelledby: undefined,
  color: undefined,
  disabled: false,
  dragging: null,
  focused: null,
  size: BASE_SIZES.SMALL,
  shapeTestId: NOOP,
  showValue: false
};
const UiContext = createContext(uiDefaults);
const selectionDefaults = {
  max: 100,
  min: 0,
  ranged: false,
  step: 1,
  value: undefined,
  valueText: undefined
};
const SelectionContext = createContext(selectionDefaults);
const actionsDefaults = {
  setSelectedValue: NOOP,
  changeValue: NOOP,
  increaseValue: NOOP,
  decreaseValue: NOOP
};
const ActionsContext = createContext(actionsDefaults);
const InfixContext = createContext({});
//
// const globalStatuses = {
//   focused: null,
//   dragging: null,
//   values: []
// };

export function SliderProvider({
  children,
  ariaLabel,
  ariaLabelledby,
  color,
  dataTestId,
  defaultValue,
  disabled,
  max,
  min,
  onChange,
  ranged,
  showValue,
  size,
  step,
  value,
  valueFormatter,
  valueText,
  infixOptions
}) {
  const shapeTestId = createTestIdHelper(dataTestId);
  const { actualValue, actualValueText, setSelectedValue } = useSliderValues({
    defaultValue,
    value,
    valueFormatter,
    valueText
  });

  const [active, setActive] = useState(null);
  const [focused, setFocused] = useState(null);
  const [dragging, setDragging] = useState(null);

  const uiContextValue = useMemo(
    () => ({ active, ariaLabel, ariaLabelledby, color, disabled, dragging, focused, size, shapeTestId, showValue }),
    [active, ariaLabel, ariaLabelledby, color, disabled, dragging, focused, size, shapeTestId, showValue]
  );

  const definePageStep = useCallback(() => {
    // PageStep - larger step for slide (triggering by PageUp/PageDown events)
    return calculatePageStep({ min, max, step });
  }, [min, max, step]);

  const selectionContextValue = useMemo(
    () => ({
      definePageStep,
      max,
      min,
      ranged,
      step,
      value: actualValue,
      valueText: actualValueText
    }),
    [definePageStep, max, min, ranged, step, actualValue, actualValueText]
  );

  const actualChangeValue = useCallback(
    newValue => {
      setSelectedValue(newValue);
      if (typeof onChange === "function") {
        onChange(newValue);
      }
    },
    [setSelectedValue, onChange]
  );

  const changeValue = useCallback(
    (newValue, { thumbIndex, isChangeFocus } = {}) => {
      if (!ranged) {
        const validatedValue = validateValue({ newValue, min, max, thumbIndex: 0 });
        actualChangeValue(validatedValue);
        return;
      }
      const newValues = [...actualValue];
      const currentThumb = typeof thumbIndex === "undefined" ? focused : thumbIndex;
      newValues[currentThumb] = validateValue({ newValue, min, max, thumbIndex: 0 });
      if (newValues[0] > newValues[1]) {
        const switched = currentThumb === 0 ? 1 : 0;
        setActive(switched);
        if (isChangeFocus !== false) {
          setFocused(switched);
          setDragging(switched);
        }
        actualChangeValue([newValues[1], newValues[0]]);
        return;
      }
      if (isChangeFocus) {
        setFocused(currentThumb);
      }
      actualChangeValue(newValues);
    },
    [actualValue, actualChangeValue, dragging, focused, max, min, ranged, setActive, setFocused]
  );

  const increaseValue = useCallback(
    consumerStep => {
      const currentValue = getCurrentValue(actualValue, ranged, focused);
      if (currentValue === max) {
        return;
      }
      const finalStep = consumerStep || step;
      const newValue = currentValue + finalStep;
      if (newValue > max) {
        return changeValue(max);
      }
      changeValue(newValue);
    },
    [actualValue, changeValue, focused, max, ranged, step]
  );

  const decreaseValue = useCallback(
    consumerStep => {
      const currentValue = getCurrentValue(actualValue, ranged, focused);
      if (currentValue === min) {
        return;
      }
      const finalStep = consumerStep || step;
      const newValue = currentValue - finalStep;
      if (newValue < min) {
        return changeValue(min);
      }
      changeValue(newValue);
    },
    [actualValue, changeValue, focused, min, ranged, step]
  );

  const actionsContextValue = useMemo(
    () => ({
      setActive,
      setSelectedValue,
      changeValue,
      setDragging,
      setFocused,
      increaseValue,
      decreaseValue
    }),
    [setActive, setSelectedValue, changeValue, setDragging, setFocused, increaseValue, decreaseValue]
  );

  return (
    <UiContext.Provider value={uiContextValue}>
      <SelectionContext.Provider value={selectionContextValue}>
        <ActionsContext.Provider value={actionsContextValue}>
          <InfixContext.Provider value={infixOptions}>{children}</InfixContext.Provider>
        </ActionsContext.Provider>
      </SelectionContext.Provider>
    </UiContext.Provider>
  );
}

export function useSliderUi() {
  return useContext(UiContext);
}

export function useSliderInfix() {
  return useContext(InfixContext);
}

export function useSliderSelection(index) {
  const selectionContext = useContext(SelectionContext);
  const { ranged, value, valueText } = selectionContext;
  // TODO: memoize
  if (ranged && typeof index !== "undefined") {
    return { ...selectionContext, value: value[index], valueText: valueText[index] };
  }
  return selectionContext;
}

export function useSliderActions() {
  return useContext(ActionsContext);
}
