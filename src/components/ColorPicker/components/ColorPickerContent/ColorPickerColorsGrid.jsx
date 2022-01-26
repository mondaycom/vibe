import cx from "classnames";
import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import useGridKeyboardNavigation from "../../../../hooks/useGridKeyboardNavigation/useGridKeyboardNavigation";
import ColorPickerItemComponent from "../ColorPickerItemComponent/ColorPickerItemComponent";
import AnyColorPickerItemComponent from "../AnyColorPickerItemComponent/AnyColorPickerItemComponent";
import { COLOR_STYLES } from "../../../../general-stories/colors/colors-vars-map";
import { SIZES } from "../../../../constants/sizes";
import { COLOR_SHAPES, DEFAULT_NUMBER_OF_COLORS_IN_LINE } from "../../ColorPickerConstants";

export const ColorPickerColorsGrid = React.forwardRef(
  (
    {
      onColorClicked,
      colorsToRender,
      numberOfColorsInLine,
      focusOnMount,
      value,
      colorStyle,
      ColorIndicatorIcon,
      shouldRenderIndicatorWithoutBackground,
      isMultiselect,
      SelectedIndicatorIcon,
      colorSize,
      tooltipContentByColor,
      colorShape,
      isWithAnyColorPicker,
      setShowAnyColorPickerDialog
    },
    ref
  ) => {
    const getItemByIndex = useCallback(index => colorsToRender[index], [colorsToRender]);

    const { activeIndex, onSelectionAction } = useGridKeyboardNavigation({
      focusOnMount,
      ref,
      onItemClicked: onColorClicked,
      itemsCount: colorsToRender.length,
      numberOfItemsInLine: numberOfColorsInLine,
      getItemByIndex
    });

    const renderAnycolorPicker = useMemo(() => {
      return (
        <AnyColorPickerItemComponent
          onColorClicked={onColorClicked}
          ColorIndicatorIcon={ColorIndicatorIcon}
          SelectedIndicatorIcon={SelectedIndicatorIcon}
          setShowAnyColorPickerDialog={setShowAnyColorPickerDialog}
          colorSize={colorSize}
          colorShape={colorShape}
          tooltipContent={"TODO"}
          value={value}
        />
      );
    }, [
      ColorIndicatorIcon,
      SelectedIndicatorIcon,
      colorShape,
      colorSize,
      onColorClicked,
      setShowAnyColorPickerDialog,
      value
    ]);

    const onValueChange = useCallback(index => () => onSelectionAction(index), [onSelectionAction]);
    return (
      <ul className={cx("color-picker")} ref={ref} tabIndex={-1}>
        {colorsToRender.map((color, index) => {
          return (
            <ColorPickerItemComponent
              key={color}
              color={color}
              onValueChange={onValueChange(index)}
              value={value}
              shouldRenderIndicatorWithoutBackground={ColorIndicatorIcon && shouldRenderIndicatorWithoutBackground}
              colorStyle={colorStyle}
              ColorIndicatorIcon={ColorIndicatorIcon}
              SelectedIndicatorIcon={SelectedIndicatorIcon}
              isSelected={isMultiselect ? value.includes(color) : value === color}
              isActive={index === activeIndex}
              isMultiselect={isMultiselect}
              colorSize={colorSize}
              tooltipContent={tooltipContentByColor[color]}
              colorShape={colorShape}
            />
          );
        })}
        {isWithAnyColorPicker && renderAnycolorPicker}
      </ul>
    );
  }
);

ColorPickerColorsGrid.COLOR_STYLES = COLOR_STYLES;
ColorPickerColorsGrid.sizes = SIZES;
ColorPickerColorsGrid.colorShapes = COLOR_SHAPES;

ColorPickerColorsGrid.propTypes = {
  onColorClicked: PropTypes.func,
  colorsToRender: PropTypes.array,
  ColorIndicatorIcon: PropTypes.func,
  SelectedIndicatorIcon: PropTypes.func,
  colorStyle: PropTypes.oneOf([
    ColorPickerColorsGrid.COLOR_STYLES.REGULAR,
    ColorPickerColorsGrid.COLOR_STYLES.SELECTED
  ]),
  value: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
  shouldRenderIndicatorWithoutBackground: PropTypes.bool,
  colorSize: PropTypes.oneOf([
    ColorPickerColorsGrid.sizes.SMALL,
    ColorPickerColorsGrid.sizes.MEDIUM,
    ColorPickerColorsGrid.sizes.LARGE
  ]),
  numberOfColorsInLine: PropTypes.number,
  tooltipContentByColor: PropTypes.object,
  focusOnMount: PropTypes.bool,
  colorShape: PropTypes.oneOf(Object.values(ColorPickerColorsGrid.colorShapes)),
  isMultiselect: PropTypes.bool,
  isWithAnyColorPicker: PropTypes.bool
};

ColorPickerColorsGrid.defaultProps = {
  onColorClicked: () => {},
  ColorIndicatorIcon: undefined,
  colorsToRender: [],
  SelectedIndicatorIcon: undefined,
  colorStyle: ColorPickerColorsGrid.COLOR_STYLES.REGULAR,
  value: "",
  shouldRenderIndicatorWithoutBackground: false,
  colorSize: ColorPickerColorsGrid.sizes.MEDIUM,
  numberOfColorsInLine: DEFAULT_NUMBER_OF_COLORS_IN_LINE,
  tooltipContentByColor: {},
  focusOnMount: false,
  colorShape: ColorPickerColorsGrid.colorShapes.SQUARE,
  isWithAnyColorPicker: false,
  isMultiselect: false
};
