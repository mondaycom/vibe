import cx from "classnames";
import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import useGridKeyboardNavigation from "../../../../hooks/useGridKeyboardNavigation/useGridKeyboardNavigation";
import ColorPickerItemComponent from "../ColorPickerItemComponent/ColorPickerItemComponent";
import { COLOR_STYLES } from "../../../../general-stories/colors/colors-vars-map";
import { SIZES } from "../../../../constants/sizes";
import { COLOR_SHAPES, DEFAULT_NUMBER_OF_COLORS_IN_LINE, RAINBOW } from "../../ColorPickerConstants";

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
      showCustomColorPicker,
      initialCustomColor
    },
    ref
  ) => {
    const [customColor, setCustomColor] = useState(initialCustomColor);
    const [showColorPicker, setShowColorPicker] = useState();

    const getItemByIndex = useCallback(index => colorsToRender[index], [colorsToRender]);
    const onCustomColorClicked = useCallback(
      colorHex => {
        onSelectionAction(colorsToRender.length);
        setCustomColor(colorHex);
        onColorClicked(colorHex, customColor);
      },
      [colorsToRender.length, customColor, onColorClicked, onSelectionAction]
    );

    const onClearSelectedColor = useCallback(
      colorToRemove => {
        setShowColorPicker();
        setCustomColor();
        onColorClicked(colorToRemove);
      },
      [onColorClicked]
    );

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
              showColorPicker={showColorPicker}
              setShowColorPicker={setShowColorPicker}
            />
          );
        })}
        {showCustomColorPicker && (
          <ColorPickerItemComponent
            key={RAINBOW}
            color={RAINBOW}
            onCustomColorClicked={onCustomColorClicked}
            customColor={customColor}
            shouldRenderIndicatorWithoutBackground
            colorStyle={colorStyle}
            ColorIndicatorIcon={ColorIndicatorIcon}
            SelectedIndicatorIcon={SelectedIndicatorIcon}
            isSelected={isMultiselect ? value.includes(customColor) : value === customColor}
            isActive={colorsToRender.length === activeIndex}
            isMultiselect={isMultiselect}
            colorSize={colorSize}
            tooltipContent={tooltipContentByColor[customColor]}
            colorShape={colorShape}
            showColorPicker={showColorPicker}
            setShowColorPicker={setShowColorPicker}
            clearSelectedColor={onClearSelectedColor}
          />
        )}
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
  showCustomColorPicker: PropTypes.bool,
  initialCustomColor: PropTypes.string
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
  isMultiselect: false,
  showCustomColorPicker: false,
  initialCustomColor: null
};
