import React from "react";
import { Clickable, type ClickableProps, Flex, Box } from "@vibe/core";
import { statesPlaySuite } from "./Clickable.interactions";

export default {
  title: "Accessibility/Clickable",
  component: Clickable
};

const clickableTemplate = (args: ClickableProps) => {
  return (
    <Clickable onClick={() => alert("clicked")} {...args}>
      <Box border padding="small" rounded="small">
        I act like a button
      </Box>
    </Clickable>
  );
};

export const Overview = {
  render: clickableTemplate.bind({}),
  name: "Overview",
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const States = {
  render: () => (
    <Flex gap="medium">
      <Clickable onClick={() => alert("clicked")} ariaLabel="clickable button">
        <Box border padding="small" rounded="small">
          Regular clickable element
        </Box>
      </Clickable>
      <Clickable onClick={() => alert("clicked")} disabled ariaLabel="disabled clickable button">
        <Box border backgroundColor="greyBackgroundColor" padding="small" rounded="small">
          Disabled clickable element
        </Box>
      </Clickable>
    </Flex>
  ),

  name: "States",
  play: statesPlaySuite
};
