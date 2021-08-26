import cx from "classnames";
import PropTypes from "prop-types";
import React, { useCallback } from "react";
import { contentColors, COLOR_STYLES } from "../../../../general-stories/colors/colors-vars-map";
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
  shouldRenderIndicatorWithoutBackground
}) => {
  const colors = contentColors;
  const onClearButton = useCallback(() => {
    onValueChange(null);
  }, [onValueChange]);
  return (
    <div className={cx("color-picker-content--wrapper", className)}>
      <div className={cx("color-picker")}>
        {colors.map(color => {
          return (
            <ColorPickerItemComponent
              key={color}
              color={color}
              onValueChange={onValueChange}
              value={value}
              shouldRenderIndicatorWithoutBackground={ColorIndicatorIcon && shouldRenderIndicatorWithoutBackground}
              colorStyle={colorStyle}
              ColorIndicatorIcon={ColorIndicatorIcon}
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
          <NoColor size="16" className="clear-color-icon" />
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
  colorStyle: PropTypes.string,
  value: PropTypes.string,
  noColorText: PropTypes.string,
  shouldRenderIndicatorWithoutBackground: PropTypes.bool
};

ColorPickerContentComponent.defaultProps = {
  className: "",
  onValueChange: () => {},
  ColorIndicatorIcon: undefined,
  colorStyle: COLOR_STYLES.REGULAR,
  value: "",
  noColorText: undefined,
  shouldRenderIndicatorWithoutBackground: false
};

export default ColorPickerContentComponent;
