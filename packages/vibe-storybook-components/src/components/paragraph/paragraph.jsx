import React from "react";
import cx from "classnames";
import "./paragraph.scss";

export const Paragraph = ({ children, className }) => (
  <p className={cx("vibe-sb-comps-paragraph", className)}>{children}</p>
);

export default Paragraph;
