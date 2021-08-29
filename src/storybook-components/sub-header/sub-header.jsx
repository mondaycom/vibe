import cx from "classnames";
import "./sub-header.scss";

export const SubHeader = ({ className, ...props }) => (
  // eslint-disable-next-line jsx-a11y/heading-has-content
  <h2 className={cx("monday-storybook-sub-header", className)} {...props} />
);
