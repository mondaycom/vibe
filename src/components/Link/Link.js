import React from "react";
import cx from "classnames";
import "./Link.scss";

const Link = ({ componentClassName = "", text = "" }) => {
  return <div className={cx("link--wrapper", componentClassName)}>{text}</div>;
};

export default Link;
