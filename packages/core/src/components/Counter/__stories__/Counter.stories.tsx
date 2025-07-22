import React from "react";
import { useCallback, useEffect, useState } from "react";
import Counter from "../Counter";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import Divider from "../../Divider/Divider";
import { AddUpdate, Update, Notifications } from "@vibe/icons";
import Icon from "../../Icon/Icon";
import Avatar from "../../Avatar/Avatar";
import Flex from "../../Flex/Flex";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Counter
});

export default {
  title: "Components/Counter",
  component: Counter,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: () => <Counter count={5} />,
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
        XS
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={5} size="small" />
        Small
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={5} />
        Large
      </Flex>
    </Flex>
  )
};

export const Colors = {
  render: () => (
    <Flex gap={160}>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={5} />
        Primary
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={5} color="negative" />
        Negative or notification
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={5} color="dark" />
        Dark
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={5} color="light" />
        Light
      </Flex>
    </Flex>
  )
};

export const Outline = {
  render: () => (
    <Flex gap={160}>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={5} kind="line" />
        Primary
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={5} color="negative" kind="line" />
        Negative or notification
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={5} color="dark" kind="line" />
        Dark
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={5} color="light" kind="line" />
        Light
      </Flex>
    </Flex>
  )
};

export const Limits = {
  render: () => (
    <Flex gap={160}>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={10} maxDigits={1} />
        One digit limit
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={100} maxDigits={2} />
        Two digits limit
      </Flex>
      <Flex direction="column" gap="large" style={{ width: "100px" }} align="start">
        <Counter count={1000} />
        Three digits limit
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
        <span className="a">UX Writing & microcopy Re...</span>
        <span className="a"> Mobile Data- Iteration Plan...</span>
        <span className="a">Q Plans.</span>
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
