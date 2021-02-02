import React from "react";
import cx from "classnames";
import ComponentStateDescription from "../../storybook-helpers/component-state-description/ComponentStateDescription";
import Tooltip from "../Tooltip";
import TooltipContent from "./TooltipContent";
import "./tooltip-story.scss";

const TooltipLineWrapper = ({ title, justify = "center", position = "top", theme = "dark" }) => {
  const isBottom = position.indexOf("bottom") > -1;
  return (
    <div className="width-20">
      <ComponentStateDescription title={title} full />
      <div style={{ paddingTop: "4px" }} />
      <div style={{ width: "90px", height: "2px" }}>
        <Tooltip
          animationType="expand"
          position={position}
          justify={justify}
          shouldShowOnMount
          theme={theme}
          content={<TooltipContent />}
          showTrigger={["click"]}
          hideTrigger={["click"]}
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
