import cx from "classnames";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Canvas, Story } from "@storybook/addon-docs";
import "./component-story.scss";

export const ComponentStory = ({ storyId, className, children }) => {
  return (
    <Canvas>
      <div className={cx("monday-storybook_component-story", className)}>
        <Story id={storyId}>{children}</Story>
      </div>
    </Canvas>
  );
};
