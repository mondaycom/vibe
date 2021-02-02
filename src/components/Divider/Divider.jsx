import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { DIRECTIONS } from "./DividerConstants";
import "./Divider.scss";

const Divider = ({ classname, direction }) => {
  return <div className={cx("monday-style-divider", classname, `monday-style-divider--${direction}`)} />;
};

Divider.directions = DIRECTIONS;

Divider.defaultProps = {
  classname: "",
  direction: DIRECTIONS.HORIZONTAL
};

Divider.propTypes = {
  classname: PropTypes.string,
  direction: PropTypes.oneOf([DIRECTIONS.HORIZONTAL, DIRECTIONS.VERTICAL])
};

export default Divider;
