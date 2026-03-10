import React from "react";
import { StorybookLink, Tip } from "@ezds/storybook-blocks";

export const TipMultipleAvatarsTogether = () => (
  <Tip title="Mutiple avatars togethers?">
    If you want to stack multiple avatars together, check out{" "}
    <StorybookLink page="Components/AvatarGroup" size={StorybookLink.sizes.SMALL}>
      AvatarGroup
    </StorybookLink>{" "}
    component
  </Tip>
);
