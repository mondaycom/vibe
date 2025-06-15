import React from "react";
import Accordion, { AccordionProps } from "../Accordion";
import AccordionItem from "../../AccordionItem/AccordionItem";
import Checkbox from "../../../Checkbox/Checkbox";
import { accordionMultiActivePlaySuite, accordionSingleActivePlaySuite } from "../__tests__/Accordion.interactions";
import Flex from "../../../Flex/Flex";

const accordionTemplate = (args: AccordionProps) => {
  return (
    <div style={{ width: 300 }}>
      <Accordion defaultIndex={[1]} {...args}>
        <AccordionItem title="Notifications">
          <div style={{ height: 150 }} />
        </AccordionItem>
        <AccordionItem title="Setting">
          <div style={{ height: 150 }} />
        </AccordionItem>
        <AccordionItem title="Info">
          <div style={{ height: 150 }} />
        </AccordionItem>
        <AccordionItem title="Profile">
          <div style={{ height: 150 }} />
        </AccordionItem>
        <AccordionItem title="Permissions">
          <div style={{ height: 150 }} />
        </AccordionItem>
        <AccordionItem title="Security">
          <div style={{ height: 150 }} />
        </AccordionItem>
        <AccordionItem title="Connectivity">
          <div style={{ height: 150 }} />
        </AccordionItem>
        <AccordionItem title="Integration">
          <div style={{ height: 150 }} />
        </AccordionItem>
        <AccordionItem title="Assets">
          <div style={{ height: 150 }} />
        </AccordionItem>
      </Accordion>
    </div>
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
  }
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
    <div style={{ width: 300 }}>
      <Accordion allowMultiple defaultIndex={[1, 3]}>
        <AccordionItem title="Notifications">
          <div style={{ height: 150 }} />
        </AccordionItem>
        <AccordionItem title="Setting">
          <div style={{ height: 150 }} />
        </AccordionItem>
        <AccordionItem title="Connectivity">
          <div style={{ height: 150 }} />
        </AccordionItem>
        <AccordionItem title="Integration">
          <div style={{ height: 150 }} />
        </AccordionItem>
        <AccordionItem title="Assets">
          <div style={{ height: 150 }} />
        </AccordionItem>
      </Accordion>
    </div>
  ),

  name: "Multi active",
  play: accordionMultiActivePlaySuite
};

export const SingleActive = {
  render: () => (
    <div style={{ width: 300 }}>
      <Accordion defaultIndex={[1]}>
        <AccordionItem title="Notifications">
          <div style={{ height: 150 }} />
        </AccordionItem>
        <AccordionItem title="Setting">
          <div style={{ height: 150 }} />
        </AccordionItem>
        <AccordionItem title="Connectivity">
          <div style={{ height: 150 }} />
        </AccordionItem>
        <AccordionItem title="Integration">
          <div style={{ height: 150 }} />
        </AccordionItem>
        <AccordionItem title="Assets">
          <div style={{ height: 150 }} />
        </AccordionItem>
      </Accordion>
    </div>
  ),

  name: "Single active",
  play: accordionSingleActivePlaySuite
};

export const PreferencesAccordion = {
  render: () => (
    <div style={{ width: 600 }}>
      <Accordion defaultIndex={[0]}>
        <AccordionItem title="In monday">
          <Flex direction="column" gap={20} align="start">
            <Checkbox label="Likes my update" checked />
            <Checkbox label="Replies to my update" />
            <Checkbox label="Replies or likes a conversation I'm a part of" checked />
            <Checkbox label="Subscribes me to a Board/Item/Team" checked />
            <Checkbox label="Writes an update on an items I'm subscribed to" checked />
          </Flex>
        </AccordionItem>
      </Accordion>
    </div>
  ),

  name: "Preferences Accordion"
};
