import React from "react";
import { components } from "react-select";

const MultiValue = props => {
  const { Renderer, data } = props;
  if (!Renderer) return null;

  return (
    <components.MultiValue {...props}>
      <Renderer {...data} />
    </components.MultiValue>
  );
};

export default MultiValue;
