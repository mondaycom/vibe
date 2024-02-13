import cx from "classnames";
import { ComponentName } from "vibe-storybook-components";
import "./component-name-decorator.scss";

export const ComponentNameDecorator = ({ children, className, withFoundationBackground = false }) => {
  return (
    <ComponentName
      className={cx("monday-ui-style-storybook-component-name", className, {
        "monday-ui-style-storybook-component-name--foundation": withFoundationBackground
      })}
    >
      {children}
    </ComponentName>
  );
};

export default ComponentNameDecorator;
