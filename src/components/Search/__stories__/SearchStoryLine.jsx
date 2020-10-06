import React from "react";
import ComponentStateDescription from "../../storybook-helpers/component-state-description/ComponentStateDescription";
import Search from "../Search";

const SearchStoryLine = ({
  title,
  className = "",
  inputAriaLabel = "Search for content",
  placeHolder = "Placeholder text goes here",
  size = "md",
  disabled = false,
  value = ""
}) => {
  return (
    <>
      <ComponentStateDescription title={title} />
      <div className="width-35">
        <Search
          className={className}
          inputAriaLabel={inputAriaLabel}
          iconName="fa-search"
          secondaryIconName="fa-close"
          id={`${title}_1`}
          placeholder={placeHolder}
          size={size}
          disabled={disabled}
          value={value}
        />
      </div>
    </>
  );
};
SearchStoryLine.propTypes = {};
SearchStoryLine.defaultProps = {};
export default SearchStoryLine;
