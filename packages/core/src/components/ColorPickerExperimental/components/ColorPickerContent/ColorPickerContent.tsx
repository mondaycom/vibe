import { difference as _difference, intersection as _intersection, isEmpty } from "lodash-es";
import React, { forwardRef, useCallback, useMemo, useRef, useState } from "react";
import { BaseSizes } from "../../../../constants";
import { ColorStyle, CONTENT_COLORS_VALUES, contentColors } from "../../../../utils/colors-vars-map";
import NoColor from "../../../Icon/Icons/components/NoColor";
import {
  ColorShapes,
  DEFAULT_NUMBER_OF_COLORS_IN_LINE,
  ColorPickerValue,
  ColorPickerArrayValueOnly,
  Actions,
  DEFAULT_COLOR,
  DEFAULT_COLORS
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
import { TextType } from "../../../Text/TextConstants";
import styles from "./ColorPickerContent.module.scss";
import cx from "classnames";
import Text from "../../../Text/Text";
import { Button } from "../../../Button";
import { Tooltip } from "../../../Tooltip";
import GeneralColorPickerSection from "./GeneralColorPicker";
import { isHexColor } from "../../services/ColorPickerService";

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
  customColorsList?: string[];
  customColorsLimit?: number;
  onCustomColorsChange?: (value: string[]) => void;
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
  allowCustomColors?: boolean;
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
      "data-testid": dataTestId,
      allowCustomColors = false,
      customColorsList,
      customColorsLimit,
      onCustomColorsChange
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
      if (allowCustomColors && isEmpty(colorsList)) {
        return [...DEFAULT_COLORS];
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
    const [shouldShowGeneralPicker, setShouldShowGeneralPicker] = useState(false);
    const [selectedColor, setSelectedColor] = useState<string>(DEFAULT_COLOR);
    const [editedColor, setEditedColor] = useState<string>(DEFAULT_COLOR);
    const [isEditing, setIsEditing] = useState(false);
    const [customColors, setCustomColors] = useState<string[]>(customColorsList);

    const toggleEditingMode = () => {
      setIsEditing(prevState => !prevState);
    };

    const openGeneralPickerWithColor = useCallback((color?: string) => {
      const colorToUse = isHexColor(color) ? color : DEFAULT_COLOR;
      setSelectedColor(colorToUse);
      setEditedColor(colorToUse);
      setShouldShowGeneralPicker(true);
    }, []);

    const handleColorChange = (color: string) => {
      setSelectedColor(color);
    };

    const closeGeneralColorPicker = (action?: Actions) => {
      setCustomColors(currentColors => {
        let updatedColors;
        switch (action) {
          case Actions.ADD:
            updatedColors = currentColors.includes(selectedColor) ? currentColors : [...currentColors, selectedColor];
            break;
          case Actions.EDIT:
            updatedColors = currentColors.map(color => (color === editedColor ? selectedColor : color));
            break;
          case Actions.DELETE:
            updatedColors = currentColors.filter(color => color !== editedColor);
            break;
          default:
            updatedColors = currentColors;
        }
        onCustomColorsChange(updatedColors);
        return updatedColors;
      });
      setIsEditing(false);
      setShouldShowGeneralPicker(false);
    };

    const handleAddColorButtonClick = () => {
      closeGeneralColorPicker(Actions.ADD);
    };

    const handleEditChange = () => {
      closeGeneralColorPicker(Actions.EDIT);
    };

    const handleDeleteColor = () => {
      closeGeneralColorPicker(Actions.DELETE);
    };

    const DefaultColorsBar = () => (
      <div className={cx(styles.defaultColorsBar)}>
        <Text type={TextType.TEXT2} color={Text.colors.SECONDARY}>
          {"Default colors"}
        </Text>
      </div>
    );

    const CustomColorsBar = () => {
      const editButton = (
        <Tooltip content={customColors.length === 0 ? "No color changes to edit" : "Edit custom colors"}>
          <Button
            size={Button.sizes.XS}
            kind={Button.kinds.SECONDARY}
            disabled={customColors.length === 0}
            onClick={toggleEditingMode}
          >
            Edit
          </Button>
        </Tooltip>
      );
      const doneButton = (
        <Button size={Button.sizes.XS} kind={Button.kinds.SECONDARY} onClick={toggleEditingMode}>
          Done
        </Button>
      );
      return (
        <div className={cx(styles.customColorsBar)}>
          <Text type={TextType.TEXT2} color={Text.colors.SECONDARY}>
            {isEditing ? "Edit custom colors" : "Custom colors"}
          </Text>
          {isEditing ? doneButton : editButton}
        </div>
      );
    };

    const colorPickerGrid = (
      <>
        {allowCustomColors && <DefaultColorsBar />}
        <ColorPickerColorsGrid
          ref={colorsRef}
          onColorClicked={onColorClicked}
          colorsToRender={colorsToRender}
          numberOfColorsInLine={numberOfColorsInLine}
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
          isDisabled={isEditing}
          isEditing={isEditing}
          allowCustomColors={false}
          customColors={customColors}
          isDefaultGrid={allowCustomColors}
        />
        {allowCustomColors && <CustomColorsBar />}
        {allowCustomColors && (
          <ColorPickerColorsGrid
            ref={colorsRef}
            onColorClicked={onColorClicked}
            colorsToRender={customColors}
            numberOfColorsInLine={numberOfColorsInLine}
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
            openGeneralPicker={openGeneralPickerWithColor}
            isEditing={isEditing}
            allowCustomColors={true}
            customColors={customColors}
            isDefaultGrid={allowCustomColors}
            customColorsLimit={customColorsLimit}
          />
        )}
        {noColorText && (
          <ColorPickerClearButton Icon={NoColorIcon} onClick={onClearButton} text={noColorText} ref={buttonRef} />
        )}
      </>
    );

    const generalColorPicker = (
      <GeneralColorPickerSection
        selectedColor={selectedColor}
        handleChange={handleColorChange}
        closePicker={closeGeneralColorPicker}
        handleAddColorButtonClick={handleAddColorButtonClick}
        isEditing={isEditing}
        handleEditChange={handleEditChange}
        handleDeleteColor={handleDeleteColor}
      />
    );

    return (
      <div className={className} style={{ width }} ref={mergedRef} tabIndex={-1}>
        <GridKeyboardNavigationContext.Provider value={keyboardContext}>
          {shouldShowGeneralPicker ? generalColorPicker : colorPickerGrid}
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
