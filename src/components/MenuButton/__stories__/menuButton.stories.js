import React from "react";
import { select, boolean } from "@storybook/addon-knobs";
import MenuButton from "../MenuButton";
import { ComponentStateDescription, FlexLayout } from "../../storybook-helpers";
import DropdownChevronDown from "../../Icon/Icons/components/DropdownChevronDown";
import "./menuButton.style.scss";

function MenuButtonContent() {
  return (
    <div className="menu-button-content-story">
      I can be whatever i want to be!
    </div>
  );
}

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
      <MenuButtonContent />
    </MenuButton>
  </div>
);

export const DifferentIcon = () => (
  <div>
    <MenuButton
      component={DropdownChevronDown}
      ariaLabel={"chevron menu icon menu button"}
    >
      <MenuButtonContent />
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
        <MenuButtonContent />
      </MenuButton>
      <ComponentStateDescription title={"XXS"} />
    </section>
    <section>
      <MenuButton
        size={MenuButton.sizes.XS}
        ariaLabel={"extra small menu button"}
      >
        <MenuButtonContent />
      </MenuButton>
      <ComponentStateDescription title={"XS"} />
    </section>
    <section>
      <MenuButton size={MenuButton.sizes.SMALL} ariaLabel={"small menu button"}>
        <MenuButtonContent />
      </MenuButton>
      <ComponentStateDescription title={"SMALL"} />
    </section>
    <section>
      <MenuButton
        size={MenuButton.sizes.MEDIUM}
        ariaLabel={"medium menu button"}
      >
        <MenuButtonContent />
      </MenuButton>
      <ComponentStateDescription title={"MEDIUM"} />
    </section>
    <section>
      <MenuButton size={MenuButton.sizes.LARGE} ariaLabel={"large menu button"}>
        <MenuButtonContent />
      </MenuButton>
      <ComponentStateDescription title={"LARGE"} />
    </section>
  </FlexLayout>
);

export default {
  title: "Components|MenuButton",
  component: MenuButton
};
