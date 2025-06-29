import React from "react";
import HiddenText, { HiddenTextProps } from "../HiddenText";

export default {
  title: "Accessibility/HiddenText",
  component: HiddenText
};

export const Overview = {
  render: (args: HiddenTextProps) => {
    return <HiddenText text="Hello hidden text" {...args} />;
  }
};
