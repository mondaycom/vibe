import React from "react";
import { chunk as _chunk } from "lodash-es";
import Flex from "../../Flex/Flex";
import Chips from "../Chips";
import Text from "../../Text/Text";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import Search from "../../Search/Search";
import Avatar from "../../Avatar/Avatar";
import DialogContentContainer from "../../DialogContentContainer/DialogContentContainer";
import { Email } from "../../Icon/Icons";
import person1 from "./assets/person1.png";
import rotem from "./assets/rotem.png";
import { NOOP } from "../../../utils/function-utils";
import styles from "./Chips.stories.module.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Chips,
  enumPropNamesArray: ["color"],
  iconPropNamesArray: ["rightIcon", "leftIcon"],
  actionPropsArray: ["onDelete", "onMouseDown", "onClick"]
});

const chipsTemplate = createComponentTemplate(Chips);

export default {
  title: "Data display/Chips",
  component: Chips,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: chipsTemplate.bind({}),
  name: "Overview",

  args: {
    label: "This is a chip",
    onMouseDown: () => {},
    onClick: () => {}
  }
};

export const ChipsWithReadOnlyState = {
  render: () => <Chips label="Read only chip" readOnly />,
  name: "Chips with read only state"
};

export const ChipsWithIcons = {
  render: () => (
    <>
      <Chips label="Chip with left icon" leftIcon={Email} />
      <Chips label="Chip with right icon" rightIcon={Email} />
    </>
  ),
  name: "Chips with icons"
};

export const ChipsWithAvatars = {
  render: () => (
    <>
      <Chips label="Chip with left avatar" leftAvatar={person1} />
      <Chips label="Chip with right avatar" rightAvatar={person1} />
    </>
  ),
  name: "Chips with avatars"
};

export const Themes = {
  render: () => (
    <>
      <Chips label="This is a long chip" />
      <Chips label="Chip positive" color={Chips.colors.POSITIVE} />
      <Chips label="Chip negative" color={Chips.colors.NEGATIVE} />
      <Chips label="Chip warning" color={Chips.colors.WARNING} />
      <Chips label="Disabled" disabled />
    </>
  ),
  name: "Themes"
};

export const Clickable = {
  render: () => {
    return (
      <Flex direction={Flex.directions.ROW} gap={Flex.gaps.MEDIUM} align={Flex.align.START}>
        <Chips label="Clickable default chip" readOnly onClick={NOOP} />
        <Chips label="Clickable removable chip" onClick={NOOP} />
      </Flex>
    );
  },

  name: "Clickable"
};

export const ChipsPalette = {
  render: () => {
    const excludedColors = [Chips.colors.DARK_INDIGO, Chips.colors.BLACKISH];
    const allowedColorsChunks = _chunk(
      // @ts-ignore
      Object.keys(Chips.colors).filter(k => !excludedColors.includes(Chips.colors[k])),
      7
    );
    return (
      <Flex
        style={{
          width: "100%",
          height: 300
        }}
        align={Flex.align.STRETCH}
      >
        {allowedColorsChunks.map((colorChunk: any) => {
          return (
            <Flex
              direction={Flex.directions.COLUMN}
              key={colorChunk}
              justify={Flex.justify.SPACE_BETWEEN}
              align={Flex.align.STRETCH}
            >
              {colorChunk.map((colorName: any) => (
                // @ts-ignore
                <Chips label={colorName} key={colorName} color={Chips.colors[colorName]} readOnly allowTextSelection />
              ))}
            </Flex>
          );
        })}
      </Flex>
    );
  },

  name: "Chips palette"
};

