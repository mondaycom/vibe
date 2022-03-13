import cx from "classnames";
import "./paragraph.scss";

export const Paragraph = ({ children, className }) => (
  <p className={cx("monday-storybook-paragraph", className)}>{children}</p>
);
