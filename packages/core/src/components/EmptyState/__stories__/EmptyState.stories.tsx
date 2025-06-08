import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import EmptyState from "../EmptyState";

type Story = StoryObj<typeof EmptyState>;

export default {
  title: "Components/EmptyState",
  component: EmptyState,
  args: {
    description: "No data available."
  }
} satisfies Meta<typeof EmptyState>;

export const Overview: Story = {
  render: args => <EmptyState {...args} />
};

export const WithVisual: Story = {
  render: () => (
    <EmptyState
      visual={
        <div
          style={{
            width: "64px",
            height: "64px",
            backgroundColor: "#f0f0f0",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px"
          }}
        >
          📭
        </div>
      }
      description="No items found."
    />
  )
};

export const WithTitle: Story = {
  render: () => <EmptyState title="No Messages" description="You have not received any messages yet." />
};

export const WithPrimaryAction: Story = {
  render: () => (
    <EmptyState
      description="Your list is empty."
      primaryAction={{
        text: "Add Item",
        onClick: () => alert("Add Item clicked")
      }}
    />
  )
};

export const WithSecondaryAction: Story = {
  render: () => (
    <EmptyState
      description="Your list is empty."
      secondaryAction={{
        text: "Learn More",
        href: "#"
      }}
    />
  )
};

export const WithBothActions: Story = {
  render: () => (
    <EmptyState
      description="Your list is empty."
      primaryAction={{
        text: "Create Item",
        onClick: () => alert("Create Item clicked")
      }}
      secondaryAction={{
        text: "Cancel",
        onClick: () => alert("Cancel clicked")
      }}
    />
  )
};

export const Compact: Story = {
  render: () => (
    <EmptyState
      compact
      title="No Content"
      description="This is a compact layout."
      primaryAction={{
        text: "Refresh",
        onClick: () => alert("Refresh clicked")
      }}
    />
  )
};

export const LoadingState: Story = {
  render: () => (
    <EmptyState
      description="Processing your data..."
      primaryAction={{
        text: "Load Data",
        loading: true,
        onClick: () => {}
      }}
    />
  )
};

export const DisabledState: Story = {
  render: () => (
    <EmptyState
      description="Cannot proceed."
      primaryAction={{
        text: "Submit",
        onClick: () => {},
        disabled: true
      }}
      secondaryAction={{
        text: "Help",
        href: "#",
        disabled: true
      }}
    />
  )
};

export const WithRichDescription: Story = {
  render: () => (
    <EmptyState
      title="Rich Content"
      description={
        <>
          Try adding <strong>new data</strong> to see <em>live updates</em>.
        </>
      }
      secondaryAction={{
        text: "Learn More",
        href: "#"
      }}
    />
  )
};
