import React from "react";
import cx from "classnames";
import "./ComponentStateDescription.scss";

const ComponentStateDescription = ({ title, full = false }) => {
  return (
    <div className={cx("component-state-description-container", { full })}>
      <div className="component-state-description-title">{title}</div>
    </div>
  );
};
ComponentStateDescription.propTypes = {};
ComponentStateDescription.defaultProps = {};
export default ComponentStateDescription;
