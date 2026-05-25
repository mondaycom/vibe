import React from "react";
import { HiddenText, type HiddenTextProps } from "@vibe/core";

export default {
  title: "Accessibility/HiddenText",
  component: HiddenText
};

export const Overview = {
  render: (args: HiddenTextProps) => {
    return <HiddenText text="Hello hidden text" {...args} />;
  }
};
