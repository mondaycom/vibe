import React from "react";
import { Link, Tip } from "vibe-storybook-components";

export const TipHowToUseFonts = () => (
  <Tip title="How to use the fonts?">
    Figtree and Poppins are both Google Fonts. Click
    <Link size={Link.sizes.SMALL} href="https://fonts.google.com/specimen/Figtree">
      here
    </Link>
    to download Figtree, and click
    <Link size={Link.sizes.SMALL} href="https://fonts.google.com/specimen/Poppins">
      here
    </Link>
    to download Poppins.
  </Tip>
);

export const TipNextEndpoint = () => (
  <Tip emoji="⚠️" title="Notice">
    Heading is imported from <code>/next</code> since {"there's"} a legacy component with the same name. This component
    will replace the legacy component in the next major version.
  </Tip>
);

export const TipUseComponent = () => (
  <Tip title="Notice">
    No need to define classes for text element and use typography CSS variables anymore, these components cover all the
    possible variants.
  </Tip>
);
