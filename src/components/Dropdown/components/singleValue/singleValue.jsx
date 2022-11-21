/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { components } from "react-select";
import { ChildrenContent } from "../ChildrenContent/ChildrenContent";

const SingleValue = props => {
  const { Renderer, data, children } = props;

  const value = Renderer ? <Renderer {...data} /> : <ChildrenContent data={data}>{children}</ChildrenContent>;
  return (
    <components.SingleValue {...props} className="dropdown-wrapper__single-value--reset">
      {value}
    </components.SingleValue>
  );
};

export default SingleValue;
