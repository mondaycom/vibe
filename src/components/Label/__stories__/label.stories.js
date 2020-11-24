import React from "react";
import Label from "../Label";
import { select, text } from "@storybook/addon-knobs";

export const Sandbox = () => (
  <div>
    <Label
      id="Knobs"
      text={text("Text", "New")}
      color={select("Color", Object.values(Label.colors), Label.colors.PRIMARY)}
      kind={select("Kind", Object.values(Label.kinds), Label.kinds.FILL)}
    />
  </div>
);

export default {
  title: "Components/Label",
  component: Label
};
