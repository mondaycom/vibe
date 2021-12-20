import cx from "classnames";
import "./component-name.scss";

export const ComponentName = ({ children, className, isFoundation = false, overrideBackground }) => {
  return (
    <h1
      className={cx("monday-storybook-component-name", className, {
        "monday-storybook-component-name--foundation": isFoundation
      })}
    >
      {children}
    </h1>
  );
};
