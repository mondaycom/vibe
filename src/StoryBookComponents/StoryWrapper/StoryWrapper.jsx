import React from "react";
import "./StoryWrapper.scss";

const StoryWrapper = ({ children }) => {
  return <div className="monday-style-story-wrapper">{children}</div>;
};
StoryWrapper.propTypes = {};
StoryWrapper.defaultProps = {};
export default StoryWrapper;
