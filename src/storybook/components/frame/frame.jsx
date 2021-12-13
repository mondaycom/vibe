import cx from "classnames";
import "./frams.scss";

export const Frame = ({ children, className }) => (
  <div className={cx("monday-storybook-frame", className)}>{children}</div>
);
