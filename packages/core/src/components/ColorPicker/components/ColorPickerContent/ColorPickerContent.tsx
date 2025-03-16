import { difference as _difference, intersection as _intersection } from "lodash-es";
import React, { forwardRef, useCallback, useMemo, useRef } from "react";
import { BaseSizes } from "../../../../constants";
import { ColorStyle as ColorStyleEnum, CONTENT_COLORS_VALUES, contentColors } from "../../../../utils/colors-vars-map";
import { NoColor } from "@vibe/icons";
import { ColorShapes as ColorShapesEnum, DEFAULT_NUMBER_OF_COLORS_IN_LINE } from "../../ColorPickerConstants";
import { ColorShapes, ColorPickerSizes, ColorPickerValue, ColorPickerArrayValueOnly } from "../../ColorPicker.types";
import { calculateColorPickerWidth } from "../../services/ColorPickerStyleService";
import {
  GridKeyboardNavigationContext,
  useGridKeyboardNavigationContext
} from "../../../GridKeyboardNavigationContext/GridKeyboardNavigationContext";
import { ColorPickerClearButton } from "./ColorPickerClearButton";
import { ColorPickerColorsGrid } from "./ColorPickerColorsGrid";
import { VibeComponentProps, VibeComponent, SubIcon, withStaticProps } from "../../../../types";
import useMergeRef from "../../../../hooks/useMergeRef";
import { ColorStyle } from "../../../../types/Colors";

export interface ColorPickerContentProps extends VibeComponentProps {
  /**
   * The selected color(s).
   */
  value: ColorPickerValue;
  /**
   * Callback fired when the selected color(s) change.
   */
  onValueChange: (value: ColorPickerArrayValueOnly) => void;
  /**
   * The list of colors available for selection.
   */
  colorsList: ColorPickerArrayValueOnly;
  /**
   * Icon displayed as an indicator inside the color.
   */
  ColorIndicatorIcon?: SubIcon;
  /**
   * Icon displayed when a color is selected.
   */
  SelectedIndicatorIcon?: SubIcon;
  /**
   * Icon used for clearing the color selection.
   */
  NoColorIcon?: SubIcon;
  /**
   * The style applied to the colors.
   */
  colorStyle?: ColorStyle;
  /**
   * The size of the color items.
   */
  colorSize?: ColorPickerSizes;
  /**
   * The shape of the color items.
   */
  colorShape?: ColorShapes;
  /**
   * Custom tooltip content for specific colors.
   */
  tooltipContentByColor?: Partial<Record<CONTENT_COLORS_VALUES, string>>;
  /**
   * Text displayed for the "no color" option.
   */
  noColorText?: string;
  /**
   * If true, renders the color indicator without a background.
   */
  shouldRenderIndicatorWithoutBackground?: boolean;
  /**
   * If true, treats the color list as a blacklist rather than a whitelist.
   */
  isBlackListMode?: boolean;
  /**
   * The number of colors displayed per row.
   */
  numberOfColorsInLine?: number;
  /**
   * If true, the first color is focused when the component mounts.
   */
  focusOnMount?: boolean;
  /**
   * If true, allows selecting multiple colors.
   */
  isMultiselect?: boolean;
  /**
   * Used to force the component render the colorList prop as is. Usually, this flag should not be used. It's intended only for edge cases.
   * Usually, only "monday colors" will be rendered (unless blacklist mode is used). This flag will override this behavior.
   */
  forceUseRawColorList?: boolean;
  /**
   * Used to enable color name tooltip on each color in the component.
   * When "tooltipContentByColor" is supplied, it will override the color name tooltip.
   */
  showColorNameTooltip?: boolean;
}

const ColorPickerContent: VibeComponent<ColorPickerContentProps, HTMLDivElement> & {
  sizes?: typeof BaseSizes;
  colorStyles?: typeof ColorStyleEnum;
  colorSizes?: typeof BaseSizes;
  colorShapes?: typeof ColorShapesEnum;
} = forwardRef(
  (
    {
      className,
      onValueChange,
      value,
      noColorText,
      colorStyle = "regular",
      ColorIndicatorIcon,
      SelectedIndicatorIcon,
      shouldRenderIndicatorWithoutBackground,
      NoColorIcon = NoColor,
      isBlackListMode = true,
      colorsList,
      isMultiselect,
      colorSize = BaseSizes.MEDIUM,
      numberOfColorsInLine = DEFAULT_NUMBER_OF_COLORS_IN_LINE,
      tooltipContentByColor = {},
      focusOnMount,
      colorShape = "square",
      forceUseRawColorList,
      showColorNameTooltip,
      id,
      "data-testid": dataTestId
    }: ColorPickerContentProps,
    ref
  ) => {
    const gridRef = useRef(null);
    const mergedRef = useMergeRef(ref, gridRef);
    const colorsRef = useRef(null);
    const buttonRef = useRef(null);

    const onClearButton = useCallback(() => {
      onValueChange(null);
    }, [onValueChange]);

    const colorsToRender = useMemo(() => {
      if (forceUseRawColorList) {
        return colorsList;
      }
      return isBlackListMode ? _difference(contentColors, colorsList) : _intersection(contentColors, colorsList);
    }, [forceUseRawColorList, isBlackListMode, colorsList]);

    const onColorClicked = useCallback(
      (color: CONTENT_COLORS_VALUES) => {
        if (!isMultiselect) {
          onValueChange([color]);
          return;
        }
        const colors = [...value];
        if (colors.includes(color)) {
          const indexInSelected = colors.indexOf(color);
          if (indexInSelected > -1) {
            colors.splice(indexInSelected, 1);
          }
        } else {
          colors.push(color);
        }
        onValueChange(colors);
      },
      [isMultiselect, onValueChange, value]
    );

    const positions = useMemo(() => [{ topElement: colorsRef, bottomElement: buttonRef }], []);
    const keyboardContext = useGridKeyboardNavigationContext(positions, gridRef);
    const width = calculateColorPickerWidth(colorSize as BaseSizes, numberOfColorsInLine);

    return (
      <div className={className} style={{ width }} ref={mergedRef} tabIndex={-1}>
        <GridKeyboardNavigationContext.Provider value={keyboardContext}>
          <ColorPickerColorsGrid
            ref={colorsRef}
            onColorClicked={onColorClicked}
            colorsToRender={colorsToRender}
            numberOfColorsInLine={numberOfColorsInLine}
            focusOnMount={focusOnMount}
            value={value}
            colorStyle={colorStyle}
            ColorIndicatorIcon={ColorIndicatorIcon}
            shouldRenderIndicatorWithoutBackground={shouldRenderIndicatorWithoutBackground}
            SelectedIndicatorIcon={SelectedIndicatorIcon}
            colorSize={colorSize}
            tooltipContentByColor={tooltipContentByColor}
            colorShape={colorShape}
            showColorNameTooltip={showColorNameTooltip}
            id={id}
            data-testid={dataTestId}
          />
          {noColorText && (
            <ColorPickerClearButton Icon={NoColorIcon} onClick={onClearButton} text={noColorText} ref={buttonRef} />
          )}
        </GridKeyboardNavigationContext.Provider>
      </div>
    );
  }
);

export default withStaticProps(ColorPickerContent, {
  sizes: BaseSizes,
  colorStyles: ColorStyleEnum,
  colorSizes: BaseSizes,
  colorShapes: ColorShapesEnum
});
