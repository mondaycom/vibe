/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import cx from "classnames";
import { components } from "react-select";
import { ChildrenContent } from "../ChildrenContent/ChildrenContent";
import styles from "./singleValue.module.scss";

const SingleValue = props => {
  const { Renderer, data, children } = props;

  const value = Renderer ? <Renderer {...data} /> : <ChildrenContent data={data}>{children}</ChildrenContent>;
  return (
    <components.SingleValue {...props} className={cx(styles.singleValue, "dropdown-wrapper__single-value--reset")}>
      {value}
    </components.SingleValue>
  );
};

export default SingleValue;
