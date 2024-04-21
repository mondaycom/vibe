import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import BaseInput from "../BaseInput";

const metaSettings = createStoryMetaSettingsDecorator({
  component: BaseInput,
  isInternal: true,
  shouldCreateAutodocsPage: true
});

export default {
  title: "Internal/BaseInput",
  component: BaseInput,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators,
  tags: metaSettings.tags
};

const baseInputTemplate = createComponentTemplate(BaseInput);

export const Overview = {
  render: baseInputTemplate.bind({})
};
