/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import SVG from "react-inlinesvg";
import "./CustomSvgIcon.scss";

const CustomSvgIcon = ({ className, src, onClick, clickable, ...props }) => {
  const tabIndex = clickable ? 0 : -1;
  return (
    <SVG
      tabIndex={tabIndex}
      onClick={onClick}
      src={src}
      className={cx("monday-style-custom-svg-icon--wrapper", className)}
      {...props}
    />
  );
};

CustomSvgIcon.defaultProps = {
  className: PropTypes.string,
  src: PropTypes.string
};
CustomSvgIcon.propTypes = {
  className: "",
  src: ""
};

export default CustomSvgIcon;
