import React from "react";
import Badge from "../Badge";
import person from "./assets/person.png";
import { ExternalPage, WhatsNew } from "@vibe/icons";
import Link from "../../Link/Link";
import { Button } from "@vibe/button";
import Flex from "../../Flex/Flex";
import Avatar from "../../Avatar/Avatar";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Badge,
  ignoreControlsPropNamesArray: ["children"],
  actionPropsArray: ["onMouseDown"]
});

const badgeTemplate = createComponentTemplate(Badge);

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: badgeTemplate.bind({}),
  name: "Overview",
  args: {
    id: "overview-badge",
    children: (
      <Button id="overview-badge-button" ariaLabel="What's new button with badge" leftIcon={WhatsNew}>
        {"What's new"}
      </Button>
    )
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const States = {
  render: () => (
    <Flex gap="large" justify="start" align="start">
      <Flex direction="column" gap="medium" align="start">
        Indicator
        <Badge id="indicator-badge">
          <Button id="indicator-button" ariaLabel="What's new button with indicator" leftIcon={WhatsNew}>
            {"What's new"}
          </Button>
        </Badge>
      </Flex>
      <Flex direction="column" gap="medium" align="start">
        Counter
        <Badge id="counter-badge" type="counter" count={100} maxDigits={2} ariaLabel="100 notifications">
          <Button id="counter-button" ariaLabel="What's new button with counter" leftIcon={WhatsNew}>
            {"What's new"}
          </Button>
        </Badge>
      </Flex>
    </Flex>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { WhatsNew }
      }
    }
  },
  name: "States"
};

export const ButtonStory = {
  render: () => (
    <Badge id="button-badge" alignment="rectangular">
      <Button id="button-story-button" ariaLabel="Button with external page icon and badge" leftIcon={ExternalPage}>
        Button
      </Button>
    </Badge>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { ExternalPage }
      }
    }
  },
  name: "Button"
};

export const AvatarStory = {
  render: () => (
    <Badge id="avatar-badge" alignment="circular">
      <Avatar id="badge-avatar" size="large" src={person} type="img" />
    </Badge>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { person }
      }
    }
  },
  name: "Avatar"
};

export const InlineElements = {
  render: () => (
    <Flex direction="column" gap="medium" align="start">
      <Badge id="inline-badge-1" alignment="outside">
        <Link id="inline-link-1" text="Read more" />
      </Badge>
      <Badge id="inline-badge-2" alignment="outside">
        <Link id="inline-link-2" text="What's new" iconPosition="start" icon={WhatsNew} />
      </Badge>
      <Badge id="inline-badge-3" alignment="outside">
        <Link id="inline-link-3" text="Learn more" iconPosition="end" icon={ExternalPage} />
      </Badge>
    </Flex>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { WhatsNew, ExternalPage }
      }
    }
  },
  name: "Inline elements"
};
