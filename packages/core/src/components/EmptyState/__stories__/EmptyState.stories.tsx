import React from "react";
import { Meta } from "@storybook/react";
import EmptyState from "../EmptyState";
import emptyStateImage from "./assets/image.png";
import { Download, Update, WhatsNew } from "@vibe/icons";
import Flex from "../../../components/Flex/Flex";
import { createStoryMetaSettingsDecorator } from "../../../storybook/functions/createStoryMetaSettingsDecorator";
import { Button } from "../../Button";
import Link from "../../Link/Link";

const metaSettings = createStoryMetaSettingsDecorator({
  component: EmptyState
});

export default {
  title: "Components/EmptyState",
  component: EmptyState,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof EmptyState>;

export const Overview = {
  render: () => (
    <EmptyState
      title="The title should be concise and reflect the purpose"
      description="This optional paragraph should be use to extend the title. Keep it short and to the point. For longer texts add a link below."
      visual={<img src={emptyStateImage} alt="No items found" width={280} height={184} />}
      mainAction={
        <Button
          kind="secondary"
          onClick={() => {
            console.log("Main action clicked");
          }}
        >
          Main Action
        </Button>
      }
      supportingAction={<Link href="#" text="Read more" />}
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
  render: () => (
    <EmptyState
      title="Visualize data from multiple boards"
      description="Use charts, timelines, and other widgets to see your data clearly."
      visual={<img src={emptyStateImage} alt="No items found" width={280} height={184} />}
      mainAction={
        <Button
          kind="secondary"
          onClick={() => {
            console.log("Main action clicked");
          }}
        >
          Add your first widget
        </Button>
      }
      supportingAction={<Link href="#" text="Read more" />}
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

export const WithoutTitle = {
  render: () => (
    <EmptyState
      description="No data available yet. Add some items to get started."
      visual={<img src={emptyStateImage} alt="No data available" width={280} height={184} />}
      mainAction={
        <Button
          kind="primary"
          leftIcon={WhatsNew}
          onClick={() => {
            console.log("Main action clicked");
          }}
        >
          Add item
        </Button>
      }
    />
  ),
  name: "Without title"
};

export const Compact = {
  render: () => (
    <EmptyState
      title="Visualize data from multiple boards"
      description="Use charts, timelines, and other widgets to see your data clearly."
      visual={<img src={emptyStateImage} alt="No notifications" width={280} height={184} />}
      layout="compact"
      mainAction={
        <Button
          kind="secondary"
          onClick={() => {
            console.log("Main action clicked");
          }}
        >
          Add your first widget
        </Button>
      }
      supportingAction={<Link href="#" text="Read more" />}
    />
  ),
  name: "Compact"
};

export const WithButtonSupportingAction = {
  render: () => (
    <EmptyState
      title="No files uploaded"
      description="Upload files to share with your team members."
      visual={<img src={emptyStateImage} alt="No files uploaded" width={280} height={184} />}
      mainAction={
        <Button
          kind="primary"
          leftIcon={Update}
          onClick={() => {
            console.log("Main action clicked");
          }}
        >
          Upload files
        </Button>
      }
      supportingAction={
        <Button
          type="button"
          leftIcon={Download}
          onClick={() => {
            console.log("Supporting action clicked");
          }}
        >
          Import from drive
        </Button>
      }
    />
  ),
  name: "With button supporting action"
};

export const WithDisabledActions = {
  render: () => (
    <EmptyState
      title="Processing data"
      description="Your data is being processed. This might take a few minutes."
      visual={<img src={emptyStateImage} alt="Processing data" width={280} height={184} />}
      mainAction={
        <Button
          kind="secondary"
          disabled={true}
          loading={true}
          onClick={() => {
            console.log("Main action clicked");
          }}
        >
          Refresh
        </Button>
      }
      supportingAction={
        <Button
          type="button"
          disabled={true}
          onClick={() => {
            console.log("Supporting action clicked");
          }}
        >
          Cancel
        </Button>
      }
    />
  ),
  name: "With disabled actions"
};

export const ActionsComparison = {
  render: () => (
    <Flex direction="row" gap="large">
      <EmptyState
        title="Your favorites are empty"
        description="TAdd boards, docs, or dashboards to your favorites for quick access."
        visual={<img src={emptyStateImage} alt="No items found" width={280} height={184} />}
        mainAction={
          <Button
            kind="secondary"
            onClick={() => {
              console.log("First view - Add item clicked");
            }}
          >
            Add favorites
          </Button>
        }
      />
      <EmptyState
        title="Your favorites are empty"
        description="Add boards, docs, or dashboards to your favorites for quick access."
        visual={<img src={emptyStateImage} alt="No items found" width={280} height={184} />}
        mainAction={
          <Button
            kind="primary"
            onClick={() => {
              console.log("Second view - View details clicked");
            }}
          >
            Add favorites
          </Button>
        }
      />
    </Flex>
  ),
  name: "Actions comparison"
};

export const WithLinkOnly = {
  render: () => (
    <EmptyState
      title="This workspace is empty"
      description='To get started, click the "+" above, then click "add new board".'
      supportingAction={<Link href="https://example.com/help" text="Read more" />}
    />
  ),
  name: "With link only"
};

export const WithTwoButtons = {
  render: () => (
    <EmptyState
      title="This workspace is empty"
      description="Get started by choosing a board template or creating a board from scratch."
      mainAction={
        <Button
          kind="secondary"
          onClick={() => {
            console.log("Main action clicked");
          }}
        >
          Browse templates
        </Button>
      }
      supportingAction={
        <Button
          kind="tertiary"
          onClick={() => {
            console.log("Supporting action clicked");
          }}
        >
          Start from scratch
        </Button>
      }
    />
  ),
  name: "With two buttons"
};

export const WithAndWithoutTitleComparison = {
  render: () => (
    <Flex direction="row" gap="large" justify="space-between" style={{ width: "100%" }}>
      <EmptyState
        title="Create your first Gantt chart"
        description="Gantt charts keep your projects organized."
        mainAction={
          <Button
            kind="secondary"
            onClick={() => {
              console.log("Main action clicked");
            }}
          >
            Connect boards to start
          </Button>
        }
      />
      <EmptyState
        description="Create your first Gantt chart"
        mainAction={
          <Button
            kind="secondary"
            onClick={() => {
              console.log("Main action clicked");
            }}
          >
            Connect boards to start
          </Button>
        }
      />
    </Flex>
  ),
  name: "With and without title comparison"
};
