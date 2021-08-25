import React, { useEffect, useRef } from "react";
import cx from "classnames";
import { COLOR_STYLES } from "../../../../general-stories/colors/colors-vars-map";
import { getMondayColorAsStyle } from "../../../../utils/colors-utils";
import "./ColorPickerItemComponent.scss";

const ColorPickerItemComponent = ({
  color,
  onValueChange,
  value,
  colorStyle = COLOR_STYLES.REGULAR,
  mode = "full",
  ColorIndicatorComponentRenderer
}) => {
  const colorAsStyle = getMondayColorAsStyle(color, colorStyle);
  const itemRef = useRef(null);

  useEffect(() => {
    if (!itemRef || !itemRef.current || mode !== "full") return;
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
      item.removeEventListener("mouseenter", onHover);
      item.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [color, colorAsStyle, colorStyle, itemRef, mode]);

  return (
    <div
      className={cx("color-item-wrapper", {
        "selected-color": value === colorAsStyle
      })}
    >
      <div
        ref={itemRef}
        className={cx("color-item", { "color-item-text-mode": mode !== "full" })}
        style={{ background: mode === "full" ? colorAsStyle : "transparent" }}
        onClick={() => onValueChange && onValueChange(color)}
        onMouseDown={e => e.preventDefault()} // this is for quill to not lose the selection
      >
        {mode === "full" ? (
          <div className="color-indicator-wrapper">
            {ColorIndicatorComponentRenderer && ColorIndicatorComponentRenderer()}
          </div>
        ) : (
          <div className="color-indicator-wrapper" style={{ color: colorAsStyle }}>
            {ColorIndicatorComponentRenderer && ColorIndicatorComponentRenderer()}
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorPickerItemComponent;
