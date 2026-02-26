import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";
import { DialogContentContainer, Text, Flex, LinearProgressBar } from "@vibe/core";

export const TipMultiStepIndicator = () => (
  <Tip>
    If you need to lead a user through a progress, use the{" "}
    <StorybookLink page="Components/MultiStepIndicator" size={"small"}>
      MultiStepIndicator
    </StorybookLink>{" "}
    instead.
  </Tip>
);

export const ComponentRulePositive = () => (
  <div style={{ width: 250 }}>
    <DialogContentContainer style={{ padding: "var(--space-20)" }}>
      <Text type="text1" weight="bold" style={{ marginBottom: "var(--space-4)" }}>
        Items usage
      </Text>
      <Flex justify="space-between" style={{ marginBottom: "var(--space-4)" }}>
        <Text>Items</Text>
        <Text>142/200</Text>
      </Flex>
      <LinearProgressBar value={71} />
    </DialogContentContainer>
  </div>
);

export const ComponentRuleNegative = () => (
  <div style={{ width: 250 }}>
    <DialogContentContainer style={{ padding: "var(--space-20)" }}>
      <Text type="text1" weight="bold" style={{ marginBottom: "var(--space-4)" }}>
        Storage
      </Text>
      <Flex gap="medium">
        <Text ellipsis={false} style={{ flexBasis: 80 }}>
          Drive 1
        </Text>
        <LinearProgressBar value={88} />
      </Flex>
      <Flex gap="medium">
        <Text ellipsis={false} style={{ flexBasis: 80 }}>
          Drive 2
        </Text>
        <LinearProgressBar value={46} />
      </Flex>
      <Flex gap="medium">
        <Text ellipsis={false} style={{ flexBasis: 80 }}>
          Drive 3
        </Text>
        <LinearProgressBar value={72} />
      </Flex>
    </DialogContentContainer>
  </div>
);
