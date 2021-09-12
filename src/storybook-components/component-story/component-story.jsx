// eslint-disable-next-line import/no-extraneous-dependencies
import { Canvas, Story } from "@storybook/addon-docs";

export const ComponentStory = ({ storyId, classnName, children }) => {
  return (
    <Canvas>
      <Story id={storyId}>{children}</Story>
    </Canvas>
  );
};
