import cx from "classnames";
import PropTypes from "prop-types";
import React, { useCallback } from "react";
import { contentColors } from "../../../../general-stories/colors/colors-vars-map";
import Button from "../../../Button/Button";
import NoColor from "../../../Icon/Icons/components/NoColor";
import "./ColorPickerContentComponent.scss";
import ColorPickerItemComponent from "../ColorPickerItemComponent/ColorPickerItemComponent";

const ColorPickerContentComponent = ({ className, onValueChange, value, colors, defaultColorText, mode }) => {
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
              mode={mode}
            />
          );
        })}
      </div>
      <Button
        size={Button.sizes.SMALL}
        kind={Button.kinds.TERTIARY}
        onClick={onClearButton}
        className="clear-color-button"
      >
        <NoColor size="16" className="clear-color-icon" />
        {defaultColorText}
      </Button>
    </div>
  );
};

ColorPickerContentComponent.propTypes = {
  className: PropTypes.string,
  onValueChange: PropTypes.func,
  value: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  defaultColorText: PropTypes.string,
  mode: PropTypes.string
};

ColorPickerContentComponent.defaultProps = {
  className: "",
  onValueChange: () => {},
  value: "",
  colors: contentColors,
  defaultColorText: "TODO - default-text ========================",
  mode: "full"
};

export default ColorPickerContentComponent;
