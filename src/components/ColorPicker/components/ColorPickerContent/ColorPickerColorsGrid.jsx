import cx from "classnames";
import React, { useCallback } from "react";
import useGridKeyboardNavigation from "../../../../hooks/useGridKeyboardNavigation/useGridKeyboardNavigation";
import ColorPickerItemComponent from "../ColorPickerItemComponent/ColorPickerItemComponent";

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
      colorShape
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
      </ul>
    );
  }
);
