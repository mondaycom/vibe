import React, { createContext, useContext, useMemo, useState } from "react";
import { createTestIdHelper } from "../../helpers/testid-helper";
import { useDragging, useSliderActionsContextValue, useSliderValues } from "./SliderHooks";

const UiContext = createContext({});
const SelectionContext = createContext({});
const ActionsContext = createContext({});
const InfixContext = createContext({});

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
  const { actualValue, actualValueText, getSelectedValue, setSelectedValue } = useSliderValues({
    defaultValue,
    value,
    valueFormatter,
    valueText
  });

  const [active, setActive] = useState(null);
  const [focused, setFocused] = useState(null);
  const [dragging, setDragging, getDragging] = useDragging();

  const uiContextValue = useMemo(
    () => ({ active, ariaLabel, ariaLabelledby, color, disabled, dragging, focused, size, shapeTestId, showValue }),
    [active, ariaLabel, ariaLabelledby, color, disabled, dragging, focused, size, shapeTestId, showValue]
  );

  const selectionContextValue = useMemo(
    () => ({
      max,
      min,
      ranged,
      step,
      value: actualValue,
      valueText: actualValueText
    }),
    [max, min, ranged, step, actualValue, actualValueText]
  );

  const actionsContextValue = useSliderActionsContextValue({
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
  });

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
