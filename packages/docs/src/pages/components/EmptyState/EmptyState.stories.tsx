import React from "react";
import { type Meta } from "@storybook/react";
import { EmptyState, Flex, Button, Link } from "@vibe/core";
import { type EmptyStateProps } from "../EmptyState.types";
import emptyStateImage from "./assets/image.png";
import { Download, Update } from "@vibe/icons";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";

const metaSettings = createStoryMetaSettingsDecorator({
  component: EmptyState
});

export default {
  title: "Components/EmptyState",
  component: EmptyState,
  argTypes: {
    title: {
      control: "text",
      description: "Optional title for the empty state"
    },
    description: {
      control: "text",
      description: "Required description text explaining the empty state"
    },
    visual: {
      control: "object",
      description: "Optional visual element like image, animation, video, or illustration"
    },
    layout: {
      control: "select",
      options: ["default", "compact"],
      description: "Layout style of the empty state"
    },
    mainAction: {
      control: "object",
      description: "Main action button configuration"
    },
    supportingAction: {
      control: "object",
      description: "Supporting action (link or tertiary button) configuration"
    }
  },
  decorators: metaSettings.decorators
} satisfies Meta<typeof EmptyState>;

export const Overview = {
  render: (args: EmptyStateProps) => (
    <EmptyState
      title="The title should be concise and reflect the purpose"
      description="This optional paragraph should be use to extend the title. Keep it short and to the point. For longer texts add a link below."
      visual={<img src={emptyStateImage} alt="No items found" width={280} height={184} />}
      mainAction={{
        text: "Main Action",
        onClick: () => {
          console.log("Main action clicked");
        }
      }}
      supportingAction={{
        text: "Read more",
        href: "#",
        onClick: () => {
          console.log("Supporting action clicked");
        }
      }}
      {...args}
    />
  ),
  name: "Overview",
  args: {},
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Default = {
  render: (args: EmptyStateProps) => (
    <EmptyState
      title="Visualize data from multiple boards"
      description="Use charts, timelines, and other widgets to see your data clearly."
      visual={<img src={emptyStateImage} alt="No items found" width={280} height={184} />}
      mainAction={{
        text: "Add your first widget",
        onClick: () => {
          console.log("Main action clicked");
        }
      }}
      supportingAction={{
        text: "Read more",
        href: "#",
        onClick: () => {
          console.log("Supporting action clicked");
        }
      }}
      {...args}
    />
  ),
  name: "Default",
  args: {},
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const WithoutTitle = {
  render: (args: EmptyStateProps) => (
    <EmptyState
      description="No data available yet. Add some items to get started."
      visual={<img src={emptyStateImage} alt="No data available" width={280} height={184} />}
      mainAction={{
        text: "Add item",
        onClick: () => {
          console.log("Main action clicked");
        }
      }}
      supportingAction={{
        text: "Read more",
        href: "#",
        onClick: () => {
          console.log("Supporting action clicked");
        }
      }}
      {...args}
    />
  ),
  name: "Without title"
};

export const Compact = {
  render: (args: EmptyStateProps) => (
    <EmptyState
      title="Visualize data from multiple boards"
      description="Use charts, timelines, and other widgets to see your data clearly."
      visual={<img src={emptyStateImage} alt="No notifications" width={280} height={184} />}
      layout="compact"
      mainAction={{
        text: "Add your first widget",
        onClick: () => {
          console.log("Main action clicked");
        }
      }}
      supportingAction={{
        text: "Read more",
        href: "#",
        onClick: () => {
          console.log("Supporting action clicked");
        }
      }}
      {...args}
    />
  ),
  name: "Compact"
};

export const WithButtonSupportingAction = {
  render: (args: EmptyStateProps) => (
    <EmptyState
      title="No files uploaded"
      description="Upload files to share with your team members."
      visual={<img src={emptyStateImage} alt="No files uploaded" width={280} height={184} />}
      mainAction={{
        kind: "primary",
        text: "Upload files",
        leftIcon: Update,
        onClick: () => {
          console.log("Main action clicked");
        }
      }}
      supportingAction={{
        text: "Import from drive",
        leftIcon: Download,
        onClick: () => {
          console.log("Supporting action clicked");
        }
      }}
      {...args}
    />
  ),
  name: "With button supporting action"
};

export const WithDisabledActions = {
  render: (args: EmptyStateProps) => (
    <EmptyState
      title="Processing data"
      description="Your data is being processed. This might take a few minutes."
      visual={<img src={emptyStateImage} alt="Processing data" width={280} height={184} />}
      mainAction={{
        kind: "secondary",
        text: "Refresh",
        disabled: true,
        loading: true,
        onClick: () => {
          console.log("Main action clicked");
        }
      }}
      supportingAction={{
        text: "Cancel",
        disabled: true,
        onClick: () => {
          console.log("Supporting action clicked");
        }
      }}
      {...args}
    />
  ),
  name: "With disabled actions"
};

export const ActionsComparison = {
  render: (args: EmptyStateProps) => (
    <Flex direction="row" gap="large">
      <EmptyState
        title="Your favorites are empty"
        description="Add boards, docs, or dashboards to your favorites for quick access."
        visual={<img src={emptyStateImage} alt="No items found" width={280} height={184} />}
        mainAction={{
          kind: "secondary",
          text: "Add favorites",
          onClick: () => {
            console.log("First view - Add item clicked");
          }
        }}
      />
      <EmptyState
        title="Your favorites are empty"
        description="Add boards, docs, or dashboards to your favorites for quick access."
        visual={<img src={emptyStateImage} alt="No items found" width={280} height={184} />}
        mainAction={{
          kind: "primary",
          text: "Add favorites",
          onClick: () => {
            console.log("Second view - View details clicked");
          }
        }}
        {...args}
      />
    </Flex>
  ),
  name: "Actions comparison"
};

export const WithLinkOnly = {
  render: (args: EmptyStateProps) => (
    <EmptyState
      title="This workspace is empty"
      description='To get started, click the "+" above, then click "add new board".'
      supportingAction={{
        href: "https://example.com/help",
        text: "Read more"
      }}
      {...args}
    />
  ),
  name: "With link only"
};

export const WithTwoButtons = {
  render: (args: EmptyStateProps) => (
    <EmptyState
      title="This workspace is empty"
      description="Get started by choosing a board template or creating a board from scratch."
      mainAction={{
        kind: "secondary",
        text: "Browse templates",
        onClick: () => {
          console.log("Main action clicked");
        }
      }}
      supportingAction={{
        kind: "tertiary",
        text: "Start from scratch",
        onClick: () => {
          console.log("Supporting action clicked");
        }
      }}
      {...args}
    />
  ),
  name: "With two buttons"
};

export const WithAndWithoutTitleComparison = {
  render: (args: EmptyStateProps) => (
    <Flex direction="row" gap="large" justify="space-between" style={{ width: "100%" }}>
      <EmptyState
        title="Create your first Gantt chart"
        description="Gantt charts keep your projects organized."
        mainAction={{
          kind: "secondary",
          text: "Connect boards to start",
          onClick: () => {
            console.log("Main action clicked");
          }
        }}
      />
      <EmptyState
        description="Create your first Gantt chart"
        mainAction={{
          kind: "secondary",
          text: "Connect boards to start",
          onClick: () => {
            console.log("Main action clicked");
          }
        }}
        {...args}
      />
    </Flex>
  ),
  name: "With and without title comparison"
};

export const WithActionElementProps = {
  render: (args: EmptyStateProps) => (
    <EmptyState
      title="No notifications"
      description="You're all caught up! Check back later for new notifications."
      visual={<img src={emptyStateImage} alt="No notifications" width={280} height={184} />}
      mainAction={
        <Button
          kind="secondary"
          onClick={() => {
            console.log("Main action clicked");
          }}
        >
          Check notifications
        </Button>
      }
      supportingAction={
        <Link
          href="#"
          text="Manage notification settings"
          onClick={() => {
            console.log("Supporting action clicked");
          }}
        />
      }
      {...args}
    />
  ),
  name: "With action element props"
};
