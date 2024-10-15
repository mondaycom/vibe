import React from "react";
import * as ReactSelectPackage from "react-select";

const { components } = ReactSelectPackage;

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
