import React, { useMemo } from "react";
import { debounce } from "lodash-es";
import TextField from "../TextField/TextField";
import { useSliderActions, useSliderSelection } from "./SliderContext";
import { InfixKind } from "./Slider.types";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./SelectionIndicator.module.scss";

const VALUE_UPDATE_DELAY = 300;

function getCurrentLabel(isPostfix: boolean, ranged: boolean, value: number | number[], valueText: string | string[]) {
  if (!ranged) {
    return [value as number, valueText as string];
  }
  if (isPostfix) {
    return [(value as number[])[1], (valueText as string[])[1]];
  }
  return [(value as number[])[0], (valueText as string[])[0]];
}

function parseValue(valueText: string) {
  return valueText.replace(/\D/g, "");
}

export interface SelectionIndicatorProps extends VibeComponentProps {
  /**
   * Determines whether the selection indicator is a prefix or postfix.
   */
  kind?: InfixKind;
  /**
   * The key for the selection indicator (used for React key uniqueness).
   */
  key?: InfixKind;
}

const SelectionIndicator: React.FC<SelectionIndicatorProps> = ({ kind = "prefix" }) => {
  const isPostfix = kind === "postfix";
  const { ranged, value, valueText } = useSliderSelection();
  const [, currentTextValue] = getCurrentLabel(isPostfix, ranged, value, valueText);
  const { changeThumbValue } = useSliderActions();
  const handleChange = useMemo(
    () =>
      debounce(newValueText => {
        const newValue = parseValue(newValueText);
        const thumbIndex = isPostfix ? 1 : 0;
        changeThumbValue(newValue, thumbIndex, true);
      }, VALUE_UPDATE_DELAY),
    [changeThumbValue, isPostfix]
  );
  return <TextField onChange={handleChange} value={String(currentTextValue)} className={styles.selectionIndicator} />;
};

export default SelectionIndicator;
