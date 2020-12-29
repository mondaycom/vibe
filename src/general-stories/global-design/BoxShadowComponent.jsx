import React from "react";
import cx from "classnames";
import "./BoxShadowComponent.scss";

const BoxShadowComponent = ({ number, boxShadowClassName }) => {
  return <div className={cx(boxShadowClassName, "box-shadow-component")}>{number}</div>;
};
BoxShadowComponent.propTypes = {};
BoxShadowComponent.defaultProps = {};
export default BoxShadowComponent;
