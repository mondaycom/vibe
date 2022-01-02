import React, { createContext, useContext, useState } from "react";
import { SIZES_BASIC } from "../../constants";
import { createBemBlockHelper } from "../../helpers/bem-helper";
import { useSliderValues } from "./SliderHooks";

const uiDefaults = {
  ariaLabel: undefined,
  ariaLabeledBy: undefined,
  color: undefined,
  disabled: false,
  focused: false,
  size: SIZES_BASIC.SMALL,
  showValue: false,
  consumerBem: () => {}
};
const UiContext = createContext(uiDefaults);
const selectionDefaults = {
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

  const [focused, setFocused] = useState(false);
  console.log("----------", actualValue, actualValueText);

  const uiContextValue = {
    ariaLabel,
    ariaLabeledBy,
    color,
    disabled,
    focused,
    size,
    showValue,
    consumerBem
  };

  const selectionContextValue = {
    max,
    min,
    step,
    value: actualValue,
    valueText: actualValueText
  };

  function increaseValue() {
    if (actualValue === max) {
      return;
    }
    const newValue = actualValue + step;
    console.log("increase value", actualValue, newValue);
    changeValue(newValue);
  }

  function decreaseValue() {
    if (actualValue === min) {
      return;
    }
    const newValue = actualValue - step;
    console.log("decrease value", actualValue, newValue);
    changeValue(newValue);
  }

  function changeValue(newValue) {
    console.log("change value in provider");
    setSelectedValue(newValue);
    if (typeof onChange === "function") {
      onChange(newValue);
    }
  }

  const actionsContextValue = {
    setSelectedValue,
    changeValue,
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

export function useSliderSelection() {
  return useContext(SelectionContext);
}

export function useSliderActions() {
  return useContext(ActionsContext);
}
