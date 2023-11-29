import { useCallback, useState } from "react";
import { StoryDescription } from "vibe-storybook-components";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { person1, person2, person3 } from "./assets";
import AvatarGroup from "../AvatarGroup";
import Avatar from "../../Avatar/Avatar";
import Counter from "../../Counter/Counter";
import Flex from "../../Flex/Flex";
import Slider from "../../Slider/Slider";
import Tooltip from "../../Tooltip/Tooltip";
import styles from "./AvatarGroup.stories.module.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: AvatarGroup,
  enumPropNamesArray: ["type", "size"] // List enum props here
});

export default {
  title: "Media/Avatar/AvatarGroup",
  component: AvatarGroup,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const avatarGroupTemplate = ({ persons, ...args }) => {
  return (
    <AvatarGroup size={Avatar.sizes.LARGE} max={3} {...args}>
      <Avatar type={Avatar.types.IMG} src={persons.person1} ariaLabel="Hadas Fahri" />
      <Avatar type={Avatar.types.IMG} src={persons.person2} ariaLabel="Sergey Roytman" />
      <Avatar type={Avatar.types.IMG} src={persons.person3} ariaLabel="Yossi Saadi" />
      <Avatar type={Avatar.types.IMG} src={persons.person1} ariaLabel="Hadas Fahri" />
      <Avatar type={Avatar.types.IMG} src={persons.person2} ariaLabel="Sergey Roytman" />
      <Avatar type={Avatar.types.IMG} src={persons.person3} ariaLabel="Yossi Saadi" />
      <Avatar type={Avatar.types.IMG} src={persons.person1} ariaLabel="Hadas Fahri" />
      <Avatar type={Avatar.types.IMG} src={persons.person2} ariaLabel="Sergey Roytman" />
      <Avatar type={Avatar.types.IMG} src={persons.person3} ariaLabel="Yossi Saadi" />
      <Avatar type={Avatar.types.IMG} src={persons.person1} ariaLabel="Hadas Fahri" />
      <Avatar type={Avatar.types.IMG} src={persons.person2} ariaLabel="Sergey Roytman" />
      <Avatar type={Avatar.types.IMG} src={persons.person3} ariaLabel="Yossi Saadi" />
      <Avatar type={Avatar.types.TEXT} text="MR" ariaLabel="Mark Roytstein" />
    </AvatarGroup>
  );
};

export const Overview = {
  render: avatarGroupTemplate.bind(),
  name: "Overview",

  args: {
    persons: {
      person1: window.location.origin + "/" + person1,
      person2: window.location.origin + "/" + person2,
      person3: window.location.origin + "/" + person3
    }
  }
};

export const Size = {
  render: () => (
    <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.LARGE} align={Flex.align.START}>
      <StoryDescription description="Large" vertical align={Flex.align.START}>
        <AvatarGroup size={Avatar.sizes.LARGE} type={Avatar.types.IMG} max={3}>
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Hadas Fahri" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sergey Roytman" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Yossi Saadi" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Hadas Fahri" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sergey Roytman" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Yossi Saadi" />
        </AvatarGroup>
      </StoryDescription>
      <StoryDescription description="Medium" vertical align={Flex.align.START}>
        <AvatarGroup size={Avatar.sizes.MEDIUM} type={Avatar.types.IMG} max={3}>
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Hadas Fahri" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sergey Roytman" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Yossi Saadi" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Hadas Fahri" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sergey Roytman" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Yossi Saadi" />
        </AvatarGroup>
      </StoryDescription>
      <StoryDescription description="Small" vertical align={Flex.align.START}>
        <AvatarGroup size={Avatar.sizes.SMALL} type={Avatar.types.IMG} max={3}>
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Hadas Fahri" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sergey Roytman" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Yossi Saadi" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Hadas Fahri" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sergey Roytman" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Yossi Saadi" />
        </AvatarGroup>
      </StoryDescription>
    </Flex>
  ),

  name: "Size"
};

