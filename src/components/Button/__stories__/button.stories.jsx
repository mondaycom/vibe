import React, { useState, useCallback } from "react";
import mdx from "./button.stories.mdx";
import Button from "../Button";

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
/**
export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      page: mdx
    }
  }
};
* */
