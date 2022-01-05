import PropTypes from "prop-types";
import cx from "classnames";
import "./section-name.scss";
import { useMemo } from "react";

export const SectionName = ({ className, children, ...props }) => {
  const id = useMemo(() => children.toLowerCase().split(" ").join("-"), [children]);
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return (
    <h2 id={id} className={cx("monday-storybook-section-name", className)} {...props}>
      {children}
    </h2>
  );
};

SectionName.propTypes = {
  children: PropTypes.string.isRequired
};
