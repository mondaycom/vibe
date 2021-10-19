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
      isCloseHidden={boolean("Is close hidden", false)}
    >
      <AlertBannerText text="Lorem ipsum" />
      <AlertBannerLink text="Lorem ipsum" href="https://monday.com" />
      <AlertBannerText text="Lorem ipsum" />
      <AlertBannerLink text="Lorem ipsum" href="https://monday.com" />
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
      <AlertBannerText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
      <AlertBannerLink text="Lorem ipsum" href="https://monday.com" />
      <AlertBannerText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
      <AlertBannerLink text="Lorem ipsum" href="https://monday.com" />
    </AlertBanner>
  </div>
);

export const AlertBannerWithButtons = () => {
  const backgroundColor = select(
    "Background color",
    Object.values(AlertBanner.backgroundColors),
    AlertBanner.backgroundColors.RPIMARY
  );
  return (
    <div style={{ width: "50%", margin: "40px" }}>
      <AlertBanner
        backgroundColor={backgroundColor}
        className={select("With custom class", ["alert-banner--custom-class", ""], "")}
        ariaLabel={text("Bar Aria Label", "my awesome alert banner")}
      >
        <AlertBannerText text="Lorem ipsum dolor sit amet" />
        {/* we need to change key when backgroundColor changes to trigger button text color calculation  */}
        <AlertBannerButton key={backgroundColor} onClick={() => console.log("button clicked")}>
          Lorem Ipsum
        </AlertBannerButton>
      </AlertBanner>
    </div>
  );
};

export default {
  title: "Components|AlertBanner",
  component: AlertBanner
};
