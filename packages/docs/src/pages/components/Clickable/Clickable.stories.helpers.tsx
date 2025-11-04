import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipHookSolution = () => (
  <Tip title="Check out our hook solution for this use case">
    {`If you'd like to set clickable functionality on a specific element inside your React component instead of using a
    wrapper, please, take a look on our `}
    <StorybookLink size={StorybookLink.sizes.SMALL} page="Hooks/useClickableProps">
      useClickableProps
    </StorybookLink>{" "}
    hook.
  </Tip>
);
