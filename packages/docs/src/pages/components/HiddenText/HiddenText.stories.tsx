import React from "react";
import { HiddenText, type HiddenTextProps } from "@ezds/core";

export default {
  title: "Accessibility/HiddenText",
  component: HiddenText
};

export const Overview = {
  render: (args: HiddenTextProps) => {
    return <HiddenText text="Hello hidden text" {...args} />;
  }
};
