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
  render: (args: AttentionBoxProps) => (
    <div style={{ maxWidth: 600 }}>
      <AttentionBox {...args} />
    </div>
  ),
  args: {
    title: "Attention box title",
    text: "This action will cause your team to lose access to the account until you use the correct SSO source.",
    action: {
      text: "Button",
      onClick: () => alert("Button clicked")
    },
    link: {
      href: "#",
      text: "Read more"
    },
    onClose: () => alert("Close clicked")
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
        gridTemplateColumns: "240px 600px",
        columnGap: "var(--space-16)",
        rowGap: "var(--space-24)",
        alignItems: "center"
      }}
    >
      <Text type="text1" weight="bold">
        Primary
      </Text>
      <AttentionBox
        title="Heads up"
        text="This message gives you helpful context without requiring immediate action."
        onClose={() => {}}
      />
      <Text type="text1" weight="bold">
        Neutral
      </Text>
      <AttentionBox
        type="neutral"
        title="General note"
        text="Use this style for more subtle visual emphasis, or for or neutral custom contexts."
        onClose={() => {}}
      />
      <Text type="text1" weight="bold">
        Positive
      </Text>
      <AttentionBox
        type="positive"
        title="You're doing great"
        text="Indicates success , the user can keep working without interruptions."
        onClose={() => {}}
      />
      <Text type="text1" weight="bold">
        Warning
      </Text>
      <AttentionBox
        type="warning"
        title="Caution"
        text="Shows important warnings the user should review before moving forward."
        onClose={() => {}}
      />
      <Text type="text1" weight="bold">
        Negative
      </Text>
      <AttentionBox
        type="negative"
        title="Account low on free space"
        text="Highlights errors or limitations the user should be aware of."
        onClose={() => {}}
      />
    </div>
  )
};

export const Default: Story = {
  render: () => (
    <Flex gap="large" align="start">
      <AttentionBox
        title="Heads up"
        text="This message gives you helpful context without requiring immediate action."
        action={{ text: "Button", onClick: () => {} }}
        link={{ href: "#", text: "Read more" }}
        onClose={() => {}}
      />
      <AttentionBox
        text="This message gives you helpful context without requiring immediate action."
        action={{ text: "Button", onClick: () => {} }}
        link={{ href: "#", text: "Read more" }}
        onClose={() => {}}
      />
    </Flex>
  )
};

export const Compact: Story = {
  render: () => (
    <div style={{ maxWidth: 600 }}>
      <AttentionBox
        compact
        text="Here's something you might want to know. This message gives you helpful context without requiring immediate action."
        action={{ text: "Button", onClick: () => {} }}
        link={{ href: "#", text: "Read more" }}
        onClose={() => {}}
      />
    </div>
  )
};

export const LinkAndButton: Story = {
  render: () => (
    <div style={{ maxWidth: 600 }}>
      <AttentionBox
        title="Heads up"
        text="Here's something you might want to know. This message gives you helpful context without requiring immediate action."
        action={{ text: "Button", onClick: () => {} }}
        link={{ href: "#", text: "Read more" }}
        onClose={() => {}}
      />
    </div>
  )
};

export const Dismissible: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);
    return visible ? (
      <div style={{ maxWidth: 600 }}>
        <AttentionBox
          compact
          text="This message gives you helpful context without requiring immediate action."
          onClose={() => setVisible(false)}
        />
      </div>
    ) : (
      <Button onClick={() => setVisible(true)}>Show AttentionBox</Button>
    );
  }
};

export const IconStory: Story = {
  render: () => (
    <Flex gap="large" align="start">
      <AttentionBox
        hideIcon
        text="This message gives you helpful context without requiring immediate action."
        action={{ text: "Button", onClick: () => {} }}
        link={{ href: "#", text: "Read more" }}
        onClose={() => {}}
      />
      <AttentionBox
        text="This message gives you helpful context without requiring immediate action."
        action={{ text: "Button", onClick: () => {} }}
        link={{ href: "#", text: "Read more" }}
        onClose={() => {}}
      />
    </Flex>
  ),
  name: "Icon"
};

export const AttentionBoxWithLayouts: Story = {
  render: () => (
    <Flex direction="column" align="start" gap="small" style={{ width: "100%" }}>
      <Heading type="h3" weight="bold">
        Cross-Account Copier
      </Heading>
      <Text>Copy boards and dashboards to another account</Text>
      <AttentionBox
        compact
        type="neutral"
        text="First, move the content you want to copy into folder. Only main boards and dashboards can be copied."
        link={{ href: "#", text: "Read more" }}
        onClose={() => {}}
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

export const EntryAnimation: Story = {
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
        }, 750);
      }
    }, [stage]);

    const reset = useCallback(() => {
      setStage("button");
    }, []);

    return (
      <Flex align="start" direction="column" gap="medium" style={{ width: "100%", maxWidth: 720, minHeight: 260 }}>
        {/* Button Stage */}
        {stage === "button" && (
          <Button onClick={onClick} kind="secondary">
            Entry animation
          </Button>
        )}

        {/* Skeleton Stage */}
        {stage === "skeleton" && (
          <Flex align="start" direction="column" gap="medium" style={{ width: "100%" }}>
            <Skeleton type="text" size="h2" width={300} />
            <Flex align="start" gap="medium" style={{ width: "100%" }}>
              <Skeleton width={150} height={150} />
              <Flex direction="column" align="stretch" gap="small" style={{ width: "100%" }}>
                <Skeleton type="text" size="h5" fullWidth />
                <Skeleton type="text" size="h5" fullWidth />
                <Skeleton type="text" size="h5" fullWidth />
                <Skeleton type="text" size="h5" width={200} />
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
                text="This action will cause your team to lose access to the account until you will use the correct SSO."
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
