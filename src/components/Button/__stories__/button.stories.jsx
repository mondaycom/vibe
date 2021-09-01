import React, { useState, useCallback } from "react";
import Button from "../Button";
import { Check, Calendar } from "../../Icon/Icons";
import mdx from "./button.stories.mdx";
import "./button.stories.scss";

export const Icons = () => {
  return (
    <div className="monday-storybook-button_icons">
      <Button rightIcon={Calendar}>Right icon</Button>
      <Button leftIcon={Calendar}>Left icon</Button>
    </div>
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
