import React from "react";
import Avatar from "../Avatar";
import AvatarGroup from "../../AvatarGroup/AvatarGroup";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate, StoryDescription } from "vibe-storybook-components";
import { Counter, Flex } from "../..";
import { guest, home, minus, owner, person1, person2, person3 } from "./assets";
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
    tabIndex?: string | number;
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
    size: "large",
    src: window.location.origin + "/" + person1,
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
      <Avatar size="xs" src={person1} type="img" ariaLabel="Julia Martinez" />
      <Avatar size="small" src={person1} type="img" ariaLabel="Julia Martinez" />
      <Avatar size="medium" src={person1} type="img" ariaLabel="Julia Martinez" />
      <Avatar size="large" src={person1} type="img" ariaLabel="Julia Martinez" />
    </Flex>
  )
};

export const Disable = {
  render: () => (
    <Flex gap="medium">
      <Avatar size="xs" src={person1} type="img" disabled />
      <Avatar size="small" src={person1} type="img" disabled />
      <Avatar size="medium" src={person1} type="img" disabled />
      <Avatar size="large" src={person1} type="img" disabled />
    </Flex>
  )
};

export const AvatarWithText = {
  render: () => (
    <Flex gap="medium">
      <Avatar size="xs" type="text" text="RM" backgroundColor="lipstick" ariaLabel="Ron Meir" />
      <Avatar size="small" type="text" text="RM" backgroundColor="lipstick" ariaLabel="Ron Meir" />
      <Avatar size="medium" type="text" text="RM" backgroundColor="lipstick" ariaLabel="Ron Meir" />
      <Avatar size="large" type="text" text="RM" backgroundColor="done-green" ariaLabel="Ron Meir" />
    </Flex>
  )
};

export const SquareAvatar = {
  render: () => (
    <Flex gap="medium">
      <Avatar size="xs" type="text" text="R" backgroundColor="bright-blue" square ariaLabel="Ron" />
      <Avatar size="small" type="text" text="R" backgroundColor="bright-blue" square ariaLabel="Ron" />
      <Avatar size="medium" type="icon" icon={WhatsNew} backgroundColor="aquamarine" square ariaLabel="Present" />
      <Avatar size="large" type="text" text="RM" backgroundColor="working_orange" square ariaLabel="Ron Meir" />
    </Flex>
  )
};

export const AvatarWithRightBadge = {
  render: () => (
    <Flex gap="medium">
      <Avatar size="large" type="img" src={person1} bottomRightBadgeProps={{ src: guest }} ariaLabel="Julia Martinez" />
      <Avatar size="large" type="img" src={person1} bottomRightBadgeProps={{ src: owner }} ariaLabel="Julia Martinez" />
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
      <Avatar size="large" type="img" src={person1} bottomLeftBadgeProps={{ src: home }} ariaLabel="Julia Martinez" />
      <Avatar size="large" type="img" src={person1} bottomLeftBadgeProps={{ src: minus }} ariaLabel="Julia Martinez" />
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
        <Avatar size="large" type="img" src={person1} ariaLabel={"Julia Martinez"} />
      </StoryDescription>
      <StoryDescription description="Text tooltip" vertical align={StoryDescription.align.START}>
        <Avatar
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
          <Avatar size="large" type="img" src={person1} ariaLabel="Julia Martinez" onClick={incrementCount} />
          <Counter count={count} />
        </Flex>
      </Flex>
    );
  }
};

export const MultipleAvatars = {
  render: () => (
    <AvatarGroup max={2} size="large">
      <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
      <Avatar type="img" src={person2} ariaLabel="Marco DiAngelo" />
      <Avatar type="img" src={person3} ariaLabel="Liam Caldwell" />
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
