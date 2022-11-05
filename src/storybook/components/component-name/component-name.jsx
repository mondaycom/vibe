import cx from "classnames";
import "./component-name.scss";

const ComponentName = ({ children, className, withFoundationBackground = false }) => {
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

export default ComponentName;
