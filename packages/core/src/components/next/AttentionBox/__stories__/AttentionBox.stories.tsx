import React, { useState, useCallback, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Info, Invite } from "@vibe/icons";
import { Button } from "../../../Button";
import { AttentionBox } from "..";
import type { AttentionBoxProps } from "../AttentionBox.types";
import { Flex } from "../../../Flex";
import { Heading } from "../../../Heading";
import { Text } from "../../../Text";
import { DialogContentContainer } from "../../../DialogContentContainer";
import { Search } from "../../../Search";
import { Avatar } from "../../../Avatar";
import { Icon } from "../../../Icon";
import { Box } from "../../../Box";
import { Skeleton } from "../../../Skeleton";
import person from "./assets/person.png";
import contentImage from "./assets/content-image.png";

type Story = StoryObj<typeof AttentionBox>;

export default {
  title: "Components/AttentionBox [New]",
  component: AttentionBox
} satisfies Meta<typeof AttentionBox>;

export const Overview: Story = {
  render: (args: AttentionBoxProps) => <AttentionBox {...args} />,
  args: {
    title: "Attention box title",
    text: "Will cause your team to lose access to the account until using the correct SSO source."
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Types: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "240px 1fr",
        columnGap: "var(--space-16)",
        rowGap: "var(--space-24)",
        alignItems: "start"
      }}
    >
      <Flex align="start" direction="column" gap="xs">
        <Text type="text1" weight="bold">
          Primary
        </Text>
        <Text ellipsis={false}>Default variant</Text>
      </Flex>
      <AttentionBox
        title="Heads up!"
        text="Here's something you might want to know. This message gives you helpful context without requiring immediate action."
      />
      <Flex align="start" direction="column" gap="xs">
        <Text type="text1" weight="bold">
          Positive
        </Text>
        <Text ellipsis={false}>Illustrates successful state</Text>
      </Flex>
      <AttentionBox
        type="positive"
        title="You're doing great"
        text="Your changes were saved successfully. You can continue working without needing to revisit this section."
      />
      <Flex align="start" direction="column" gap="xs">
        <Text type="text1" weight="bold">
          Negative
        </Text>
        <Text ellipsis={false}>Illustrates error or destructive information</Text>
      </Flex>
      <AttentionBox
        type="negative"
        title="Account low on free space"
        text="Your account is out of free space, free some space to prevent data loss."
      />
      <Flex align="start" direction="column" gap="xs">
        <Text type="text1" weight="bold">
          Warning
        </Text>
        <Text ellipsis={false}>Indicates cautionary messages</Text>
      </Flex>
      <AttentionBox
        type="warning"
        title="Caution!"
        text="Make sure to review before continuing. Some actions may be irreversible or affect other areas."
      />
      <Flex align="start" direction="column" gap="xs">
        <Text type="text1" weight="bold">
          Neutral
        </Text>
        <Text ellipsis={false}>Displays a neutral-themed attention box for general contexts</Text>
      </Flex>
      <AttentionBox
        type="neutral"
        title="Note for emphasis"
        text="Use this style when you want to have a more subtle visual emphasis."
      />
    </div>
  )
};

export const CompactSingleLine: Story = {
  render: () => (
    <div style={{ width: 330 }}>
      <AttentionBox compact text="Compact attention message." onClose={() => {}} />
    </div>
  )
};

export const CompactMode: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "160px 1fr",
        columnGap: "var(--space-16)",
        rowGap: "var(--space-24)",
        alignItems: "start"
      }}
    >
      <Text type="text1" weight="bold">
        No CTA
      </Text>
      <AttentionBox compact text="This is a compact message with ellipsis for overflow text content." />
      <Text type="text1" weight="bold">
        With Link CTA
      </Text>
      <AttentionBox
        compact
        text="This is a compact message with ellipsis for overflow text content."
        link={{ href: "#", text: "Read more" }}
      />
      <Text type="text1" weight="bold">
        With Button CTA
      </Text>
      <AttentionBox
        compact
        text="This is a compact message with ellipsis for overflow text content."
        action={{ text: "Button", onClick: () => {} }}
      />
    </div>
  )
};

