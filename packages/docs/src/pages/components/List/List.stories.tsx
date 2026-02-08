import React, { useState, useCallback } from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import { List, ListItem, ListTitle, type ListProps } from "@vibe/core/next";
import { Board, Email, Favorite, Person, Settings, Team, ThumbsUp, Search } from "@vibe/icons";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import { Flex, DialogContentContainer, Text } from "@vibe/core";
import { FixedSizeList } from "react-window";
import person1 from "../Avatar/assets/person1.png";
import person2 from "../Avatar/assets/person2.png";
import person3 from "../Avatar/assets/person3.png";

type Story = StoryObj<typeof List>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: List
});

const meta: Meta<typeof List> = {
  title: "Components/List [New]/List",
  component: List,
  subcomponents: {
    ListItem,
    ListTitle
  },
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export default meta;

const listTemplate = (args: ListProps) => {
  const onClick = useCallback(() => alert("On click!"), []);
  return (
    <List {...args}>
      <ListItem label="Board Power up" onClick={onClick} />
      <ListItem label="Team Power up" onClick={onClick} />
      <ListItem label="Essentials" onClick={onClick} />
    </List>
  );
};

export const Overview: Story = {
  render: listTemplate,
  name: "Overview",
  args: {
    ariaLabel: "Power ups list"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const ListWithIcons: Story = {
  render: () => (
    <List ariaLabel="List with icons">
      <ListItem label="List item 1" value="list-1" startElement={{ type: "icon", value: Board }} />
      <ListItem label="List item 2" value="list-2" startElement={{ type: "icon", value: Team }} />
      <ListItem label="List item 3" value="list-3" startElement={{ type: "icon", value: ThumbsUp }} />
    </List>
  ),
  name: "List with icons",
  parameters: {
    docs: {
      liveEdit: {
        scope: { Board, Team, ThumbsUp }
      }
    }
  }
};

export const ListWithAvatars: Story = {
  render: () => (
    <List ariaLabel="List with avatars">
      <ListItem label="List item 1" value="list-1" startElement={{ type: "avatar", value: person1 }} />
      <ListItem label="List item 2" value="list-2" startElement={{ type: "avatar", value: person2 }} />
      <ListItem label="List item 3" value="list-3" startElement={{ type: "avatar", value: person3 }} />
    </List>
  ),
  name: "List with avatars",
  parameters: {
    docs: {
      liveEdit: {
        scope: { person1, person2, person3 }
      }
    }
  }
};

export const ListWithTitle: Story = {
  render: () => (
    <List ariaLabel="List with title">
      <ListTitle>Category A</ListTitle>
      <ListItem label="List item 1" value="list-1" startElement={{ type: "icon", value: Board }} />
      <ListItem label="List item 2" value="list-2" startElement={{ type: "icon", value: Team }} />
      <ListTitle>Category B</ListTitle>
      <ListItem label="List item 3" value="list-3" startElement={{ type: "icon", value: ThumbsUp }} />
      <ListItem label="List item 4" value="list-4" startElement={{ type: "icon", value: Favorite }} />
    </List>
  ),
  name: "List with title",
  parameters: {
    docs: {
      liveEdit: {
        scope: { Board, Team, ThumbsUp, Favorite }
      }
    }
  }
};

export const StickyTitle: Story = {
  render: () => (
    <DialogContentContainer style={{ width: "250px" }}>
      <List ariaLabel="List with sticky titles" maxHeight={200}>
        <ListTitle sticky>Category A</ListTitle>
        <ListItem label="List item 1" value="1" startElement={{ type: "icon", value: Board }} />
        <ListItem label="List item 2" value="2" startElement={{ type: "icon", value: Board }} />
        <ListItem label="List item 3" value="3" startElement={{ type: "icon", value: Board }} />
        <ListItem label="List item 4" value="4" startElement={{ type: "icon", value: Board }} />
        <ListTitle sticky>Category B</ListTitle>
        <ListItem label="List item 5" value="5" startElement={{ type: "icon", value: Team }} />
        <ListItem label="List item 6" value="6" startElement={{ type: "icon", value: Team }} />
        <ListItem label="List item 7" value="7" startElement={{ type: "icon", value: Team }} />
        <ListItem label="List item 8" value="8" startElement={{ type: "icon", value: Team }} />
        <ListTitle sticky>Category C</ListTitle>
        <ListItem label="List item 9" value="9" startElement={{ type: "icon", value: ThumbsUp }} />
        <ListItem label="List item 10" value="10" startElement={{ type: "icon", value: ThumbsUp }} />
        <ListItem label="List item 11" value="11" startElement={{ type: "icon", value: ThumbsUp }} />
        <ListItem label="List item 12" value="12" startElement={{ type: "icon", value: ThumbsUp }} />
      </List>
    </DialogContentContainer>
  ),
  name: "Sticky title",
  parameters: {
    docs: {
      liveEdit: {
        scope: { Board, Team, ThumbsUp }
      }
    }
  }
};

export const ScrollableList: Story = {
  render: () => (
    <DialogContentContainer style={{ width: "200px" }}>
      <List ariaLabel="Scrollable list" maxHeight={162}>
        <ListItem label="List item 1" value="1" />
        <ListItem label="List item 2" value="2" />
        <ListItem label="List item 3" value="3" />
        <ListItem label="List item 4" value="4" />
        <ListItem label="List item 5" value="5" />
        <ListItem label="List item 6" value="6" />
        <ListItem label="List item 7" value="7" />
        <ListItem label="List item 8" value="8" />
        <ListItem label="List item 9" value="9" />
        <ListItem label="List item 10" value="10" />
        <ListItem label="List item 11" value="11" />
        <ListItem label="List item 12" value="12" />
      </List>
    </DialogContentContainer>
  ),
  name: "Scrollable list"
};

export const Sizes: Story = {
  render: () => (
    <Flex gap="large" align="start">
      <Flex direction="column" gap="small" align="start">
        <Text type="text1" weight="bold">
          Small
        </Text>
        <div style={{ width: 200 }}>
          <List ariaLabel="Small list" size="small">
            <ListItem label="Small item 1" value="1" />
            <ListItem label="Small item 2" value="2" />
            <ListItem label="Small item 3" value="3" />
          </List>
        </div>
      </Flex>
      <Flex direction="column" gap="small" align="start">
        <Text type="text1" weight="bold">
          Medium
        </Text>
        <div style={{ width: 200 }}>
          <List ariaLabel="Medium list" size="medium">
            <ListItem label="Medium item 1" value="1" />
            <ListItem label="Medium item 2" value="2" />
            <ListItem label="Medium item 3" value="3" />
          </List>
        </div>
      </Flex>
      <Flex direction="column" gap="small" align="start">
        <Text type="text1" weight="bold">
          Large
        </Text>
        <div style={{ width: 200 }}>
          <List ariaLabel="Large list" size="large">
            <ListItem label="Large item 1" value="1" />
            <ListItem label="Large item 2" value="2" />
            <ListItem label="Large item 3" value="3" />
          </List>
        </div>
      </Flex>
    </Flex>
  ),
  name: "Sizes"
};

export const States: Story = {
  render: () => (
    <Flex gap="large" align="start">
      <List ariaLabel="States example">
        <ListItem label="Default state" value="default" />
        <ListItem label="Disabled state" value="disabled" disabled />
        <ListItem label="Selected state" value="selected" selected />
      </List>
    </Flex>
  ),
  name: "States"
};

export const InDialogContainer: Story = {
  render: () => (
    <DialogContentContainer style={{ width: 250 }}>
      <List ariaLabel="List in dialog" maxHeight={200}>
        <ListItem label="View Profile" value="profile" startElement={{ type: "icon", value: Person }} />
        <ListItem label="Settings" value="settings" startElement={{ type: "icon", value: Settings }} />
        <ListItem label="Favorites" value="favorites" startElement={{ type: "icon", value: Favorite }} />
        <ListItem label="Email Preferences" value="email" startElement={{ type: "icon", value: Email }} />
        <ListItem label="Team Settings" value="team" startElement={{ type: "icon", value: Team }} />
      </List>
    </DialogContentContainer>
  ),
  name: "In dialog container",
  parameters: {
    docs: {
      liveEdit: {
        scope: { Person, Settings, Favorite, Email, Team }
      }
    }
  }
};

export const WithClickHandler: Story = {
  render: function WithClickHandlerExample() {
    const [lastClicked, setLastClicked] = useState<string | null>(null);

    return (
      <div>
        <p style={{ marginBottom: 16 }}>Last clicked: {lastClicked ?? "None"}</p>
        <div style={{ width: 300 }}>
          <List ariaLabel="Clickable list">
            <ListItem label="Click me" value="1" onClick={() => setLastClicked("Item 1")} />
            <ListItem label="Or click me" value="2" onClick={() => setLastClicked("Item 2")} />
            <ListItem label="Disabled (can't click)" value="3" disabled onClick={() => setLastClicked("Item 3")} />
          </List>
        </div>
      </div>
    );
  },
  name: "With click handler"
};

export const WithEndElements: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <List ariaLabel="List with end elements">
        <ListItem
          label="Settings"
          value="1"
          startElement={{ type: "icon", value: Settings }}
          endElement={{ type: "suffix", value: "⌘S" }}
        />
        <ListItem
          label="Favorites"
          value="2"
          startElement={{ type: "icon", value: Favorite }}
          endElement={{ type: "suffix", value: "⌘F" }}
        />
        <ListItem
          label="Search"
          value="3"
          startElement={{ type: "icon", value: Search }}
          endElement={{ type: "suffix", value: "⌘K" }}
        />
      </List>
    </div>
  ),
  name: "With end elements",
  parameters: {
    docs: {
      liveEdit: {
        scope: { Settings, Favorite, Search }
      }
    }
  }
};

export const VirtualizedList: Story = {
  render: () => {
    const items = Array.from({ length: 1000 }, (_, i) => ({ label: `Item ${i + 1}`, value: `${i + 1}` }));

    return (
      <FixedSizeList height={300} width={300} itemCount={items.length} itemSize={32}>
        {({ index, style }) => (
          <div style={style}>
            <ListItem label={items[index].label} value={items[index].value} />
          </div>
        )}
      </FixedSizeList>
    );
  },
  name: "Virtualized list",
  parameters: {
    docs: {
      liveEdit: {
        scope: { FixedSizeList }
      }
    }
  }
};
