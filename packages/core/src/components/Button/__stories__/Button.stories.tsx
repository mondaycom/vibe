import React from "react";
import { useCallback, useState } from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import { Add, Calendar, Check, Remove } from "@vibe/icons";
import { createStoryMetaSettingsDecorator } from "../../../storybook/functions/createStoryMetaSettingsDecorator";
import Button from "../Button";
import { Meta, StoryObj } from "@storybook/react";
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
      <Button>Primary</Button>
      <Button kind="secondary">Secondary</Button>
      <Button kind="tertiary">Tertiary</Button>
    </>
  ),
  name: "Button kinds"
};

export const Sizes: Story = {
  render: () => (
    <>
      <Button size="large">Large</Button>
      <Button size="medium">Medium</Button>
      <Button size="small">Small</Button>
    </>
  )
};

export const Disabled: Story = {
  render: () => (
    <>
      <Button disabled>Primary</Button>
      <Button kind="secondary" disabled>
        Secondary
      </Button>
      <Button kind="tertiary" disabled>
        Tertiary
      </Button>
    </>
  )
};

export const States: Story = {
  render: () => (
    <>
      <Button>Regular</Button>
      <Button active>Active</Button>
    </>
  )
};

export const PositiveAndNegative: Story = {
  render: () => (
    <>
      <Button color="positive">Positive</Button>
      <Button color="negative">Negative</Button>
    </>
  ),
  name: "Positive and Negative"
};

export const Icons: Story = {
  render: () => (
    <>
      <Button rightIcon={Calendar}>Right icon</Button>
      <Button leftIcon={Calendar}>Left icon</Button>
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
      <Button loading={loading} onClick={onClick}>
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
      <Button success={success} onClick={onClick} successIcon={Check} successText="Success">
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
          <Button color="on-primary-color" marginRight>
            Primary on color
          </Button>
          <Button color="on-primary-color" kind="secondary" marginRight>
            Secondary on color
          </Button>
          <Button color="on-primary-color" kind="tertiary">
            Tertiary on color
          </Button>
        </div>
        <br />
        <Text type={Text.types.TEXT1} style={{ marginBottom: "var(--sb-spacing-small)" }}>
          Disabled
        </Text>
        <div style={{ backgroundColor: "var(--sb-primary-color)", padding: "16px" }}>
          <Button color="on-primary-color" disabled marginRight>
            Primary on color
          </Button>
          <Button color="on-primary-color" disabled marginRight kind="secondary">
            Secondary on color
          </Button>
          <Button color="on-primary-color" disabled kind="tertiary">
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
      <Button kind="secondary" size="small" ariaLabel="decrease zoom level" rightFlat>
        <Remove />
      </Button>
      <Button kind="secondary" size="small" ariaLabel="increase zoom level" leftFlat>
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
