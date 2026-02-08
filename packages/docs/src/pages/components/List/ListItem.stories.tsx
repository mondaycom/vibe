import React, { useState, useCallback } from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import { List, ListItem, type ListItemProps } from "@vibe/core/next";
import { Board, Favorite, Person, Settings, Team, ThumbsUp, Search, Send } from "@vibe/icons";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import { Flex } from "@vibe/core";
import { StoryDescription } from "vibe-storybook-components";
import person1 from "../Avatar/assets/person1.png";

const metaSettings = createStoryMetaSettingsDecorator({
  component: ListItem
});

export default {
  title: "Components/List [New]/ListItem",
  component: ListItem,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof ListItem>;

type Story = StoryObj<typeof ListItem>;

export const Overview: Story = {
  render: (args: ListItemProps) => (
    <List ariaLabel="List item overview">
      <ListItem {...args} />
    </List>
  ),
  name: "Overview",
  args: {
    label: "List item",
    value: "item-1"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const States: Story = {
  render: () => (
    <List ariaLabel="States example">
      <ListItem label="Default state" value="default" />
      <ListItem label="Disabled state" value="disabled" disabled />
      <ListItem label="Selected state" value="selected" selected />
    </List>
  ),
  name: "States"
};

export const WithIcon: Story = {
  render: () => (
    <List ariaLabel="List with icon">
      <ListItem
        label="Productivity"
        value="productivity"
        startElement={{ type: "icon", value: Send }}
      />
    </List>
  ),
  name: "List item with an icon",
  parameters: {
    docs: {
      liveEdit: {
        scope: { Send }
      }
    }
  }
};

export const WithAvatar: Story = {
  render: () => (
    <List ariaLabel="List with avatar">
      <ListItem
        label="Sophia Johnson"
        value="sophia"
        startElement={{ type: "avatar", value: person1 }}
      />
    </List>
  ),
  name: "List item with an avatar",
  parameters: {
    docs: {
      liveEdit: {
        scope: { person1 }
      }
    }
  }
};

export const WithEndElement: Story = {
  render: () => (
    <div style={{ width: 250 }}>
      <List ariaLabel="List with end elements">
        <ListItem
          label="Settings"
          value="settings"
          startElement={{ type: "icon", value: Settings }}
          endElement={{ type: "suffix", value: "⌘S" }}
        />
        <ListItem
          label="Favorites"
          value="favorites"
          startElement={{ type: "icon", value: Favorite }}
          endElement={{ type: "suffix", value: "⌘F" }}
        />
      </List>
    </div>
  ),
  name: "List item with end element",
  parameters: {
    docs: {
      liveEdit: {
        scope: { Settings, Favorite }
      }
    }
  }
};

export const WithClickHandler: Story = {
  render: function WithClickHandlerExample() {
    const [clickCount, setClickCount] = useState(0);
    const handleClick = useCallback(() => {
      setClickCount(prev => prev + 1);
    }, []);

    return (
      <div>
        <p style={{ marginBottom: 16 }}>Click count: {clickCount}</p>
        <List ariaLabel="Clickable list">
          <ListItem label="Click me!" value="clickable" onClick={handleClick} />
        </List>
      </div>
    );
  },
  name: "With click handler"
};

export const ReadOnly: Story = {
  render: () => (
    <List ariaLabel="Read-only list">
      <ListItem label="Editable item" value="editable" />
      <ListItem label="Read-only item" value="readonly" readOnly />
    </List>
  ),
  name: "Read-only"
};
