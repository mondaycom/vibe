import React from "react";
import { useCallback, useState } from "react";
import { StoryDescription } from "vibe-storybook-components";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { person1, person2, person3, person4 } from "./assets";
import AvatarGroup from "../AvatarGroup";
import Avatar from "../../Avatar/Avatar";
import Flex from "../../Flex/Flex";
import Slider from "../../Slider/Slider";
import Table from "../../Table/Table/Table";
import TableHeader from "../../Table/TableHeader/TableHeader";
import TableHeaderCell from "../../Table/TableHeaderCell/TableHeaderCell";
import TableBody from "../../Table/TableBody/TableBody";
import TableRow from "../../Table/TableRow/TableRow";
import TableCell from "../../Table/TableCell/TableCell";
import styles from "./AvatarGroup.stories.module.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: AvatarGroup
});

export default {
  title: "Media/Avatar/AvatarGroup",
  component: AvatarGroup,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators,
  parameters: {
    docs: {
      liveEdit: {
        scope: { styles, StoryDescription, person1, person2, person3 }
      }
    }
  }
};

const avatarGroupTemplate = ({ persons, ...args }) => {
  return (
    <AvatarGroup size="large" max={3} {...args}>
      <Avatar type="img" src={persons.person2} ariaLabel="Sophia Johnson" />
      <Avatar type="img" src={persons.person3} ariaLabel="Marco DiAngelo" />
      <Avatar type="img" src={persons.person4} ariaLabel="Liam Caldwell" />
      <Avatar type="img" src={persons.person1} ariaLabel="Julia Martinez" />
      <Avatar type="img" src={persons.person2} ariaLabel="Sophia Johnson" />
      <Avatar type="img" src={persons.person3} ariaLabel="Marco DiAngelo" />
      <Avatar type="img" src={persons.person4} ariaLabel="Liam Caldwell" />
      <Avatar type="img" src={persons.person1} ariaLabel="Julia Martinez" />
      <Avatar type="img" src={persons.person2} ariaLabel="Sophia Johnson" />
      <Avatar type="img" src={persons.person3} ariaLabel="Marco DiAngelo" />
      <Avatar type="img" src={persons.person4} ariaLabel="Liam Caldwell" />
      <Avatar type="img" src={persons.person1} ariaLabel="Julia Martinez" />
      <Avatar type="text" text="MR" ariaLabel="Mark Roytstein" />
    </AvatarGroup>
  );
};

export const Overview = {
  render: avatarGroupTemplate.bind({}),
  args: {
    persons: {
      person1: window.location.origin + "/" + person1,
      person2: window.location.origin + "/" + person2,
      person3: window.location.origin + "/" + person3,
      person4: window.location.origin + "/" + person4
    }
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
    <Flex direction="column" gap="large" align="start">
      <StoryDescription description="Large" vertical align={Flex.align.START}>
        <AvatarGroup size="large" type="img" max={4}>
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
        </AvatarGroup>
      </StoryDescription>
      <StoryDescription description="Medium" vertical align={Flex.align.START}>
        <AvatarGroup size="medium" type="img" max={4}>
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
        </AvatarGroup>
      </StoryDescription>
      <StoryDescription description="Small" vertical align={Flex.align.START}>
        <AvatarGroup size="small" type="img" max={4}>
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
        </AvatarGroup>
      </StoryDescription>
    </Flex>
  )
};

export const ColorVariants = {
  render: () => (
    <Flex direction="column" gap="large" align="start">
      <StoryDescription description="Light" vertical align={Flex.align.START}>
        <AvatarGroup
          size="large"
          type="img"
          max={4}
          counterProps={{
            color: "light"
          }}
        >
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
        </AvatarGroup>
      </StoryDescription>
      <StoryDescription description="Dark" vertical align={Flex.align.START}>
        <AvatarGroup
          size="large"
          type="img"
          max={4}
          counterProps={{
            color: "dark"
          }}
        >
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
        </AvatarGroup>
      </StoryDescription>
    </Flex>
  )
};

