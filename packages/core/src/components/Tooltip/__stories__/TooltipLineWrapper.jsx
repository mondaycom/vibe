import React from "react";
import cx from "classnames";
import Tooltip from "../Tooltip";
import TooltipContent from "./TooltipContent";
import "./tooltip-story.scss";

const SHOW_HIDE_TRIGGER = ["click"];

const TooltipLineWrapper = ({ justify = "center", position = "top", theme = "dark" }) => {
  const isBottom = position.indexOf("bottom") > -1;
  return (
    <div className="width-20">
      <div style={{ paddingTop: "4px" }} />
      <div style={{ width: "90px", height: "2px" }}>
        <Tooltip
          animationType="expand"
          position={position}
          justify={justify}
          shouldShowOnMount
          theme={theme}
          content={<TooltipContent />}
          showTrigger={SHOW_HIDE_TRIGGER}
          hideTrigger={SHOW_HIDE_TRIGGER}
        >
          <div
            className={cx("tooltip-empty-element", {
              bottom: isBottom,
              left: position === "left",
              right: position === "right"
            })}
          />
        </Tooltip>
      </div>
    </div>
  );
};
TooltipLineWrapper.propTypes = {};
TooltipLineWrapper.defaultProps = {};
export default TooltipLineWrapper;
