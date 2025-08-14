import React from "react";
import AlertBanner, { type AlertBannerProps } from "../AlertBanner";
import AlertBannerText from "../AlertBannerText/AlertBannerText";
import AlertBannerLink from "../AlertBannerLink/AlertBannerLink";
import AlertBannerButton from "../AlertBannerButton/AlertBannerButton";
import { createStoryMetaSettingsDecorator } from "../../../storybook/functions/createStoryMetaSettingsDecorator";
import Flex from "../../Flex/Flex";
import { type Meta, type StoryObj } from "@storybook/react";

const metaSettings = createStoryMetaSettingsDecorator({
  component: AlertBanner,
  actionPropsArray: ["onClose"]
});

const alertBannerTemplate = (args: AlertBannerProps) => {
  return (
    <AlertBanner {...args}>
      <AlertBannerText text="Alert banner message" />
      <AlertBannerLink text="this is a CTA" href="https://monday.com" />
    </AlertBanner>
  );
};

export default {
  title: "Components/AlertBanner",
  component: AlertBanner,
  subcomponents: {
    AlertBannerText,
    AlertBannerLink,
    AlertBannerButton
  },
  argTypes: metaSettings.argTypes,
  decorators: [
    ...metaSettings.decorators,
    (Story: React.ComponentType) => (
      <div style={{ width: "610px" }}>
        <Story />
      </div>
    )
  ]
} as Meta<typeof AlertBanner>;

export const Overview = {
  render: alertBannerTemplate.bind({}),
  args: {
    id: "overview-alert-banner",
    ariaLabel: "Overview alert banner"
  },
  name: "Overview"
};

type Story = StoryObj<typeof AlertBanner>;

export const Types: Story = {
  render: () => (
    <Flex direction="column" gap={16}>
      <AlertBanner id="type-primary" ariaLabel="Primary alert banner">
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
      <AlertBanner id="type-positive" ariaLabel="Success alert banner" backgroundColor="positive">
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
      <AlertBanner id="type-negative" ariaLabel="Error alert banner" backgroundColor="negative">
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
      <AlertBanner id="type-warning" ariaLabel="Warning alert banner" backgroundColor="warning">
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
      <AlertBanner id="type-dark" ariaLabel="Dark alert banner" backgroundColor="dark">
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
    </Flex>
  ),
  name: "Types"
};

export const AlertBannerWithButton: Story = {
  render: () => (
    <AlertBanner id="with-button" ariaLabel="Alert banner with action button">
      <AlertBannerText text="Lorem ipsum dolor sit amet" />
      <AlertBannerButton>Lorem Ipsum</AlertBannerButton>
    </AlertBanner>
  ),
  name: "Alert Banner with button"
};

export const AlertBannerWithLink: Story = {
  render: () => (
    <AlertBanner id="with-link" ariaLabel="Alert banner with link">
      <AlertBannerText text="Alert banner message" />
      <AlertBannerLink text="this is a CTA" href="https://monday.com" />
    </AlertBanner>
  ),
  name: "Alert Banner with link"
};

export const AlertBannerAsAnAnnouncement: Story = {
  render: () => (
    <AlertBanner id="announcement" ariaLabel="Event announcement" backgroundColor="dark">
      <AlertBannerText text="Join us at Elevate 2022" />
      <AlertBannerLink text="RSVP now" href="https://monday.com" />
    </AlertBanner>
  ),
  name: "Alert banner as an announcement"
};

export const AlertBannerAsAnOpportunityToUpgrade: Story = {
  render: () => (
    <AlertBanner
      id="upgrade-opportunity"
      ariaLabel="Trial upgrade opportunity"
      onClose={() => {}}
      closeButtonAriaLabel="Close upgrade banner"
    >
      <AlertBannerText text="7 days left on your monday CRM trial" />
      <AlertBannerLink text="Upgrade now" href="https://monday.com" />
    </AlertBanner>
  ),
  name: "Alert banner as an opportunity to upgrade"
};

export const OverflowText: Story = {
  render: () => (
    <AlertBanner id="overflow-text" ariaLabel="Long text alert banner">
      <AlertBannerText text="This is a really long alert..." />
      <AlertBannerLink text="Call to action" href="https://monday.com" />
    </AlertBanner>
  ),
  name: "Overflow text",
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ width: "320px" }}>
        <Story />
      </div>
    )
  ]
};
