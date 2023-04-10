import React, { useCallback } from "react";
import useGridKeyboardNavigation from "../../../../hooks/useGridKeyboardNavigation/useGridKeyboardNavigation";
import ColorPickerItemComponent from "../ColorPickerItemComponent/ColorPickerItemComponent";
import { COLOR_STYLES, CONTENT_COLORS_VALUES } from "../../../../utils/colors-vars-map";
import { SIZES, SIZES_VALUES } from "../../../../constants/sizes";
import { COLOR_SHAPES, COLOR_SHAPES_VALUES, DEFAULT_NUMBER_OF_COLORS_IN_LINE } from "../../ColorPickerConstants";
import { NOOP } from "../../../../utils/function-utils";
import { VibeComponentProps } from "../../../../types";
import VibeComponent from "../../../../types/VibeComponent";

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
      onItemClicked: onColorClicked,
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

interface ColorPickerColorsGridProps extends VibeComponentProps {
  onColorClicked: () => any; //TODO needs a better specifity
  colorsToRender: CONTENT_COLORS_VALUES[];
  ColorIndicatorIcon: ({ size, className }: { size?: string; className?: string }) => JSX.Element;
  SelectedIndicatorIcon: ({ size, className }: { size?: string; className?: string }) => JSX.Element;
  colorStyle: "regular" | "selected";
  value: string | string[];
  shouldRenderIndicatorWithoutBackground: boolean;
  colorSize: SIZES_VALUES;
  numberOfColorsInLine: number;
  tooltipContentByColor: Partial<Record<CONTENT_COLORS_VALUES, string>>;
  focusOnMount: boolean;
  colorShape: COLOR_SHAPES_VALUES;
  showColorNameTooltip: boolean;
}
ColorPickerColorsGrid.defaultProps = {
  onColorClicked: NOOP,
  colorsToRender: [],
  colorStyle: COLOR_STYLES.REGULAR,
  value: "",
  shouldRenderIndicatorWithoutBackground: false,
  colorSize: SIZES.MEDIUM,
  numberOfColorsInLine: DEFAULT_NUMBER_OF_COLORS_IN_LINE,
  tooltipContentByColor: {},
  focusOnMount: false,
  colorShape: COLOR_SHAPES.SQUARE,
  showColorNameTooltip: false
};
