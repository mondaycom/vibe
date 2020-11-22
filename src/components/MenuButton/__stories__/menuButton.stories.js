import React from "react";
import MenuButton from "../MenuButton";
import {
  StoryStateRow,
  StoryStateColumn,
  ComponentStateDescription,
  FlexLayout,
  Divider
} from "../../storybook-helpers";
import { action } from "@storybook/addon-actions";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import DarkThemeContainer from "../../../StoryBookComponents/DarkThemeContainer/DarkThemeContainer";
import StoryDialogContent from "../../Dialog/__stories__/StoryComponents/StoryDialogContent";
import DropdownChevronDown from "../../Icon/Icons/components/DropdownChevronDown";
import "./menuButton.style.scss"

export const Sandbox = () => (
  <div>
    <MenuButton
      id="Knobs"
      size={select("Size", MenuButton.sizes, MenuButton.sizes.MEDIUM)}
    >
      <StoryDialogContent />
    </MenuButton>
  </div>
);

export const DifferentIcon = () => (
  <div>
    <MenuButton icon={DropdownChevronDown}>
      <StoryDialogContent />
    </MenuButton>
  </div>
);

export const Sizes = () => (
  <FlexLayout fullWidth spaceBetween className="monday-button-story-ai ">
    <MenuButton size={MenuButton.sizes.XXS}>
      <StoryDialogContent />
    </MenuButton>
    <MenuButton size={MenuButton.sizes.XS}>
      <StoryDialogContent />
    </MenuButton>
    <MenuButton size={MenuButton.sizes.SMALL}>
      <StoryDialogContent />
    </MenuButton>
    <MenuButton size={MenuButton.sizes.MEDIUM}>
      <StoryDialogContent />
    </MenuButton>
    <MenuButton size={MenuButton.sizes.LARGE}>
      <StoryDialogContent />
    </MenuButton>
  </FlexLayout>
);

export default {
  title: "Components/MenuButton",
  component: MenuButton
};