export const ColorVariants = {
  render: () => (
    <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.LARGE} align={Flex.align.START}>
      <StoryDescription description="Light" vertical align={Flex.align.START}>
        <AvatarGroup
          size={Avatar.sizes.LARGE}
          type={Avatar.types.IMG}
          max={3}
          counterProps={{
            color: Counter.colors.LIGHT
          }}
        >
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Hadas Fahri" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sergey Roytman" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Yossi Saadi" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Hadas Fahri" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sergey Roytman" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Yossi Saadi" />
        </AvatarGroup>
      </StoryDescription>
      <StoryDescription description="Dark" vertical align={Flex.align.START}>
        <AvatarGroup
          size={Avatar.sizes.LARGE}
          type={Avatar.types.IMG}
          max={3}
          counterProps={{
            color: Counter.colors.DARK
          }}
        >
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Hadas Fahri" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sergey Roytman" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Yossi Saadi" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Hadas Fahri" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sergey Roytman" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Yossi Saadi" />
        </AvatarGroup>
      </StoryDescription>
    </Flex>
  ),

  name: "Color variants"
};

export const CustomCounter = {
  render: () => (
    <AvatarGroup
      size={Avatar.sizes.LARGE}
      type={Avatar.types.IMG}
      max={3}
      counterProps={{
        count: 100500,
        color: Counter.colors.DARK,
        prefix: "",
        maxDigits: 5
      }}
    >
      <Avatar src={person1} ariaLabel="Hadas Fahri" />
      <Avatar src={person2} ariaLabel="Sergey Roytman" />
      <Avatar src={person3} ariaLabel="Yossi Saadi" />
    </AvatarGroup>
  ),

  name: "Custom counter"
};

export const GridTooltip = {
  render: () => (
    <AvatarGroup size={Avatar.sizes.LARGE} type={Avatar.types.IMG} max={3}>
      <Avatar src={person1} />
      <Avatar src={person2} />
      <Avatar src={person3} />
      <Avatar src={person1} />
      <Avatar src={person2} />
      <Avatar src={person3} />
      <Avatar src={person1} />
      <Avatar src={person2} />
      <Avatar src={person3} />
      <Avatar src={person1} />
      <Avatar src={person2} />
      <Avatar src={person3} />
      <Avatar src={person1} />
      <Avatar src={person2} />
      <Avatar src={person3} />
      <Avatar src={person1} />
      <Avatar src={person2} />
      <Avatar src={person3} />
    </AvatarGroup>
  ),

  name: "Grid tooltip"
};

export const MaxAmountToDisplay = {
  render: () => {
    const [max, setMax] = useState(3);

    return (
      <Flex
        direction={Flex.directions.COLUMN}
        gap={Flex.gaps.MEDIUM}
        align={Flex.align.START}
        className={styles.sliderCountContainer}
      >
        <Slider
          size={Slider.sizes.SMALL}
          min={1}
          max={16}
          defaultValue={max}
          onChange={value => setMax(value)}
          prefix="1"
          postfix="16"
          valueText={`${max}`}
        />
        <AvatarGroup size={Avatar.sizes.LARGE} max={max}>
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Hadas Fahri" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sergey Roytman" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Yossi Saadi" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Hadas Fahri" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sergey Roytman" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Yossi Saadi" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Hadas Fahri" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sergey Roytman" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Yossi Saadi" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Hadas Fahri" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sergey Roytman" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Yossi Saadi" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Hadas Fahri" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sergey Roytman" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Yossi Saadi" />
          <Avatar text="MR" type={Avatar.types.TEXT} ariaLabel="Mark Roytstein" />
        </AvatarGroup>
      </Flex>
    );
  },

  name: "Max amount to display"
};

export const HoverVsClickable = {
  render: () => {
    const [lastClickedAvatarId, setLastClickedAvatarId] = useState("-");

    const avatarOnClick = useCallback((_event, avatarId) => {
      setLastClickedAvatarId(avatarId);
    }, []);

    const getDummyAvatarsProps = useCallback(multiplier => {
      const avatarsProps = [
        {
          type: Avatar.types.IMG,
          src: person1,
          ariaLabel: "Hadas Fahri"
        },
        {
          type: Avatar.types.IMG,
          src: person2,
          ariaLabel: "Sergey Roytman"
        },
        {
          type: Avatar.types.IMG,
          src: person3,
          ariaLabel: "Yossi Saadi"
        }
      ];

      let result = [];

      for (let i = 0; i <= multiplier; ++i) {
        result = result.concat(avatarsProps);
      }

      return result;
    }, []);

    return (
      <Flex direction={Flex.directions.ROW} gap={Flex.gaps.LARGE}>
        <StoryDescription description="Counter hover" vertical align={Flex.align.START}>
          <AvatarGroup
            size={Avatar.sizes.LARGE}
            max={3}
            counterTooltipCustomProps={{
              position: Tooltip.positions.BOTTOM
            }}
          >
            {getDummyAvatarsProps(3).map(avatarProps => (
              <Avatar {...avatarProps} />
            ))}
          </AvatarGroup>
        </StoryDescription>
        <StoryDescription description="Counter click" vertical align={Flex.align.START}>
          <Flex>
            <AvatarGroup size={Avatar.sizes.LARGE} max={3}>
              {getDummyAvatarsProps(3).map((avatarProps, index) => (
                <Avatar {...avatarProps} onClick={avatarOnClick} id={index} />
              ))}
            </AvatarGroup>
            <div className={styles.lastClickedAvatarIdText}>{`Last clicked avatar's id: ${lastClickedAvatarId}`}</div>
          </Flex>
        </StoryDescription>
      </Flex>
    );
  },

  name: "Hover vs Clickable"
};

