import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TextBig } from "@vibe/icons";
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
  },
  decorators: [
    Story => {
      return (
        <div style={{ width: 300 }}>
          <Story />
        </div>
      );
    }
  ],
  parameters: {
    docs: {
      liveEdit: {
        enabled: false
      }
    }
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

export const States: Story = {
  render: () => {
    const [successValue, setSuccessValue] = useState(10);
    const [errorValue, setErrorValue] = useState(5);

    return (
      <Flex direction="column" gap="medium" align="start">
        <NumberField
          id="success-state"
          value={successValue}
          onChange={setSuccessValue}
          label="Success State"
          success
          infoText="This is a success message"
        />
        <NumberField
          id="error-state"
          value={errorValue}
          onChange={setErrorValue}
          label="Error State"
          error
          infoText="This is an error message"
        />
        <NumberField
          id="readonly-state"
          value={42}
          onChange={() => {}}
          label="Read Only State"
          readOnly
          infoText="Read-only field"
        />
        <NumberField
          id="disabled-state"
          value={5}
          onChange={() => {}}
          label="Disabled State"
          disabled
          infoText="Cannot edit when disabled"
        />
      </Flex>
    );
  }
};

export const Validation: Story = {
  render: () => {
    const [value, setValue] = useState(50);
    const [isValid, setIsValid] = useState(true);

    const handleChange = (newValue: number) => {
      setValue(newValue);
    };

    const handleValidityChange = (valid: boolean) => {
      setIsValid(valid);
    };

    return (
      <Flex direction="column" gap="medium" align="start" style={{ width: 300 }}>
        <NumberField
          id="validation-example"
          value={value}
          onChange={handleChange}
          onValidityChange={handleValidityChange}
          label="Validation Example (Range: 0-100)"
          min={0}
          max={100}
          allowOutOfBounds
          success={isValid}
          error={!isValid}
          infoText={isValid ? "Value is within valid range!" : "Value is outside the valid range (0-100)"}
        />
      </Flex>
    );
  }
};

export const Variants: Story = {
  render: () => {
    const [iconValue, setIconValue] = useState(1);
    const [infoValue, setInfoValue] = useState(100);

    return (
      <Flex direction="column" gap="medium" align="start">
        <NumberField id="with-icon" value={iconValue} onChange={setIconValue} label="With Icon" leftIcon={TextBig} />
        <NumberField
          id="with-info"
          value={infoValue}
          onChange={setInfoValue}
          label="With Info Text"
          infoText="You are doing great!"
        />
      </Flex>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { TextBig }
      }
    }
  }
};
