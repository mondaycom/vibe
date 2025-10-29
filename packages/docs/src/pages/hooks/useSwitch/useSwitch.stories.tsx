import React from "react";
import { useSwitch, Toggle, Flex } from "@vibe/core";

export default {
  title: "Hooks/useSwitch"
};

export const Overview = {
  render: () => {
    const { isChecked, onChange } = useSwitch();

    return (
      <Flex direction="column" align="start" gap="medium">
        <Toggle onChange={onChange} isSelected={isChecked} />
        <code>isChecked: {isChecked.toString()}</code>
      </Flex>
    );
  },

  name: "Overview"
};

export const Disabled = {
  render: () => {
    const { isChecked, onChange } = useSwitch({
      isDisabled: true
    });

    return (
      <Flex direction="column" align="start" gap="medium">
        <Toggle onChange={onChange} isSelected={isChecked} />
        <code>isChecked: {isChecked.toString()}</code>
      </Flex>
    );
  },

  name: "Disabled"
};

export const Default = {
  render: () => {
    const defaultChecked = true;

    const { isChecked, onChange } = useSwitch({
      defaultChecked
    });

    return (
      <Flex direction="column" align="start" gap="medium">
        <Toggle onChange={onChange} isSelected={isChecked} />
        <code>isChecked {isChecked.toString()}</code>
        <code>defaultChecked: {defaultChecked.toString()}</code>
      </Flex>
    );
  },

  name: "Default"
};
