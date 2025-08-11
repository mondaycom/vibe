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
  render: (args: CounterProps) => <Counter id="overview-counter" ariaLabel="Count of 5 items" count={5} {...args} />,
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
        <Counter id="sizes-xs" ariaLabel="Extra small counter showing 5" count={5} size="xs" />
        <Text>XS</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter id="sizes-small" ariaLabel="Small counter showing 5" count={5} size="small" />
        <Text>Small</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter id="sizes-large" ariaLabel="Large counter showing 5" count={5} />
        <Text>Large</Text>
      </Flex>
    </Flex>
  )
};

export const Colors = {
  render: () => (
    <Flex gap={160}>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter id="colors-primary" ariaLabel="Primary counter showing 5" count={5} />
        <Text>Primary</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter id="colors-negative" ariaLabel="Negative counter showing 5 notifications" count={5} color="negative" />
        <Text>Negative or notification</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter id="colors-dark" ariaLabel="Dark counter showing 5" count={5} color="dark" />
        <Text>Dark</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter id="colors-light" ariaLabel="Light counter showing 5" count={5} color="light" />
        <Text>Light</Text>
      </Flex>
    </Flex>
  )
};

export const Outline = {
  render: () => (
    <Flex gap={160}>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter id="outline-primary" ariaLabel="Primary outline counter showing 5" count={5} kind="line" />
        <Text>Primary</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter
          id="outline-negative"
          ariaLabel="Negative outline counter showing 5 notifications"
          count={5}
          color="negative"
          kind="line"
        />
        <Text>Negative or notification</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter id="outline-dark" ariaLabel="Dark outline counter showing 5" count={5} color="dark" kind="line" />
        <Text>Dark</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter id="outline-light" ariaLabel="Light outline counter showing 5" count={5} color="light" kind="line" />
        <Text>Light</Text>
      </Flex>
    </Flex>
  )
};

export const Limits = {
  render: () => (
    <Flex gap={160}>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter
          id="limits-one-digit"
          ariaLabel="Counter showing 9+ items (10 with 1 digit limit)"
          count={10}
          maxDigits={1}
        />
        <Text>One digit limit</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter
          id="limits-two-digit"
          ariaLabel="Counter showing 99+ items (100 with 2 digit limit)"
          count={100}
          maxDigits={2}
        />
        <Text>Two digits limit</Text>
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter id="limits-three-digit" ariaLabel="Counter showing 1000 items" count={1000} />
        <Text>Three digits limit</Text>
      </Flex>
    </Flex>
  )
};

export const NotificationCounter = {
  render: () => {
    return (
      <div style={{ position: "relative" }}>
        <Avatar
          id="notification-avatar"
          type="icon"
          icon={Notifications}
          backgroundColor="royal"
          ariaLabel="Notifications"
        />
        <div style={{ position: "absolute", top: "-5px", right: "-5px" }}>
          <Counter
            id="notification-counter"
            ariaLabel="5 unread notifications"
            count={5}
            maxDigits={1}
            color="negative"
          />
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
        <Counter id="inbox-counter-1" ariaLabel="195 items in UX Writing & microcopy" count={195} color="dark" />
        <Counter id="inbox-counter-2" ariaLabel="141 items in Mobile Data Iteration Plan" count={141} color="dark" />
        <Counter id="inbox-counter-3" ariaLabel="99 items in Q Plans" count={99} color="dark" />
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
          <Counter count={5} size="small" id="count-the-number-of-updates-1" ariaLabel="5 updates" />
        </div>
      </div>
      <Divider />
      <div style={{ position: "relative" }}>
        <Icon icon={Update} iconSize="36" />
        <div style={{ position: "absolute", bottom: 0, right: -3 }}>
          <Counter count={5} color="dark" size="small" id="count-the-number-of-updates-2" ariaLabel="5 updates" />
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
