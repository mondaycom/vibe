import React from "react";
import { useCallback, useState } from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import { Add, Calendar, Check, Remove } from "@vibe/icons";
import { createStoryMetaSettingsDecorator } from "@vibe/storybook-config";
import Button from "../Button";
import { type Meta, type StoryObj } from "@storybook/react";
import Text from "../../Text/Text";

type Story = StoryObj<typeof Button>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: Button,
  iconPropNamesArray: ["leftIcon", "rightIcon", "successIcon"],
  actionPropsArray: ["onClick"]
});

export default {
  title: "Components/Button",
  component: Button,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof Button>;

const buttonTemplate = createComponentTemplate(Button);

export const Overview: Story = {
  render: buttonTemplate.bind({}),
  args: {
    id: "overview-button",
    ariaLabel: "Button",
    children: "Button"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const ButtonKinds: Story = {
  render: () => (
    <>
      <Button id="button-kinds-primary" ariaLabel="Primary button">
        Primary
      </Button>
      <Button id="button-kinds-secondary" ariaLabel="Secondary button" kind="secondary">
        Secondary
      </Button>
      <Button id="button-kinds-tertiary" ariaLabel="Tertiary button" kind="tertiary">
        Tertiary
      </Button>
    </>
  ),
  name: "Button kinds"
};

export const Sizes: Story = {
  render: () => (
    <>
      <Button id="sizes-large" ariaLabel="Large button" size="large">
        Large
      </Button>
      <Button id="sizes-medium" ariaLabel="Medium button" size="medium">
        Medium
      </Button>
      <Button id="sizes-small" ariaLabel="Small button" size="small">
        Small
      </Button>
    </>
  )
};

export const Disabled: Story = {
  render: () => (
    <>
      <Button id="disabled-primary" ariaLabel="Primary button disabled" disabled>
        Primary
      </Button>
      <Button id="disabled-secondary" ariaLabel="Secondary button disabled" kind="secondary" disabled>
        Secondary
      </Button>
      <Button id="disabled-tertiary" ariaLabel="Tertiary button disabled" kind="tertiary" disabled>
        Tertiary
      </Button>
    </>
  )
};

export const States: Story = {
  render: () => (
    <>
      <Button id="state-regular" ariaLabel="Regular button">
        Regular
      </Button>
      <Button id="state-active" ariaLabel="Active button" active>
        Active
      </Button>
    </>
  )
};

export const PositiveAndNegative: Story = {
  render: () => (
    <>
      <Button id="color-positive" ariaLabel="Positive button" color="positive">
        Positive
      </Button>
      <Button id="color-negative" ariaLabel="Negative button" color="negative">
        Negative
      </Button>
    </>
  ),
  name: "Positive and Negative"
};

export const Icons: Story = {
  render: () => (
    <>
      <Button id="icons-right" rightIcon={Calendar} ariaLabel="Open calendar on the right icon button">
        Right icon
      </Button>
      <Button id="icons-left" leftIcon={Calendar} ariaLabel="Open calendar on the left icon button">
        Left icon
      </Button>
    </>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { Calendar }
      }
    }
  }
};

export const LoadingState: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);
    const onClick = useCallback(() => {
      setLoading(true);
    }, [setLoading]);
    return (
      <Button id="loading-state-button" ariaLabel="Start loading" loading={loading} onClick={onClick}>
        Click here for loading
      </Button>
    );
  },
  name: "Loading state"
};

export const SuccessState: Story = {
  render: () => {
    const [success, setSuccess] = useState(false);
    const onClick = useCallback(() => {
      setSuccess(true);
    }, [setSuccess]);
    return (
      <Button
        id="success-state-button"
        ariaLabel="Trigger success"
        success={success}
        onClick={onClick}
        successIcon={Check}
        successText="Success"
      >
        Click here for success
      </Button>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { Check }
      }
    }
  },
  name: "Success state"
};

export const OnColorStates: Story = {
  render: () => (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Text type={Text.types.TEXT1} style={{ marginBottom: "var(--sb-spacing-small)" }}>
          Regular
        </Text>
        <div style={{ backgroundColor: "var(--sb-primary-color)", padding: "16px" }}>
          <Button id="on-color-primary" ariaLabel="Primary on color" color="on-primary-color" marginRight>
            Primary on color
          </Button>
          <Button
            id="on-color-secondary"
            ariaLabel="Secondary on color"
            color="on-primary-color"
            kind="secondary"
            marginRight
          >
            Secondary on color
          </Button>
          <Button id="on-color-tertiary" ariaLabel="Tertiary on color" color="on-primary-color" kind="tertiary">
            Tertiary on color
          </Button>
        </div>
        <br />
        <Text type={Text.types.TEXT1} style={{ marginBottom: "var(--sb-spacing-small)" }}>
          Disabled
        </Text>
        <div style={{ backgroundColor: "var(--sb-primary-color)", padding: "16px" }}>
          <Button
            id="on-color-primary-disabled"
            ariaLabel="Primary on color disabled"
            color="on-primary-color"
            disabled
            marginRight
          >
            Primary on color
          </Button>
          <Button
            id="on-color-secondary-disabled"
            ariaLabel="Secondary on color disabled"
            color="on-primary-color"
            disabled
            marginRight
            kind="secondary"
          >
            Secondary on color
          </Button>
          <Button
            id="on-color-tertiary-disabled"
            ariaLabel="Tertiary on color disabled"
            color="on-primary-color"
            disabled
            kind="tertiary"
          >
            Tertiary on color
          </Button>
        </div>
      </div>
    </>
  ),
  name: "On color states"
};

export const AdjacentButtons: Story = {
  render: () => (
    <div>
      <Button id="decrease-zoom-button" kind="secondary" size="small" ariaLabel="Decrease zoom level" rightFlat>
        <Remove />
      </Button>
      <Button id="increase-zoom-button" kind="secondary" size="small" ariaLabel="Increase zoom level" leftFlat>
        <Add />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { Remove, Add }
      }
    }
  },
  name: "Adjacent buttons"
};
