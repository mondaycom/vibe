import React from "react";
import Link from "../Link";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { ExternalPage, Info, Link as IconLink } from "@vibe/icons";
import { createComponentTemplate } from "vibe-storybook-components";
import "./Link.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Link,
  iconPropNamesArray: ["icon"]
});

export default {
  title: "Components/Link",
  component: Link,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const linkTemplate = createComponentTemplate(Link);

export const Overview = {
  render: linkTemplate.bind({}),
  name: "Overview",

  args: {
    text: "Read more",
    href: "https://www.monday.com"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const States = {
  render: () => <Link text="Default" href="https://www.monday.com" />,
  name: "States"
};

export const RightToLeft = {
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

export const WithIcons = {
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

export const ReferenceLink = {
  render: () => (
    <div>
      {`Lorem Ipsum has been the industry's `}
      <Link inlineText inheritFontSize text="standard" href="https://www.monday.com" />
      {` dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
    </div>
  )
};

export const ShorteningTexts = {
  render: () => (
    <div>
      {`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. `}
      <Link text="Read more" href="https://www.monday.com" inheritFontSize inlineText />
    </div>
  )
};
