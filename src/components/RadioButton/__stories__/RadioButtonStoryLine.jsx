import React from "react";
import { ComponentStateDescription, FlexLayout } from "../../storybook-helpers";

const SearchStoryLine = ({ title, children }) => {
  return (
    <FlexLayout>
      <ComponentStateDescription title={title} />
      <div className="width-35">{children}</div>
    </FlexLayout>
  );
};
SearchStoryLine.propTypes = {};
SearchStoryLine.defaultProps = {};
export default SearchStoryLine;
