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
import { Email } from "@vibe/icons";
import person1 from "./assets/person1.png";
import rotem from "./assets/rotem.png";
import { NOOP } from "../../../utils/function-utils";

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
  render: () => <Chips label="Read only chip" readOnly />,
  name: "Chips with read only state"
};

export const ChipsWithIcons = {
  render: () => (
    <Flex>
      <Chips label="Chip with left icon" leftIcon={Email} />
      <Chips label="Chip with right icon" rightIcon={Email} />
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
    <Flex>
      <Chips label="Chip with left avatar" leftAvatar={person1} />
      <Chips label="Chip with right avatar" rightAvatar={person1} />
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
      <Chips label="This is a long chip" />
      <Chips label="Chip positive" color="positive" />
      <Chips label="Chip negative" color="negative" />
      <Chips label="Chip warning" color="warning" />
      <Chips label="Disabled" disabled />
    </>
  ),
  name: "Themes"
};

export const Clickable = {
  render: () => {
    return (
      <Flex direction="row" gap="medium" align="start">
        <Chips label="Clickable default chip" readOnly onClick={NOOP} />
        <Chips label="Clickable removable chip" onClick={NOOP} />
      </Flex>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { NOOP }
      }
    }
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
        align="stretch"
      >
        {allowedColorsChunks.map((colorChunk: any) => {
          return (
            <Flex direction="column" key={colorChunk} justify="space-between" align="stretch">
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
  parameters: {
    docs: {
      liveEdit: {
        scope: { _chunk }
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
            <Chips label="Esther Schanler" leftAvatar={person1} />
            <Chips label="Rotem Dekel" leftAvatar={rotem} />
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
        scope: { person1, rotem }
      }
    }
  },
  name: "Chips in a person picker combo box"
};
