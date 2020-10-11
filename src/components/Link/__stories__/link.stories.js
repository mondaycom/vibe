import React from "react";
import { text, select } from "@storybook/addon-knobs";
import Link from "../Link";

export const Sandbox = () => (
  <div className="width-35">
    <Link
      id="Knobs"
      href={text("href", "https://www.monday.com")}
      text={text("text", "Read More")}
      iconName="fa fa-star"
      iconPosition={select(
        "Icon Position",
        {
          Start: Link.position.START,
          End: Link.position.END
        },
        Link.position.START
      )}
    />
  </div>
);

export default {
  title: "Components/Link",
  component: Link
};