export const MaxAvatarsToDisplay = {
  render: () => {
    const [max, setMax] = useState(4);

    return (
      <Flex direction="column" gap="medium" align="start" className={styles.sliderCountContainer}>
        <Slider
          size="small"
          min={1}
          max={14}
          defaultValue={max}
          onChange={value => setMax(value)}
          valueText={`${max}`}
        />
        <AvatarGroup size="large" max={max}>
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
        </AvatarGroup>
      </Flex>
    );
  }
};

export const HoverVsClickable = {
  render: () => {
    const getDummyAvatarsProps = useCallback(numItems => {
      const avatarsProps = [
        {
          type: Avatar.types.IMG,
          src: person1,
          ariaLabel: "Julia Martinez"
        },
        {
          type: Avatar.types.IMG,
          src: person2,
          ariaLabel: "Sophia Johnson"
        },
        {
          type: Avatar.types.IMG,
          src: person3,
          ariaLabel: "Marco DiAngelo"
        },
        {
          type: Avatar.types.IMG,
          src: person4,
          ariaLabel: "Liam Caldwell"
        }
      ];

      let result = [];

      for (let i = 0; i < numItems; i++) {
        result.push(avatarsProps[i % avatarsProps.length]);
      }

      return result;
    }, []);

    return (
      <Flex direction="row" gap="large">
        <StoryDescription description="Counter hover" vertical align={Flex.align.START}>
          <AvatarGroup
            size="large"
            max={4}
            counterTooltipCustomProps={{
              position: "bottom"
            }}
          >
            {getDummyAvatarsProps(14).map(avatarProps => (
              <Avatar {...avatarProps} />
            ))}
          </AvatarGroup>
        </StoryDescription>
        <StoryDescription description="Counter click" vertical align={Flex.align.START}>
          <Flex>
            <AvatarGroup size="large" max={4}>
              {getDummyAvatarsProps(14).map((avatarProps, index) => (
                <Avatar {...avatarProps} onClick={() => {}} id={index} />
              ))}
            </AvatarGroup>
          </Flex>
        </StoryDescription>
      </Flex>
    );
  }
};
export const Disabled = () => (
  <AvatarGroup size="large" max={4} disabled>
    <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
    <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
    <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
    <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
    <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
    <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
    <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
    <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
    <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
    <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
    <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
    <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
    <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
    <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
  </AvatarGroup>
);

export const LastSeenUsers = {
  render: () => (
    <Flex direction="row" gap="medium">
      <div>Last seen</div>
      <AvatarGroup size="medium" max={4} counterProps={{ color: "dark" }} type="img">
        <Avatar src={person1} ariaLabel="Julia Martinez" />
        <Avatar src={person2} ariaLabel="Sophia Johnson" />
        <Avatar src={person3} ariaLabel="Marco DiAngelo" />
        <Avatar src={person4} ariaLabel="Liam Caldwell" />
        <Avatar src={person1} ariaLabel="Julia Martinez" />
        <Avatar src={person2} ariaLabel="Sophia Johnson" />
        <Avatar src={person3} ariaLabel="Marco DiAngelo" />
        <Avatar src={person4} ariaLabel="Liam Caldwell" />
        <Avatar src={person1} ariaLabel="Julia Martinez" />
        <Avatar src={person2} ariaLabel="Sophia Johnson" />
        <Avatar src={person3} ariaLabel="Marco DiAngelo" />
        <Avatar src={person4} ariaLabel="Liam Caldwell" />
        <Avatar src={person1} ariaLabel="Julia Martinez" />
        <Avatar src={person2} ariaLabel="Sophia Johnson" />
      </AvatarGroup>
    </Flex>
  )
};

