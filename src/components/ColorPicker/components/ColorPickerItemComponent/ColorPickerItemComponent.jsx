import React, { useEffect, useRef } from "react";
import cx from "classnames";
import { COLOR_STYLES } from "../../../../general-stories/colors/colors-vars-map";
import { getMondayColorAsStyle } from "../../../../utils/colors-utils";
import "./ColorPickerItemComponent.scss";
import Icon from "../../../Icon/Icon";

const ColorPickerItemComponent = ({
  color,
  onValueChange,
  value,
  colorStyle = COLOR_STYLES.REGULAR,
  shouldRenderIndicatorWithoutBackground,
  ColorIndicatorIcon,
  SelectedIndicatorIcon,
  isMultiselect,
  isSelected
}) => {
  const colorAsStyle = getMondayColorAsStyle(color, colorStyle);
  const itemRef = useRef(null);

  useEffect(() => {
    if (!itemRef || !itemRef.current || shouldRenderIndicatorWithoutBackground) return;
    const item = itemRef.current;
    const onHover = e => {
      if (colorStyle === COLOR_STYLES.SELECTED) {
        e.target.style.background = getMondayColorAsStyle(color, COLOR_STYLES.REGULAR);
      } else {
        e.target.style.background = getMondayColorAsStyle(color, COLOR_STYLES.SELECTED);
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

  return (
    <div
      className={cx("color-item-wrapper", {
        "selected-color": value === colorAsStyle
      })}
    >
      <div
        ref={itemRef}
        aria-label={color}
        className={cx("color-item", { "color-item-text-mode": shouldRenderIndicatorWithoutBackground })}
        style={{ background: shouldRenderIndicatorWithoutBackground ? "transparent" : colorAsStyle }}
        onClick={() => onValueChange && onValueChange(color)}
        onMouseDown={e => e.preventDefault()} // this is for quill to not lose the selection
      >
        {shouldRenderIndicatorWithoutBackground ? (
          <div className="color-indicator-wrapper" style={{ color: colorAsStyle }}>
            {((isMultiselect && isSelected) || ColorIndicatorIcon) && (
              <Icon icon={isSelected ? SelectedIndicatorIcon : ColorIndicatorIcon} />
            )}
          </div>
        ) : (
          <div className="color-indicator-wrapper">
            {((isMultiselect && isSelected) || ColorIndicatorIcon) && (
              <Icon icon={isSelected ? SelectedIndicatorIcon : ColorIndicatorIcon} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorPickerItemComponent;
