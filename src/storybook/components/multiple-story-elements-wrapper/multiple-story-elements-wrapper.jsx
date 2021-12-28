import cx from "classnames";
import "./multiple-story-elements-wrapper.scss";

export const MultipleStoryElementsWrapper = ({ className, children }) => {
  return <div className={cx("monday-storybook_multiple-story-elements-wrapper", className)}> {children} </div>;
};
