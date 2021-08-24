import cx from "classnames";
import PropTypes from "prop-types";
import React, { forwardRef, useCallback, useRef } from "react";
import { getMondayColorAsStyle } from "../../general-stories/colors/colors-vars-map";
import useMergeRefs from "../../hooks/useMergeRefs";
import DialogContentContainer from "../DialogContentContainer/DialogContentContainer";
import "./ColorPicker.scss";
import ColorPickerContentComponent from "./components/ColorPickerContent/ColorPickerContentComponent";

const ColorPicker = forwardRef(({ className, onSave, value, colors, defaultColorText, mode }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  const onChange = useCallback(onSave, [onSave]);

  return (
    <div ref={mergedRef} className={cx("color-picker--wrapper", className)}>
      <DialogContentContainer className={cx("color-picker-dialog-content")}>
        <ColorPickerContentComponent
          onValueChange={onChange}
          value={value}
          colors={colors}
          defaultColorText={defaultColorText}
          mode={mode}
        />
      </DialogContentContainer>
    </div>
  );
});

ColorPicker.propTypes = {
  className: PropTypes.string,
  onSave: PropTypes.func,
  value: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  defaultColorText: PropTypes.string,
  mode: PropTypes.string
};

ColorPicker.defaultProps = {
  className: "",
  onSave: () => {},
  value: "",
  colors: getMondayColorAsStyle("selected"),
  defaultColorText: "TODO - default-text",
  mode: "full"
};

export default ColorPicker;
