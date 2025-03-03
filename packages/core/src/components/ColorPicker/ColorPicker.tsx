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

export interface ColorPickerProps extends VibeComponentProps {
  value?: ColorPickerValue;
  onSave?: (value: ColorPickerArrayValueOnly) => void;
  ColorIndicatorIcon?: SubIcon;
  SelectedIndicatorIcon?: SubIcon;
  /**
   * Hide color icon
   */
  NoColorIcon?: SubIcon;
  colorStyle?: ColorStyle;
  noColorText?: string;
  shouldRenderIndicatorWithoutBackground?: boolean;
  isBlackListMode?: boolean;
  colorsList?: ColorPickerArrayValueOnly;
  isMultiselect?: boolean;
  colorSize?: ColorPickerSizes;
  numberOfColorsInLine?: number;
  focusOnMount?: boolean;
  colorShape?: ColorShapes;
  /**
   * Used to force the component render the colorList prop as is. Usually, this flag should not be used. It's intended only for edge cases.
   * Usually, only "monday colors" will be rendered (unless blacklist mode is used). This flag will override this behavior.
   */
  forceUseRawColorList?: boolean;
  /**
   * Used to enable color name tooltip on each color in the component. it's incompatible with forceUseRawColorList flag.
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
          data-vibe={ComponentDefaultTestId.COLOR_PICKER}
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
