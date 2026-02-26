import React from "react";
import { chunk as _chunk } from "es-toolkit";
import { Chips, Text, Avatar, DialogContentContainer, Flex, Search, ColorUtils } from "@vibe/core";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import { createComponentTemplate } from "vibe-storybook-components";
import { Email } from "@vibe/icons";
import person1 from "../Avatar/assets/person1.png";
import person3 from "../Avatar/assets/person3.png";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Chips,
  iconPropNamesArray: ["rightIcon", "leftIcon"],
  actionPropsArray: ["onDelete", "onMouseDown", "onClick"]
});

const chipsTemplate = createComponentTemplate(Chips);

export default {
  title: "Components/Chips",
  component: Chips,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: chipsTemplate.bind({}),
  name: "Overview",

  args: {
    id: "overview-chip",
    ariaLabel: "Overview chip",
    label: "This is a chip",
    onMouseDown: () => {},
    onClick: () => {}
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const ChipsWithReadOnlyState = {
  render: () => <Chips id="readonly-chip" ariaLabel="Read only chip" label="Read only chip" readOnly />,
  name: "Chips with read only state"
};

export const ChipsWithIcons = {
  render: () => (
    <Flex gap="medium">
      <Chips id="chip-left-icon" ariaLabel="Chip with left email icon" label="Chip with left icon" leftIcon={Email} />
      <Chips
        id="chip-right-icon"
        ariaLabel="Chip with right email icon"
        label="Chip with right icon"
        rightIcon={Email}
      />
    </Flex>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { Email }
      }
    }
  },
  name: "Chips with icons"
};

export const ChipsWithAvatars = {
  render: () => (
    <Flex gap="medium">
      <Chips
        id="chip-left-avatar"
        ariaLabel="Chip with left avatar"
        label="Chip with left avatar"
        leftAvatar={person1}
      />
      <Chips
        id="chip-right-avatar"
        ariaLabel="Chip with right avatar"
        label="Chip with right avatar"
        rightAvatar={person1}
      />
    </Flex>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { person1 }
      }
    }
  },
  name: "Chips with avatars"
};

export const Themes = {
  render: () => (
    <>
      <Chips id="theme-long" ariaLabel="Long chip" label="This is a long chip" />
      <Chips id="theme-positive" ariaLabel="Positive chip" label="Chip positive" color="positive" />
      <Chips id="theme-negative" ariaLabel="Negative chip" label="Chip negative" color="negative" />
      <Chips id="theme-warning" ariaLabel="Warning chip" label="Chip warning" color="warning" />
      <Chips id="theme-neutral" ariaLabel="Neutral chip" label="Chip neutral" color="neutral" />
      <Chips id="theme-disabled" ariaLabel="Disabled chip" label="Disabled" disabled />
    </>
  ),
  name: "Themes"
};

export const Clickable = {
  render: () => {
    return (
      <Flex direction="row" gap="medium" align="start">
        <Chips
          id="clickable-default"
          ariaLabel="Clickable default chip"
          label="Clickable default chip"
          readOnly
          onClick={() => {}}
        />
        <Chips
          id="clickable-removable"
          ariaLabel="Clickable removable chip"
          label="Clickable removable chip"
          onClick={() => {}}
        />
      </Flex>
    );
  },
  name: "Clickable"
};

export const ChipsPalette = {
  render: () => {
    const excludedColors = ["dark_indigo", "blackish"];
    const allowedColors = ColorUtils.contentColors.filter(c => !excludedColors.includes(c));
    const allowedColorsChunks = _chunk(allowedColors, 7);
    return (
      <Flex
        style={{
          width: "100%",
          height: 300
        }}
        align="stretch"
      >
        {allowedColorsChunks.map((colorChunk: any) => {
          return (
            <Flex direction="column" key={colorChunk} justify="space-between" align="stretch">
              {colorChunk.map((colorName: any) => (
                <Chips label={colorName} key={colorName} color={colorName} readOnly allowTextSelection />
              ))}
            </Flex>
          );
        })}
      </Flex>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { _chunk, ColorUtils }
      }
    }
  },
  name: "Chips palette"
};

