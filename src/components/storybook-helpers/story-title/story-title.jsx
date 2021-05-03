import React from "react";

const StoryTitle = ({ text }) => {
  return <h2 style={{ fontSize: "18px", color: "var(--primary-text-color)" }}>{text}</h2>;
};
StoryTitle.propTypes = {};
StoryTitle.defaultProps = {};
export default StoryTitle;
