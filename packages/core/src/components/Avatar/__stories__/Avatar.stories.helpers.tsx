import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipMultipleAvatarsTogether = () => (
  <Tip title="Mutiple avatars togethers?">
    If you want to stack multiple avatars together, check out{" "}
    <StorybookLink page="Media/Avatar/AvatarGroup" size={StorybookLink.sizes.SMALL}>
      AvatarGroup
    </StorybookLink>{" "}
    component
  </Tip>
);
