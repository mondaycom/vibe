import React from "react";
import { StorybookLink, Tip, UsageGuidelines } from "vibe-storybook-components";

export const TipCheckYourself = () => (
  <Tip title="Check yourself">
    Need to indicate information that is not numeric? Use the{" "}
    <StorybookLink page="Data display/Label" size={StorybookLink.sizes.SMALL}>
      Label
    </StorybookLink>{" "}
    component instead.
  </Tip>
);

export const Usage = () => (
  <UsageGuidelines
    guidelines={[
      "Counters are usually placed after the label of the item they're quantifying, such as the number of notifications. They should only be used to represent a number.",
      <div className="monday-storybook-counter_usage-link-line">
        The element the counter refers to should include <StorybookLink page="Popover/Tooltip">Tooltip</StorybookLink>
        {" , where necessary, to enhance user understanding. For example, a badge is used in conjunction with an icon."}
      </div>
    ]}
  />
);
