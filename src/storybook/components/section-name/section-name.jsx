import PropTypes from "prop-types";
import cx from "classnames";
import { useMemo } from "react";
import "./section-name.scss";

export const SectionName = ({ className, children, ...props }) => {
  const id = useMemo(
    () => children.toLowerCase().replaceAll("’", "").replaceAll("'", "").split(" ").join("-"),
    [children]
  );
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

export default SectionName;
