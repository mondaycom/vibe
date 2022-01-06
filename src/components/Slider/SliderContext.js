import React, { createContext, useContext, useState } from "react";
import { SIZES_BASIC } from "../../constants";
import { createTestIdHelper } from "../../helpers/testid-helper";
import { calculatePageStep, getCurrentValue } from "./SliderHelpers";
import { useSliderValues } from "./SliderHooks";

const uiDefaults = {
  active: null,
  ariaLabel: undefined,
  ariaLabelledby: undefined,
  color: undefined,
  disabled: false,
  dragging: null,
  focused: null,
  size: SIZES_BASIC.SMALL,
  shapeTestId: () => {},
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
  setSelectedValue: () => {},
  changeValue: () => {},
  increaseValue: () => {},
  decreaseValue: () => {}
};
const ActionsContext = createContext(actionsDefaults);
const InfixContext = createContext();

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

  const uiContextValue = {
    active,
    ariaLabel,
    ariaLabelledby,
    color,
    disabled,
    dragging,
    focused,
    size,
    shapeTestId,
    showValue
  };

  function definePageStep() {
    // PageStep - larger step for slide (triggering by PageUp/PageDown events)
    return calculatePageStep({ min, max, step });
  }

  const selectionContextValue = {
    definePageStep,
    max,
    min,
    ranged,
    step,
    value: actualValue,
    valueText: actualValueText
  };

  function increaseValue(consumerStep) {
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
  }

  function decreaseValue(consumerStep) {
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
  }

  function actualChangeValue(newValue) {
    setSelectedValue(newValue);
    if (typeof onChange === "function") {
      onChange(newValue);
    }
  }

  // TODO: refactor - simplify
  function changeValue(newValue, { newFocused } = {}) {
    if (!ranged) {
      actualChangeValue(newValue);
      return;
    }
    const newValues = [...actualValue];
    const isNewFocus = typeof newFocused !== "undefined";
    const currentFocused = isNewFocus ? newFocused : focused;
    newValues[currentFocused] = newValue;
    if (newValues[0] > newValues[1]) {
      const switched = currentFocused === 0 ? 1 : 0;
      setActive(switched);
      setFocused(switched);
      if (dragging !== null) {
        setDragging(switched);
      }
      actualChangeValue([newValues[1], newValues[0]]);
      return;
    }
    if (isNewFocus) {
      setFocused(currentFocused);
    }
    actualChangeValue(newValues);
  }

  const actionsContextValue = {
    setActive,
    setSelectedValue,
    changeValue,
    setDragging,
    setFocused,
    increaseValue,
    decreaseValue
  };

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
