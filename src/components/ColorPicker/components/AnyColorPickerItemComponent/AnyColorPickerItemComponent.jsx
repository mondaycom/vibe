import React, { useRef, useCallback } from "react";
import cx from "classnames";
import Icon from "../../../Icon/Icon";
import Tooltip from "../../../Tooltip/Tooltip";
import Clickable from "../../../Clickable/Clickable";
import { COLOR_SHAPES } from "../../ColorPickerConstants";
import "./AnyColorPickerItemComponent.scss";

const AnyColorPickerItemComponent = ({
  shouldRenderIndicatorWithoutBackground,
  setShowAnyColorPickerDialog,
  ColorIndicatorIcon,
  colorSize,
  tooltipContent,
  colorShape
}) => {
  const itemRef = useRef(null);
  const onMouseDown = useCallback(e => e.preventDefault(), []);
  const onClick = useCallback(() => {
    setShowAnyColorPickerDialog(true);
  }, [setShowAnyColorPickerDialog]);

  return (
    <Tooltip content={tooltipContent}>
      <li className={cx("monday-style-color-item-wrapper", { circle: colorShape === COLOR_SHAPES.CIRCLE })}>
        <div className="feedback-indicator" />
        <Clickable
          ref={itemRef}
          ariaLabel={tooltipContent}
          className={cx("color-item gradient-rainbow-box", `color-item-size-${colorSize}`, {
            "color-item-text-mode": shouldRenderIndicatorWithoutBackground
          })}
          onClick={onClick}
          tabIndex="-1"
          onMouseDown={onMouseDown} // this is for quill to not lose the selection
        >
          <div className="color-indicator-wrapper">
            {ColorIndicatorIcon && <Icon icon={ColorIndicatorIcon} ignoreFocusStyle />}
          </div>
        </Clickable>
      </li>
    </Tooltip>
  );
};

export default AnyColorPickerItemComponent;
