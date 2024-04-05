import { useCallback, useState } from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import { Add, Calendar, Check, Remove } from "../../Icon/Icons";
import { createStoryMetaSettingsDecorator } from "../../../storybook/functions/createStoryMetaSettingsDecorator";
import Button from "../Button";
import "./button.stories.scss";

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
};

const buttonTemplate = createComponentTemplate(Button);

export const Overview = {
  render: buttonTemplate.bind({}),
  name: "Overview",
  args: {
    children: "Button"
  }
};

export const ButtonKinds = {
  render: () => (
    <>
      <Button>Primary</Button>
      <Button kind={Button.kinds.SECONDARY}>Secondary</Button>
      <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
    </>
  ),

  name: "Button kinds"
};

export const Sizes = {
  render: () => (
    <>
      <Button size={Button.sizes.LARGE}>Large</Button>
      <Button size={Button.sizes.MEDIUM}>Medium</Button>
      <Button size={Button.sizes.SMALL}>Small</Button>
    </>
  ),

  name: "Sizes"
};

export const Disabled = {
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
  ),

  name: "Disabled"
};

export const States = {
  render: () => (
    <>
      <Button>Regular</Button>
      <Button active>Active</Button>
    </>
  ),

  name: "States"
};

export const PositiveAndNegative = {
  render: () => (
    <>
      <Button color={Button.colors.POSITIVE}>Positive</Button>
      <Button color={Button.colors.NEGATIVE}>Negative</Button>
    </>
  ),

  name: "Positive and Negative"
};

export const Icons = {
  render: () => (
    <>
      <Button rightIcon={Calendar}>Right icon</Button>
      <Button leftIcon={Calendar}>Left icon</Button>
    </>
  ),

  name: "Icons"
};

export const LoadingState = {
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

export const SuccessState = {
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

  name: "Success state"
};

export const OnColorStates = {
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

export const AdjacentButtons = {
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

  name: "Adjacent buttons"
};
