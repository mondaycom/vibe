import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import classes from "./ModalFooter.module.scss";

const ModalFooter = ({ className, children }) => {
  return <div className={cx(classes.container, className)}>{children}</div>;
};

ModalFooter.propTypes = {
  /**
   * class name to be add to the wrapper
   */
  className: PropTypes.string
};
ModalFooter.defaultProps = {
  className: ""
};

ModalFooter.displayName = "ModalFooter";

export default ModalFooter;
