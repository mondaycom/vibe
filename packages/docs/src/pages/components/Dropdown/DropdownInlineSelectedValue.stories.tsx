import React, { useMemo } from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import person1 from "../Avatar/assets/person1.png";
import person2 from "../Avatar/assets/person2.png";
import person3 from "../Avatar/assets/person3.png";
import { Email, Attach, Mobile } from "@vibe/icons";
import { Dropdown, type DropdownOption, Flex, Text } from "@vibe/core";

type Story = StoryObj<typeof Dropdown>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: Dropdown,
  actionPropsArray: ["onMenuOpen", "onMenuClose", "onChange", "onOptionSelect", "onClear", "onInputChange"]
});

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown/Inline selected value",
  component: Dropdown,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export default meta;

const usePeople = () =>
  useMemo(
    () => [
      { value: "julia", label: "Julia Martinez", startElement: { type: "avatar" as const, value: person1 } },
      { value: "sophia", label: "Sophia Johnson", startElement: { type: "avatar" as const, value: person2 } },
      { value: "marco", label: "Marco DiAngelo", startElement: { type: "avatar" as const, value: person3 } }
    ],
    []
  );

export const TheProblem: Story = {
  render: () => {
    const people = usePeople();

    return (
      <Flex gap="large" align="start" justify="start" style={{ height: "280px" }}>
        <Flex direction="column" gap="small" align="start" style={{ width: "300px" }}>
          <Text weight="bold" ellipsis={false}>
            Default — announced as blank
          </Text>
          <Text type="text2" color="secondary" ellipsis={false}>
            The input is emptied on selection and the value is drawn in a layer over it. Assistive tech reads the
            input, so the field has no value to announce.
          </Text>
          <Dropdown
            id="inline-problem-default"
            label="Person"
            placeholder="Select a person"
            defaultValue={people[0]}
            options={people}
            searchable
            clearAriaLabel="Clear"
          />
        </Flex>
        <Flex direction="column" gap="small" align="start" style={{ width: "300px" }}>
          <Text weight="bold" ellipsis={false}>
            inlineSelectedValue — announced correctly
          </Text>
          <Text type="text2" color="secondary" ellipsis={false}>
            The label is the input&apos;s own value, so it is announced. The avatar rides along as decorative chrome
            inside the field.
          </Text>
          <Dropdown
            id="inline-problem-fixed"
            label="Person"
            placeholder="Select a person"
            defaultValue={people[0]}
            options={people}
            searchable
            inlineSelectedValue
            clearAriaLabel="Clear"
          />
        </Flex>
      </Flex>
    );
  },
  parameters: {
    docs: { liveEdit: { scope: { person1, person2, person3 } } }
  }
};

export const StartElements: Story = {
  render: () => {
    const people = usePeople();

    const channels = useMemo(
      () => [
        { value: "email", label: "Email", startElement: { type: "icon" as const, value: Email } },
        { value: "mobile", label: "Mobile push", startElement: { type: "icon" as const, value: Mobile } },
        { value: "attach", label: "Attachment", startElement: { type: "icon" as const, value: Attach } }
      ],
      []
    );

    const statuses = useMemo(() => {
      const dot = (color: string) => ({
        type: "custom" as const,
        render: () => <span style={{ width: 10, height: 10, borderRadius: "50%", background: color, flexShrink: 0 }} />
      });

      return [
        { value: "done", label: "Done", startElement: dot("var(--positive-color)") },
        { value: "working", label: "Working on it", startElement: dot("var(--warning-color)") },
        { value: "stuck", label: "Stuck", startElement: dot("var(--negative-color)") }
      ];
    }, []);

    return (
      <Flex gap="large" align="start" justify="start" style={{ height: "260px" }}>
        <Flex direction="column" gap="small" align="start">
          <Text type="text2" color="secondary">
            Avatar
          </Text>
          <div style={{ width: "240px" }}>
            <Dropdown
              id="inline-start-avatar"
              aria-label="Person"
              placeholder="Select a person"
              defaultValue={people[0]}
              options={people}
              searchable
              inlineSelectedValue
              clearAriaLabel="Clear"
            />
          </div>
        </Flex>
        <Flex direction="column" gap="small" align="start">
          <Text type="text2" color="secondary">
            Icon
          </Text>
          <div style={{ width: "240px" }}>
            <Dropdown
              id="inline-start-icon"
              aria-label="Channel"
              placeholder="Select a channel"
              defaultValue={channels[0]}
              options={channels}
              searchable
              inlineSelectedValue
              clearAriaLabel="Clear"
            />
          </div>
        </Flex>
        <Flex direction="column" gap="small" align="start">
          <Text type="text2" color="secondary">
            Custom
          </Text>
          <div style={{ width: "240px" }}>
            <Dropdown
              id="inline-start-custom"
              aria-label="Status"
              placeholder="Select a status"
              defaultValue={statuses[0]}
              options={statuses}
              searchable
              inlineSelectedValue
              clearAriaLabel="Clear"
            />
          </div>
        </Flex>
      </Flex>
    );
  },
  parameters: {
    docs: { liveEdit: { scope: { person1, person2, person3, Email, Mobile, Attach } } }
  }
};

