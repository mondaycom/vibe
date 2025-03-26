import React, { createContext, ReactElement, useContext, useMemo, useState } from "react";
import { createTestIdHelper } from "../../helpers/testid-helper";
import { useDragging, useSliderActionsContextValue, useSliderValues } from "./SliderHooks";
import { SliderProps } from "./Slider";
import { SliderContextActions, SliderContextInfix, SliderContextSelection, SliderContextUI } from "./SliderConstants";
import { IconType } from "../Icon";

const UiContext = createContext({});
const SelectionContext = createContext({});
const ActionsContext = createContext({});
const InfixContext = createContext({});

export interface SliderProviderProps extends SliderProps {
  /**
   * The child elements inside the slider provider.
   */
  children?: ReactElement | ReactElement[];
  /**
   * Configuration options for prefix, postfix, and selection indicator.
   */
  infixOptions?: {
    /**
     * If true, displays the selected value from the slider range.
     */
    indicateSelection?: boolean;
    /**
     * Configuration for the prefix (start) element, which can be:
     * - A React component, text, number, or node.
     * - An object with an icon.
     * - A function that receives the value and valueText.
     */
    prefix?: { icon: IconType } | string | ((value: number, valueText: string) => void) | ReactElement;
    /**
     * Configuration for the postfix (end) element, similar to prefix.
     */
    postfix?: { icon: IconType } | string | ((value: number, valueText: string) => void) | ReactElement;
    /**
     * The width of the selection indicator.
     */
    selectionIndicatorWidth?: string;
  };
}

export function SliderProvider({
  children,
  ariaLabel,
  ariaLabelledby,
  color,
  "data-testid": dataTestId,
  defaultValue,
  disabled,
  max,
  min,
  onChange,
  ranged,
  showValue,
  valueLabelPosition,
  valueLabelColor,
  size,
  step,
  value,
  valueFormatter,
  valueText,
  infixOptions
}: SliderProviderProps) {
  const shapeTestId = createTestIdHelper(dataTestId);
  const { actualValue, actualValueText, getSelectedValue, setSelectedValue } = useSliderValues(
    defaultValue,
    value,
    valueFormatter,
    valueText
  );

  const [active, setActive] = useState<number>(null);
  const [focused, setFocused] = useState<number>(null);
  const [dragging, setDragging, getDragging] = useDragging();

  const uiContextValue: SliderContextUI = useMemo(
    () => ({
      active,
      ariaLabel,
      ariaLabelledby,
      color,
      disabled,
      dragging,
      focused,
      size,
      shapeTestId,
      showValue,
      valueLabelPosition,
      valueLabelColor
    }),
    [
      active,
      ariaLabel,
      ariaLabelledby,
      color,
      disabled,
      dragging,
      focused,
      size,
      shapeTestId,
      showValue,
      valueLabelPosition,
      valueLabelColor
    ]
  );

  const selectionContextValue: SliderContextSelection = useMemo(
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

  const actionsContextValue: SliderContextActions = useSliderActionsContextValue(
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

export function useSliderUi(): SliderContextUI {
  return useContext(UiContext) as SliderContextUI;
}

export function useSliderInfix(): SliderContextInfix {
  return useContext(InfixContext) as SliderContextInfix;
}

export function useSliderSelection(): SliderContextSelection {
  return useContext(SelectionContext) as SliderContextSelection;
}

export function useSliderActions(): SliderContextActions {
  return useContext(ActionsContext) as SliderContextActions;
}
