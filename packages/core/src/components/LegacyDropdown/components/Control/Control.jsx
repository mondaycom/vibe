import React from "react";
import { components } from "react-select";
import Tooltip from "../../../Tooltip/Tooltip";

const Control = props => {
  const { selectProps } = props;
  const control = <components.Control {...props} />;
  const controlRef = selectProps?.selectProps?.controlRef;
  if (controlRef)
    return (
      <Tooltip
        content={selectProps?.selectProps?.tooltipContent}
        hideTrigger={["mouseleave", "click"]}
        showTrigger={[Tooltip.hideShowTriggers.MOUSE_ENTER]}
      >
        <div ref={controlRef}>{control}</div>
      </Tooltip>
    );
  return control;
};

export default Control;
