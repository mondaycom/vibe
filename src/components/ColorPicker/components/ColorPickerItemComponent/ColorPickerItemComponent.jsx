import React, { useEffect, useRef } from "react";
import cx from "classnames";
import ColorIndicator from "../ColorIndicator/ColorIndicator";
import "./ColorPickerItemComponent.scss";

const ColorPickerItemComponent = ({ color, onValueChange, value, mode = "full" }) => {
  const itemRef = useRef(null);
  useEffect(() => {
    if (!itemRef || !itemRef.current || mode !== "full") return;
    const item = itemRef.current;
    const onHover = e => {
      e.target.style.backgroundColor = color.replace("-selected", "");
    };
    const onMouseLeave = e => {
      e.target.style.backgroundColor = color;
    };
    item.addEventListener("mouseenter", onHover, false);
    item.addEventListener("mouseleave", onMouseLeave, false);

    return () => {
      item.removeEventListener("mouseenter", onHover);
      item.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [color, itemRef, mode]);
  return (
    <div
      className={cx("color-item-wrapper", {
        "selected-color": value === color
      })}
    >
      <div
        ref={itemRef}
        className={cx("color-item", { "color-item-text-mode": mode !== "full" })}
        style={{ background: mode === "full" ? color : "transparent" }}
        onClick={() => onValueChange && onValueChange(color)}
        onMouseDown={e => e.preventDefault()} // this is for quill to not lose the selection
      >
        {mode === "full" ? (
          <div className="color-indicator-wrapper">{ColorIndicator({})}</div>
        ) : (
          <div className="color-indicator-wrapper" style={{ color }}>
            {ColorIndicator({})}
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorPickerItemComponent;
