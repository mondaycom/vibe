import React, { useCallback } from "react";
import useGridKeyboardNavigation from "../../../../hooks/useGridKeyboardNavigation/useGridKeyboardNavigation";
import ColorPickerItemComponent from "../ColorPickerItemComponent/ColorPickerItemComponent";
import { CONTENT_COLORS_VALUES, ColorStyle } from "../../../../utils/colors-vars-map";
import { BaseSizes } from "../../../../constants";
import { ColorPickerArrayValueOnly, ColorPickerValueOnly, ColorShapes } from "../../ColorPickerConstants";
import { SubIcon, VibeComponent, VibeComponentProps } from "../../../../types";
import styles from "./ColorPickerColorsGrid.module.scss";

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
  onColorClicked?: (color: ColorPickerValueOnly) => void;
  colorsToRender?: ColorPickerArrayValueOnly;
  ColorIndicatorIcon?: SubIcon;
  SelectedIndicatorIcon?: SubIcon;
  colorStyle?: ColorStyle;
  value?: string | string[];
  shouldRenderIndicatorWithoutBackground?: boolean;
  colorSize?: BaseSizes;
  numberOfColorsInLine?: number;
  tooltipContentByColor?: Partial<Record<CONTENT_COLORS_VALUES, string> & Record<string, string>>;
  focusOnMount?: boolean;
  colorShape?: ColorShapes;
  showColorNameTooltip?: boolean;
}

export const ColorPickerColorsGrid: VibeComponent<ColorPickerColorsGridProps, HTMLUListElement> = React.forwardRef(
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
    },
    ref
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
