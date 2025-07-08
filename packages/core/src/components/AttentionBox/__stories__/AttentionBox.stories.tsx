import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Robot } from "@vibe/icons";
import Button from "../../Button/Button";
import AttentionBox from "../AttentionBox";
import { AttentionBoxProps } from "../AttentionBox.types";

type Story = StoryObj<typeof AttentionBox>;

export default {
  title: "Components/AttentionBox [New]",
  component: AttentionBox
} satisfies Meta<typeof AttentionBox>;

export const Overview: Story = {
  render: (args: Partial<AttentionBoxProps>) => (
    // @ts-expect-error - title is not allowed when compact is true, but we want to allow all combinations of props in the overview story
    <AttentionBox title="Attention Required" text="Please review this information carefully." {...args} />
  )
};

export const SuccessVariant: Story = {
  render: () => <AttentionBox type="success" title="Success" text="Operation completed successfully." />
};

export const DangerVariant: Story = {
  render: () => <AttentionBox type="danger" title="Error" text="There was a problem processing your request." />
};

export const WarningVariant: Story = {
  render: () => <AttentionBox type="warning" title="Warning" text="Please double-check your input before proceeding." />
};

export const DarkVariant: Story = {
  render: () => <AttentionBox type="dark" title="Note" text="This is a neutral informational message." />
};

export const CompactSingleLine: Story = {
  render: () => <AttentionBox compact text="Compact attention message." />
};

export const CompactMultiline: Story = {
  render: () => (
    <AttentionBox
      compact
      multiline
      text="This is a longer compact message that wraps across multiple lines to demonstrate multiline support in compact mode."
    />
  )
};

export const WithActionAndLink: Story = {
  render: () => (
    <div style={{ width: 315 }}>
      <AttentionBox
        onClose={() => {}}
        type="primary"
        title="Action Required"
        text="You need to update your profile information."
        link={{ href: "/profile", text: "Profile Settings" }}
        action={{ text: "Update", onClick: () => alert("Update clicked") }}
      />
    </div>
  )
};

export const LinkInlineDefault: Story = {
  render: () => (
    <AttentionBox
      type="primary"
      title="Link Inline"
      text="This message has an inline link."
      link={{ href: "/settings", text: "Settings", inlineText: true }}
    />
  )
};

export const LinkBlockDefault: Story = {
  render: () => (
    <AttentionBox
      type="primary"
      title="Link Block"
      text="This message has a block link."
      link={{ href: "/settings", text: "Settings", inlineText: false }}
    />
  )
};

export const CompactWithInlineLink: Story = {
  render: () => (
    <AttentionBox
      compact
      text="Compact message with inline link."
      link={{ href: "/settings", text: "Settings", inlineText: true }}
    />
  )
};

export const CompactWithBlockLink: Story = {
  render: () => (
    <div style={{ width: 515 }}>
      <AttentionBox
        compact
        text="Compact message with block link."
        link={{ href: "/settings", text: "Settings", inlineText: false }}
      />
    </div>
  )
};

export const CompactWithBlockLinkAndCloseButton: Story = {
  render: () => (
    <div style={{ width: 515 }}>
      <AttentionBox
        onClose={() => {}}
        compact
        text="Compact message with block link."
        link={{ href: "/settings", text: "Settings", inlineText: false }}
      />
    </div>
  )
};

export const CompactWithActionAndLink: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <AttentionBox
        compact
        text="Compact message with action and link. Link is forced inline when action exists."
        link={{ href: "/settings", text: "Settings" }}
        action={{ text: "Action", onClick: () => alert("Action clicked") }}
      />
    </div>
  )
};

export const CompactWithActionAndLinkAndCloseButton: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <AttentionBox
        onClose={() => {}}
        compact
        text="Compact message with action and link. Link is forced inline when action exists."
        link={{ href: "/settings", text: "Settings" }}
        action={{ text: "Action", onClick: () => alert("Action clicked") }}
      />
    </div>
  )
};

export const Dismissible: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);
    return visible ? (
      <AttentionBox onClose={() => setVisible(false)} title="Notice" text="This message can be dismissed." />
    ) : (
      <Button onClick={() => setVisible(true)}>Show AttentionBox</Button>
    );
  }
};

export const NoAnimation: Story = {
  render: () => <AttentionBox animate={false} title="Static Box" text="This box did not animate on entry." />
};

export const WithCustomIcon: Story = {
  render: () => (
    <AttentionBox title="Custom Icon" text="This box uses a custom icon instead of the default." icon={Robot} />
  )
};

export const HiddenIcon: Story = {
  render: () => <AttentionBox title="No Icon" text="This box has no icon displayed." hideIcon />
};

export const MultilineDefault: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <AttentionBox
        compact
        multiline
        text="This is a longer message that demonstrates multiline content in the AttentionBox component. It contains multiple sentences to show how the text wraps and displays across several lines."
      />
    </div>
  )
};

export const MultilineWithBlockLink: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <AttentionBox
        compact
        multiline
        text="This is a longer message that demonstrates multiline content with a block link. The link will appear below the text content."
        link={{ href: "/settings", text: "Go to Settings", inlineText: false }}
      />
    </div>
  )
};

export const MultilineWithInlineLink: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <AttentionBox
        compact
        multiline
        text="This is a longer message that demonstrates multiline content with an inline link. The link will appear within the text content."
        link={{ href: "/settings", text: "settings page", inlineText: true }}
      />
    </div>
  )
};

export const MultilineWithAction: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <AttentionBox
        compact
        multiline
        text="This is a longer message that demonstrates multiline content with an action button. The action button will appear at the bottom right."
        action={{ text: "Take Action", onClick: () => alert("Action clicked") }}
      />
    </div>
  )
};

export const MultilineWithLinkAndAction: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <AttentionBox
        compact
        multiline
        text="This is a longer message that demonstrates multiline content with both a link and an action button. The link appears inline when an action is present."
        link={{ href: "/settings", text: "settings page" }}
        action={{ text: "Take Action", onClick: () => alert("Action clicked") }}
      />
    </div>
  )
};

export const MultilineWithLinkActionAndClose: Story = {
  render: () => (
    <div style={{ width: 550 }}>
      <AttentionBox
        onClose={() => alert("Close clicked")}
        compact
        multiline
        text="This is a longer message that demonstrates multiline content with a link, action button, and close button. All elements are present to show the complete layout."
        link={{ href: "/settings", text: "settings page" }}
        action={{ text: "Take Action", onClick: () => alert("Action clicked") }}
      />
    </div>
  )
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <AttentionBox type="primary" title="Primary" text="Primary attention message." />
      <AttentionBox type="success" title="Success" text="Success attention message." />
      <AttentionBox type="danger" title="Danger" text="Danger attention message." />
      <AttentionBox type="warning" title="Warning" text="Warning attention message." />
      <AttentionBox type="dark" title="Dark" text="Dark attention message." />
    </div>
  )
};
