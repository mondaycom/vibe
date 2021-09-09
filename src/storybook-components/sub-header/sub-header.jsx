import PropTypes from "prop-types";
import cx from "classnames";
import "./sub-header.scss";
import { useMemo } from "react";

export const SubHeader = ({ className, children, ...props }) => {
  const id = useMemo(
    () =>
      children
        .toLowerCase()
        .split(" ")
        .join("-"),
    [children]
  );
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return (
    <h2 id={id} className={cx("monday-storybook-sub-header", className)} {...props}>
      {children}
    </h2>
  );
};

SubHeader.propTypes = {
  children: PropTypes.string.isRequired
};
