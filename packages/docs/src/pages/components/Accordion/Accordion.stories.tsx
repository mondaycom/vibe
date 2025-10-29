import React from "react";
import { Accordion, type AccordionProps, AccordionItem, Checkbox, Flex } from "@vibe/core";
import { accordionMultiActivePlaySuite, accordionSingleActivePlaySuite } from "./Accordion.interactions";

const accordionTemplate = (args: AccordionProps) => {
  return (
    <Accordion id="overview-accordion" defaultIndex={[1]} {...args}>
      <AccordionItem id="overview-notifications" title="Notifications">
        <div style={{ height: 150 }} />
      </AccordionItem>
      <AccordionItem id="overview-setting" title="Setting">
        <div style={{ height: 150 }} />
      </AccordionItem>
      <AccordionItem id="overview-info" title="Info">
        <div style={{ height: 150 }} />
      </AccordionItem>
      <AccordionItem id="overview-profile" title="Profile">
        <div style={{ height: 150 }} />
      </AccordionItem>
      <AccordionItem id="overview-permissions" title="Permissions">
        <div style={{ height: 150 }} />
      </AccordionItem>
      <AccordionItem id="overview-security" title="Security">
        <div style={{ height: 150 }} />
      </AccordionItem>
      <AccordionItem id="overview-connectivity" title="Connectivity">
        <div style={{ height: 150 }} />
      </AccordionItem>
      <AccordionItem id="overview-integration" title="Integration">
        <div style={{ height: 150 }} />
      </AccordionItem>
      <AccordionItem id="overview-assets" title="Assets">
        <div style={{ height: 150 }} />
      </AccordionItem>
    </Accordion>
  );
};

export default {
  title: "Components/Accordion",
  component: Accordion,

  subcomponents: {
    AccordionItem
  },

  argTypes: {
    children: {
      control: false
    },

    defaultIndex: {
      control: false
    }
  },

  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    )
  ]
};

export const Overview = {
  render: accordionTemplate.bind({}),
  name: "Overview",
  args: {},
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const MultiActive = {
  render: () => (
    <Accordion id="multi-active-accordion" allowMultiple defaultIndex={[1, 3]}>
      <AccordionItem id="multi-notifications" title="Notifications">
        <div style={{ height: 150 }} />
      </AccordionItem>
      <AccordionItem id="multi-setting" title="Setting">
        <div style={{ height: 150 }} />
      </AccordionItem>
      <AccordionItem id="multi-connectivity" title="Connectivity">
        <div style={{ height: 150 }} />
      </AccordionItem>
      <AccordionItem id="multi-integration" title="Integration">
        <div style={{ height: 150 }} />
      </AccordionItem>
      <AccordionItem id="multi-assets" title="Assets">
        <div style={{ height: 150 }} />
      </AccordionItem>
    </Accordion>
  ),

  name: "Multi active",
  play: accordionMultiActivePlaySuite
};

export const SingleActive = {
  render: () => (
    <Accordion id="single-active-accordion" defaultIndex={[1]}>
      <AccordionItem id="single-notifications" title="Notifications">
        <div style={{ height: 150 }} />
      </AccordionItem>
      <AccordionItem id="single-setting" title="Setting">
        <div style={{ height: 150 }} />
      </AccordionItem>
      <AccordionItem id="single-connectivity" title="Connectivity">
        <div style={{ height: 150 }} />
      </AccordionItem>
      <AccordionItem id="single-integration" title="Integration">
        <div style={{ height: 150 }} />
      </AccordionItem>
      <AccordionItem id="single-assets" title="Assets">
        <div style={{ height: 150 }} />
      </AccordionItem>
    </Accordion>
  ),

  name: "Single active",
  play: accordionSingleActivePlaySuite
};

export const PreferencesAccordion = {
  render: () => (
    <Accordion id="preferences-accordion" defaultIndex={[0]}>
      <AccordionItem id="preferences-monday" title="In monday">
        <Flex direction="column" gap={20} align="start">
          <Checkbox id="pref-likes" label="Likes my update" checked />
          <Checkbox id="pref-replies" label="Replies to my update" />
          <Checkbox id="pref-conversation" label="Replies or likes a conversation I'm a part of" checked />
          <Checkbox id="pref-subscribes" label="Subscribes me to a Board/Item/Team" checked />
          <Checkbox id="pref-updates" label="Writes an update on an items I'm subscribed to" checked />
        </Flex>
      </AccordionItem>
    </Accordion>
  ),

  name: "Preferences Accordion",
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ width: "600px" }}>
        <Story />
      </div>
    )
  ]
};
