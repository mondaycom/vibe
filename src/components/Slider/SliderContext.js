import React, { createContext, useContext, useState } from "react";
import { SIZES_BASIC } from "../../constants";
import { createBemBlockHelper } from "../../helpers/bem-helper";
import { useSliderValues } from "./SliderHooks";

function getCurrentValue(actualValue, isRange, focused) {
  if (!isRange) {
    return actualValue;
  }
  return actualValue[focused];
}

const uiDefaults = {
  ariaLabel: undefined,
  ariaLabeledBy: undefined,
  color: undefined,
  disabled: false,
  dragging: false,
  focused: null,
  size: SIZES_BASIC.SMALL,
  showValue: false,
  consumerBem: () => {}
};
const UiContext = createContext(uiDefaults);
const selectionDefaults = {
  isRange: false,
  max: 100,
  min: 0,
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
  ariaLabeledBy,
  classNameBase,
  color,
  disabled,
  isRange,
  max,
  min,
  onChange,
  showValue,
  size,
  step,
  value,
  valueDefault,
  valueFormatter,
  valueText,
  infixOptions
}) {
  const consumerBem = createBemBlockHelper(classNameBase, { isConsume: true });
  const { actualValue, actualValueText, setSelectedValue } = useSliderValues({
    value,
    valueDefault,
    valueFormatter,
    valueText
  });

  const [focused, setFocused] = useState(null);
  console.log("----", { focused, actualValue, actualValueText });
  const [dragging, setDragging] = useState(false);

  const uiContextValue = {
    ariaLabel,
    ariaLabeledBy,
    color,
    disabled,
    dragging,
    focused,
    size,
    showValue,
    consumerBem
  };

  const selectionContextValue = {
    isRange,
    max,
    min,
    step,
    value: actualValue,
    valueText: actualValueText
  };

  function increaseValue() {
    const currentValue = getCurrentValue(actualValue, isRange, focused);
    if (currentValue === max) {
      return;
    }
    const newValue = currentValue + step;
    if (newValue > max) {
      return changeValue(max);
    }
    changeValue(newValue);
  }

  function decreaseValue() {
    const currentValue = getCurrentValue(actualValue, isRange, focused);
    if (currentValue === min) {
      return;
    }
    const newValue = currentValue - step;
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
    console.log("change value", { newValue, isRange, focused, newFocused, actualValue });
    if (!isRange) {
      actualChangeValue(newValue);
      return;
    }
    const newValues = [...actualValue];
    const isNewFocus = typeof newFocused !== "undefined";
    const currentFocused = isNewFocus ? newFocused : focused;
    newValues[currentFocused] = newValue;
    if (newValues[0] > newValues[1]) {
      setFocused(currentFocused === 0 ? 1 : 0);
      actualChangeValue([newValues[1], newValues[0]]);
      return;
    }
    if (isNewFocus) {
      setFocused(currentFocused);
    }
    actualChangeValue(newValues);
  }

  const actionsContextValue = {
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
  const { isRange, value, valueText } = selectionContext;
  // TODO: memoize
  if (isRange && typeof index !== "undefined") {
    return { ...selectionContext, value: value[index], valueText: valueText[index] };
  }
  return selectionContext;
}

export function useSliderActions() {
  return useContext(ActionsContext);
}
