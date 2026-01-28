import React, { useState, useCallback, useMemo } from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import { List, ListItem, type ListProps } from "@vibe/core/next";
import { Board, Email, Favorite, Person, Settings, Team, ThumbsUp, Search, Send, Add, Filter } from "@vibe/icons";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import { Flex, DialogContentContainer, Divider } from "@vibe/core";
import { StoryDescription } from "vibe-storybook-components";
import { FixedSizeList } from "react-window";
import person1 from "../Avatar/assets/person1.png";
import person2 from "../Avatar/assets/person2.png";
import person3 from "../Avatar/assets/person3.png";

const metaSettings = createStoryMetaSettingsDecorator({
  component: List
});

export default {
  title: "Components/List [New]/List",
  component: List,
  subcomponents: {
    ListItem
  },
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof List>;

type Story = StoryObj<typeof List>;

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
      <ListItem
        label="List item 1"
        value="list-1"
        startElement={{ type: "icon", value: Board }}
      />
      <ListItem
        label="List item 2"
        value="list-2"
        startElement={{ type: "icon", value: Team }}
      />
      <ListItem
        label="List item 3"
        value="list-3"
        startElement={{ type: "icon", value: ThumbsUp }}
      />
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
      <ListItem
        label="List item 1"
        value="list-1"
        startElement={{ type: "avatar", value: person1 }}
      />
      <ListItem
        label="List item 2"
        value="list-2"
        startElement={{ type: "avatar", value: person2 }}
      />
      <ListItem
        label="List item 3"
        value="list-3"
        startElement={{ type: "avatar", value: person3 }}
      />
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

export const ScrollableList: Story = {
  render: () => (
    <Flex align="start" gap="large" style={{ width: "100%" }} direction="column">
      <StoryDescription description="Regular">
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
      </StoryDescription>
    </Flex>
  ),
  name: "Scrollable list",
  parameters: {
    docs: {
      liveEdit: {
        scope: { StoryDescription }
      }
    }
  }
};

export const Sizes: Story = {
  render: () => (
    <Flex gap="large" align="start">
      <StoryDescription description="Small">
        <List ariaLabel="Small list" size="small" style={{ width: 200 }}>
          <ListItem label="Small item 1" value="1" />
          <ListItem label="Small item 2" value="2" />
          <ListItem label="Small item 3" value="3" />
        </List>
      </StoryDescription>
      <StoryDescription description="Medium">
        <List ariaLabel="Medium list" size="medium" style={{ width: 200 }}>
          <ListItem label="Medium item 1" value="1" />
          <ListItem label="Medium item 2" value="2" />
          <ListItem label="Medium item 3" value="3" />
        </List>
      </StoryDescription>
      <StoryDescription description="Large">
        <List ariaLabel="Large list" size="large" style={{ width: 200 }}>
          <ListItem label="Large item 1" value="1" />
          <ListItem label="Large item 2" value="2" />
          <ListItem label="Large item 3" value="3" />
        </List>
      </StoryDescription>
    </Flex>
  ),
  name: "Sizes",
  parameters: {
    docs: {
      liveEdit: {
        scope: { StoryDescription }
      }
    }
  }
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

export const WithFocusCallback: Story = {
  render: function WithFocusCallbackExample() {
    const [focusedIndex, setFocusedIndex] = useState(0);

    return (
      <div>
        <p style={{ marginBottom: 16 }}>Currently focused index: {focusedIndex}</p>
        <List ariaLabel="List with focus callback" onFocusChange={setFocusedIndex} style={{ width: 300 }}>
          <ListItem
            label="First item"
            value="1"
            startElement={{ type: "icon", value: Favorite }}
          />
          <ListItem
            label="Second item"
            value="2"
            startElement={{ type: "icon", value: Search }}
          />
          <ListItem
            label="Third item"
            value="3"
            startElement={{ type: "icon", value: Settings }}
          />
        </List>
      </div>
    );
  },
  name: "With focus callback",
  parameters: {
    docs: {
      liveEdit: {
        scope: { Favorite, Search, Settings }
      }
    }
  }
};

export const KeyboardNavigation: Story = {
  render: () => (
    <div>
      <p style={{ marginBottom: 16 }}>
        Use arrow keys to navigate. Press <strong>Home</strong> for first item, <strong>End</strong> for last item.
        <strong>PageUp</strong>/<strong>PageDown</strong> moves by 10 items. Navigation wraps around.
      </p>
      <List ariaLabel="List with keyboard navigation" style={{ width: 300 }}>
        <ListItem label="First item - Press ↑ to wrap to last" value="1" />
        <ListItem label="Second item" value="2" />
        <ListItem label="Third item" value="3" />
        <ListItem label="Fourth item - Press ↓ to wrap to first" value="4" />
      </List>
    </div>
  ),
  name: "Keyboard navigation"
};

export const DefaultFocusIndex: Story = {
  render: () => (
    <div>
      <p style={{ marginBottom: 16 }}>This list starts with the third item focused (defaultFocusIndex=2).</p>
      <List ariaLabel="List with default focus" defaultFocusIndex={2} style={{ width: 300 }}>
        <ListItem label="First item" value="1" />
        <ListItem label="Second item" value="2" />
        <ListItem label="Third item (initially focused)" value="3" />
        <ListItem label="Fourth item" value="4" />
      </List>
    </div>
  ),
  name: "Default focus index"
};

export const DisabledList: Story = {
  render: () => (
      <List ariaLabel="Disabled list" disabled style={{ width: 300 }}>
        <ListItem label="Item 1" value="1" />
        <ListItem label="Item 2" value="2" />
        <ListItem label="Item 3" value="3" />
      </List>
  ),
  name: "Disabled list"
};

export const InDialogContainer: Story = {
  render: () => (
    <DialogContentContainer style={{ width: 250 }}>
      <List ariaLabel="List in dialog" maxHeight={200}>
        <ListItem
          label="View Profile"
          value="profile"
          startElement={{ type: "icon", value: Person }}
        />
        <ListItem
          label="Settings"
          value="settings"
          startElement={{ type: "icon", value: Settings }}
        />
        <ListItem
          label="Favorites"
          value="favorites"
          startElement={{ type: "icon", value: Favorite }}
        />
        <ListItem
          label="Email Preferences"
          value="email"
          startElement={{ type: "icon", value: Email }}
        />
        <ListItem
          label="Team Settings"
          value="team"
          startElement={{ type: "icon", value: Team }}
        />
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

export const DifferentElementTypes: Story = {
  render: () => (
    <Flex gap="large" align="start">
      <StoryDescription description="as='ul' (default)">
        <List ariaLabel="Unordered list" as="ul" style={{ width: 200 }}>
          <ListItem label="Item 1" value="1" />
          <ListItem label="Item 2" value="2" />
        </List>
      </StoryDescription>
      <StoryDescription description="as='ol'">
        <List ariaLabel="Ordered list" as="ol" style={{ width: 200 }}>
          <ListItem label="Item 1" value="1" />
          <ListItem label="Item 2" value="2" />
        </List>
      </StoryDescription>
      <StoryDescription description="as='div'">
        <List ariaLabel="Div list" as="div" style={{ width: 200 }}>
          <ListItem label="Item 1" value="1" />
          <ListItem label="Item 2" value="2" />
        </List>
      </StoryDescription>
      <StoryDescription description="as='nav'">
        <List ariaLabel="Navigation list" as="nav" style={{ width: 200 }}>
          <ListItem label="Item 1" value="1" />
          <ListItem label="Item 2" value="2" />
        </List>
      </StoryDescription>
    </Flex>
  ),
  name: "Different element types",
  parameters: {
    docs: {
      liveEdit: {
        scope: { StoryDescription }
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
        <List ariaLabel="Clickable list" style={{ width: 300 }}>
          <ListItem
            label="Click me"
            value="1"
            onClick={() => setLastClicked("Item 1")}
          />
          <ListItem
            label="Or click me"
            value="2"
            onClick={() => setLastClicked("Item 2")}
          />
          <ListItem
            label="Disabled (can't click)"
            value="3"
            disabled
            onClick={() => setLastClicked("Item 3")}
          />
        </List>
      </div>
    );
  },
  name: "With click handler"
};

export const WithEndElements: Story = {
  render: () => (
    <List ariaLabel="List with end elements" style={{ width: 300 }}>
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

export const DoAndDont: Story = {
  render: () => (
    <Flex gap="large" align="start">
      <StoryDescription description="✓ Do: Use for page sections">
        <div>
          <List ariaLabel="Actions">
            <ListItem label="Add" value="add" startElement={{ type: "icon", value: Add }} />
            <ListItem label="Filter" value="filter" startElement={{ type: "icon", value: Filter }} />
          </List>
          <Divider />
          <List ariaLabel="Boards">
            <ListItem label="Board name" value="board1" startElement={{ type: "icon", value: Board }} />
            <ListItem label="Board name" value="board2" startElement={{ type: "icon", value: Board }} />
          </List>
        </div>
      </StoryDescription>
      <StoryDescription description="✗ Don't: Use Menu for dialogs">
        <DialogContentContainer>
          <List ariaLabel="Actions">
            <ListItem label="Add" value="add" startElement={{ type: "icon", value: Add }} />
            <ListItem label="Filter" value="filter" startElement={{ type: "icon", value: Filter }} />
          </List>
          <Divider />
          <List ariaLabel="Boards">
            <ListItem label="Board name" value="board1" startElement={{ type: "icon", value: Board }} />
            <ListItem label="Board name" value="board2" startElement={{ type: "icon", value: Board }} />
          </List>
        </DialogContentContainer>
      </StoryDescription>
    </Flex>
  ),
  name: "Do's and Don'ts",
  parameters: {
    docs: {
      liveEdit: {
        scope: { StoryDescription, Add, Filter, Board }
      }
    }
  }
};

export const VirtualizedList: Story = {
  render: () => {
    const items = useMemo(
      () =>
        Array.from({ length: 10000 }, (_, index) => ({
          label: `Option ${index + 1}`,
          value: `option-${index + 1}`
        })),
      []
    );

    // Item height based on medium size (default): 9px padding top + 9px padding bottom + ~24px line height = ~42px
    const itemHeight = 42;
    const containerHeight = 300;

    const Row = useCallback(
      ({ index, style }: { index: number; style: React.CSSProperties }) => (
        <div style={style}>
          <ListItem label={items[index].label} value={items[index].value} />
        </div>
      ),
      [items]
    );

    return (
      <DialogContentContainer style={{ width: 300 }}>
        <div role="listbox" aria-label="Virtualized list with 10,000 items">
          <FixedSizeList
            height={containerHeight}
            width="100%"
            itemCount={items.length}
            itemSize={itemHeight}
            overscanCount={5}
          >
            {Row}
          </FixedSizeList>
        </div>
      </DialogContentContainer>
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
