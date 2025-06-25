import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Add } from "@vibe/icons";
import NumberField from "../NumberField";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import Flex from "../../Flex/Flex";

const metaSettings = createStoryMetaSettingsDecorator({
  component: NumberField,
  actionPropsArray: ["onChange"],
  iconPropNamesArray: ["leftIcon"]
});

export default {
  title: "Components/NumberField",
  component: NumberField,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof NumberField>;

type Story = StoryObj<typeof NumberField>;

export const Overview: Story = {
  render: args => {
    const [value, setValue] = useState(args.value || 0);
    return <NumberField {...args} value={value} onChange={newValue => setValue(newValue)} />;
  }
};

export const ErrorState: Story = {
  render: () => {
    const [value, setValue] = useState(-5);
    return (
      <NumberField
        id="quantity-error"
        value={value}
        onChange={newValue => setValue(newValue)}
        label="Quantity"
        error
        infoText="Value must be 0 or greater"
        min={0}
      />
    );
  }
};

export const SuccessState: Story = {
  render: () => {
    const [value, setValue] = useState(10);
    return (
      <NumberField
        id="quantity-success"
        value={value}
        onChange={newValue => setValue(newValue)}
        label="Quantity"
        success
        infoText="Looks good!"
      />
    );
  }
};

export const DisabledState: Story = {
  render: () => (
    <NumberField
      id="quantity-disabled"
      value={5}
      onChange={() => {}}
      label="Quantity"
      disabled
      infoText="Cannot edit when disabled"
    />
  )
};

export const ReadOnlyState: Story = {
  render: () => (
    <NumberField
      id="answer-readonly"
      value={42}
      onChange={() => {}}
      label="Answer"
      readOnly
      infoText="Read-only field"
    />
  )
};

export const WithIcon: Story = {
  render: () => {
    const [value, setValue] = useState(1);
    return (
      <NumberField
        id="rating-with-icon"
        value={value}
        onChange={newValue => setValue(newValue)}
        label="Rating"
        leftIcon={Add}
      />
    );
  }
};

export const WithInfoText: Story = {
  render: () => {
    const [value, setValue] = useState(100);
    return (
      <NumberField
        id="points-with-info"
        value={value}
        onChange={newValue => setValue(newValue)}
        label="Points"
        infoText="You are doing great!"
      />
    );
  }
};

export const Sizes: Story = {
  render: () => {
    const [valueL, setValueL] = useState(2);
    const [valueM, setValueM] = useState(2);
    const [valueS, setValueS] = useState(2);
    return (
      <Flex gap="medium" align="start">
        <NumberField id="size-large" value={valueL} onChange={setValueL} label="Large" size="large" />
        <NumberField id="size-medium" value={valueM} onChange={setValueM} label="Medium" size="medium" />
        <NumberField id="size-small" value={valueS} onChange={setValueS} label="Small" size="small" />
      </Flex>
    );
  }
};