export const CustomCounter = {
  render: () => (
    <AvatarGroup
      size="large"
      type="img"
      max={4}
      counterProps={{
        count: 100500,
        color: "dark",
        prefix: "",
        maxDigits: 5
      }}
    >
      <Avatar src={person1} ariaLabel="Julia Martinez" />
      <Avatar src={person2} ariaLabel="Sophia Johnson" />
      <Avatar src={person3} ariaLabel="Marco DiAngelo" />
      <Avatar src={person4} ariaLabel="Liam Caldwell" />
    </AvatarGroup>
  )
};

export const GridTooltip = {
  render: () => (
    <AvatarGroup size="large" type="img" max={4}>
      <Avatar src={person1} />
      <Avatar src={person2} />
      <Avatar src={person3} />
      <Avatar src={person4} />
      <Avatar src={person1} />
      <Avatar src={person2} />
      <Avatar src={person3} />
      <Avatar src={person4} />
      <Avatar src={person1} />
      <Avatar src={person2} />
      <Avatar src={person3} />
      <Avatar src={person4} />
      <Avatar src={person1} />
      <Avatar src={person2} />
      <Avatar src={person3} />
      <Avatar src={person4} />
    </AvatarGroup>
  )
};

export const CounterCustomTooltipContent = {
  render: () => (
    <AvatarGroup
      size="large"
      type="img"
      max={4}
      counterTooltipCustomProps={{
        content: "... and plenty more employees"
      }}
    >
      <Avatar src={person1} ariaLabel="Julia Martinez" />
      <Avatar src={person2} ariaLabel="Sophia Johnson" />
      <Avatar src={person3} ariaLabel="Marco DiAngelo" />
      <Avatar src={person4} ariaLabel="Liam Caldwell" />
      <Avatar src={person1} ariaLabel="Julia Martinez" />
      <Avatar src={person2} ariaLabel="Sophia Johnson" />
      <Avatar src={person3} ariaLabel="Marco DiAngelo" />
      <Avatar src={person4} ariaLabel="Liam Caldwell" />
    </AvatarGroup>
  )
};

export const VirtualizedList = {
  render: () => {
    const avatars = [
      <Avatar src={person1} ariaLabel="Julia Martinez" />,
      <Avatar src={person2} ariaLabel="Sophia Johnson" />,
      <Avatar src={person3} ariaLabel="Marco DiAngelo" />,
      <Avatar src={person4} ariaLabel="Liam Caldwell" />
    ];

    const getDummyAvatars = multiplier => {
      let result = [];

      for (let i = 0; i < multiplier; ++i) {
        result = result.concat(avatars);
      }

      return result;
    };

    return (
      <AvatarGroup size="large" max={4} counterTooltipIsVirtualizedList type="img">
        {getDummyAvatars(334)}
      </AvatarGroup>
    );
  }
};

export const DisplayingTeams = {
  render: () => (
    <Table
      columns={[
        {
          id: "name",
          title: "Name"
        },
        {
          id: "email",
          title: "Email"
        },
        {
          id: "title",
          title: "Title"
        },
        {
          id: "teams",
          title: "Teams"
        }
      ]}
    >
      <TableHeader>
        <TableHeaderCell title="Name" />
        <TableHeaderCell title="Email" />
        <TableHeaderCell title="Title" />
        <TableHeaderCell title="Teams" />
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <Flex direction="row" gap="small">
              <Avatar type="img" src={person1} size="medium" ariaLabel="Julia Martinez" />
              Julia Martinez
            </Flex>
          </TableCell>
          <TableCell>julia@martinez.com</TableCell>
          <TableCell>Developer</TableCell>
          <TableCell>
            <AvatarGroup
              size="medium"
              max={2}
              counterProps={{
                ariaLabelItemsName: "teams"
              }}
            >
              <Avatar type="text" text="T1" backgroundColor={Avatar.backgroundColors.PEACH} ariaLabel="Team 1" />
              <Avatar type="text" text="T2" backgroundColor={Avatar.backgroundColors.BUBBLE} ariaLabel="Team 2" />
              <Avatar type="text" text="T3" backgroundColor={Avatar.backgroundColors.BERRY} ariaLabel="Team 3" />
            </AvatarGroup>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
};
