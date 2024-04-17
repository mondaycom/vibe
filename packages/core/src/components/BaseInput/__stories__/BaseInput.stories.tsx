import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import BaseInput from "../BaseInput";

const metaSettings = createStoryMetaSettingsDecorator({
  component: BaseInput
});

export default {
  title: "Internal/BaseInput",
  component: BaseInput,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators,
  tags: ["internal"]
};

const baseInputTemplate = createComponentTemplate(BaseInput);

export const Overview = {
  render: baseInputTemplate.bind({})
};
