import React from "react";
import AlertBanner from "../AlertBanner";
import AlertBannerText from "../AlertBannerText/AlertBannerText";
import AlertBannerLink from "../AlertBannerLink/AlertBannerLink";
import AlertBannerButton from "../AlertBannerButton/AlertBannerButton";
import { createStoryMetaSettingsDecorator } from "../../../storybook/functions/createStoryMetaSettingsDecorator";
import "./AlertBanner.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: AlertBanner,
  enumPropNamesArray: ["backgroundColor"]
});

const alertBannerTemplate = args => {
  return (
    <AlertBanner {...args}>
      <AlertBannerText text={args.bannerText} />
      <AlertBannerLink text={args.linkText} href="https://monday.com" />
    </AlertBanner>
  );
};

export default {
  title: "Feedback/AlertBanner",
  component: AlertBanner,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: alertBannerTemplate.bind({}),
  name: "Overview",

  args: {
    bannerText: "Alert banner message",
    linkText: "this is a CTA",
    className: "monday-storybook-alert-banner_big-container"
  }
};

export const Types = {
  render: () => (
    <div className="monday-storybook-alert-banner_column-wrapper monday-storybook-alert-banner_big-container">
      <AlertBanner>
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
      <AlertBanner backgroundColor={AlertBanner.backgroundColors.POSITIVE}>
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
      <AlertBanner backgroundColor={AlertBanner.backgroundColors.NEGATIVE}>
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
      <AlertBanner backgroundColor={AlertBanner.backgroundColors.WARNING}>
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
      <AlertBanner backgroundColor={AlertBanner.backgroundColors.DARK}>
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
    </div>
  ),

  name: "Types"
};

export const AlertBannerWithButton = {
  render: () => (
    <AlertBanner className="monday-storybook-alert-banner_big-container">
      <AlertBannerText text="Lorem ipsum dolor sit amet" />
      <AlertBannerButton>Lorem Ipsum</AlertBannerButton>
    </AlertBanner>
  ),

  name: "Alert Banner with button"
};

export const AlertBannerWithLink = {
  render: () => (
    <AlertBanner className="monday-storybook-alert-banner_big-container">
      <AlertBannerText text="Alert banner message" />
      <AlertBannerLink text="this is a CTA" href="https://monday.com" />
    </AlertBanner>
  ),

  name: "Alert Banner with link"
};

export const AlertBannerAsAnAnnouncement = {
  render: () => (
    <AlertBanner
      backgroundColor={AlertBanner.backgroundColors.DARK}
      className="monday-storybook-alert-banner_big-container"
    >
      <AlertBannerText text="Join us at Elevate 2022" />
      <AlertBannerLink text="RSVP now" href="https://monday.com" />
    </AlertBanner>
  ),

  name: "Alert banner as an announcement"
};

export const AlertBannerAsAnOpportunityToUpgrade = {
  render: () => (
    <AlertBanner className="monday-storybook-alert-banner_big-container">
      <AlertBannerText text="7 days left on your monday CRM trial" />
      <AlertBannerLink text="Upgrade now" href="https://monday.com" />
    </AlertBanner>
  ),

  name: "Alert banner as an opportunity to upgrade"
};

export const OverflowText = {
  render: () => (
    <AlertBanner className="monday-storybook-alert-banner_small-container">
      <AlertBannerText text="This is a really long alert..." />
      <AlertBannerLink text="Call to action" href="https://monday.com" />
    </AlertBanner>
  ),

  name: "Overflow text"
};
