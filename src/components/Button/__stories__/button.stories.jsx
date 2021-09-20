import React, { useState, useCallback } from "react";
import Button from "../Button";
import { Check, Calendar, Add, Remove } from "../../Icon/Icons";
import mdx from "./button.stories.mdx";
import "./button.stories.scss";
import { MultipleStoryElementsWrapper } from "../../../storybook-components/multiple-story-elements-wrapper/multiple-story-elements-wrapper";

const ButtonTemplate = args => <Button {...args} />;

export const Overview = ButtonTemplate.bind({});
Overview.args = {
  children: "Button"
};

export const ButtonTypes = () => {
  return (
    <MultipleStoryElementsWrapper>
      <Button>Primary</Button>
      <Button kind={Button.kinds.SECONDARY}>Secondary</Button>
      <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
    </MultipleStoryElementsWrapper>
  );
};

export const Disabled = () => {
  return (
    <MultipleStoryElementsWrapper>
      <Button disabled>Primary</Button>
      <Button kind={Button.kinds.SECONDARY} disabled>
        Secondary
      </Button>
      <Button kind={Button.kinds.TERTIARY} disabled>
        Tertiary
      </Button>
    </MultipleStoryElementsWrapper>
  );
};

export const Sizes = () => {
  return (
    <MultipleStoryElementsWrapper>
      <Button size={Button.sizes.LARGE}>Large</Button>
      <Button size={Button.sizes.MEDIUM}>Medium</Button>
      <Button size={Button.sizes.SMALL}>Small</Button>
    </MultipleStoryElementsWrapper>
  );
};

export const States = () => {
  return (
    <MultipleStoryElementsWrapper>
      <Button>Regular</Button>
      <Button>Hover</Button>
      <Button>Active</Button>
      <Button disabled>Disabled</Button>
    </MultipleStoryElementsWrapper>
  );
};

export const ErrorAndSuccess = () => {
  return (
    <MultipleStoryElementsWrapper>
      <Button color={Button.colors.POSITIVE}>Positive</Button>
      <Button color={Button.colors.NEGATIVE}>Negative</Button>
    </MultipleStoryElementsWrapper>
  );
};

export const Icons = () => {
  return (
    <MultipleStoryElementsWrapper className="monday-storybook-button_icons">
      <Button rightIcon={Calendar}>Right icon</Button>
      <Button leftIcon={Calendar}>Left icon</Button>
    </MultipleStoryElementsWrapper>
  );
};

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

export const adjacmentButtons = () => {
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
    <MultipleStoryElementsWrapper className="monday-storybook-button_on-color-button">
      <Button color={Button.colors.ON_PRIMARY_COLOR}>Primary on color</Button>
      <Button color={Button.colors.ON_PRIMARY_COLOR} kind={Button.kinds.SECONDARY}>
        Secondary on color
      </Button>
      <Button color={Button.colors.ON_PRIMARY_COLOR} kind={Button.kinds.TERTIARY}>
        Tertiary on color
      </Button>
    </MultipleStoryElementsWrapper>
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
