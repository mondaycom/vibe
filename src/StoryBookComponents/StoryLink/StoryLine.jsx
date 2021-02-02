import React from "react";
import cx from "classnames";
import ComponentStateDescription from "../../components/storybook-helpers/component-state-description/ComponentStateDescription";
import "./StoryLine.scss";

const StoryLine = ({ title, children, componentWrapperClass, wrapperClassName }) => {
  return (
    <>
      <ComponentStateDescription title={title} />
      <div className={cx(wrapperClassName, "width-35")}>
        <div className={componentWrapperClass}>{children}</div>
      </div>
    </>
  );
};

StoryLine.propTypes = {};
StoryLine.defaultProps = {};
export default StoryLine;
