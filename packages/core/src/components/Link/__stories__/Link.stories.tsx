import React from "react";
import Link from "../Link";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { ExternalPage, Info, Link as IconLink } from "../../Icon/Icons";
import { createComponentTemplate } from "vibe-storybook-components";
import "./Link.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Link,
  enumPropNamesArray: ["iconPosition", "target"],
  iconPropNamesArray: ["icon"]
});

export default {
  title: "Navigation/Link",
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
      <Link text="קרא עוד" href="https://www.monday.com" iconPosition={Link.iconPositions.END} icon={Info} />
    </>
  ),
  name: "Right to left"
};

export const WithIcons = {
  render: () => (
    <>
      <Link text="Read more" href="https://www.monday.com" icon={ExternalPage} />
      <Link text="Read more" href="https://www.monday.com" iconPosition={Link.iconPositions.END} icon={ExternalPage} />
    </>
  ),
  name: "With icons"
};

export const ReferenceLink = {
  render: () => (
    <div>
      {`Lorem Ipsum has been the industry's `}
      <Link inlineText inheritFontSize text="standard" href="https://www.monday.com" />
      {` dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
    </div>
  ),

  name: "Reference link"
};

export const ShorteningTexts = {
  render: () => (
    <div>
      {`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. `}
      <Link text="Read more" href="https://www.monday.com" inheritFontSize inlineText />
    </div>
  ),

  name: "Shortening texts"
};
