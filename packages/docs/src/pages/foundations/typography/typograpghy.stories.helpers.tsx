import React from "react";
import { Link, Tip } from "@ezds/storybook-blocks";

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
