import React from "react";
import {
  AlertBanner,
  type AlertBannerProps,
  AlertBannerText,
  AlertBannerLink,
  AlertBannerButton,
  Flex
} from "@vibe/core";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
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
  argTypes: {
    ...metaSettings.argTypes
  },
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
    "aria-label": "Overview alert banner"
  },
  name: "Overview"
};

type Story = StoryObj<typeof AlertBanner>;

export const Types: Story = {
  render: () => (
    <Flex direction="column" gap={16}>
      <AlertBanner id="type-primary" aria-label="Primary alert banner">
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
      <AlertBanner id="type-positive" aria-label="Success alert banner" backgroundColor="positive">
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
      <AlertBanner id="type-negative" aria-label="Error alert banner" backgroundColor="negative">
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
      <AlertBanner id="type-warning" aria-label="Warning alert banner" backgroundColor="warning">
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
      <AlertBanner id="type-dark" aria-label="Dark alert banner" backgroundColor="dark">
        <AlertBannerText text="Alert banner message" />
        <AlertBannerLink text="this is a CTA" href="https://monday.com" />
      </AlertBanner>
    </Flex>
  ),
  name: "Types"
};

export const AlertBannerWithButton: Story = {
  render: () => (
    <AlertBanner id="with-button" aria-label="Alert banner with action button">
      <AlertBannerText text="Lorem ipsum dolor sit amet" />
      <AlertBannerButton>Lorem Ipsum</AlertBannerButton>
    </AlertBanner>
  ),
  name: "Alert Banner with button"
};

export const AlertBannerWithLink: Story = {
  render: () => (
    <AlertBanner id="with-link" aria-label="Alert banner with link">
      <AlertBannerText text="Alert banner message" />
      <AlertBannerLink text="this is a CTA" href="https://monday.com" />
    </AlertBanner>
  ),
  name: "Alert Banner with link"
};

export const AlertBannerAsAnAnnouncement: Story = {
  render: () => (
    <AlertBanner id="announcement" aria-label="Event announcement" backgroundColor="dark">
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
      aria-label="Trial upgrade opportunity"
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
    <AlertBanner id="overflow-text" aria-label="Long text alert banner">
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
