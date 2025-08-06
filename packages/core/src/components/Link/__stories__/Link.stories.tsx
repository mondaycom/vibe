import React from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import Link, { type LinkProps } from "../Link";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { ExternalPage, Info, Link as IconLink } from "@vibe/icons";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Link,
  iconPropNamesArray: ["icon"]
});

export default {
  title: "Components/Link",
  component: Link,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

export const Overview: Story = {
  render: (args: LinkProps) => <Link text="Read more" href="https://www.monday.com" {...args} />,
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const States: Story = {
  render: () => <Link text="Default" href="https://www.monday.com" />
};

export const RightToLeft: Story = {
  render: () => (
    <>
      <Link text="اقرأ أكثر" href="https://www.monday.com" icon={IconLink} />
      <Link text="קרא עוד" href="https://www.monday.com" iconPosition="end" icon={Info} />
    </>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { IconLink, Info }
      }
    }
  }
};

export const WithIcons: Story = {
  render: () => (
    <>
      <Link text="Read more" href="https://www.monday.com" icon={ExternalPage} />
      <Link text="Read more" href="https://www.monday.com" iconPosition="end" icon={ExternalPage} />
    </>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { ExternalPage }
      }
    }
  }
};

export const ReferenceLink: Story = {
  render: () => (
    <div>
      {`Lorem Ipsum has been the industry's `}
      <Link inlineText inheritFontSize text="standard" href="https://www.monday.com" />
      {` dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
    </div>
  )
};

export const ShorteningTexts: Story = {
  render: () => (
    <div>
      {`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. `}
      <Link text="Read more" href="https://www.monday.com" inheritFontSize inlineText />
    </div>
  )
};
