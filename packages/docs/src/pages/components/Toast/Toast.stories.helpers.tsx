import React from "react";
import { StorybookLink, Tip } from "@ezds/storybook-blocks";

export const TipAlertBanner = () => (
  <Tip title="Check yourself">
    Need to inform the user about a system’s action? Use an{" "}
    <StorybookLink page="Components/AlertBanner" size={StorybookLink.sizes.SMALL}>
      AlertBanner
    </StorybookLink>{" "}
    instead.
  </Tip>
);
