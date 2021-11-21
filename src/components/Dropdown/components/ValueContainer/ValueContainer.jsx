import React from "react";
import { components } from "react-select";

const ValueContainer = props => {
  const { Renderer } = props;

  if (!Renderer) return null;

  return (
    <components.ValueContainer {...props}>
      <Renderer {...props} />
    </components.ValueContainer>
  );
};

export default ValueContainer;
