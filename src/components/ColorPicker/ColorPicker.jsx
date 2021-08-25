import cx from "classnames";
import PropTypes from "prop-types";
import React, { forwardRef, useCallback, useRef } from "react";
import useMergeRefs from "../../hooks/useMergeRefs";
import DialogContentContainer from "../DialogContentContainer/DialogContentContainer";
import { COLOR_STYLES } from "../../general-stories/colors/colors-vars-map";
import "./ColorPicker.scss";
import ColorPickerContentComponent from "./components/ColorPickerContent/ColorPickerContentComponent";

const ColorPicker = forwardRef(
  ({ className, onSave, value, noColorText, mode, colorStyle, ColorIndicatorComponentRenderer }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const onChange = useCallback(onSave, [onSave]);

    return (
      <div ref={mergedRef} className={cx("color-picker--wrapper", className)}>
        <DialogContentContainer className={cx("color-picker-dialog-content")}>
          <ColorPickerContentComponent
            onValueChange={onChange}
            value={value}
            noColorText={noColorText}
            mode={mode}
            colorStyle={colorStyle}
            ColorIndicatorComponentRenderer={ColorIndicatorComponentRenderer}
          />
        </DialogContentContainer>
      </div>
    );
  }
);

ColorPicker.propTypes = {
  className: PropTypes.string,
  onSave: PropTypes.func,
  ColorIndicatorComponentRenderer: PropTypes.func,
  value: PropTypes.string,
  colorStyle: PropTypes.string,
  noColorText: PropTypes.string,
  mode: PropTypes.string
};

ColorPicker.defaultProps = {
  className: "",
  onSave: () => {},
  ColorIndicatorComponentRenderer: undefined,
  value: "",
  colorStyle: COLOR_STYLES.REGULAR,
  noColorText: undefined,
  mode: ColorPickerContentComponent.MODES.FULL
};

export default ColorPicker;
