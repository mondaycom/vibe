/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { components } from "react-select";
import Tooltip from "../../../Tooltip/Tooltip";
import { ChildrenContent } from "../ChildrenContent/ChildrenContent";
import "./option.scss";

const Option = ({ Renderer, data, children, ...props }) => {
  const tooltipProps = data.tooltipProps || {};
  return (
    <Tooltip {...tooltipProps} position={Tooltip.positions.RIGHT}>
      {Renderer ? (
        <components.Option {...props} className="dropdown-wrapper__option--reset">
          <Renderer {...data} />
        </components.Option>
      ) : (
        <components.Option {...props} className="dropdown-wrapper__option--reset">
          <ChildrenContent data={data}>{children}</ChildrenContent>
        </components.Option>
      )}
    </Tooltip>
  );
};

export default Option;
