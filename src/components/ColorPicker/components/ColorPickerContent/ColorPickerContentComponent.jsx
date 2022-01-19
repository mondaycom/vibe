import cx from "classnames";
import _difference from "lodash/difference";
import _intersection from "lodash/intersection";
import PropTypes from "prop-types";
import React, { useCallback, useMemo, useRef } from "react";
import { SIZES } from "../../../../constants/sizes";
import { COLOR_STYLES, contentColors } from "../../../../general-stories/colors/colors-vars-map";
import Button from "../../../Button/Button";
import NoColor from "../../../Icon/Icons/components/NoColor";
import ColorPickerItemComponent from "../ColorPickerItemComponent/ColorPickerItemComponent";
import { DEFAULT_NUMBER_OF_COLORS_IN_LINE } from "../../ColorPickerConstants";
import { calculateColorPickerWidth } from "../../services/ColorPickerStyleService";
import "./ColorPickerContentComponent.scss";
import useGridKeyboardNavigation from "../../../../hooks/useGridKeyboardNavigation/useGridKeyboardNavigation";
import {
  GridKeyboardNavigationContext,
  useGridKeyboardNavigationContext
} from "../../../GridKeyboardNavigation/GridKeyboardNavigationContext";

const Colors = React.forwardRef(
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
      isMultiselect,
      SelectedIndicatorIcon,
      colorSize,
      tooltipContentByColor
    },
    ref
  ) => {
    const getItemByIndex = useCallback(index => colorsToRender[index], [colorsToRender]);

    const { activeIndex, onSelectionAction } = useGridKeyboardNavigation({
      focusOnMount,
      ref,
      onItemClicked: onColorClicked,
      itemsCount: colorsToRender.length,
      numberOfItemsInLine: numberOfColorsInLine,
      getItemByIndex
    });

    const onValueChange = useCallback(index => () => onSelectionAction(index), [onSelectionAction]);
    return (
      <ul className={cx("color-picker")} ref={ref} tabIndex={-1}>
        {colorsToRender.map((color, index) => {
          return (
            <ColorPickerItemComponent
              key={color}
              color={color}
              onValueChange={onValueChange(index)}
              value={value}
              shouldRenderIndicatorWithoutBackground={ColorIndicatorIcon && shouldRenderIndicatorWithoutBackground}
              colorStyle={colorStyle}
              ColorIndicatorIcon={ColorIndicatorIcon}
              SelectedIndicatorIcon={SelectedIndicatorIcon}
              isSelected={isMultiselect ? value.includes(color) : value === color}
              isActive={index === activeIndex}
              isMultiselect={isMultiselect}
              colorSize={colorSize}
              tooltipContent={tooltipContentByColor[color]}
            />
          );
        })}
      </ul>
    );
  }
);

const ClearButton = React.forwardRef(({ onClick, text, Icon, isActive, onOutboundNavigation }, ref) => {
  const { onSelectionAction } = useGridKeyboardNavigation({
    ref,
    itemsCount: 1,
    numberOfItemsInLine: 1,
    onOutboundNavigation,
    onItemClicked: onClick
  });

  return (
    <Button
      ref={ref}
      size={Button.sizes.SMALL}
      kind={Button.kinds.TERTIARY}
      onClick={onSelectionAction}
      active={isActive}
      className="clear-color-button"
    >
      <Icon size="16" className="clear-color-icon" />
      {text}
    </Button>
  );
});

const ColorPickerContentComponent = ({
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
  focusOnMount
}) => {
  const onClearButton = useCallback(() => {
    onValueChange(null);
  }, [onValueChange]);

  const ref = useRef(null);
  const colorsRef = useRef(null);
  const buttonRef = useRef(null);

  const colorsToRender = useMemo(() => {
    return isBlackListMode ? _difference(contentColors, colorsList) : _intersection(contentColors, colorsList);
  }, [isBlackListMode, colorsList]);

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

  const keyboardContext = useGridKeyboardNavigationContext([{ topElement: colorsRef, bottomElement: buttonRef }], ref);
  const width = calculateColorPickerWidth(colorSize, numberOfColorsInLine);

  return (
    <div className={cx("color-picker-content--wrapper", className)} style={{ width }} ref={ref}>
      <GridKeyboardNavigationContext.Provider value={keyboardContext}>
        <Colors
          ref={colorsRef}
          onColorClicked={onColorClicked}
          colorsToRender={colorsToRender}
          numberOfColorsInLine={numberOfColorsInLine}
          focusOnMount={focusOnMount}
          value={value}
          colorStyle={colorStyle}
          ColorIndicatorIcon={ColorIndicatorIcon}
          shouldRenderIndicatorWithoutBackground={shouldRenderIndicatorWithoutBackground}
          isMultiselect={isMultiselect}
          SelectedIndicatorIcon={SelectedIndicatorIcon}
          colorSize={colorSize}
          tooltipContentByColor={tooltipContentByColor}
        />
        {noColorText && <ClearButton Icon={NoColorIcon} onClick={onClearButton} text={noColorText} ref={buttonRef} />}
      </GridKeyboardNavigationContext.Provider>
    </div>
  );
};

ColorPickerContentComponent.COLOR_STYLES = COLOR_STYLES;
ColorPickerContentComponent.sizes = SIZES;

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
  tooltipContentByColor: PropTypes.object
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
  tooltipContentByColor: {}
};

export default ColorPickerContentComponent;
