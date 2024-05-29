import React from "react";
import Accordion, { AccordionProps } from "../Accordion";
import AccordionItem from "../../AccordionItem/AccordionItem";
import Checkbox from "../../../Checkbox/Checkbox";
import { accordionMultiActivePlaySuite, accordionSingleActivePlaySuite } from "../__tests__/Accordion.interactions";
import "./Accordion.stories.scss";

const accordionTemplate = (args: AccordionProps) => {
  return (
    <Accordion className="monday-storybook-accordion_small-wrapepr" defaultIndex={[1]} {...args}>
      <AccordionItem title="Notifications">
        <div className="monday-storybook-accordion_small-box" />
      </AccordionItem>
      <AccordionItem title="Setting">
        <div className="monday-storybook-accordion_small-box" />
      </AccordionItem>
      <AccordionItem title="Info">
        <div className="monday-storybook-accordion_small-box" />
      </AccordionItem>
      <AccordionItem title="Profile">
        <div className="monday-storybook-accordion_small-box" />
      </AccordionItem>
      <AccordionItem title="Permissions">
        <div className="monday-storybook-accordion_small-box" />
      </AccordionItem>
      <AccordionItem title="Security">
        <div className="monday-storybook-accordion_small-box" />
      </AccordionItem>
      <AccordionItem title="Connectivity">
        <div className="monday-storybook-accordion_small-box" />
      </AccordionItem>
      <AccordionItem title="Integration">
        <div className="monday-storybook-accordion_small-box" />
      </AccordionItem>
      <AccordionItem title="Assets">
        <div className="monday-storybook-accordion_small-box" />
      </AccordionItem>
    </Accordion>
  );
};

export default {
  title: "Data display/Accordion",
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
  args: {}
};

export const MultiActive = {
  render: () => (
    <Accordion className="monday-storybook-accordion_small-wrapepr" allowMultiple defaultIndex={[1, 3]}>
      <AccordionItem title="Notifications">
        <div className="monday-storybook-accordion_small-box" />
      </AccordionItem>
      <AccordionItem title="Setting">
        <div className="monday-storybook-accordion_small-box" />
      </AccordionItem>
      <AccordionItem title="Connectivity">
        <div className="monday-storybook-accordion_small-box" />
      </AccordionItem>
      <AccordionItem title="Integration">
        <div className="monday-storybook-accordion_small-box" />
      </AccordionItem>
      <AccordionItem title="Assets">
        <div className="monday-storybook-accordion_small-box" />
      </AccordionItem>
    </Accordion>
  ),

  name: "Multi active",
  play: accordionMultiActivePlaySuite
};

export const SingleActive = {
  render: () => (
    <Accordion className="monday-storybook-accordion_small-wrapepr" defaultIndex={[1]}>
      <AccordionItem title="Notifications">
        <div className="monday-storybook-accordion_small-box" />
      </AccordionItem>
      <AccordionItem title="Setting">
        <div className="monday-storybook-accordion_small-box" />
      </AccordionItem>
      <AccordionItem title="Connectivity">
        <div className="monday-storybook-accordion_small-box" />
      </AccordionItem>
      <AccordionItem title="Integration">
        <div className="monday-storybook-accordion_small-box" />
      </AccordionItem>
      <AccordionItem title="Assets">
        <div className="monday-storybook-accordion_small-box" />
      </AccordionItem>
    </Accordion>
  ),

  name: "Single active",
  play: accordionSingleActivePlaySuite
};

export const PreferencesAccordion = {
  render: () => (
    <Accordion className="monday-storybook-accordion_wrapper" defaultIndex={[0]}>
      <AccordionItem title="In monday">
        <div className="monday-storybook-accordion_checkbox-wrapper">
          <Checkbox label="Likes my update" checked />
          <Checkbox label="Replies to my update" />
          <Checkbox label="Replies or likes a conversation I'm a part of" checked />
          <Checkbox label="Subscribes me to a Board/Item/Team" checked />
          <Checkbox label="Writes an update on an items I'm subscribed to" checked />
        </div>
      </AccordionItem>
    </Accordion>
  ),

  name: "Preferences Accordion"
};
