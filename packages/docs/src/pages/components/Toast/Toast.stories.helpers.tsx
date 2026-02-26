import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipAlertBanner = () => (
  <Tip title="Check yourself">
    Need to inform the user about a system’s action? Use an{" "}
    <StorybookLink page="Components/AlertBanner" size="small">
      AlertBanner
    </StorybookLink>{" "}
    instead.
  </Tip>
);
