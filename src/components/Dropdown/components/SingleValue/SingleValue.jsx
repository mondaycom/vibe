/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { components } from "react-select";
import "./SingleValue.scss";

const SingleValue = props => {
  const { ValueRenderer, data } = props;
  if (!ValueRenderer) return null;
  return (
    <components.SingleValue {...props} className="dropdown-wrapper__single-value--reset">
      <ValueRenderer {...data} />
    </components.SingleValue>
  );
};

export default SingleValue;
