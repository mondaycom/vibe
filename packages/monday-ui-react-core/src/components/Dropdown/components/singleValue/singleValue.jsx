/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import cx from "classnames";
import { components } from "react-select";
import { ChildrenContent } from "../ChildrenContent/ChildrenContent";
import styles from "./singleValue.module.scss";

const SingleValue = ({ Renderer, data, children, readOnly, singleValueWrapperClassName, ...props }) => {
  const rendererProps = { children, readOnly, data, ...props };
  const value = Renderer ? (
    <Renderer {...rendererProps} {...data} /> // Spreading data here for a backward compatability
  ) : (
    <ChildrenContent data={data} readOnly={readOnly}>
      {children}
    </ChildrenContent>
  );
  return (
    <components.SingleValue
      {...props}
      className={cx(styles.singleValue, "dropdown-wrapper__single-value--reset", singleValueWrapperClassName)}
    >
      {value}
    </components.SingleValue>
  );
};

export default SingleValue;
