import React from "react";
import { boolean, number, select, color, text } from "@storybook/addon-knobs";
import AlertBanner from "../AlertBanner";
import AlertBannerText from "../AlertBannerText/AlertBannerText";
import AlertBannerLink from "../AlertBannerLink/AlertBannerLink";
import AlertBannerButton from "../AlertBannerButton/AlertBannerButton";
import Button from "../../Button/Button";

export const Sandbox = () => (
  <div style={{ width: "50%", margin: "40px" }}>
    <AlertBanner
      backgroundColor={select(
        "Background color",
        Object.values(AlertBanner.backgroundColors),
        AlertBanner.backgroundColors.RPIMARY
      )}
      className={select("With custom class", ["alert-banner--custom-class", ""], "")}
      ariaLabel={text("Bar Aria Label", "my awesome alert banner")}
    >
      <AlertBannerText text="bla bla bla" />
      <AlertBannerLink text="bla bla bla" href="https://monday.com" />
      <AlertBannerText text="bla bla bla" />
      <AlertBannerLink text="bla bla bla" href="https://monday.com" />
    </AlertBanner>
  </div>
);

export const Overflowing = () => (
  <div style={{ width: "50%", margin: "40px" }}>
    <AlertBanner
      backgroundColor={select(
        "Background color",
        Object.values(AlertBanner.backgroundColors),
        AlertBanner.backgroundColors.RPIMARY
      )}
      className={select("With custom class", ["alert-banner--custom-class", ""], "")}
      ariaLabel={text("Bar Aria Label", "my awesome alert banner")}
    >
      <AlertBannerText text="bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla" />
      <AlertBannerLink text="bla bla bla" href="https://monday.com" />
      <AlertBannerText text="bla bla bla  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla" />
      <AlertBannerLink text="bla bla bla" href="https://monday.com" />
    </AlertBanner>
  </div>
);

export const AlertBannerWithButtons = () => (
  <div style={{ width: "50%", margin: "40px" }}>
    <AlertBanner
      backgroundColor={select(
        "Background color",
        Object.values(AlertBanner.backgroundColors),
        AlertBanner.backgroundColors.RPIMARY
      )}
      className={select("With custom class", ["alert-banner--custom-class", ""], "")}
      ariaLabel={text("Bar Aria Label", "my awesome alert banner")}
    >
      <AlertBannerText text="bla bla bla bla bla bla bla bla bla" />
      <AlertBannerButton onClick={() => console.log("button clicked")}>bla bla bla</AlertBannerButton>
      <AlertBannerButton onClick={() => console.log("button clicked")}>bla bla bla</AlertBannerButton>
    </AlertBanner>
  </div>
);

export default {
  title: "Components|AlertBanner/AlertBanner",
  component: AlertBanner
};