export const OnColor = {
  render: () => (
    <Flex
      style={{
        width: "100%"
      }}
      align={Flex.align.STRETCH}
      justify={Flex.justify.START}
    >
      <Flex
        align={Flex.align.CENTER}
        justify={Flex.justify.CENTER}
        style={{
          background: "var(--sb-primary-selected-color)",
          width: "124px",
          height: "64px",
          margin: "var(--sb-spacing-small)",
          borderRadius: "var(--sb-border-radius-small)"
        }}
      >
        <Chips label="On selected" showBorder readOnly />
      </Flex>
      <Flex
        align={Flex.align.CENTER}
        justify={Flex.justify.CENTER}
        style={{
          background: "var(--positive-color-selected)",
          width: "124px",
          height: "64px",
          margin: "var(--sb-spacing-small)",
          borderRadius: "var(--sb-border-radius-small)"
        }}
      >
        <Chips label="On positive" showBorder color={Chips.colors.POSITIVE} readOnly />
      </Flex>
      <Flex
        align={Flex.align.CENTER}
        justify={Flex.justify.CENTER}
        style={{
          background: "var(--sb-negative-color-selected)",
          width: "124px",
          height: "64px",
          margin: "var(--sb-spacing-small)",
          borderRadius: "var(--sb-border-radius-small)"
        }}
      >
        <Chips label="On negative" showBorder color={Chips.colors.NEGATIVE} readOnly />
      </Flex>
    </Flex>
  ),

  name: "On color"
};

export const ColorfulChipsForDifferentContent = {
  render: () => (
    <DialogContentContainer className={styles.searchBar}>
      <div className={styles.item}>
        <Chips label="January" color={Chips.colors.POSITIVE} />
      </div>
      <Search />
      <div className={styles.item}>
        <Chips label="August" readOnly color={Chips.colors.LIPSTICK} />
      </div>
      <div className={styles.item}>
        <Chips label="April" readOnly color={Chips.colors.BUBBLE} />
      </div>
      <div className={styles.item}>
        <Chips label="March" readOnly color={Chips.colors.EGG_YOLK} />
      </div>
    </DialogContentContainer>
  ),

  name: "Colorful chips for different content"
};

export const ChipsInAPersonPickerComboBox = {
  render: () => (
    <DialogContentContainer className={styles.searchBar}>
      <Search placeholder="Search names, positions, or a team" />
      <Flex align={Flex.align.CENTER} justify={Flex.justify.CENTER}>
        <Chips label="Esther Schanler" leftAvatar={person1} />
        <Chips label="Rotem Dekel" leftAvatar={rotem} />
      </Flex>
      <Text type={Text.types.TEXT2} className={styles.lable}>
        Suggested people
      </Text>
      <div className={styles.search}>
        <Flex align={Flex.align.CENTER} justify={Flex.justify.CENTER} key="cont-1">
          <Avatar size={Avatar.sizes.SMALL} src={person1} type={Avatar.types.IMG} />
          <Text type={Text.types.TEXT2} className={styles.name}>
            May Kishon <span>(UX/UI Product Designer)</span>
          </Text>
        </Flex>
        <Flex align={Flex.align.CENTER} justify={Flex.justify.CENTER} key="cont-2">
          <Avatar
            size={Avatar.sizes.SMALL}
            backgroundColor={Avatar.colors.DARK_PURPLE}
            text="LC"
            type={Avatar.types.TEXT}
          />
          <Text type={Text.types.TEXT2} className={styles.name}>
            Liron Cohen <span>(Customer Experience)</span>
          </Text>
        </Flex>
        <Flex align={Flex.align.CENTER} justify={Flex.justify.CENTER} key="cont-3">
          <Avatar size={Avatar.sizes.SMALL} text="AL" type={Avatar.types.TEXT} />
          <Text type={Text.types.TEXT2} className={styles.name}>
            Amanda Lawrence <span>(Customer Experience Designer)</span>
          </Text>
        </Flex>
        <Flex align={Flex.align.CENTER} justify={Flex.justify.CENTER} key="cont-4">
          <Avatar size={Avatar.sizes.SMALL} text="DY" type={Avatar.types.TEXT} backgroundColor={Avatar.colors.PEACH} />
          <Text type={Text.types.TEXT2} className={styles.name}>
            Dor Yehuda <span>(Customer Experience Designer)</span>
          </Text>
        </Flex>
      </div>
    </DialogContentContainer>
  ),

  name: "Chips in a person picker combo box"
};
