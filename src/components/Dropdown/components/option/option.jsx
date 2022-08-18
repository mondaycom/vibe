/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { components } from "react-select";
import TooltipWrapper from "../../../Tooltip/TooltipWrapper";
import Tooltip from "../../../Tooltip/Tooltip";
import "./option.scss";

const Option = ({ Renderer, data, ...props }) => {
  return (
    <TooltipWrapper
      wrapWithTooltip={!!data?.tooltipProps}
      tooltipProps={{ position: Tooltip.positions.RIGHT, ...data.tooltipProps }}
    >
      {Renderer ? (
        <components.Option {...props} className="dropdown-wrapper__option--reset">
          <Renderer {...data} />
        </components.Option>
      ) : (
        <components.Option {...props} className="dropdown-wrapper__option--reset" />
      )}
    </TooltipWrapper>
  );
};

export default Option;
