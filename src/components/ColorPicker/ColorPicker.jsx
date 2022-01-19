import cx from "classnames";
import PropTypes from "prop-types";
import React, { forwardRef, useCallback, useRef } from "react";
import { SIZES } from "../../constants/sizes";
import useMergeRefs from "../../hooks/useMergeRefs";
import DialogContentContainer from "../DialogContentContainer/DialogContentContainer";
import { COLOR_STYLES } from "../../general-stories/colors/colors-vars-map";
import NoColor from "../Icon/Icons/components/NoColor";
import ColorPickerContentComponent from "./components/ColorPickerContent/ColorPickerContentComponent";
import { DEFAULT_NUMBER_OF_COLORS_IN_LINE } from "./ColorPickerConstants";
import { calculateColorPickerDialogWidth } from "./services/ColorPickerStyleService";
import "./ColorPicker.scss";

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
      isMultiselect,
      colorSize,
      numberOfColorsInLine,
      focusOnMount
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const onChange = useCallback(onSave, [onSave]);

    const width = calculateColorPickerDialogWidth(colorSize, numberOfColorsInLine);

    return (
      <DialogContentContainer
        ref={mergedRef}
        className={cx("color-picker--wrapper", "color-picker-dialog-content", className)}
        ariaLabelledby="Color Picker Dialog"
        ariaDescribedby="Pick color"
        style={{ width }}
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
          colorSize={colorSize}
          numberOfColorsInLine={numberOfColorsInLine}
          focusOnMount={focusOnMount}
        />
      </DialogContentContainer>
    );
  }
);

// Backward compatibility for enum naming
ColorPicker.COLOR_STYLES = COLOR_STYLES;
ColorPicker.sizes = SIZES;

ColorPicker.colorStyles = COLOR_STYLES;
ColorPicker.colorSizes = SIZES;

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
  isMultiselect: PropTypes.bool,
  colorSize: PropTypes.oneOf([ColorPicker.sizes.SMALL, ColorPicker.sizes.MEDIUM, ColorPicker.sizes.LARGE]),
  numberOfColorsInLine: PropTypes.number,
  focusOnMount: PropTypes.bool
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
  isMultiselect: false,
  colorSize: ColorPicker.sizes.MEDIUM,
  numberOfColorsInLine: DEFAULT_NUMBER_OF_COLORS_IN_LINE,
  focusOnMount: false
};

export default ColorPicker;
