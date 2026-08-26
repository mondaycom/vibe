import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Flex, IconButton, StrokeSpotlight, STROKE_NO_PULSE_ATTR, Text, type StrokeSpotlightProps } from "@vibe/core";
import { Attach, MoveArrowUp } from "@vibe/icons";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import styles from "./StrokeSpotlight.stories.module.scss";

type Story = StoryObj<typeof StrokeSpotlight>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: StrokeSpotlight,
  enumPropNamesArray: ["palette"],
  ignoreControlsPropNamesArray: ["children"]
});

function ChatComposer({ placeholder = "Ask anything..." }: { placeholder?: string }) {
  return (
    <div className={styles.composer}>
      <textarea className={styles.input} aria-label="Chat prompt" placeholder={placeholder} />
      <div className={styles.footer}>
        <Flex align="center" gap="xs">
          <IconButton
            icon={Attach}
            size="small"
            kind="tertiary"
            aria-label="Attach file"
            {...{ [STROKE_NO_PULSE_ATTR]: true }}
          />
          <Button kind="tertiary" size="small" {...{ [STROKE_NO_PULSE_ATTR]: true }}>
            Add context
          </Button>
        </Flex>
        <IconButton icon={MoveArrowUp} kind="primary" size="small" aria-label="Send message" />
      </div>
    </div>
  );
}

export default {
  title: "Components/StrokeSpotlight [New]",
  component: StrokeSpotlight,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators,
  parameters: {
    chromatic: {
      // Pointer-following stroke is interactive; static snapshots are not meaningful.
      disableSnapshot: true
    }
  }
} satisfies Meta<typeof StrokeSpotlight>;

export const Overview: Story = {
  render: (args: StrokeSpotlightProps) => (
    <div className={styles.stage}>
      <div className={styles.shell}>
        <StrokeSpotlight {...args}>
          <ChatComposer />
        </StrokeSpotlight>
      </div>
    </div>
  ),
  args: {
    palette: "default",
    spread: 40,
    proximity: 64,
    inactiveZone: 0.01,
    borderWidth: 1.5,
    glowBlur: 12,
    radius: 16
  },
  parameters: {
    docs: {
      liveEdit: { isEnabled: false }
    }
  }
};

export const Palettes: Story = {
  render: () => (
    <div className={styles.paletteGrid}>
      {(
        [
          ["default", "Default (Agents)"],
          ["sidekick", "Sidekick"],
          ["vibe", "Vibe"]
        ] as const
      ).map(([palette, label]) => (
        <div key={palette} className={styles.paletteItem}>
          <Text type="text2" weight="medium" className={styles.paletteLabel}>
            {label}
          </Text>
          <StrokeSpotlight palette={palette} borderWidth={1.5} glowBlur={12} spread={40}>
            <ChatComposer placeholder={`Compose with ${label} palette…`} />
          </StrokeSpotlight>
        </div>
      ))}
    </div>
  )
};

export const ChatComposerExample: Story = {
  name: "Chat composer",
  render: () => (
    <div className={styles.stage}>
      <div className={styles.shell}>
        <StrokeSpotlight palette="sidekick" borderWidth={1.5} glowBlur={12} spread={40} proximity={64}>
          <ChatComposer placeholder="@ Mention boards and docs..." />
        </StrokeSpotlight>
      </div>
    </div>
  )
};
