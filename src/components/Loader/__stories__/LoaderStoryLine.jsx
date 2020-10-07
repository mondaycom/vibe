import React from "react";
import ComponentStateDescription from "../../storybook-helpers/component-state-description/ComponentStateDescription";
import "./LoaderStoryLine.scss";

const LoaderStoryLine = ({ title, children }) => {
  return (
    <>
      <ComponentStateDescription title={title} />
      <div className="width-35">
        <div style={{ height: "40px", width: "40px" }}>{children}</div>
      </div>
    </>
  );
};
LoaderStoryLine.propTypes = {};
LoaderStoryLine.defaultProps = {};
export default LoaderStoryLine;