export const OnColor = {
  render: () => (
    <Flex
      style={{
        width: "100%"
      }}
      align="stretch"
      justify="start"
    >
      <Flex
        align="center"
        justify="center"
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
        align="center"
        justify="center"
        style={{
          background: "var(--positive-color-selected)",
          width: "124px",
          height: "64px",
          margin: "var(--sb-spacing-small)",
          borderRadius: "var(--sb-border-radius-small)"
        }}
      >
        <Chips label="On positive" showBorder color="positive" readOnly />
      </Flex>
      <Flex
        align="center"
        justify="center"
        style={{
          background: "var(--sb-negative-color-selected)",
          width: "124px",
          height: "64px",
          margin: "var(--sb-spacing-small)",
          borderRadius: "var(--sb-border-radius-small)"
        }}
      >
        <Chips label="On negative" showBorder color="negative" readOnly />
      </Flex>
      <Flex
        align="center"
        justify="center"
        style={{
          background: "var(--ui-background-color)",
          width: "124px",
          height: "64px",
          margin: "var(--sb-spacing-small)",
          borderRadius: "var(--sb-border-radius-small)"
        }}
      >
        <Chips label="On neutral" showBorder color="neutral" readOnly />
      </Flex>
    </Flex>
  ),

  name: "On color"
};

export const ColorfulChipsForDifferentContent = {
  render: () => (
    <Flex>
      <DialogContentContainer>
        <Flex direction="column" align="start" gap="medium" style={{ padding: "var(--spacing-small)" }}>
          <div>
            <Chips label="January" color="positive" />
          </div>
          <Search />
          <div>
            <Chips label="August" readOnly color="lipstick" />
          </div>
          <div>
            <Chips label="April" readOnly color="bubble" />
          </div>
          <div>
            <Chips label="March" readOnly color="egg_yolk" />
          </div>
        </Flex>
      </DialogContentContainer>
    </Flex>
  ),
  name: "Colorful chips for different content"
};

export const ChipsInAPersonPickerComboBox = {
  render: () => (
    <Flex>
      <DialogContentContainer>
        <Flex direction="column" align="start" gap="medium" style={{ padding: "var(--spacing-small)" }}>
          <Search placeholder="Search names, positions, or a team" />
          <Flex align="center" justify="center">
            <Chips label="Julia Martinez" leftAvatar={person1} />
            <Chips label="Juan Rodriguez" leftAvatar={person3} />
          </Flex>
          <Text style={{ paddingInlineStart: "var(--spacing-xs)", marginTop: "var(--spacing-xs)" }}>
            Suggested people
          </Text>
          <Flex direction="column" align="start" gap="medium">
            <Flex align="center" justify="center" key="cont-1" gap="small">
              <Avatar size="small" src={person1} type="img" />
              <Flex gap="xs">
                <Text>May Kishon </Text>
                <Text color="secondary">(UX/UI Product Designer)</Text>
              </Flex>
            </Flex>
            <Flex align="center" justify="center" key="cont-2" gap="small">
              <Avatar size="small" backgroundColor="dark_purple" text="LC" type="text" />
              <Flex gap="xs">
                <Text>Liron Cohen</Text>
                <Text color="secondary">(Customer Experience)</Text>
              </Flex>
            </Flex>
            <Flex align="center" justify="center" key="cont-3" gap="small">
              <Avatar size="small" text="AL" type="text" />
              <Flex gap="xs">
                <Text>Amanda Lawrence</Text>
                <Text color="secondary">(Customer Experience Designer)</Text>
              </Flex>
            </Flex>
            <Flex align="center" justify="center" key="cont-4" gap="small">
              <Avatar size="small" text="DY" type="text" backgroundColor="peach" />
              <Flex gap="xs">
                <Text>Dor Yehuda</Text>
                <Text color="secondary">(Customer Experience Designer)</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </DialogContentContainer>
    </Flex>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { person1, person3 }
      }
    }
  },
  name: "Chips in a person picker combo box"
};
