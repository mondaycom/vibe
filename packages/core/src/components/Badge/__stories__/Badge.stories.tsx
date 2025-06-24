import React from "react";
import Badge from "../Badge";
import person from "./assets/person.png";
import { ExternalPage, WhatsNew } from "@vibe/icons";
import Link from "../../Link/Link";
import Button from "../../Button/Button";
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
    children: <Button leftIcon={WhatsNew}>{"What's new"}</Button>
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
        <Badge>
          <Button leftIcon={WhatsNew}>{"What's new"}</Button>
        </Badge>
      </Flex>
      <Flex direction="column" gap="medium" align="start">
        Counter
        <Badge type="counter" count={100} maxDigits={2}>
          <Button leftIcon={WhatsNew}>{"What's new"}</Button>
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
    <Badge alignment="rectangular">
      <Button leftIcon={ExternalPage}>Button</Button>
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
    <Badge alignment="circular">
      <Avatar size="large" src={person} type="img" />
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
      <Badge alignment="outside">
        <Link text="Read more" />
      </Badge>
      <Badge alignment="outside">
        <Link text="What's new" iconPosition="start" icon={WhatsNew} />
      </Badge>
      <Badge alignment="outside">
        <Link text="Learn more" iconPosition="end" icon={ExternalPage} />
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
