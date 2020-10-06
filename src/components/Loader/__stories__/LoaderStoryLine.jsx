import React from "react";
import ComponentStateDescription from "../../storybook-helpers/component-state-description/ComponentStateDescription";
import Loader from "../Loader";

const LoaderStoryLine = ({ title, className = "", size = "md" }) => {
  return (
    <>
      <ComponentStateDescription title={title} />
      <div className="width-35">
        <div style={{ height: "40px", width: "40px" }}>
          <Loader className={className} size={size} />
        </div>
      </div>
    </>
  );
};
LoaderStoryLine.propTypes = {};
LoaderStoryLine.defaultProps = {};
export default LoaderStoryLine;
