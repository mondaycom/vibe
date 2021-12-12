/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { components } from "react-select";

const SingleValue = props => {
  const { Renderer, data } = props;
  if (!Renderer) return null;
  return (
    <components.SingleValue {...props} className="dropdown-wrapper__single-value--reset">
      <Renderer {...data} />
    </components.SingleValue>
  );
};

export default SingleValue;
