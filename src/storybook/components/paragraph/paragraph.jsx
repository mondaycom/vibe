import cx from "classnames";

export const Paragraph = ({ children, className }) => (
  <p className={cx("monday-storybook-paragraph", className)}>{children}</p>
);
