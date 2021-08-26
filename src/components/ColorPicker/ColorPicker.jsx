import cx from "classnames";
import PropTypes from "prop-types";
import React, { forwardRef, useCallback, useRef } from "react";
import useMergeRefs from "../../hooks/useMergeRefs";
import DialogContentContainer from "../DialogContentContainer/DialogContentContainer";
import { COLOR_STYLES } from "../../general-stories/colors/colors-vars-map";
import "./ColorPicker.scss";
import ColorPickerContentComponent from "./components/ColorPickerContent/ColorPickerContentComponent";

const ColorPicker = forwardRef(
  (
    { className, onSave, value, noColorText, colorStyle, ColorIndicatorIcon, shouldRenderIndicatorWithoutBackground },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const onChange = useCallback(onSave, [onSave]);

    return (
      <DialogContentContainer
        ref={mergedRef}
        className={cx("color-picker--wrapper", "color-picker-dialog-content", className)}
        ariaLabelledby="Color Picker Dialog"
        ariaDescribedby="Pick color"
      >
        <ColorPickerContentComponent
          onValueChange={onChange}
          value={value}
          noColorText={noColorText}
          shouldRenderIndicatorWithoutBackground={ColorIndicatorIcon && shouldRenderIndicatorWithoutBackground}
          colorStyle={colorStyle}
          ColorIndicatorIcon={ColorIndicatorIcon}
        />
      </DialogContentContainer>
    );
  }
);

ColorPicker.COLOR_STYLES = COLOR_STYLES;

ColorPicker.propTypes = {
  className: PropTypes.string,
  onSave: PropTypes.func,
  ColorIndicatorIcon: PropTypes.func,
  value: PropTypes.string,
  colorStyle: PropTypes.oneOf([ColorPicker.COLOR_STYLES.REGULAR, ColorPicker.COLOR_STYLES.SELECTED]),
  noColorText: PropTypes.string,
  shouldRenderIndicatorWithoutBackground: PropTypes.bool
};

ColorPicker.defaultProps = {
  className: "",
  onSave: () => {},
  ColorIndicatorIcon: undefined,
  value: "",
  colorStyle: COLOR_STYLES.REGULAR,
  noColorText: undefined,
  shouldRenderIndicatorWithoutBackground: false
};

export default ColorPicker;
