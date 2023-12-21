import { difference as _difference, intersection as _intersection } from "lodash-es";
import React, { forwardRef, useCallback, useMemo, useRef } from "react";
import { BaseSizes } from "../../../../constants";
import { ColorStyle, CONTENT_COLORS_VALUES, contentColors } from "../../../../utils/colors-vars-map";
import NoColor from "../../../Icon/Icons/components/NoColor";
import {
  ColorShapes,
  DEFAULT_NUMBER_OF_COLORS_IN_LINE,
  ColorPickerValue,
  ColorPickerArrayValueOnly
} from "../../ColorPickerConstants";
import { calculateColorPickerWidth } from "../../services/ColorPickerStyleService";
import {
  GridKeyboardNavigationContext,
  useGridKeyboardNavigationContext
} from "../../../GridKeyboardNavigationContext/GridKeyboardNavigationContext";
import { ColorPickerClearButton } from "./ColorPickerClearButton";
import { ColorPickerColorsGrid } from "./ColorPickerColorsGrid";
import { VibeComponentProps, VibeComponent, SubIcon, withStaticProps } from "../../../../types";
import useMergeRef from "../../../../hooks/useMergeRef";

export interface ColorPickerContentProps extends VibeComponentProps {
  value: ColorPickerValue;
  onValueChange: (value: ColorPickerArrayValueOnly) => void;
  colorsList: ColorPickerArrayValueOnly;
  ColorIndicatorIcon?: SubIcon;
  SelectedIndicatorIcon?: SubIcon;
  NoColorIcon?: SubIcon;
  colorStyle?: ColorStyle;
  colorSize?: BaseSizes;
  colorShape?: ColorShapes;
  tooltipContentByColor?: Partial<Record<CONTENT_COLORS_VALUES, string>>;
  noColorText?: string;
  shouldRenderIndicatorWithoutBackground?: boolean;
  isBlackListMode?: boolean;
  numberOfColorsInLine?: number;
  focusOnMount?: boolean;
  isMultiselect?: boolean;
  /**
   * Used to force the component render the colorList prop as is. Usually, this flag should not be used. It's intended only for edge cases.
   * Usually, only "monday colors" will be rendered (unless blacklist mode is used). This flag will override this behavior.
   */
  forceUseRawColorList?: boolean;
  /**
   * Used to enable color name tooltip on each color in the component. it's incompatible with forceUseRawColorList flag.
   * When "tooltipContentByColor" is supplied, it will override the color name tooltip.
   */
  showColorNameTooltip?: boolean;
}

const ColorPickerContent: VibeComponent<ColorPickerContentProps, HTMLDivElement> & {
  // Backward compatibility for enum naming
  COLOR_STYLES?: typeof ColorStyle;
  sizes?: typeof BaseSizes;
  colorStyles?: typeof ColorStyle;
  colorSizes?: typeof BaseSizes;
  colorShapes?: typeof ColorShapes;
} = forwardRef(
  (
    {
      className,
      onValueChange,
      value,
      noColorText,
      colorStyle = ColorStyle.REGULAR,
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
      colorShape = ColorShapes.SQUARE,
      forceUseRawColorList,
      showColorNameTooltip,
      id,
      "data-testid": dataTestId
    },
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
    const width = calculateColorPickerWidth(colorSize, numberOfColorsInLine);

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
            showColorNameTooltip={showColorNameTooltip && !forceUseRawColorList}
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
  // Backward compatibility for enum naming
  COLOR_STYLES: ColorStyle,
  sizes: BaseSizes,
  colorStyles: ColorStyle,
  colorSizes: BaseSizes,
  colorShapes: ColorShapes
});
