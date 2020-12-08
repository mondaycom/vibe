import React from "react";
import { components } from "react-select";
import "./SingleValue.scss";

const SingleValue = props => {
  const { ValueRenderer } = props;
  if (!ValueRenderer) return null;
  return (
    <components.SingleValue
      {...props}
      className={"dropdown-wrapper__single-value--reset"}
    >
      <ValueRenderer {...props.data} />
    </components.SingleValue>
  );
};

export default SingleValue;
