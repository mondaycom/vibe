import React from "react";
import { Avatar, AvatarGroup, Flex, Counter } from "@vibe/core";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import { createComponentTemplate, StoryDescription } from "vibe-storybook-components";
import guest from "./assets/guest.svg";
import home from "./assets/home.svg";
import minus from "./assets/minus.svg";
import owner from "./assets/owner.svg";
import person1 from "./assets/person1.png";
import person2 from "./assets/person2.png";
import person3 from "./assets/person3.png";
import { WhatsNew } from "@vibe/icons";
import { useCallback, useState } from "react";
import "./Avatar.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Avatar,
  iconPropNamesArray: ["icon"],
  actionPropsArray: ["onClick"]
});

const avatarTemplate = createComponentTemplate(Avatar);
const AvatarBadgePropsType = {
  summary: "AvatarBadgeProps",
  detail: `{
    src?: string;
    icon?: SubIcon;
    tabIndex?: number;
    className?: string;
    size?: "xs" | "small" | "medium" | "large";
  }`
};

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    ...metaSettings.argTypes,
    bottomRightBadgeProps: {
      control: "object",
      table: {
        type: AvatarBadgePropsType
      }
    },
    bottomLeftBadgeProps: {
      control: "object",
      table: {
        type: AvatarBadgePropsType
      }
    },
    topLeftBadgeProps: {
      control: "object",
      table: {
        type: AvatarBadgePropsType
      }
    },
    topRightBadgeProps: {
      control: "object",
      table: {
        type: AvatarBadgePropsType
      }
    }
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { person1 }
      }
    }
  }
};

export const Overview = {
  render: avatarTemplate.bind({}),
  name: "Overview",
  args: {
    id: "overview-avatar",
    size: "large",
    src: person1,
    type: "img",
    ariaLabel: "Julia Martinez"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Size = {
  render: () => (
    <Flex gap="medium">
      <Avatar id="size-xs" size="xs" src={person1} type="img" ariaLabel="Julia Martinez" />
      <Avatar id="size-small" size="small" src={person1} type="img" ariaLabel="Julia Martinez" />
      <Avatar id="size-medium" size="medium" src={person1} type="img" ariaLabel="Julia Martinez" />
      <Avatar id="size-large" size="large" src={person1} type="img" ariaLabel="Julia Martinez" />
    </Flex>
  )
};

export const Disable = {
  render: () => (
    <Flex gap="medium">
      <Avatar id="disabled-xs" size="xs" src={person1} type="img" ariaLabel="Julia Martinez" disabled />
      <Avatar id="disabled-small" size="small" src={person1} type="img" ariaLabel="Julia Martinez" disabled />
      <Avatar id="disabled-medium" size="medium" src={person1} type="img" ariaLabel="Julia Martinez" disabled />
      <Avatar id="disabled-large" size="large" src={person1} type="img" ariaLabel="Julia Martinez" disabled />
    </Flex>
  )
};

export const AvatarWithText = {
  render: () => (
    <Flex gap="medium">
      <Avatar id="text-xs" size="xs" type="text" text="RM" backgroundColor="lipstick" ariaLabel="Ron Meir" />
      <Avatar id="text-small" size="small" type="text" text="RM" backgroundColor="lipstick" ariaLabel="Ron Meir" />
      <Avatar id="text-medium" size="medium" type="text" text="RM" backgroundColor="lipstick" ariaLabel="Ron Meir" />
      <Avatar id="text-large" size="large" type="text" text="RM" backgroundColor="done-green" ariaLabel="Ron Meir" />
    </Flex>
  )
};

export const SquareAvatar = {
  render: () => (
    <Flex gap="medium">
      <Avatar id="square-xs" size="xs" type="text" text="R" backgroundColor="bright-blue" square ariaLabel="Ron" />
      <Avatar
        id="square-small"
        size="small"
        type="text"
        text="R"
        backgroundColor="bright-blue"
        square
        ariaLabel="Ron"
      />
      <Avatar
        id="square-medium"
        size="medium"
        type="icon"
        icon={WhatsNew}
        backgroundColor="aquamarine"
        square
        ariaLabel="Present"
      />
      <Avatar
        id="square-large"
        size="large"
        type="text"
        text="RM"
        backgroundColor="working_orange"
        square
        ariaLabel="Ron Meir"
      />
    </Flex>
  )
};

export const AvatarWithRightBadge = {
  render: () => (
    <Flex gap="medium">
      <Avatar
        id="right-badge-guest"
        size="large"
        type="img"
        src={person1}
        bottomRightBadgeProps={{ src: guest }}
        ariaLabel="Julia Martinez with guest badge"
      />
      <Avatar
        id="right-badge-owner"
        size="large"
        type="img"
        src={person1}
        bottomRightBadgeProps={{ src: owner }}
        ariaLabel="Julia Martinez with owner badge"
      />
    </Flex>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { guest, owner }
      }
    }
  }
};

export const AvatarWithLeftBadge = {
  render: () => (
    <Flex gap="medium">
      <Avatar
        id="left-badge-home"
        size="large"
        type="img"
        src={person1}
        bottomLeftBadgeProps={{ src: home }}
        ariaLabel="Julia Martinez with home badge"
      />
      <Avatar
        id="left-badge-minus"
        size="large"
        type="img"
        src={person1}
        bottomLeftBadgeProps={{ src: minus }}
        ariaLabel="Julia Martinez with minus badge"
      />
    </Flex>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { home, minus }
      }
    }
  }
};

export const AvatarWithTooltip = {
  render: () => (
    <Flex direction="row" gap="large" align="start">
      <StoryDescription description="Aria label tooltip" vertical align={StoryDescription.align.START}>
        <Avatar id="tooltip-aria" size="large" type="img" src={person1} ariaLabel={"Julia Martinez"} />
      </StoryDescription>
      <StoryDescription description="Text tooltip" vertical align={StoryDescription.align.START}>
        <Avatar
          id="tooltip-text"
          size="large"
          type="img"
          src={person1}
          tooltipProps={{
            content: "Julia Martinez"
          }}
          ariaLabel={"Julia Martinez"}
        />
      </StoryDescription>
      <StoryDescription description="JSX tooltip" vertical align={StoryDescription.align.START}>
        <Avatar
          id="tooltip-jsx"
          size="large"
          type="img"
          src={person1}
          tooltipProps={{
            content: <b>Julia Martinez</b>,
            position: "bottom"
          }}
          ariaLabel={"Julia Martinez"}
        />
      </StoryDescription>
    </Flex>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { StoryDescription }
      }
    }
  }
};

export const ClickableAvatar = {
  render: () => {
    const [count, setCount] = useState(0);

    const incrementCount = useCallback(() => {
      setCount(prevState => prevState + 1);
    }, []);

    return (
      <Flex>
        <Flex direction="column" gap="medium">
          <Avatar
            id="clickable-avatar"
            size="large"
            type="img"
            src={person1}
            ariaLabel="Julia Martinez (clickable)"
            onClick={incrementCount}
          />
          <Counter id="avatar-click-counter" count={count} />
        </Flex>
      </Flex>
    );
  }
};

export const MultipleAvatars = {
  render: () => (
    <AvatarGroup id="multiple-avatars-group" max={2} size="large">
      <Avatar id="multiple-avatar-1" type="img" src={person1} ariaLabel="Julia Martinez" />
      <Avatar id="multiple-avatar-2" type="img" src={person2} ariaLabel="Marco DiAngelo" />
      <Avatar id="multiple-avatar-3" type="img" src={person3} ariaLabel="Liam Caldwell" />
    </AvatarGroup>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { person2, person3 }
      }
    }
  }
};
