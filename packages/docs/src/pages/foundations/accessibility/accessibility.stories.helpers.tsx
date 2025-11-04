import React from "react";
import { Link, Tip } from "vibe-storybook-components";
import { accessibilityCheckList } from "./assets";

export const TipChecklistLink = () => (
  <Tip title="Get our Accessibility checklist">
    <Link href={accessibilityCheckList} size={Link.sizes.SMALL}>
      Download
    </Link>
    our accessibility checklist file.
  </Tip>
);

export const TipColorContrast = () => (
  <Tip title="Use color contrast tools for code and design">
    <div>
      To check color contrast in design use
      <Link href="https://www.figma.com/community/plugin/748533339900865323/Contrast" size={Link.sizes.SMALL}>
        contrast figma plugin
      </Link>
      and inspect elements accessibility tab for live code verification
    </div>
  </Tip>
);

export const TipTabNavigation = () => (
  <Tip title="We got you covered with tab navigation">
    Use this keyboard navigation infra in any UI that requires it.
  </Tip>
);
