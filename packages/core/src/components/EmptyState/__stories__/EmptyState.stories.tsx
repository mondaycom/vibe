import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import EmptyState from "../EmptyState";
import emptyStateImage from "./assets/image.png";
import { Download, Email, Update, WhatsNew } from "@vibe/icons";
import styles from "./EmptyState.stories.module.scss";

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: "The title should be concise and reflect the purpose",
    description:
      "This optional paragraph should be use to extend the title. Keep it short and to the point. For longer texts add a link below.",
    visual: <img src={emptyStateImage} alt="No items found" width={280} height={184} />,
    mainAction: {
      text: "Main action",
      kind: "secondary",
      onClick: () => {
        console.log("Main action clicked");
      }
    },
    supportingAction: {
      text: "Read more",
      href: "#",
      onClick: () => {
        console.log("Supporting action clicked");
      }
    }
  }
};

export const WithoutTitle: Story = {
  args: {
    description: "No data available yet. Add some items to get started.",
    visual: <img src={emptyStateImage} alt="No data available" width={280} height={184} />,
    mainAction: {
      text: "Add item",
      kind: "primary",
      leftIcon: WhatsNew,
      onClick: () => {
        console.log("Main action clicked");
      }
    }
  }
};

export const Compact: Story = {
  args: {
    title: "Your favorites are empty",
    description: "Add your boards, docs, or dashboards for a quick access.",
    visual: <img src={emptyStateImage} alt="No notifications" width={280} height={184} />,
    layout: "compact",
    mainAction: {
      text: "Refresh",
      kind: "secondary",
      onClick: () => {
        console.log("Main action clicked");
      }
    }
  }
};

export const WithButtonSupportingAction: Story = {
  args: {
    title: "No files uploaded",
    description: "Upload files to share with your team members.",
    visual: <img src={emptyStateImage} alt="No files uploaded" width={280} height={184} />,
    mainAction: {
      text: "Upload files",
      kind: "primary",
      leftIcon: Update,
      onClick: () => {
        console.log("Main action clicked");
      }
    },
    supportingAction: {
      type: "button",
      text: "Import from drive",
      leftIcon: Download,
      onClick: () => {
        console.log("Supporting action clicked");
      }
    }
  }
};

export const WithCustomReactNodeImage: Story = {
  args: {
    title: "No messages",
    description: "Your inbox is empty. Messages from your team will appear here.",
    visual: (
      <div className={styles.customIllustration}>
        <Email size="large" />
      </div>
    ),
    mainAction: {
      text: "Compose message",
      kind: "primary",
      onClick: () => {
        console.log("Main action clicked");
      }
    }
  }
};

export const WithDisabledActions: Story = {
  args: {
    title: "Processing data",
    description: "Your data is being processed. This might take a few minutes.",
    visual: <img src={emptyStateImage} alt="Processing data" width={280} height={184} />,
    mainAction: {
      text: "Refresh",
      kind: "secondary",
      disabled: true,
      loading: true,
      onClick: () => {
        console.log("Main action clicked");
      }
    },
    supportingAction: {
      text: "Cancel",
      type: "button",
      disabled: true,
      onClick: () => {
        console.log("Supporting action clicked");
      }
    }
  }
};

export const ActionsComparison: Story = {
  render: () => (
    <div className={styles.comparisonContainer}>
      <div className={styles.comparisonItem}>
        <EmptyState
          title="The title should be concise and reflect the purpose"
          description="This optional paragraph should be use to extend the title. Keep it short and to the point. For longer texts add a link below."
          visual={<img src={emptyStateImage} alt="No items found" width={280} height={184} />}
          mainAction={{
            text: "Main action",
            onClick: () => {
              console.log("First view - Add item clicked");
            }
          }}
        />
      </div>
      <div className={styles.comparisonItem}>
        <EmptyState
          title="The title should be concise and reflect the purpose"
          description="This optional paragraph should be use to extend the title. Keep it short and to the point. For longer texts add a link below."
          visual={<img src={emptyStateImage} alt="No items found" width={280} height={184} />}
          mainAction={{
            text: "Main action",
            kind: "primary",
            onClick: () => {
              console.log("Second view - View details clicked");
            }
          }}
        />
      </div>
    </div>
  )
};

export const WithLinkOnly: Story = {
  args: {
    title: "The title should be concise and reflect the purpose",
    description:
      "This optional paragraph should be use to extend the title. Keep it short and to the point. For longer texts add a link below.",
    supportingAction: {
      text: "Read more",
      href: "https://example.com/help",
      onClick: () => {
        console.log("Help center link clicked");
      }
    }
  }
};

export const WithTwoButtons: Story = {
  args: {
    title: "The title should be concise and reflect the purpose",
    description:
      "This optional paragraph should be use to extend the title. Keep it short and to the point. For longer texts add a link below.",
    mainAction: {
      text: "Main action",
      onClick: () => {
        console.log("Main action clicked");
      }
    },
    supportingAction: {
      text: "Supporting action",
      type: "button",
      onClick: () => {
        console.log("Supporting action clicked");
      }
    }
  }
};

export const WithAndWithoutTitleComparison: Story = {
  render: () => (
    <div className={styles.comparisonContainer}>
      <div className={styles.comparisonItem}>
        <EmptyState
          title="Make your data visual"
          description="Select a Location or Country column to get started"
          mainAction={{
            text: "Add a column",
            onClick: () => {
              console.log("Main action clicked");
            }
          }}
        />
      </div>
      <div className={styles.comparisonItem}>
        <EmptyState
          description="Select a Location or Country column to get started"
          mainAction={{
            text: "Add a column",
            onClick: () => {
              console.log("Main action clicked");
            }
          }}
        />
      </div>
    </div>
  )
};
