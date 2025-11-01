import React from "react";
import { Tip } from "vibe-storybook-components";

export const TipKnowIssue = () => (
  <Tip type={Tip.types.WARNING} emoji={"⚠️"} title="Known issue">
    {`This solution have a serious issue - it doesn't properly support options-scrolling on popovers when lacking of screen space. 
    We recommend checking using other options instead of this one.`}
  </Tip>
);
