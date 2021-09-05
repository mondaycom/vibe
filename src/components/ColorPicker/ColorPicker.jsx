import cx from "classnames";
import PropTypes from "prop-types";
import React, { forwardRef, useCallback, useRef } from "react";
import useMergeRefs from "../../hooks/useMergeRefs";
import DialogContentContainer from "../DialogContentContainer/DialogContentContainer";
import { COLOR_STYLES } from "../../general-stories/colors/colors-vars-map";
import "./ColorPicker.scss";
import ColorPickerContentComponent from "./components/ColorPickerContent/ColorPickerContentComponent";
import NoColor from "../Icon/Icons/components/NoColor";

const ColorPicker = forwardRef(
  (
    {
      className,
      onSave,
      value,
      noColorText,
      colorStyle,
      ColorIndicatorIcon,
      SelectedIndicatorIcon,
      shouldRenderIndicatorWithoutBackground,
      NoColorIcon,
      isBlackListMode,
      colorsList,
      isMultiselect
    },
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
          SelectedIndicatorIcon={SelectedIndicatorIcon}
          NoColorIcon={NoColorIcon}
          colorsList={colorsList}
          isBlackListMode={isBlackListMode}
          isMultiselect={isMultiselect}
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
  SelectedIndicatorIcon: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
  colorStyle: PropTypes.oneOf([ColorPicker.COLOR_STYLES.REGULAR, ColorPicker.COLOR_STYLES.SELECTED]),
  noColorText: PropTypes.string,
  shouldRenderIndicatorWithoutBackground: PropTypes.bool,
  NoColorIcon: PropTypes.func,
  isBlackListMode: PropTypes.bool,
  colorsList: PropTypes.array,
  isMultiselect: PropTypes.bool
};

ColorPicker.defaultProps = {
  className: "",
  onSave: () => {},
  ColorIndicatorIcon: undefined,
  SelectedIndicatorIcon: undefined,
  value: "",
  colorStyle: COLOR_STYLES.REGULAR,
  noColorText: undefined,
  shouldRenderIndicatorWithoutBackground: false,
  NoColorIcon: NoColor,
  isBlackListMode: true,
  colorsList: [],
  isMultiselect: false
};

export default ColorPicker;
