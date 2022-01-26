import React, { useRef, useCallback, useEffect, useMemo } from "react";
import cx from "classnames";
import NOOP from "lodash/noop";
import PropTypes from "prop-types";
import { ChromePicker } from "react-color";
import { COLOR_STYLES } from "../../../../general-stories/colors/colors-vars-map";
import ColorUtils from "../../../../utils/colors-utils";
import "./ColorPickerItemComponent.scss";
import Icon from "../../../Icon/Icon";
import Tooltip from "../../../Tooltip/Tooltip";
import Clickable from "../../../Clickable/Clickable";
import { COLOR_SHAPES, RAINBOW } from "../../ColorPickerConstants";
import Delete from "../../../Icon/Icons/components/Delete";

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
  colorShape,
  onCustomColorClicked,
  showColorPicker,
  setShowColorPicker,
  customColor,
  clearSelectedColor
}) => {
  const colorAsStyle = ColorUtils.getMondayColorAsStyle(color, colorStyle);
  const itemRef = useRef(null);
  const isColorPickerItem = color === RAINBOW;

  const onMouseDown = useCallback(e => e.preventDefault(), []);
  const onClick = useCallback(() => {
    if (showColorPicker && !isColorPickerItem) {
      setShowColorPicker(false);
    }
    onValueChange(color);
  }, [showColorPicker, isColorPickerItem, onValueChange, color, setShowColorPicker]);
  const toggleColorPicker = useCallback(() => setShowColorPicker(!showColorPicker), [showColorPicker]);
  const chooseCustomColor = useCallback(
    selectColorHex => {
      onCustomColorClicked(selectColorHex);
    },
    [onCustomColorClicked]
  );

  useEffect(() => {
    if (!itemRef || !itemRef.current || shouldRenderIndicatorWithoutBackground) return;
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
  }, [color, colorAsStyle, colorStyle, itemRef, shouldRenderIndicatorWithoutBackground]);

  const shouldRenderSelectedIcon = isSelected && isMultiselect;
  const shouldRenderIcon = shouldRenderSelectedIcon || ColorIndicatorIcon;
  const colorIndicatorWrapperStyle = shouldRenderIndicatorWithoutBackground ? { color: colorAsStyle } : {};

  const backgroundStyle = useMemo(() => {
    if (isColorPickerItem) return null;
    return shouldRenderIndicatorWithoutBackground ? "transparent" : colorAsStyle;
  }, [colorAsStyle, isColorPickerItem, shouldRenderIndicatorWithoutBackground]);

  return (
    <div className="monday-style-color-item-container">
      <Tooltip content={tooltipContent}>
        <li
          className={cx("monday-style-color-item-wrapper", {
            "selected-color": isSelected,
            active: isActive,
            circle: colorShape === COLOR_SHAPES.CIRCLE
          })}
        >
          <div className="feedback-indicator" />
          <Clickable
            ref={itemRef}
            ariaLabel={color}
            className={cx("color-item", `color-item-size-${colorSize}`, {
              "color-item-text-mode": shouldRenderIndicatorWithoutBackground,
              rainbow: isColorPickerItem
            })}
            style={{
              background: backgroundStyle
            }}
            onClick={isColorPickerItem ? toggleColorPicker : onClick}
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
      {isColorPickerItem && isSelected && (
        <div className="clear-color-picker" onClick={() => clearSelectedColor(customColor)}>
          <Icon icon={Delete} iconType={Icon.type.SVG} ignoreFocusStyle iconSize={14} />
        </div>
      )}
      {isColorPickerItem && showColorPicker && (
        <div className="custom-color-picker">
          <ChromePicker color={{ hex: customColor }} onChange={newColor => chooseCustomColor(newColor.hex)} />
        </div>
      )}
    </div>
  );
};

ColorPickerItemComponent.propTypes = {
  onValueChange: PropTypes.func
};

ColorPickerItemComponent.defaultProps = {
  onValueChange: NOOP
};

export default ColorPickerItemComponent;