export const ActionAndLink: Story = {
  render: () => (
    <AttentionBox
      compact
      text="This is a compact message with both link and button actions displayed side by side."
      action={{ text: "Button", onClick: () => {} }}
      link={{ href: "#", text: "Read more" }}
      onClose={() => {}}
    />
  )
};
// export const WithActionAndLink: Story = {
//   render: () => (
//     <div style={{ width: 315 }}>
//       <AttentionBox
//         onClose={() => {}}
//         type="primary"
//         title="Action Required"
//         text="You need to update your profile information."
//         link={{ href: "/profile", text: "Profile Settings" }}
//         action={{ text: "Update", onClick: () => alert("Update clicked") }}
//       />
//     </div>
//   )
// };

export const Dismissible: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);
    return visible ? (
      <AttentionBox
        compact
        text="You need to update your profile information."
        link={{ href: "#", text: "Profile Settings" }}
        onClose={() => setVisible(false)}
      />
    ) : (
      <Button onClick={() => setVisible(true)}>Show AttentionBox</Button>
    );
  }
};

export const NoAnimation: Story = {
  render: () => (
    <AttentionBox
      animate={false}
      title="Static Box"
      text="This box did not animate on entry. It appeared immediately without any transition or motion effect, allowing the content to display instantly. This can be useful in cases where animation might be distracting or unnecessary."
      onClose={() => {}}
    />
  )
};

export const NaturalAttentionBox: Story = {
  render: () => (
    <Flex direction="column" align="start" gap="small" style={{ width: "100%" }}>
      <Heading type="h3" weight="bold">
        Cross-Account Copier
      </Heading>
      <Text>Copy boards and dashboards to another account</Text>
      <AttentionBox
        compact
        text="First, move the content you want to copy into folder. Only main boards and dashboards can be copied."
        type="neutral"
        icon={Info}
      />
    </Flex>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { Info }
      }
    }
  }
};

export const AttentionBoxInsideADialogCombobox: Story = {
  render: () => {
    return (
      <DialogContentContainer style={{ padding: 0 }}>
        <Box style={{ width: 380 }} padding="medium">
          <Flex direction="column" gap="medium" align="stretch">
            <Search placeholder="Search by name, role, team, or email" />
            <Text>Suggested people</Text>
            <Flex direction="column" gap="medium" align="start">
              <Flex gap="small">
                <Avatar size="medium" src={person} type="img" />
                <Flex gap="xs">
                  <Text element="span">Julia Martinez </Text>
                  <Text color="secondary" element="span">
                    (UX/UI Product Designer)
                  </Text>
                </Flex>
              </Flex>
              <Flex gap="small">
                <Icon iconSize="32" icon={Invite} />
                <Text>Invite new board member by email</Text>
              </Flex>
              <AttentionBox text="Hold ⌘ to select more than one person or team" compact onClose={() => {}} />
            </Flex>
          </Flex>
        </Box>
      </DialogContentContainer>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { person, Invite }
      }
    }
  }
};

export const TextOnly: Story = {
  render: () => (
    <AttentionBox text="This is an attention box with only text content, no title. This demonstrates how the component looks when used for simple notifications or messages that don't require a heading." />
  )
};

export const TextOnlyWithClose: Story = {
  render: () => (
    <AttentionBox
      text="This is an attention box with only text content, no title. This demonstrates how the component looks when used for simple notifications or messages that don't require a heading."
      onClose={() => {}}
    />
  )
};

export const WithLink: Story = {
  render: () => (
    <AttentionBox
      title="Review Required"
      text="Your changes need approval before they can be published to the live environment."
      link={{ href: "#", text: "View Changes" }}
    />
  )
};

export const WithAction: Story = {
  render: () => (
    <AttentionBox
      title="Update Available"
      text="A new version of the application is available with bug fixes and improvements."
      action={{ text: "Update Now", onClick: () => alert("Update clicked") }}
    />
  )
};

