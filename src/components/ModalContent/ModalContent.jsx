import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import classes from "./ModalContent.module.scss";

const ModalContent = ({ className, children }) => {
  return <div className={cx(classes.container, className)}>{children}</div>;
};

ModalContent.propTypes = {
  /**
   * class name to be add to the wrapper
   */
  className: PropTypes.string
};
ModalContent.defaultProps = {
  className: ""
};

ModalContent.displayName = "ModalContent";

export default ModalContent;
