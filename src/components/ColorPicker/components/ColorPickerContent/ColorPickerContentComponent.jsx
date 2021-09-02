import cx from "classnames";
import _difference from "lodash/difference";
import PropTypes from "prop-types";
import React, { useCallback } from "react";
import { COLOR_STYLES, contentColors } from "../../../../general-stories/colors/colors-vars-map";
import Button from "../../../Button/Button";
import NoColor from "../../../Icon/Icons/components/NoColor";
import ColorPickerItemComponent from "../ColorPickerItemComponent/ColorPickerItemComponent";
import "./ColorPickerContentComponent.scss";

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
  isMultiselect
}) => {
  const onClearButton = useCallback(() => {
    onValueChange(null);
  }, [onValueChange]);

  const onColorClicked = useCallback(
    color => {
      if (!isMultiselect) {
        onValueChange(color);
        return;
      }
      console.log(color);
      const colors = [...value];
      console.log(colors);
      if (colors.includes(color)) {
        const index = colors.indexOf(color);
        console.log(index);
        if (index > -1) {
          colors.splice(index, 1);
        }
      } else {
        colors.push(color);
      }
      console.log(colors);
      onValueChange(colors);
    },
    [onValueChange]
  );

  let colorsToRender;
  // If whitelist mode and not all the colors exists in the colors option - render all options
  if (!isBlackListMode && _difference(colorsList, contentColors).length !== 0) {
    colorsToRender = contentColors;
  } else {
    colorsToRender = isBlackListMode ? _difference(contentColors, colorsList) : colorsList;
  }
  return (
    <div className={cx("color-picker-content--wrapper", className)}>
      <div className={cx("color-picker")}>
        {colorsToRender.map(color => {
          return (
            <ColorPickerItemComponent
              key={color}
              color={color}
              onValueChange={onColorClicked}
              value={value}
              shouldRenderIndicatorWithoutBackground={ColorIndicatorIcon && shouldRenderIndicatorWithoutBackground}
              colorStyle={colorStyle}
              ColorIndicatorIcon={ColorIndicatorIcon}
              SelectedIndicatorIcon={SelectedIndicatorIcon}
              isSelected={isMultiselect ? value.includes(color) : value === color}
              isMultiselect={isMultiselect}
            />
          );
        })}
      </div>
      {noColorText && (
        <Button
          size={Button.sizes.SMALL}
          kind={Button.kinds.TERTIARY}
          onClick={onClearButton}
          className="clear-color-button"
        >
          <NoColorIcon size="16" className="clear-color-icon" />
          {noColorText}
        </Button>
      )}
    </div>
  );
};

ColorPickerContentComponent.COLOR_STYLES = COLOR_STYLES;

ColorPickerContentComponent.propTypes = {
  className: PropTypes.string,
  onValueChange: PropTypes.func,
  ColorIndicatorIcon: PropTypes.func,
  SelectedIndicatorIcon: PropTypes.func,
  colorStyle: PropTypes.oneOf([
    ColorPickerContentComponent.COLOR_STYLES.REGULAR,
    ColorPickerContentComponent.COLOR_STYLES.SELECTED
  ]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  noColorText: PropTypes.string,
  shouldRenderIndicatorWithoutBackground: PropTypes.bool,
  NoColorIcon: PropTypes.func,
  isBlackListMode: PropTypes.bool,
  colorsList: PropTypes.array
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
  colorsList: []
};

export default ColorPickerContentComponent;
