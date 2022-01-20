import React, { useRef, useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import NOOP from "lodash/noop";
import { COLOR_STYLES } from "../../../../general-stories/colors/colors-vars-map";
import ColorUtils from "../../../../utils/colors-utils";
import "./ColorPickerItemComponent.scss";
import Icon from "../../../Icon/Icon";
import Tooltip from "../../../Tooltip/Tooltip";
import Clickable from "../../../Clickable/Clickable";
import { COLOR_SHAPES } from "../../ColorPickerConstants";

const ColorPickerItemComponent = ({
  color,
  onValueChange,
  colorStyle = COLOR_STYLES.REGULAR,
  shouldRenderIndicatorWithoutBackground,
  ColorIndicatorIcon,
  SelectedIndicatorIcon,
  isMultiselect,
  isSelected,
  colorSize,
  tooltipContent,
  isActive,
  colorShape
}) => {
  const colorAsStyle = ColorUtils.getMondayColorAsStyle(color, colorStyle);
  const itemRef = useRef(null);

  const onMouseDown = useCallback(e => e.preventDefault(), []);
  const onClick = useCallback(() => onValueChange(color), [onValueChange, color]);

  const shouldRenderSelectedIcon = isSelected && isMultiselect;
  const shouldRenderIcon = (isMultiselect && isSelected) || ColorIndicatorIcon;
  const colorIndicatorWrapperStyle = shouldRenderIndicatorWithoutBackground ? { color: colorAsStyle } : {};
  return (
    <Tooltip content={tooltipContent}>
      <li
        className={cx("monday-style-color-item-wrapper", {
          "selected-color": isSelected,
          active: isActive,
          circle: colorShape === COLOR_SHAPES.CIRCLE
        })}
      >
        <Clickable
          ref={itemRef}
          ariaLabel={color}
          className={cx("color-item", `color-item-size-${colorSize}`, {
            "color-item-text-mode": shouldRenderIndicatorWithoutBackground
          })}
          style={{ background: shouldRenderIndicatorWithoutBackground ? "transparent" : colorAsStyle }}
          onClick={onClick}
          tabIndex="-1"
          onMouseDown={onMouseDown} // this is for quill to not lose the selection
        >
          <div className="color-indicator-wrapper" style={colorIndicatorWrapperStyle}>
            {shouldRenderIcon && (
              <Icon icon={shouldRenderSelectedIcon ? SelectedIndicatorIcon : ColorIndicatorIcon} ignoreFocusStyle />
            )}
          </div>
        </Clickable>
      </li>
    </Tooltip>
  );
};

ColorPickerItemComponent.propTypes = {
  onValueChange: PropTypes.func
};

ColorPickerItemComponent.defaultProps = {
  onValueChange: NOOP
};

export default ColorPickerItemComponent;
