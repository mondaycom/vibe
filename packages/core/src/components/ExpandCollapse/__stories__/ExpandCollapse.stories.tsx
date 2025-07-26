import React from "react";
import { useState } from "react";
import ExpandCollapse, { ExpandCollapseProps } from "../ExpandCollapse";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { Icon, Text } from "../../index";
import Heading from "../../Heading/Heading";
import { Robot } from "@vibe/icons";

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
        scope: {}
      }
    }
  }
};

export const Overview = {
  render: (args: ExpandCollapseProps) => {
    return (
      <div style={{ width: "300px" }}>
        <ExpandCollapse title="Expand collapse" {...args}>
          <Text type="text2" maxLines={2}>
            Insert here any component that you want, here is a robot for you
          </Text>
          <Icon iconType="svg" icon={Robot} iconSize={40} />
        </ExpandCollapse>
      </div>
    );
  },
  name: "Overview",
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
    <div style={{ width: "300px" }}>
      <ExpandCollapse title="Open by default" defaultOpenState>
        <Text type="text2" maxLines={2}>
          Insert here any component that you want
        </Text>
      </ExpandCollapse>
    </div>
  )
};

export const ControlledOpenState = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ width: "300px" }}>
        <ExpandCollapse title="Controlled open state" open={open} onClick={() => setOpen(prevState => !prevState)}>
          <Text type="text2" maxLines={2}>
            Insert here any component that you want
          </Text>
        </ExpandCollapse>
      </div>
    );
  }
};

export const CustomHeaderRenderer = {
  render: () => {
    const ExpandCollapseCustomHeadingComponent = () => {
      return <Heading type="h3">Any component you want</Heading>;
    };

    return (
      <div style={{ width: "300px" }}>
        <ExpandCollapse headerComponentRenderer={ExpandCollapseCustomHeadingComponent}>
          <Text type="text2" maxLines={2}>
            Insert here any component that you want
          </Text>
        </ExpandCollapse>
      </div>
    );
  }
};

export const WithoutBorders = {
  render: () => (
    <div style={{ width: "300px" }}>
      <ExpandCollapse hideBorder title="Without borders">
        <Text type="text2" maxLines={2}>
          Insert here any component that you want
        </Text>
      </ExpandCollapse>
    </div>
  )
};
