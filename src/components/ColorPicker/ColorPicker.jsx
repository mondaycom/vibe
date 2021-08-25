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
    {
      className,
      onSave,
      value,
      noColorText,
      colorStyle,
      ColorIndicatorComponentRenderer,
      shouldRenderIndicatorWithoutBackground
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const onChange = useCallback(onSave, [onSave]);

    return (
      <div ref={mergedRef} className={cx("color-picker--wrapper", className)}>
        <DialogContentContainer
          className={cx("color-picker-dialog-content")}
          ariaLabelledby="Color Picker Dialog"
          ariaDescribedby="Pick color"
        >
          <ColorPickerContentComponent
            onValueChange={onChange}
            value={value}
            noColorText={noColorText}
            shouldRenderIndicatorWithoutBackground={
              ColorIndicatorComponentRenderer && shouldRenderIndicatorWithoutBackground
            }
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
  shouldRenderIndicatorWithoutBackground: PropTypes.bool
};

ColorPicker.defaultProps = {
  className: "",
  onSave: () => {},
  ColorIndicatorComponentRenderer: undefined,
  value: "",
  colorStyle: COLOR_STYLES.REGULAR,
  noColorText: undefined,
  shouldRenderIndicatorWithoutBackground: false
};

export default ColorPicker;
