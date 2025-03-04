import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import EmptyState from "../EmptyState";
import { EmptyStateLayout } from "../EmptyState.types";
import emptyStateImage from "./assets/image.png";
import { Download, Email, Update, WhatsNew } from "@vibe/icons";

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
  parameters: {
    docs: {
      page: null
    }
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    illustration: { control: "text" },
    layout: {
      control: { type: "select" },
      options: Object.values(EmptyStateLayout)
    }
  }
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: "The title should be short and reflect the purpose",
    description:
      "This optional paragraph should be use to extend the title. Keep it short and to the point. For longer texts add a link below.",
    illustration: <img src={emptyStateImage} alt="No items found" width={280} height={280} />,
    mainAction: {
      text: "Main action",
      kind: "secondary",
      onClick: () => {
        alert("Main action clicked");
      }
    },
    supportingAction: {
      text: "Read more",
      href: "#",
      onClick: () => {
        alert("Supporting action clicked");
      }
    }
  }
};

export const WithoutTitle: Story = {
  args: {
    description: "No data available yet. Add some items to get started.",
    illustration: <img src={emptyStateImage} alt="No data available" width={280} height={280} />,
    mainAction: {
      text: "Add item",
      kind: "primary",
      leftIcon: WhatsNew,
      onClick: () => {
        alert("Main action clicked");
      }
    }
  }
};

export const Compact: Story = {
  args: {
    title: "No notifications",
    description: "You're all caught up! Check back later for updates.",
    illustration: <img src={emptyStateImage} alt="No notifications" width={280} height={280} />,
    layout: EmptyStateLayout.COMPACT,
    mainAction: {
      text: "Refresh",
      kind: "secondary",
      onClick: () => {
        alert("Main action clicked");
      }
    }
  }
};

export const WithButtonSupportingAction: Story = {
  args: {
    title: "No files uploaded",
    description: "Upload files to share with your team members.",
    illustration: <img src={emptyStateImage} alt="No files uploaded" width={280} height={280} />,
    mainAction: {
      text: "Upload files",
      kind: "primary",
      leftIcon: Update,
      onClick: () => {
        alert("Main action clicked");
      }
    },
    supportingAction: {
      type: "button",
      text: "Import from drive",
      leftIcon: Download,
      onClick: () => {
        alert("Supporting action clicked");
      }
    }
  }
};

export const WithCustomReactNodeImage: Story = {
  args: {
    title: "No messages",
    description: "Your inbox is empty. Messages from your team will appear here.",
    illustration: (
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          backgroundColor: "#ecedf5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Email size="large" />
      </div>
    ),
    mainAction: {
      text: "Compose message",
      kind: "primary",
      onClick: () => {
        alert("Main action clicked");
      }
    }
  }
};

export const WithDisabledActions: Story = {
  args: {
    title: "Processing data",
    description: "Your data is being processed. This might take a few minutes.",
    illustration: <img src={emptyStateImage} alt="Processing data" width={280} height={280} />,
    mainAction: {
      text: "Refresh",
      kind: "secondary",
      disabled: true,
      loading: true,
      onClick: () => {
        alert("Main action clicked");
      }
    },
    supportingAction: {
      text: "Cancel",
      type: "button",
      disabled: true,
      onClick: () => {
        alert("Supporting action clicked");
      }
    }
  }
};
