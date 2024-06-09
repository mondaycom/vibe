import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipTextField = () => (
  <Tip title="Am I using the right component?">
    This component is used for editing existing text. To allow users to fill empty text fields, for example in a form,
    consider using{" "}
    <StorybookLink page="Inputs/TextField" size={StorybookLink.sizes.SMALL}>
      TextField
    </StorybookLink>
  </Tip>
);
