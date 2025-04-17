import React from "react";
import { useState } from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import ExpandCollapse from "../ExpandCollapse";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { Flex, Icon, Text } from "../../index";
import Heading from "../../Heading/Heading";
import { Robot } from "@vibe/icons";
import styles from "./ExpandCollapse.stories.module.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: ExpandCollapse,
  ignoreControlsPropNamesArray: ["headerComponentRenderer"]
});

export default {
  title: "Components/ExpandCollapse",
  component: ExpandCollapse,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators,
  parameters: {
    docs: {
      liveEdit: {
        scope: { styles }
      }
    }
  }
};

const expandCollapseTemplate = createComponentTemplate(ExpandCollapse);

export const Overview = {
  render: expandCollapseTemplate.bind({}),
  name: "Overview",
  args: {
    title: "Expand collapse",
    children: [
      <Text type="text2" maxLines={2}>
        Insert here any component that you want, here is a robot for you
      </Text>,
      <Icon iconType="svg" icon={Robot} iconSize={40} />
    ],
    className: styles.storybookExpandCollapse
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const OpenByDefault = {
  render: () => (
    <ExpandCollapse title="Open by default" defaultOpenState className={styles.storybookExpandCollapse}>
      <Text type="text2" maxLines={2}>
        Insert here any component that you want
      </Text>
    </ExpandCollapse>
  )
};

export const ControlledOpenState = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Flex direction="row" gap="large" align="start">
        <ExpandCollapse
          title="Controlled open state"
          open={open}
          onClick={() => setOpen(prevState => !prevState)}
          className={styles.storybookExpandCollapse}
        >
          <Text type="text2" maxLines={2}>
            Insert here any component that you want
          </Text>
        </ExpandCollapse>
      </Flex>
    );
  }
};

export const CustomHeaderRenderer = {
  render: () => {
    const ExpandCollapseCustomHeadingComponent = () => {
      return <Heading type="h3">Any component you want</Heading>;
    };

    return (
      <ExpandCollapse
        headerComponentRenderer={ExpandCollapseCustomHeadingComponent}
        className={styles.storybookExpandCollapse}
      >
        <Text type="text2" maxLines={2}>
          Insert here any component that you want
        </Text>
      </ExpandCollapse>
    );
  }
};

export const WithoutBorders = {
  render: () => (
    <ExpandCollapse hideBorder title="Without borders" className={styles.storybookExpandCollapse}>
      <Text type="text2" maxLines={2}>
        Insert here any component that you want
      </Text>
    </ExpandCollapse>
  )
};
