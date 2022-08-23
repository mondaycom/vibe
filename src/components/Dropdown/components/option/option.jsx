/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { components } from "react-select";
import Tooltip from "../../../Tooltip/Tooltip";
import "./option.scss";

const Option = ({ Renderer, data, ...props }) => {
  const tooltipProps = data.tooltipProps || {};
  return (
    <Tooltip {...tooltipProps} position={Tooltip.positions.RIGHT}>
      {Renderer ? (
        <components.Option {...props} className="dropdown-wrapper__option--reset">
          <Renderer {...data} />
        </components.Option>
      ) : (
        <components.Option {...props} className="dropdown-wrapper__option--reset" />
      )}
    </Tooltip>
  );
};

export default Option;
