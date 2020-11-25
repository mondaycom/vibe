import React from "react";
import MenuButton from "../MenuButton";
import { ComponentStateDescription, FlexLayout } from "../../storybook-helpers";
import { select, boolean } from "@storybook/addon-knobs";
import StoryDialogContent from "../../Dialog/__stories__/StoryComponents/StoryDialogContent";
import DropdownChevronDown from "../../Icon/Icons/components/DropdownChevronDown";
import "./menuButton.style.scss";

export const Sandbox = () => (
  <div>
    <MenuButton
      id="Knobs"
      size={select("Size", MenuButton.sizes, MenuButton.sizes.MEDIUM)}
      closeDialogOnContentClick={boolean(
        "Close Dialog On Content Click",
        false
      )}
      ariaLabel={"Default menu icon"}
    >
      <StoryDialogContent />
    </MenuButton>
  </div>
);

export const DifferentIcon = () => (
  <div>
    <MenuButton
      component={DropdownChevronDown}
      ariaLabel={"chevron menu icon menu button"}
    >
      <StoryDialogContent />
    </MenuButton>
  </div>
);

export const Sizes = () => (
  <FlexLayout fullWidth spaceBetween className="monday-button-story-ai ">
    <section>
      <MenuButton
        size={MenuButton.sizes.XXS}
        ariaLabel={"extra extra small menu button"}
      >
        <StoryDialogContent />
      </MenuButton>
      <ComponentStateDescription title={"XXS"} />
    </section>
    <section>
      <MenuButton
        size={MenuButton.sizes.XS}
        ariaLabel={"extra small menu button"}
      >
        <StoryDialogContent />
      </MenuButton>
      <ComponentStateDescription title={"XS"} />
    </section>
    <section>
      <MenuButton size={MenuButton.sizes.SMALL} ariaLabel={"small menu button"}>
        <StoryDialogContent />
      </MenuButton>
      <ComponentStateDescription title={"SMALL"} />
    </section>
    <section>
      <MenuButton
        size={MenuButton.sizes.MEDIUM}
        ariaLabel={"medium menu button"}
      >
        <StoryDialogContent />
      </MenuButton>
      <ComponentStateDescription title={"MEDIUM"} />
    </section>
    <section>
      <MenuButton size={MenuButton.sizes.LARGE} ariaLabel={"large menu button"}>
        <StoryDialogContent />
      </MenuButton>
      <ComponentStateDescription title={"LARGE"} />
    </section>
  </FlexLayout>
);

export default {
  title: "Components|MenuButton",
  component: MenuButton
};
