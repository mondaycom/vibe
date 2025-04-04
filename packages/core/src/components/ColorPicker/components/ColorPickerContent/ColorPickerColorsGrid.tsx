import React, { forwardRef, useCallback } from "react";
import useGridKeyboardNavigation from "../../../../hooks/useGridKeyboardNavigation/useGridKeyboardNavigation";
import ColorPickerItemComponent from "../ColorPickerItemComponent/ColorPickerItemComponent";
import { CONTENT_COLORS_VALUES } from "../../../../utils/colors-vars-map";
import { ColorPickerArrayValueOnly, ColorPickerValueOnly } from "../../ColorPicker.types";
import { ColorShapes, ColorPickerSizes } from "../../ColorPicker.types";
import { SubIcon, VibeComponentProps } from "../../../../types";
import styles from "./ColorPickerColorsGrid.module.scss";
import { ColorStyle } from "../../../../types";

const formatColorNameForTooltip = (color: ColorPickerValueOnly) => {
  return color.replace(/-|_/g, " ").replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
};

const calculateColorTooltip = (
  color: ColorPickerValueOnly,
  tooltipContentByColor?: Partial<Record<CONTENT_COLORS_VALUES, string> & Record<string, string>>
) => {
  if (tooltipContentByColor && tooltipContentByColor[color]) {
    return tooltipContentByColor[color];
  } else {
    return formatColorNameForTooltip(color);
  }
};

export interface ColorPickerColorsGridProps extends VibeComponentProps {
  /**
   * Callback fired when a color is clicked.
   */
  onColorClicked?: (color: ColorPickerValueOnly) => void;
  /**
   * The list of colors to be displayed.
   */
  colorsToRender?: ColorPickerArrayValueOnly;
  /**
   * Icon displayed as an indicator inside the color.
   */
  ColorIndicatorIcon?: SubIcon;
  /**
   * Icon displayed when a color is selected.
   */
  SelectedIndicatorIcon?: SubIcon;
  /**
   * The style applied to the colors.
   */
  colorStyle?: ColorStyle;
  /**
   * The currently selected color or colors.
   */
  value?: string | string[];
  /**
   * If true, renders the color indicator without a background.
   */
  shouldRenderIndicatorWithoutBackground?: boolean;
  /**
   * The size of the color items.
   */
  colorSize?: ColorPickerSizes;
  /**
   * The number of colors per row.
   */
  numberOfColorsInLine?: number;
  /**
   * Custom tooltip content for specific colors.
   */
  tooltipContentByColor?: Partial<Record<CONTENT_COLORS_VALUES, string> & Record<string, string>>;
  /**
   * If true, the first color is focused when the component mounts.
   */
  focusOnMount?: boolean;
  /**
   * The shape of the color items.
   */
  colorShape?: ColorShapes;
  /**
   * If true, displays a tooltip with the color name.
   */
  showColorNameTooltip?: boolean;
}

const ColorPickerColorsGrid = forwardRef(
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
      showColorNameTooltip: showColorNameTooltip,
      id,
      "data-testid": dataTestId
    }: ColorPickerColorsGridProps,
    ref: React.ForwardedRef<HTMLUListElement>
  ) => {
    const getItemByIndex = useCallback((index: number) => colorsToRender[index], [colorsToRender]);

    const { activeIndex, onSelectionAction } = useGridKeyboardNavigation({
      focusOnMount,
      ref: ref as React.MutableRefObject<HTMLUListElement>,
      onItemClicked: onColorClicked,
      itemsCount: colorsToRender.length,
      numberOfItemsInLine: numberOfColorsInLine,
      getItemByIndex
    });

    return (
      <ul className={styles.colorsGrid} ref={ref} tabIndex={-1} id={id} data-testid={dataTestId}>
        {colorsToRender.map((color, index) => {
          return (
            <ColorPickerItemComponent
              key={color}
              color={color}
              onColorClicked={() => onSelectionAction(index)}
              shouldRenderIndicatorWithoutBackground={ColorIndicatorIcon && shouldRenderIndicatorWithoutBackground}
              colorStyle={colorStyle}
              ColorIndicatorIcon={ColorIndicatorIcon}
              SelectedIndicatorIcon={SelectedIndicatorIcon}
              isSelected={Array.isArray(value) ? value.includes(color) : value === color}
              isActive={index === activeIndex}
              colorSize={colorSize}
              tooltipContent={showColorNameTooltip ? calculateColorTooltip(color, tooltipContentByColor) : undefined}
              colorShape={colorShape}
            />
          );
        })}
      </ul>
    );
  }
);

export default ColorPickerColorsGrid;
