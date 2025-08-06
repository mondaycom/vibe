import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import TextField from "../TextField/TextField";
import Checkbox from "../Checkbox/Checkbox";
import MenuButton from "../MenuButton/MenuButton";
import TextArea from "../TextArea/TextArea";
import Menu from "../Menu/Menu/Menu";
import MenuItem from "../Menu/MenuItem/MenuItem";
import { createStoryMetaSettingsDecorator } from "../../storybook";
import { CloseSmall, Sun, Moon, Favorite } from "@vibe/icons";

type Story = StoryObj;

const metaSettings = createStoryMetaSettingsDecorator({
  component: TextField
});

export default {
  title: "Internal/Accessibility Fixes",
  decorators: metaSettings.decorators
} satisfies Meta;

const TextFieldConditionalExample = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div style={{ width: "400px" }}>
      <TextField
        title="Text Field"
        placeholder="Placeholder text"
        value={searchValue}
        onChange={value => setSearchValue(value)}
        iconName={searchValue ? CloseSmall : undefined}
        iconsNames={{ primary: searchValue ? "Close" : undefined, secondary: searchValue ? "Close" : undefined }}
        clearOnIconClick
      />
    </div>
  );
};

export const TextFieldConditionalIcons: Story = {
  render: TextFieldConditionalExample,
  name: "TextField - Conditional Icons"
};

export const CheckboxJAWSCompatibility: Story = {
  render: () => (
    <div style={{ width: "400px" }}>
      <Checkbox id="terms-checkbox" label="I agree to the terms and conditions" defaultChecked={true} />
    </div>
  ),
  name: "Checkbox - JAWS Compatibility"
};

const MenuButtonExample = () => {
  return (
    <div style={{ width: "400px" }}>
      <MenuButton>
        <Menu id="accessibility-menu" size="medium" focusItemIndexOnMount={0}>
          <MenuItem icon={Sun} iconType="svg" title="Light theme" />
          <MenuItem icon={Moon} iconType="svg" title="Dark theme" />
          <MenuItem icon={Favorite} iconType="svg" title="Favorites" />
        </Menu>
      </MenuButton>
    </div>
  );
};

export const MenuButtonAccessibility: Story = {
  render: MenuButtonExample,
  name: "MenuButton - Accessibility"
};

const TextAreaExample = () => {
  const [textValue, setTextValue] = useState("");

  return (
    <div style={{ width: "400px" }}>
      <TextArea
        label="Message"
        placeholder="Type your message..."
        value={textValue}
        onChange={e => setTextValue(e.target.value)}
        maxLength={100}
        showCharCount
        allowExceedingMaxLength
      />
    </div>
  );
};

export const TextAreaCharacterLimit: Story = {
  render: TextAreaExample,
  name: "TextArea - Character Limit"
};
