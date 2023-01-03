import { ComponentDefaultTestId, getTestId } from "../../../../tests/test-ids-utils";
import cx from "classnames";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import NOOP from "lodash/noop";
import { COLOR_STYLES, contentColors } from "../../../../utils/colors-vars-map";
import ColorUtils from "../../../../utils/colors-utils";
import Icon from "../../../Icon/Icon";
import Tooltip from "../../../Tooltip/Tooltip";
import Clickable from "../../../Clickable/Clickable";
import { COLOR_SHAPES } from "../../ColorPickerConstants";
import styles from "./ColorPickerItemComponent.module.scss";

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
  "data-testid": dataTestId,
  id
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
    <Tooltip
      content={tooltipContent}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.COLOR_PICKER_ITEM_COMPONENT, id)}
    >
      <li
        className={cx(styles.itemWrapper, "monday-style-color-item-wrapper", {
          [styles.selectedColor]: isSelected,
          ["selected-color"]: isSelected,
          [styles.active]: isActive,
          ["active"]: isActive,
          [styles.circle]: colorShape === COLOR_SHAPES.CIRCLE,
          ["circle"]: colorShape === COLOR_SHAPES.CIRCLE
        })}
        data-testid={dataTestId || getTestId("color-picker-item", color)}
      >
        <div className={cx(styles.feedbackIndicator, "feedback-indicator")} />
        <Clickable
          ref={itemRef}
          ariaLabel={color}
          className={cx(styles.colorItem, "color-item", styles[colorSize], `color-item-size-${colorSize}`, {
            [styles.colorItemTextMode]: shouldRenderIndicatorWithoutBackground,
            ["color-item-text-mode"]: shouldRenderIndicatorWithoutBackground
          })}
          style={{ background: shouldRenderIndicatorWithoutBackground ? "transparent" : colorAsStyle }}
          onClick={onClick}
          tabIndex="-1"
          onMouseDown={onMouseDown} // this is for quill to not lose the selection
        >
          <div
            className={cx(styles.colorIndicatorWrapper, "color-indicator-wrapper")}
            style={colorIndicatorWrapperStyle}
          >
            {shouldRenderIcon && (
              <Icon
                icon={isSelected ? SelectedIndicatorIcon : ColorIndicatorIcon}
                className={cx({
                  [styles.colorIconWhite]: !shouldRenderIndicatorWithoutBackground,
                  ["color-icon-white"]: !shouldRenderIndicatorWithoutBackground
                })}
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
