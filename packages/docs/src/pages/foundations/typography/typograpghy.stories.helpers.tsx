import React from "react";
import { Link, Tip } from "vibe-storybook-components";

export const TipHowToUseFonts = () => (
  <Tip title="How to use the fonts?">
    Figtree and Poppins are both Google Fonts. Click
    <Link size="small" href="https://fonts.google.com/specimen/Figtree">
      here
    </Link>
    to download Figtree, and click
    <Link size="small" href="https://fonts.google.com/specimen/Poppins">
      here
    </Link>
    to download Poppins.
  </Tip>
);
