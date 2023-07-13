import cx from "classnames";
import { ComponentName } from "monday-ui-storybook-blocks";
import "./component-name-decorator.scss";

export const ComponentNameDecorator = ({ children, className, withFoundationBackground = false }) => {
  return (
    <ComponentName
      className={cx("vibe-storybook-component-name", className, {
        "vibe-storybook-component-name--foundation": withFoundationBackground
      })}
    >
      {children}
    </ComponentName>
  );
};

export default ComponentNameDecorator;
