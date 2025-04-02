import cx from "classnames";
import React, { forwardRef, useCallback, useRef } from "react";
import { BaseSizes } from "../../constants";
import useMergeRef from "../../hooks/useMergeRef";
import DialogContentContainer from "../DialogContentContainer/DialogContentContainer";
import { ColorStyle as ColorStyleEnum } from "../../utils/colors-vars-map";
import { NoColor } from "@vibe/icons";
import ColorPickerContent from "./components/ColorPickerContent/ColorPickerContent";
import { ColorShapes as ColorShapesEnum, DEFAULT_NUMBER_OF_COLORS_IN_LINE } from "./ColorPickerConstants";
import { ColorShapes, ColorPickerSizes, ColorPickerValue, ColorPickerArrayValueOnly } from "./ColorPicker.types";
import { calculateColorPickerDialogWidth } from "./services/ColorPickerStyleService";
import { VibeComponentProps, VibeComponent, SubIcon, withStaticProps } from "../../types";
import { NOOP } from "../../utils/function-utils";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import styles from "./ColorPicker.module.scss";
import { ColorStyle } from "../../types/Colors";
import { ComponentVibeId } from "../../tests/constants";

export interface ColorPickerProps extends VibeComponentProps {
  /**
   * The selected color(s).
   */
  value?: ColorPickerValue;
  /**
   * Callback fired when the selected color(s) change.
   */
  onSave?: (value: ColorPickerArrayValueOnly) => void;
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
   * The list of colors available for selection.
   */
  colorsList?: ColorPickerArrayValueOnly;
  /**
   * If true, allows selecting multiple colors.
   */
  isMultiselect?: boolean;
  /**
   * The size of the color items.
   */
  colorSize?: ColorPickerSizes;
  /**
   * The number of colors displayed per row.
   */
  numberOfColorsInLine?: number;
  /**
   * If true, the first color is focused when the component mounts.
   */
  focusOnMount?: boolean;
  /**
   * The shape of the color items.
   */
  colorShape?: ColorShapes;
  /**
   * Used to force the component render the colorList prop as is. Usually, this flag should not be used. It's intended only for edge cases.
   * Usually, only "monday colors" will be rendered (unless blacklist mode is used). This flag will override this behavior.
   */
  forceUseRawColorList?: boolean;
  /**
   * Used to enable color name tooltip on each color in the component.
   * When "tooltipContentByColor" is supplied, it will override the color name tooltip.
   *
   */
  showColorNameTooltip?: boolean;
}

const ColorPicker: VibeComponent<ColorPickerProps> & {
  sizes?: typeof BaseSizes;
  colorStyles?: typeof ColorStyleEnum;
  colorSizes?: typeof BaseSizes;
  colorShapes?: typeof ColorShapesEnum;
} = forwardRef(
  (
    {
      className,
      onSave = NOOP,
      value = "",
      noColorText,
      colorStyle = "regular",
      ColorIndicatorIcon,
      SelectedIndicatorIcon,
      shouldRenderIndicatorWithoutBackground,
      NoColorIcon = NoColor,
      isBlackListMode = true,
      colorsList = [],
      isMultiselect,
      colorSize = "medium",
      numberOfColorsInLine = DEFAULT_NUMBER_OF_COLORS_IN_LINE,
      focusOnMount,
      colorShape = "square",
      forceUseRawColorList,
      showColorNameTooltip,
      id,
      "data-testid": dataTestId
    }: ColorPickerProps,
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    const onChange = useCallback(onSave, [onSave]);

    const width = calculateColorPickerDialogWidth(colorSize as BaseSizes, numberOfColorsInLine);

    return (
      <DialogContentContainer
        ref={mergedRef}
        className={cx(styles.colorPicker, styles.colorPickerDialogContent, className)}
        ariaLabelledby="Color Picker Dialog"
        ariaDescribedby="Pick color"
        style={{ width }}
      >
        <ColorPickerContent
          onValueChange={onChange}
          value={value}
          noColorText={noColorText}
          shouldRenderIndicatorWithoutBackground={ColorIndicatorIcon && shouldRenderIndicatorWithoutBackground}
          colorStyle={colorStyle}
          ColorIndicatorIcon={ColorIndicatorIcon}
          SelectedIndicatorIcon={SelectedIndicatorIcon}
          NoColorIcon={NoColorIcon}
          colorsList={colorsList}
          isBlackListMode={isBlackListMode}
          isMultiselect={isMultiselect}
          colorSize={colorSize}
          numberOfColorsInLine={numberOfColorsInLine}
          focusOnMount={focusOnMount}
          colorShape={colorShape}
          forceUseRawColorList={forceUseRawColorList}
          showColorNameTooltip={showColorNameTooltip}
          id={id}
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.COLOR_PICKER, id)}
          data-vibe={ComponentVibeId.COLOR_PICKER}
        />
      </DialogContentContainer>
    );
  }
);

export default withStaticProps(ColorPicker, {
  sizes: BaseSizes,
  colorStyles: ColorStyleEnum,
  colorSizes: BaseSizes,
  colorShapes: ColorShapesEnum
});
