import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipWhenToUse = () => (
  <Tip title="When to use?">
    Alert banners should be reserved only for high-signal, system-level alert messages. For in-app notifications use a{" "}
    <StorybookLink page="Feedback/Toast" size={StorybookLink.sizes.SMALL}>
      Toast.
    </StorybookLink>
  </Tip>
);
