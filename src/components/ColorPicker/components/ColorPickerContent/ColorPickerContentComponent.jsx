import cx from "classnames";
import _difference from "lodash/difference";
import _intersection from "lodash/intersection";
import PropTypes from "prop-types";
import React, { forwardRef, useCallback, useMemo, useRef } from "react";
import { SIZES } from "../../../../constants/sizes";
import { COLOR_STYLES, contentColors } from "../../../../utils/colors-vars-map";
import NoColor from "../../../Icon/Icons/components/NoColor";
import { COLOR_SHAPES, DEFAULT_NUMBER_OF_COLORS_IN_LINE } from "../../ColorPickerConstants";
import { calculateColorPickerWidth } from "../../services/ColorPickerStyleService";
import "./ColorPickerContentComponent.scss";
import {
  GridKeyboardNavigationContext,
  useGridKeyboardNavigationContext
} from "../../../GridKeyboardNavigationContext/GridKeyboardNavigationContext";
import { ColorPickerClearButton } from "./ColorPickerClearButton";
import { ColorPickerColorsGrid } from "./ColorPickerColorsGrid";

const ColorPickerContentComponent = forwardRef(
  (
    {
      className,
      onValueChange,
      value,
      noColorText,
      colorStyle,
      ColorIndicatorIcon,
      SelectedIndicatorIcon,
      shouldRenderIndicatorWithoutBackground,
      NoColorIcon,
      isBlackListMode,
      colorsList,
      isMultiselect,
      colorSize,
      numberOfColorsInLine,
      tooltipContentByColor,
      focusOnMount,
      colorShape,
      forceUseRawColorList,
      showColorNameTooltip
    },
    ref
  ) => {
    const onClearButton = useCallback(() => {
      onValueChange(null);
    }, [onValueChange]);

    const colorsRef = useRef(null);
    const buttonRef = useRef(null);

    const colorsToRender = useMemo(() => {
      if (forceUseRawColorList) {
        return colorsList;
      }
      return isBlackListMode ? _difference(contentColors, colorsList) : _intersection(contentColors, colorsList);
    }, [forceUseRawColorList, isBlackListMode, colorsList]);

    const onColorClicked = useCallback(
      color => {
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
    const keyboardContext = useGridKeyboardNavigationContext(positions, ref);
    const width = calculateColorPickerWidth(colorSize, numberOfColorsInLine);

    return (
      <div className={cx("color-picker-content--wrapper", className)} style={{ width }} ref={ref} tabIndex={-1}>
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
          />
          {noColorText && (
            <ColorPickerClearButton Icon={NoColorIcon} onClick={onClearButton} text={noColorText} ref={buttonRef} />
          )}
        </GridKeyboardNavigationContext.Provider>
      </div>
    );
  }
);

ColorPickerContentComponent.COLOR_STYLES = COLOR_STYLES;
ColorPickerContentComponent.sizes = SIZES;
ColorPickerContentComponent.colorShapes = COLOR_SHAPES;

ColorPickerContentComponent.propTypes = {
  className: PropTypes.string,
  onValueChange: PropTypes.func,
  ColorIndicatorIcon: PropTypes.func,
  SelectedIndicatorIcon: PropTypes.func,
  colorStyle: PropTypes.oneOf([
    ColorPickerContentComponent.COLOR_STYLES.REGULAR,
    ColorPickerContentComponent.COLOR_STYLES.SELECTED
  ]),
  value: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
  noColorText: PropTypes.string,
  shouldRenderIndicatorWithoutBackground: PropTypes.bool,
  NoColorIcon: PropTypes.func,
  isBlackListMode: PropTypes.bool,
  colorsList: PropTypes.array,
  colorSize: PropTypes.oneOf([
    ColorPickerContentComponent.sizes.SMALL,
    ColorPickerContentComponent.sizes.MEDIUM,
    ColorPickerContentComponent.sizes.LARGE
  ]),
  numberOfColorsInLine: PropTypes.number,
  tooltipContentByColor: PropTypes.object,
  focusOnMount: PropTypes.bool,
  colorShape: PropTypes.oneOf(Object.values(ColorPickerContentComponent.colorShapes)),
  isMultiselect: PropTypes.bool,
  forceUseRawColorList: PropTypes.bool,
  showColorNameTooltip: PropTypes.bool
};

ColorPickerContentComponent.defaultProps = {
  className: "",
  onValueChange: () => {},
  ColorIndicatorIcon: undefined,
  SelectedIndicatorIcon: undefined,
  colorStyle: ColorPickerContentComponent.COLOR_STYLES.REGULAR,
  value: "",
  noColorText: undefined,
  shouldRenderIndicatorWithoutBackground: false,
  NoColorIcon: NoColor,
  isBlackListMode: true,
  colorsList: [],
  colorSize: ColorPickerContentComponent.sizes.MEDIUM,
  numberOfColorsInLine: DEFAULT_NUMBER_OF_COLORS_IN_LINE,
  tooltipContentByColor: {},
  focusOnMount: false,
  colorShape: ColorPickerContentComponent.colorShapes.SQUARE,
  isMultiselect: false,
  /**
   * Used to force the component render the colorList prop as is. Usually, this flag should not be used. It's intended only for edge cases.
   * Usually, only "monday colors" will be rendered (unless blacklist mode is used). This flag will override this behavior.
   */
  forceUseRawColorList: false,
  /**
   * Used to enable color name tooltip on each color in the component. it's incompatible with forceUseRawColorList flag.
   * When "tooltipContentByColor" is supplied, it will override the color name tooltip.
   *
   */
  showColorNameTooltip: false
};

export default ColorPickerContentComponent;
