/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { components } from "react-select";
import Tooltip from "../../../Tooltip/Tooltip";
import TooltipWrapper from "../../../Tooltip/TooltipWrapper";
import "./option.scss";

const OptionWithTooltip = ({ ...props }) => {
  const { data } = props;

  return (
    <TooltipWrapper
      wrapWithTooltip={!!data?.tooltipProps}
      tooltipProps={{ position: Tooltip.positions.RIGHT, ...data.tooltipProps }}
    >
      <components.Option {...props} className="dropdown-wrapper__option--reset"></components.Option>
    </TooltipWrapper>
  );
};

export default OptionWithTooltip;
