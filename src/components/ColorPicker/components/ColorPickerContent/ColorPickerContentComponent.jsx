import cx from "classnames";
import _difference from "lodash/difference";
import _intersection from "lodash/intersection";
import PropTypes from "prop-types";
import React, { useCallback, useState, useEffect, useMemo } from "react";
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

  const [selectedColors, setSelectedColors] = useState(value);

  const onColorClicked = useCallback(
    color => {
      if (!isMultiselect) {
        setSelectedColors(color);
        return;
      }
      const colors = [...value];
      if (colors.includes(color)) {
        const index = colors.indexOf(color);
        if (index > -1) {
          colors.splice(index, 1);
        }
      } else {
        colors.push(color);
      }
      setSelectedColors(colors);
    },
    [isMultiselect, onValueChange, value]
  );

  useEffect(() => {
    if (selectedColors !== value) {
      onValueChange(selectedColors);
    }
  }, [onValueChange, selectedColors, value]);

  const colorsToRender = useMemo(() => {
    return isBlackListMode ? _difference(contentColors, colorsList) : _intersection(contentColors, colorsList);
  }, [isBlackListMode, colorsList]);

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
  value: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
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