export const WithEndElement: Story = {
  render: () => {
    const views = useMemo(
      () => [
        {
          value: "table",
          label: "Table",
          startElement: { type: "icon" as const, value: Email },
          endElement: { type: "suffix" as const, value: "Default" }
        },
        {
          value: "kanban",
          label: "Kanban",
          startElement: { type: "icon" as const, value: Mobile },
          endElement: { type: "suffix" as const, value: "Beta" }
        },
        {
          value: "timeline",
          label: "Timeline",
          startElement: { type: "icon" as const, value: Attach }
        }
      ],
      []
    );

    return (
      <div style={{ width: "300px", height: "220px" }}>
        <Dropdown
          id="inline-end-element"
          label="View"
          helperText="The suffix sits before the clear and open controls."
          placeholder="Select a view"
          defaultValue={views[0]}
          options={views}
          searchable
          inlineSelectedValue
          clearAriaLabel="Clear"
        />
      </div>
    );
  },
  parameters: {
    docs: { liveEdit: { scope: { Email, Mobile, Attach } } }
  }
};

export const OptionRendererVsValueRenderer: Story = {
  render: () => {
    // Deliberately no startElement, so the only thing that could decorate the field is the renderer.
    const people = useMemo(
      () => [
        { value: "julia", label: "Julia Martinez", team: "Design systems" },
        { value: "sophia", label: "Sophia Johnson", team: "Platform" },
        { value: "marco", label: "Marco DiAngelo", team: "Growth" }
      ],
      []
    );

    // The very same function is passed to both props, so any difference you see is the mode, not the renderer.
    const renderer = (option: DropdownOption<{ team: string }>) => (
      <Flex gap="xs" align="center">
        <Text type="text2" weight="bold">
          {option.label}
        </Text>
        <Text
          type="text3"
          color="onInverted"
          style={{
            background: "var(--primary-color)",
            borderRadius: "var(--border-radius-small)",
            padding: "0 var(--space-4)"
          }}
        >
          {option.team}
        </Text>
      </Flex>
    );

    // One props object, spread into both fields — the only difference between them is inlineSelectedValue.
    const shared = {
      label: "Person",
      placeholder: "Select a person",
      defaultValue: people[0],
      options: people,
      searchable: true,
      clearAriaLabel: "Clear",
      optionRenderer: renderer,
      valueRenderer: renderer
    } as const;

    return (
      <Flex gap="large" align="start" justify="start" style={{ height: "300px" }}>
        <Flex direction="column" gap="small" align="start" style={{ width: "300px" }}>
          <Text weight="bold" ellipsis={false}>
            Today — valueRenderer applies
          </Text>
          <Text type="text2" color="secondary" ellipsis={false}>
            The collapsed field shows the rendered value, badge included. But that output is not the input&apos;s
            value, so a screen reader announces the field as blank.
          </Text>
          <Dropdown id="inline-renderers-today" {...shared} />
        </Flex>
        <Flex direction="column" gap="small" align="start" style={{ width: "300px" }}>
          <Text weight="bold" ellipsis={false}>
            inlineSelectedValue — valueRenderer lost
          </Text>
          <Text type="text2" color="secondary" ellipsis={false}>
            Identical props. The announcement is fixed, but the badge is gone — the field shows the plain label. The
            menu still renders fully, because optionRenderer is unaffected.
          </Text>
          <Dropdown id="inline-renderers-inline" {...shared} inlineSelectedValue />
        </Flex>
      </Flex>
    );
  }
};
