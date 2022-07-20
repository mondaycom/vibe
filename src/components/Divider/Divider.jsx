import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { DIRECTIONS } from "./DividerConstants";
import "./Divider.scss";

const Divider = ({
  // Backward compatibility for props naming
  classname,
  className,
  direction
}) => {
  const overrideClassName = backwardCompatibilityForProperties([className, classname]);
  return <div className={cx("monday-style-divider", overrideClassName, `monday-style-divider--${direction}`)} />;
};

Divider.directions = DIRECTIONS;

Divider.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.oneOf([Divider.directions.HORIZONTAL, Divider.directions.VERTICAL])
};

Divider.defaultProps = {
  className: undefined,
  direction: DIRECTIONS.HORIZONTAL
};

export default Divider;
