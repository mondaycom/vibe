import React from "react";
import PropTypes from "prop-types";
import Tooltip from "./Tooltip";

const TooltipWrapper = ({ children, wrapWithTooltip, tooltipProps }) => {
  if (!wrapWithTooltip) {
    return children;
  }

  return <Tooltip {...tooltipProps}>{children}</Tooltip>;
};

TooltipWrapper.propTypes = {
  children: PropTypes.element,
  wrapWithTooltip: PropTypes.bool,
  tooltipProps: PropTypes.shape(Tooltip.propTypes)
};
TooltipWrapper.defaultProps = {
  children: undefined,
  wrapWithTooltip: true,
  tooltipProps: {}
};

export default TooltipWrapper;