export const VirtualizedList = {
  render: () => {
    const avatars = [
      <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Hadas Fahri" />,
      <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sergey Roytman" />,
      <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Yossi Saadi" />
    ];

    const getDummyAvatars = multiplier => {
      let result = [];

      for (let i = 0; i < multiplier; ++i) {
        result = result.concat(avatars);
      }

      return result;
    };

    return (
      <AvatarGroup size={Avatar.sizes.LARGE} max={3} counterTooltipIsVirtualizedList={true}>
        {getDummyAvatars(334)}
      </AvatarGroup>
    );
  },

  name: "Virtualized list"
};

export const CounterCustomTooltipContent = {
  render: () => (
    <AvatarGroup
      size={Avatar.sizes.LARGE}
      type={Avatar.types.IMG}
      max={3}
      counterTooltipCustomProps={{
        content: "... and plenty more employees"
      }}
    >
      <Avatar src={person1} ariaLabel="Hadas Fahri" />
      <Avatar src={person2} ariaLabel="Sergey Roytman" />
      <Avatar src={person3} ariaLabel="Yossi Saadi" />
      <Avatar src={person1} ariaLabel="Hadas Fahri" />
      <Avatar src={person2} ariaLabel="Sergey Roytman" />
      <Avatar src={person3} ariaLabel="Yossi Saadi" />
    </AvatarGroup>
  ),

  name: "Counter custom tooltip content"
};

export const LastSeenUsers = {
  render: () => (
    <Flex direction={Flex.directions.ROW} gap={Flex.gaps.MEDIUM}>
      <div>Last seen</div>
      <AvatarGroup size={Avatar.sizes.MEDIUM} max={3}>
        <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Hadas Fahri" />
        <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sergey Roytman" />
        <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Yossi Saadi" />
        <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Hadas Fahri" />
        <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sergey Roytman" />
        <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Yossi Saadi" />
      </AvatarGroup>
    </Flex>
  ),

  name: "Last seen users"
};

export const DisplayingTeams = {
  render: () => (
    <table>
      <thead>
        <tr>
          <th width={200} align="left">
            Name
          </th>
          <th width={200} align="left">
            Title
          </th>
          <th width={200} align="left">
            Teams
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="left">
            <Flex direction={Flex.directions.ROW} gap={Flex.gaps.SMALL}>
              <Avatar type={Avatar.types.IMG} src={person1} size={Avatar.sizes.MEDIUM} ariaLabel="Hadas Fahri" />
              Hadas Fahri
            </Flex>
          </td>
          <td align="left">Developer</td>
          <td align="left">
            <AvatarGroup
              size={Avatar.sizes.MEDIUM}
              max={2}
              counterProps={{
                ariaLabelItemsName: "teams"
              }}
            >
              <Avatar
                type={Avatar.types.TEXT}
                text="T1"
                backgroundColor={Avatar.backgroundColors.PEACH}
                ariaLabel="Team 1"
              />
              <Avatar
                type={Avatar.types.TEXT}
                text="T2"
                backgroundColor={Avatar.backgroundColors.BUBBLE}
                ariaLabel="Team 2"
              />
              <Avatar
                type={Avatar.types.TEXT}
                text="T3"
                backgroundColor={Avatar.backgroundColors.BERRY}
                ariaLabel="Team 3"
              />
            </AvatarGroup>
          </td>
        </tr>
      </tbody>
    </table>
  ),

  name: "Displaying teams"
};
