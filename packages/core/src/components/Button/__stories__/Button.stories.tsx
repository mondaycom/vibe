import React from "react";
import { useCallback, useState } from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import { Add, Calendar, Check, Remove } from "../../Icon/Icons";
import { createStoryMetaSettingsDecorator } from "../../../storybook/functions/createStoryMetaSettingsDecorator";
import Button from "../Button";
import "./Button.stories.scss";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Button>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: Button,
  enumPropNamesArray: ["kind", "size", "color", "type"],
  iconPropNamesArray: ["leftIcon", "rightIcon", "successIcon"],
  actionPropsArray: ["onClick"]
});

export default {
  title: "Buttons/Button",
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
      <Button kind={Button.kinds.SECONDARY}>Secondary</Button>
      <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
    </>
  ),
  name: "Button kinds"
};

export const Sizes: Story = {
  render: () => (
    <>
      <Button size={Button.sizes.LARGE}>Large</Button>
      <Button size={Button.sizes.MEDIUM}>Medium</Button>
      <Button size={Button.sizes.SMALL}>Small</Button>
    </>
  )
};

export const Disabled: Story = {
  render: () => (
    <>
      <Button disabled>Primary</Button>
      <Button kind={Button.kinds.SECONDARY} disabled>
        Secondary
      </Button>
      <Button kind={Button.kinds.TERTIARY} disabled>
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
      <Button color={Button.colors.POSITIVE}>Positive</Button>
      <Button color={Button.colors.NEGATIVE}>Negative</Button>
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
        <span style={{ marginBottom: "var(--sb-spacing-small)" }}>Regular</span>
        <div className="monday-storybook-button_on-color-button">
          <Button color={Button.colors.ON_PRIMARY_COLOR} marginRight>
            Primary on color
          </Button>
          <Button color={Button.colors.ON_PRIMARY_COLOR} kind={Button.kinds.SECONDARY} marginRight>
            Secondary on color
          </Button>
          <Button color={Button.colors.ON_PRIMARY_COLOR} kind={Button.kinds.TERTIARY}>
            Tertiary on color
          </Button>
        </div>
        <br />
        <span style={{ marginBottom: "var(--sb-spacing-small)" }}>Disabled</span>
        <div className="monday-storybook-button_on-color-button">
          <Button color={Button.colors.ON_PRIMARY_COLOR} disabled marginRight>
            Primary on color
          </Button>
          <Button color={Button.colors.ON_PRIMARY_COLOR} disabled marginRight kind={Button.kinds.SECONDARY}>
            Secondary on color
          </Button>
          <Button color={Button.colors.ON_PRIMARY_COLOR} disabled kind={Button.kinds.TERTIARY}>
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
      <Button kind={Button.kinds.SECONDARY} size={Button.sizes.SMALL} ariaLabel="decrease zoom level" rightFlat>
        <Remove />
      </Button>
      <Button kind={Button.kinds.SECONDARY} size={Button.sizes.SMALL} ariaLabel="increase zoom level" leftFlat>
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
