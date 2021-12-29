import React, { createContext, useContext } from "react";
import { SIZES_BASIC } from "../../constants";
import { createBemBlockHelper } from "../../helpers/bem-helper";
import { useSliderValues } from "./SliderHooks";

const uiDefaults = {
  ariaLabel: undefined,
  ariaLabeledBy: undefined,
  color: undefined,
  disabled: false,
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
  setSelectedValue: () => {}
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

  const uiContextValue = {
    ariaLabel,
    ariaLabeledBy,
    color,
    disabled,
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

  const actionsContextValue = {
    setSelectedValue
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