export const WithLinkAndAction: Story = {
  render: () => (
    <AttentionBox
      title="Action Required"
      text="Your subscription expires soon. Review your account details or renew to continue accessing premium features."
      link={{ href: "#", text: "Account Settings" }}
      action={{ text: "Renew Now", onClick: () => alert("Renew clicked") }}
    />
  )
};

export const WithLinkAndActionAndClose: Story = {
  render: () => (
    <AttentionBox
      title="Action Required"
      text="Your subscription expires soon. Review your account details or renew to continue accessing premium features."
      link={{ href: "#", text: "Account Settings" }}
      action={{ text: "Renew Now", onClick: () => alert("Renew clicked") }}
      onClose={() => {}}
    />
  )
};

export const NoIcon: Story = {
  render: () => (
    <AttentionBox
      hideIcon
      title="Clean Design"
      text="This attention box appears without an icon for a minimalist look. This can be useful when you want to reduce visual clutter while still providing important information."
    />
  )
};

export const NoIconWithClose: Story = {
  render: () => (
    <AttentionBox
      hideIcon
      title="Clean Design"
      text="This attention box appears without an icon for a minimalist look. This can be useful when you want to reduce visual clutter while still providing important information."
      onClose={() => {}}
    />
  )
};

export const CompactNoIcon: Story = {
  render: () => (
    <AttentionBox compact hideIcon text="Compact attention box without icon for maximum space efficiency." />
  )
};

export const Animation: Story = {
  render: () => {
    type Stage = "button" | "skeleton" | "content" | "attention";
    const [stage, setStage] = useState<Stage>("button");

    const onClick = useCallback(() => {
      setStage("skeleton");

      setTimeout(() => {
        setStage("content");
      }, 2000);
    }, []);

    useEffect(() => {
      if (stage === "content") {
        setTimeout(() => {
          setStage("attention");
        }, 200);
      }
    }, [stage]);

    const reset = useCallback(() => {
      setStage("button");
    }, []);

    return (
      <Flex align="start" direction="column" gap="medium" style={{ width: "100%", minHeight: 260 }}>
        {/* Button Stage */}
        {stage === "button" && (
          <Button onClick={onClick} kind="secondary">
            Entry animation
          </Button>
        )}

        {/* Skeleton Stage */}
        {stage === "skeleton" && (
          <Flex align="start" direction="column" gap="medium" style={{ width: "100%" }}>
            <Skeleton type="text" size="h2" fullWidth />
            <Flex align="start" gap="medium" style={{ width: "100%" }}>
              <Skeleton width={150} height={150} />
              <Flex direction="column" align="stretch" gap="small" style={{ width: "100%" }}>
                <Skeleton type="text" size="h1" fullWidth />
                <Skeleton type="text" size="small" fullWidth />
                <Skeleton type="text" size="small" fullWidth />
                <Skeleton type="text" size="small" fullWidth />
                <Skeleton type="text" size="small" width={200} />
              </Flex>
            </Flex>
          </Flex>
        )}

        {/* Content Stage */}
        {(stage === "content" || stage === "attention") && (
          <Flex align="start" direction="column" gap="medium" style={{ width: "100%" }}>
            {stage === "attention" && (
              <AttentionBox
                compact
                icon={Info}
                text="Here's something you might want to know. This message gives you helpful context without requiring immediate action."
                onClose={reset}
              />
            )}

            {/* Main Content */}
            <Flex align="start" direction="column" gap="medium" style={{ width: "100%" }}>
              <Heading type="h3">Entry animation</Heading>
              <Flex align="stretch" gap="medium" style={{ width: "100%" }}>
                <Box style={{ width: 150, height: 150, flexShrink: 0 }} rounded="small">
                  <img
                    src={contentImage}
                    alt="Image placeholder"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </Box>
                <Text ellipsis={false}>
                  {"Here's"} a sneak peek at how it works. The entry animation is an integral part of the experience we
                  provide. {"It's"} up to you to ensure that the surrounding layout shifts downward smoothly when the
                  Attention Box enters the view.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { Info, contentImage }
      }
    }
  }
};
