// TODO storybook 7 migration: deprecated - migration guide https://www.npmjs.com/package/@storybook/addon-storyshots
import initStoryshots, { renderOnly } from "@storybook/addon-storyshots";

initStoryshots({
  test: renderOnly
});
