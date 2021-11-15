import cx from "classnames";
import "./component-name.scss";

export const ComponentName = ({ children, className }) => {
  return <h1 className={cx("monday-storybook-component-name", className)}>{children}</h1>;
};
