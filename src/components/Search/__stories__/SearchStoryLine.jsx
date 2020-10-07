import React from "react";
import ComponentStateDescription from "../../storybook-helpers/component-state-description/ComponentStateDescription";

const SearchStoryLine = ({ title, children }) => {
  return (
    <>
      <ComponentStateDescription title={title} />
      <div className="width-35">{children}</div>
    </>
  );
};
SearchStoryLine.propTypes = {};
SearchStoryLine.defaultProps = {};
export default SearchStoryLine;
