import React from "react";
import { useCallback, useState } from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import RadioButton from "../RadioButton";
import { clickRadioButtonPlaySuite, controlRadioButtonPlaySuite } from "./RadioButton.stories.interactions";
import "./RadioButton.stories.scss";
import Button from "../../Button/Button";

const radioButtonTemplate = createComponentTemplate(RadioButton);

export default {
  title: "Inputs/RadioButton",
  component: RadioButton
};

export const Overview = {
  render: radioButtonTemplate.bind({}),
  args: {
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
    <>
      <RadioButton text="Regular" />
      <RadioButton text="Selected" checked />
      <RadioButton text="Disabled" disabled disabledReason="Disabled reason" />
      <RadioButton text="Disabled" checked disabled />
    </>
  )
};

export const RadioButtonInItemsList = {
  render: () => (
    <div className="monday-storybook-radio-buttons_wrapper-column">
      <div>Inbox view options</div>
      <RadioButton text="Inbox updates" name="radio-buttons-group-4" defaultChecked />
      <RadioButton text="I was mentioned" name="radio-buttons-group-4" />
      <RadioButton text="All updates" name="radio-buttons-group-4" />
    </div>
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
      <div className="monday-storybook-radio-buttons_wrapper-column">
        <div>Controlled radio buttons</div>
        <Button kind={Button.kinds.SECONDARY} onClick={onClickCB}>{`Select next radio button (Radio ${
          ((selectedIndex + 1) % 3) + 1
        }) `}</Button>
        <RadioButton text="Radio 1" name="radio-buttons-group-5" checked={selectedIndex === 0} onSelect={onChange} />
        <RadioButton text="Radio 2" name="radio-buttons-group-5" checked={selectedIndex === 1} onSelect={onChange} />
        <RadioButton text="Radio 3" name="radio-buttons-group-5" checked={selectedIndex === 2} onSelect={onChange} />
      </div>
    );
  },
  play: controlRadioButtonPlaySuite,
  name: "Controlled Radio buttons"
};
