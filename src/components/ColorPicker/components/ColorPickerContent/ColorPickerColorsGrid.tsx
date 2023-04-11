import React, { useCallback } from "react";
import useGridKeyboardNavigation from "../../../../hooks/useGridKeyboardNavigation/useGridKeyboardNavigation";
import ColorPickerItemComponent from "../ColorPickerItemComponent/ColorPickerItemComponent";
import { CONTENT_COLORS_VALUES } from "../../../../utils/colors-vars-map";
import { BASE_SIZES_VALUES } from "../../../../constants";
import { COLOR_SHAPES_VALUES } from "../../ColorPickerConstants";
import { VibeComponent, VibeComponentProps } from "../../../../types";

const formatColorNameForTooltip = (color: CONTENT_COLORS_VALUES) => {
  return color.replace(/-|_/g, " ").replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
};

const calculateColorTooltip = (
  color: CONTENT_COLORS_VALUES,
  tooltipContentByColor?: Partial<Record<CONTENT_COLORS_VALUES, string>>
) => {
  if (tooltipContentByColor && tooltipContentByColor[color]) {
    return tooltipContentByColor[color];
  } else {
    return formatColorNameForTooltip(color);
  }
};

interface ColorPickerColorsGridProps extends VibeComponentProps {
  onColorClicked: (color: CONTENT_COLORS_VALUES) => any;
  colorsToRender: CONTENT_COLORS_VALUES[];
  ColorIndicatorIcon: ({ size, className }: { size?: string; className?: string }) => JSX.Element;
  SelectedIndicatorIcon: ({ size, className }: { size?: string; className?: string }) => JSX.Element;
  colorStyle: "regular" | "selected";
  value: string | string[];
  shouldRenderIndicatorWithoutBackground: boolean;
  colorSize: BASE_SIZES_VALUES;
  numberOfColorsInLine: number;
  tooltipContentByColor: Partial<Record<CONTENT_COLORS_VALUES, string>>;
  focusOnMount: boolean;
  colorShape: COLOR_SHAPES_VALUES;
  showColorNameTooltip: boolean;
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
      showColorNameTooltip: showColorNameTooltip
    },
    ref
  ) => {
    const getItemByIndex = useCallback((index: number) => colorsToRender[index], [colorsToRender]);

    const { activeIndex, onSelectionAction } = useGridKeyboardNavigation({
      focusOnMount,
      ref: ref as React.MutableRefObject<HTMLUListElement>,
      onItemClicked: onColorClicked as any, //TODO - not sure how to utilize this hook correctly
      itemsCount: colorsToRender.length,
      numberOfItemsInLine: numberOfColorsInLine,
      getItemByIndex
    });

    return (
      <ul className="color-picker" ref={ref} tabIndex={-1}>
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
