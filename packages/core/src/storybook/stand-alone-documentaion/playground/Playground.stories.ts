import { withPlayground } from "storybook-addon-playground";

export default {
  title: "Playground",
  decorators: [withPlayground]
};

export const Playground = {
  parameters: {
    chromatic: { disable: true }
  }
};
