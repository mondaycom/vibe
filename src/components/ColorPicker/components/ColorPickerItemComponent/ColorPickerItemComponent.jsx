import React, { useRef, useCallback, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import NOOP from "lodash/noop";
import { COLOR_STYLES, contentColors } from "../../../../utils/colors-vars-map";
import ColorUtils from "../../../../utils/colors-utils";
import "./ColorPickerItemComponent.scss";
import Icon from "../../../Icon/Icon";
import Tooltip from "../../../Tooltip/Tooltip";
import Clickable from "../../../Clickable/Clickable";
import { COLOR_SHAPES } from "../../ColorPickerConstants";
import { getTestId } from "../../../../utils/test-utils";

const ColorPickerItemComponent = ({
  color,
  onValueChange,
  colorStyle = COLOR_STYLES.REGULAR,
  shouldRenderIndicatorWithoutBackground,
  ColorIndicatorIcon,
  SelectedIndicatorIcon,
  isSelected,
  colorSize,
  tooltipContent,
  isActive,
  colorShape,
  "data-testid": dataTestId
}) => {
  const isMondayColor = useMemo(() => contentColors.includes(color), [color]);
  const colorAsStyle = isMondayColor ? ColorUtils.getMondayColorAsStyle(color, colorStyle) : color;
  const itemRef = useRef(null);

  const onMouseDown = useCallback(e => e.preventDefault(), []);
  const onClick = useCallback(() => onValueChange(color), [onValueChange, color]);

  useEffect(() => {
    if (!itemRef?.current || shouldRenderIndicatorWithoutBackground || !isMondayColor) return;
    const item = itemRef.current;
    const onHover = e => {
      if (colorStyle === COLOR_STYLES.SELECTED) {
        e.target.style.background = ColorUtils.getMondayColorAsStyle(color, COLOR_STYLES.REGULAR);
      } else {
        e.target.style.background = ColorUtils.getMondayColorAsStyle(color, COLOR_STYLES.HOVER);
      }
    };
    const onMouseLeave = e => {
      e.target.style.background = colorAsStyle;
    };
    item.addEventListener("mouseenter", onHover, false);
    item.addEventListener("mouseleave", onMouseLeave, false);

    return () => {
      item.removeEventListener("mouseenter", onHover, false);
      item.removeEventListener("mouseleave", onMouseLeave, false);
    };
  }, [color, colorAsStyle, colorStyle, isMondayColor, itemRef, shouldRenderIndicatorWithoutBackground]);

  const shouldRenderIcon = isSelected || ColorIndicatorIcon;
  const colorIndicatorWrapperStyle = shouldRenderIndicatorWithoutBackground ? { color: colorAsStyle } : {};
  return (
    <Tooltip content={tooltipContent}>
      <li
        className={cx("monday-style-color-item-wrapper", {
          "selected-color": isSelected,
          active: isActive,
          circle: colorShape === COLOR_SHAPES.CIRCLE
        })}
        data-testid={dataTestId || getTestId("color-picker-item", color)}
      >
        <div className="feedback-indicator" />
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
              <Icon
                icon={isSelected ? SelectedIndicatorIcon : ColorIndicatorIcon}
                className={cx({ "color-icon-white": !shouldRenderIndicatorWithoutBackground })}
                ignoreFocusStyle
              />
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
