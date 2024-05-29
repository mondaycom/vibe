import React from "react";
import { useState } from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import ExpandCollapse from "../ExpandCollapse";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { Flex, Icon, Text } from "../../index";
import { Heading } from "../../../next/next";
import { Robot } from "../../Icon/Icons";
import styles from "./ExpandCollapse.stories.module.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: ExpandCollapse,
  enumPropNamesArray: [],
  iconPropNamesArray: [],
  actionPropsArray: [],
  ignoreControlsPropNamesArray: ["headerComponentRenderer"]
});

export default {
  title: "Data Display/ExpandCollapse",
  component: ExpandCollapse,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const expandCollapseTemplate = createComponentTemplate(ExpandCollapse);

export const Overview = {
  render: expandCollapseTemplate.bind({}),
  name: "Overview",
  args: {
    title: "Expand collapse",
    children: [
      <Text type={Text.types.TEXT2} maxLines={2}>
        Insert here any component that you want, here is a robot for you
      </Text>,
      <Icon iconType={Icon.type.SVG} icon={Robot} iconSize={40} clickable={false} />
    ],
    className: styles.storybookExpandCollapse
  }
};

export const OpenByDefault = {
  render: () => (
    <ExpandCollapse title="Open by default" defaultOpenState className={styles.storybookExpandCollapse}>
      <Text type={Text.types.TEXT2} maxLines={2}>
        Insert here any component that you want
      </Text>
    </ExpandCollapse>
  ),

  name: "Open by default"
};

export const ControlledOpenState = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Flex direction={Flex.directions.ROW} gap={Flex.gaps.LARGE} align={Flex.align.START}>
        <ExpandCollapse
          title="Controlled open state"
          open={open}
          onClick={() => setOpen(prevState => !prevState)}
          className={styles.storybookExpandCollapse}
        >
          <Text type={Text.types.TEXT2} maxLines={2}>
            Insert here any component that you want
          </Text>
        </ExpandCollapse>
      </Flex>
    );
  },

  name: "Controlled open state"
};

export const CustomHeaderRenderer = {
  render: () => {
    const ExpandCollapseCustomHeadingComponent = () => {
      return <Heading type={Heading.types.H3}>Any component you want</Heading>;
    };

    return (
      <ExpandCollapse
        headerComponentRenderer={ExpandCollapseCustomHeadingComponent}
        className={styles.storybookExpandCollapse}
      >
        <Text type={Text.types.TEXT2} maxLines={2}>
          Insert here any component that you want
        </Text>
      </ExpandCollapse>
    );
  },

  name: "Custom header renderer"
};

export const WithoutBorders = {
  render: () => (
    <ExpandCollapse hideBorder title="Without borders" className={styles.storybookExpandCollapse}>
      <Text type={Text.types.TEXT2} maxLines={2}>
        Insert here any component that you want
      </Text>
    </ExpandCollapse>
  ),

  name: "Without borders"
};
