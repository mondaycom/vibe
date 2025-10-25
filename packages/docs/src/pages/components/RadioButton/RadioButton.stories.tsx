import React from "react";
import { useCallback, useState } from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import { RadioButton, Button, Flex } from "@vibe/core";
import { clickRadioButtonPlaySuite, controlRadioButtonPlaySuite } from "./RadioButton.stories.interactions";

const radioButtonTemplate = createComponentTemplate(RadioButton);

export default {
  title: "Components/RadioButton",
  component: RadioButton
};

export const Overview = {
  render: radioButtonTemplate.bind({}),
  args: {
    id: "overview-radio",
    text: "Selection"
  },
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
      <RadioButton id="states-regular" text="Regular" />
      <RadioButton id="states-selected" text="Selected" checked />
      <RadioButton id="states-disabled" text="Disabled" disabled disabledReason="Disabled reason" />
      <RadioButton id="states-disabled-checked" text="Disabled" checked disabled />
    </Flex>
  )
};

export const RadioButtonInItemsList = {
  render: () => (
    <Flex direction="column" gap="medium" align="start">
      <div id="inbox-view-label">Inbox view options</div>
      <RadioButton id="inbox-updates" text="Inbox updates" name="radio-buttons-group-4" defaultChecked />
      <RadioButton id="was-mentioned" text="I was mentioned" name="radio-buttons-group-4" />
      <RadioButton id="all-updates" text="All updates" name="radio-buttons-group-4" />
    </Flex>
  ),
  play: clickRadioButtonPlaySuite,
  name: "Radio button in items list"
};

export const ControlledRadioButtons = {
  render: () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const onClickCB = useCallback(() => {
      setSelectedIndex(prev => (prev + 1) % 3);
    }, [setSelectedIndex]);
    const onChange = useCallback(() => {}, []);

    return (
      <Flex direction="column" gap="medium" align="start">
        <div id="controlled-radio-label">Controlled radio buttons</div>
        <Button id="select-next-button" kind="secondary" onClick={onClickCB}>{`Select next radio button (Radio ${
          ((selectedIndex + 1) % 3) + 1
        }) `}</Button>
        <RadioButton
          id="radio-1"
          text="Radio 1"
          name="radio-buttons-group-5"
          checked={selectedIndex === 0}
          onSelect={onChange}
        />
        <RadioButton
          id="radio-2"
          text="Radio 2"
          name="radio-buttons-group-5"
          checked={selectedIndex === 1}
          onSelect={onChange}
        />
        <RadioButton
          id="radio-3"
          text="Radio 3"
          name="radio-buttons-group-5"
          checked={selectedIndex === 2}
          onSelect={onChange}
        />
      </Flex>
    );
  },
  play: controlRadioButtonPlaySuite,
  name: "Controlled Radio buttons"
};
