import React from "react";
import FormattedNumber from "../FormattedNumber";
import { text, number, select, boolean } from "@storybook/addon-knobs";
import "./formattedNumber.stories.scss";

export const Sandbox = () => (
  <div style={{ width: "100%", margin: "40px" }}>
    <div style={{ width: "40px", heigt: "40px" }}>
      <FormattedNumber
        className={select("With custom class", ["custom-class", ""], "")}
        value={number("Value", 50000)}
        prefix={text("Prefix", "$")}
        suffix={text("Suffix", "Human")}
        decimalPrecision={number("Precision", 2)}
        emptyPlaceHolder={text("Place Holder", "N/A")}
        local={text("Local", "en-US")}
        compact={boolean("Is compact", true)}
        rtl={boolean("Right to Left", false)}
      />
    </div>
  </div>
);

export default {
  title: "Components/FormattedNumber",
  component: FormattedNumber
};
