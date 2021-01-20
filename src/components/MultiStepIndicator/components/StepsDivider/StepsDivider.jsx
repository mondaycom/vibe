import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./StepsDivider.scss";

const StepsDivider = ({ dividerComponentClassName }) => {
  return <div className={cx("monday-style-steps-divider-component", dividerComponentClassName)} />;
};

StepsDivider.propTypes = {
  dividerComponentClassName: PropTypes.string
};

StepsDivider.defaultProps = {
  dividerComponentClassName: ""
};

export default StepsDivider;
