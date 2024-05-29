import React from "react";
import { createComponentTemplate, Link } from "vibe-storybook-components";
import IconButton from "../IconButton";
import Text from "../../Text/Text";
import Flex from "../../Flex/Flex";
import Button from "../../Button/Button";
import person1 from "./assets/person1.png";
import { Add, Bolt, CloseSmall, Doc, Drag, Filter, Item, Robot, Time } from "../../Icon/Icons";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import Icon from "../../Icon/Icon";
import Heading from "../../LegacyHeading/LegacyHeading";
import Avatar from "../../Avatar/Avatar";
import styles from "./IconButton.stories.module.scss";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof IconButton>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: IconButton,
  enumPropNamesArray: ["kind", "size", "color"],
  iconPropNamesArray: ["icon"],
  actionPropsArray: ["onClick"]
});

const iconButtonTemplate = createComponentTemplate(IconButton);

export default {
  title: "Buttons/IconButton",
  component: IconButton,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof IconButton>;

export const Overview: Story = {
  render: iconButtonTemplate.bind({}),
  args: {
    ariaLabel: "Add",
    icon: Add
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Kinds: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%"
      }}
    >
      <IconButton icon={Bolt} kind={IconButton.kinds.PRIMARY} ariaLabel="My primary IconButton" />
      <IconButton icon={Bolt} kind={IconButton.kinds.SECONDARY} ariaLabel="My secondary IconButton" />
      <IconButton icon={Bolt} kind={IconButton.kinds.TERTIARY} ariaLabel="My tertiary IconButton" />
    </div>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { Bolt }
      }
    }
  }
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%"
      }}
    >
      <IconButton
        key="xxs"
        icon={Robot}
        kind={IconButton.kinds.SECONDARY}
        size={IconButton.sizes.XXS}
        ariaLabel="My xxs IconButton"
      />
      <IconButton
        key="xs"
        icon={Robot}
        kind={IconButton.kinds.SECONDARY}
        size={IconButton.sizes.XS}
        ariaLabel="My xs IconButton"
      />
      <IconButton
        key="small"
        icon={Robot}
        kind={IconButton.kinds.SECONDARY}
        size={IconButton.sizes.SMALL}
        ariaLabel="My small IconButton"
      />
      <IconButton
        key="medium"
        icon={Robot}
        kind={IconButton.kinds.SECONDARY}
        size={IconButton.sizes.MEDIUM}
        ariaLabel="My medium IconButton"
      />
      <IconButton
        key="large"
        icon={Robot}
        kind={IconButton.kinds.SECONDARY}
        size={IconButton.sizes.LARGE}
        ariaLabel="My large IconButton"
      />
    </div>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { Robot }
      }
    }
  }
};

export const Active: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%"
      }}
    >
      <IconButton icon={Doc} kind={IconButton.kinds.PRIMARY} ariaLabel="My small active IconButton" active />
      <IconButton icon={Doc} kind={IconButton.kinds.SECONDARY} ariaLabel="My active medium IconButton" active />
      <IconButton icon={Doc} kind={IconButton.kinds.TERTIARY} ariaLabel="My active large IconButton" active />
    </div>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { Doc }
      }
    }
  }
};

export const Disabled: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%"
      }}
    >
      <IconButton
        icon={Doc}
        kind={IconButton.kinds.PRIMARY}
        ariaLabel="My small disabled IconButton"
        disabled
        disabledReason="This function is not available"
      />
      <IconButton
        icon={Doc}
        kind={IconButton.kinds.SECONDARY}
        ariaLabel="My disabled medium IconButton"
        disabled
        disabledReason="This function is not available"
      />
      <IconButton
        icon={Doc}
        kind={IconButton.kinds.TERTIARY}
        ariaLabel="My disabled large IconButton"
        disabled
        disabledReason="This function is not available"
      />
    </div>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { Doc }
      }
    }
  }
};

export const IconButtonAsToolbarButton: Story = {
  render: () => (
    <Flex
      className={styles.dashboard}
      direction={Flex.directions.COLUMN}
      align={Flex.align.START}
      style={{
        width: "50%"
      }}
    >
      <Flex className={styles.dashboardHeader} gap={Flex.gaps.SMALL}>
        <Icon icon={Drag} />
        <Heading type={Heading.types.h5} value="Widget name" />
        <IconButton icon={Filter} ariaLabel="Filter the widget by everything" size={IconButton.sizes.SMALL} />
      </Flex>
      <div className={styles.dashboardContent} />
    </Flex>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { styles, Drag, Filter }
      }
    }
  },
  name: "Icon button as toolbar button"
};

export const IconButtonAsCloseButton: Story = {
  render: () => (
    <>
      <Flex
        style={{
          width: "100%"
        }}
      >
        <Flex
          className={styles.recycleBin}
          style={{
            width: "100%"
          }}
          justify={Flex.justify.START}
          gap={Flex.gaps.LARGE}
        >
          <Flex
            direction={Flex.directions.COLUMN}
            className={styles.recycleBinTitleContainer}
            justify={Flex.justify.CENTER}
          >
            <Icon icon={Item} iconSize={40} />
            <Heading
              className={styles.recycleBinTitle}
              type={Heading.types.h5}
              value="Item"
              id="monday-recycle-bin-title"
            />
          </Flex>
          <Avatar size={Avatar.sizes.LARGE} src={person1} type={Avatar.types.IMG} />
          <Flex
            direction={Flex.directions.COLUMN}
            className={styles.recycleBinContent}
            align={Flex.align.START}
            ariaLabelledby="monday-recycle-bin-title"
          >
            <Flex gap={Flex.gaps.XS}>
              <Link withoutSpacing href="">
                Hadas Farhi
              </Link>
              <span>deleted the item</span>
              <Text type={Text.types.TEXT1} element="span" weight={Text.weights.MEDIUM}>
                Hello World
              </Text>
              <span>from the board</span>
            </Flex>
            <Text type={Text.types.TEXT1} element="span" weight={Text.weights.MEDIUM}>
              Tasks
            </Text>
            <Flex gap={Flex.gaps.XS} className={styles.recycleBinSubNote}>
              <Icon icon={Time} />
              <span className={styles.recycleBinTimeStamp}>13m</span>
              <span>(Available for restore in the next 1M)</span>
            </Flex>
          </Flex>
          <Button className={styles.recycleBinRestoreButton}>Restore</Button>
        </Flex>
      </Flex>
      <IconButton icon={CloseSmall} size={IconButton.sizes.SMALL} ariaLabel="Remove from Recycle bin" />
    </>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { styles, person1, Item, Time, CloseSmall }
      }
    }
  },
  name: "Icon button as close button"
};
