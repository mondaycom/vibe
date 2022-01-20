import React, { useMemo } from "react";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";
import TextField from "../TextField/TextField";
import { useSliderActions, useSliderSelection } from "./SliderContext";
import { INFIX_KIND } from "./SliderConstants";

const VALUE_UPDATE_DELAY = 300;

function getCurrentLabel({ isPostfix, ranged, value, valueText }) {
  if (!ranged) {
    return [value, valueText];
  }
  if (isPostfix) {
    return [value[1], valueText[1]];
  }
  return [value[0], valueText[0]];
}

function parseValue(valueText) {
  return valueText.replace(/\D/g, "");
}

const SelectionIndicator = ({ kind }) => {
  const isPostfix = kind === INFIX_KIND.POSTFIX;
  const { ranged, value, valueText } = useSliderSelection();
  const [, currentTextValue] = getCurrentLabel({ isPostfix, ranged, value, valueText });
  const { changeThumbValue } = useSliderActions();
  const handleChange = useMemo(
    () =>
      debounce(newValueText => {
        const newValue = parseValue(newValueText);
        const thumbIndex = isPostfix ? 1 : 0;
        changeThumbValue(newValue, { thumbIndex, cancelFocus: true });
      }, VALUE_UPDATE_DELAY),
    [changeThumbValue, isPostfix]
  );
  return <TextField onChange={handleChange} value={currentTextValue} />;
};

SelectionIndicator.propTypes = {
  /**
   * kind (type/mode) of Infix prefix/postfix
   * Infix - additional inserted by Consumer - component/string/number etc.
   */
  kind: PropTypes.oneOf(Object.values(INFIX_KIND))
};

SelectionIndicator.defaultProps = {
  kind: INFIX_KIND.PREFIX
};

export default SelectionIndicator;
