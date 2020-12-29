/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { components } from "react-select";
import "./Option.scss";

const Option = ({ OptionRenderer, ...props }) => {
  const { data } = props;
  if (!OptionRenderer) return null;
  return (
    <components.Option {...props} className="dropdown-wrapper__option--reset">
      <OptionRenderer {...data} />
    </components.Option>
  );
};

export default Option;
