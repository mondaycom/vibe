/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { components } from "react-select";
import "./option.scss";

const Option = ({ Renderer, ...props }) => {
  const { data } = props;
  if (!Renderer) return null;

  return (
    <components.Option {...props} className="dropdown-wrapper__option--reset">
      <Renderer {...data} />
    </components.Option>
  );
};

export default Option;
