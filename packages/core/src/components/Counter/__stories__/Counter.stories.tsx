import React from "react";
import Counter from "../Counter";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import Divider from "../../Divider/Divider";
import { AddUpdate, Update, Notifications } from "@vibe/icons";
import Icon from "../../Icon/Icon";
import Avatar from "../../Avatar/Avatar";
import Flex from "../../Flex/Flex";
import { type CounterProps } from "../Counter";
import Text from "../../Text/Text";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Counter
});

export default {
  title: "Components/Counter",
  component: Counter,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: (args: CounterProps) => <Counter count={5} {...args} />,
  name: "Overview",
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Sizes = {
  render: () => (
    <Flex gap={160}>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={5} size="xs" />
        <Text>XS</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={5} size="small" />
        <Text>Small</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={5} />
        <Text>Large</Text>
      </Flex>
    </Flex>
  )
};

export const Colors = {
  render: () => (
    <Flex gap={160}>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={5} />
        <Text>Primary</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={5} color="negative" />
        <Text>Negative or notification</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={5} color="dark" />
        <Text>Dark</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={5} color="light" />
        <Text>Light</Text>
      </Flex>
    </Flex>
  )
};

export const Outline = {
  render: () => (
    <Flex gap={160}>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={5} kind="line" />
        <Text>Primary</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={5} color="negative" kind="line" />
        <Text>Negative or notification</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={5} color="dark" kind="line" />
        <Text>Dark</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={5} color="light" kind="line" />
        <Text>Light</Text>
      </Flex>
    </Flex>
  )
};

export const Limits = {
  render: () => (
    <Flex gap={160}>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={10} maxDigits={1} />
        <Text>One digit limit</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={100} maxDigits={2} />
        <Text>Two digits limit</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={1000} />
        <Text>Three digits limit</Text>
      </Flex>
    </Flex>
  )
};

export const NotificationCounter = {
  render: () => {
    return (
      <div style={{ position: "relative" }}>
        <Avatar type="icon" icon={Notifications} backgroundColor="royal" />
        <div style={{ position: "absolute", top: "-5px", right: "-5px" }}>
          <Counter count={5} maxDigits={1} color="negative" />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { Notifications }
      }
    }
  }
};

export const CounterOnInboxFilters = {
  render: () => (
    <Flex gap={28}>
      <Flex direction="column" gap="large" align="start">
        <Text>UX Writing & microcopy Re...</Text>
        <Text>Mobile Data- Iteration Plan...</Text>
        <Text>Q Plans.</Text>
      </Flex>
      <Flex direction="column" gap="large" align="start">
        <Counter count={195} color="dark" />
        <Counter count={141} color="dark" />
        <Counter count={99} color="dark" />
      </Flex>
    </Flex>
  )
};

export const CountTheNumberOfUpdates = {
  render: () => (
    <Flex gap={12} direction="column" align="start">
      <Icon icon={AddUpdate} iconSize="36" />
      <Divider />
      <div style={{ position: "relative" }}>
        <Icon icon={Update} iconSize="36" />
        <div style={{ position: "absolute", bottom: 0, right: -3 }}>
          <Counter count={5} size="small" />
        </div>
      </div>
      <Divider />
      <div style={{ position: "relative" }}>
        <Icon icon={Update} iconSize="36" />
        <div style={{ position: "absolute", bottom: 0, right: -3 }}>
          <Counter count={5} color="dark" size="small" />
        </div>
      </div>
    </Flex>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { AddUpdate, Update }
      }
    }
  }
};
