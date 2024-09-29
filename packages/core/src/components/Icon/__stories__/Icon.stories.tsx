import React from "react";
import Icon from "../Icon";
import { Bolt } from "@vibe/icons";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import IconsList from "./IconsList";
import "./Icon.stories.module.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Icon,
  iconPropNamesArray: ["icon"]
});

const iconTemplate = createComponentTemplate(Icon);

export default {
  title: "Media/Icon",
  component: Icon,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: iconTemplate.bind({}),
  name: "Overview",

  args: {
    icon: Bolt
  }
};

export const VibeIcon = {
  render: () => <Icon iconType="svg" icon={Bolt} iconLabel="my bolt svg icon" iconSize={16} />,

  name: "Vibe Icon"
};

export const FontIcon = {
  render: () => <Icon iconType="font" iconLabel="my font awesome start icon" icon="fa fa-star" />,

  name: "Font Icon"
};

export const CustomSvg = {
  render: () => (
    <Icon
      iconType="src"
      icon="https://cdn.monday.com/images/apps/custom-icons/Form.svg"
      iconLabel="my src awesome icon"
      className="icon-story-custom-icon"
      useCurrentColor
    />
  ),

  name: "Custom SVG"
};

export const Color = {
  render: () => (
    <div
      style={{
        color: "var(--sb-color-sofia_pink)"
      }}
    >
      <Icon iconType="svg" icon={Bolt} iconLabel="my bolt svg icon" iconSize={16} />
    </div>
  ),

  name: "Color"
};

export const IconsListStory = {
  render: IconsList.bind({}),
  name: "Icons List",
  args: {}
};
