import React from "react";
import { components } from "react-select";
import "./Option.scss";

const Option = ({ OptionRenderer, ...props }) => {
  if (!OptionRenderer) return null;
  return (
    <components.Option {...props} className={"dropdown-wrapper__option--reset"}>
      <OptionRenderer {...props.data} />
    </components.Option>
  );
};

export default Option;
