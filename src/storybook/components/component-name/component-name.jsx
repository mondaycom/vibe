import cx from "classnames";
import "./component-name.scss";

export const ComponentName = ({ children, className, withFoundationBackground = false }) => {
  return (
    <h1
      className={cx("monday-storybook-component-name", className, {
        "monday-storybook-component-name--foundation": withFoundationBackground
      })}
    >
      {children}
    </h1>
  );
};
