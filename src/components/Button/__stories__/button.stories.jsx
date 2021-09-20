import React, { useState, useCallback } from "react";
import Button from "../Button";
import { Check, Calendar, Add, Remove } from "../../Icon/Icons";
import mdx from "./button.stories.mdx";
import "./button.stories.scss";

const ButtonTemplate = args => <Button {...args} />;

export const Overview = ButtonTemplate.bind({});
Overview.args = {
  children: "Button"
};

export const ButtonPrimaryType = () => <Button>Primary</Button>;

export const ButtonSecondaryType = () => <Button kind={Button.kinds.SECONDARY}>Secondary</Button>;

export const ButtonTertiaryType = () => {
  return <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>;
};

export const DisabledPrimary = () => <Button disabled>Primary</Button>;

export const DisabledSecondary = () => (
  <Button kind={Button.kinds.SECONDARY} disabled>
    Secondary
  </Button>
);

export const DisabledTertiary = () => (
  <Button kind={Button.kinds.TERTIARY} disabled>
    Tertiary
  </Button>
);
export const SizeLarge = () => <Button size={Button.sizes.LARGE}>Large</Button>;
export const SizeMedium = () => <Button size={Button.sizes.MEDIUM}>Medium</Button>;
export const SizeSmall = () => <Button size={Button.sizes.SMALL}>Small</Button>;
export const SuccessColor = () => <Button color={Button.colors.POSITIVE}>Positive</Button>;
export const ErrorColor = () => <Button color={Button.colors.NEGATIVE}>Negative</Button>;
export const rightIcon = () => <Button rightIcon={Calendar}>Right icon</Button>;
export const LeftIcon = () => <Button leftIcon={Calendar}>Left icon</Button>;
export const LoadingState = () => {
  const [loading, setLoading] = useState(false);
  const onClick = useCallback(() => {
    setLoading(true);
  }, [setLoading]);

  return (
    <Button loading={loading} onClick={onClick}>
      Click here for loading
    </Button>
  );
};
export const AdjacmentButtons = () => {
  return (
    <>
      <Button rightFlat kind={Button.kinds.SECONDARY} size={Button.sizes.SMALL} ariaLabel="decrease zoom level">
        <Remove />
      </Button>
      <Button leftFlat kind={Button.kinds.SECONDARY} size={Button.sizes.SMALL} ariaLabel="increase zoom level">
        <Add />
      </Button>
    </>
  );
};

export const SuccessState = () => {
  const [success, setSuccess] = useState(false);
  const onClick = useCallback(() => {
    setSuccess(true);
  }, [setSuccess]);

  return (
    <Button success={success} onClick={onClick} successIcon={Check} successText="Success">
      Click here for success
    </Button>
  );
};

export const OnColorButtonState = () => {
  return (
    <div className="monday-storybook-button_on-color-button">
      <Button color={Button.colors.ON_PRIMARY_COLOR}>Primary on color</Button>
      <Button color={Button.colors.ON_PRIMARY_COLOR} kind={Button.kinds.SECONDARY}>
        Secondary on color
      </Button>
      <Button color={Button.colors.ON_PRIMARY_COLOR} kind={Button.kinds.TERTIARY}>
        Tertiary on color
      </Button>
    </div>
  );
};
export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      page: mdx
    }
  }
};
