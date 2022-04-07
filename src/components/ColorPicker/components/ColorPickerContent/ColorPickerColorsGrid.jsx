import cx from "classnames";
import React, { useCallback } from "react";
import PropTypes from "prop-types";
import useGridKeyboardNavigation from "../../../../hooks/useGridKeyboardNavigation/useGridKeyboardNavigation";
import ColorPickerItemComponent from "../ColorPickerItemComponent/ColorPickerItemComponent";
import { COLOR_STYLES } from "../../../../utils/colors-vars-map";
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
      SelectedIndicatorIcon,
      colorSize,
      tooltipContentByColor,
      colorShape,
      showColorNameTooltip: showColorNameTooltip
    },
    ref
  ) => {
    const getItemByIndex = useCallback(index => colorsToRender[index], [colorsToRender]);

    const calculateColorTooltip = color => {
      if (tooltipContentByColor && tooltipContentByColor[color]) return tooltipContentByColor[color];
      else {
        return showColorNameTooltip ? formatColorNameForTooltip(color) : undefined;
      }
    };

    const formatColorNameForTooltip = color => {
      return color.replace(/-|_/g, " ").replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
      });
    };

    const { activeIndex, onSelectionAction } = useGridKeyboardNavigation({
      focusOnMount,
      ref,
      onItemClicked: onColorClicked,
      itemsCount: colorsToRender.length,
      numberOfItemsInLine: numberOfColorsInLine,
      getItemByIndex
    });

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
              isSelected={Array.isArray(value) ? value.includes(color) : value === color}
              isActive={index === activeIndex}
              colorSize={colorSize}
              tooltipContent={calculateColorTooltip(color)}
              colorShape={colorShape}
            />
          );
        })}
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
  showColorNameTooltip: PropTypes.bool
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
  showColorNameTooltip: false
};
