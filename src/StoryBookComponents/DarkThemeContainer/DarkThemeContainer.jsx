import React from "react";
import cx from "classnames";
import "./DarkThemeContainer.scss";

const DarkThemeContainer = ({ children }) => {
  return (
    <div className={cx("dark-theme-container", "dark-app-theme")}>
      <div className="story-title">Dark Theme</div>
      {children}
    </div>
  );
};
DarkThemeContainer.propTypes = {};
DarkThemeContainer.defaultProps = {};
export default DarkThemeContainer;
