import React from "react";
import { text } from "@storybook/addon-knobs";
import Dropdown from "../Dropdown";

export const Sandbox = () => (
  <div>
    <Dropdown id="Knobs" text={text("Text", "Test knob value")} />
  </div>
);

export default {
  title: "Components/Dropdown",
  component: Dropdown
};
