import React, { useState } from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import { BaseList } from "../../../../../core/src/components/BaseList";
import BaseItem from "../../../../../core/src/components/BaseItem/BaseItem";
import { Email, Favorite, Settings, Person, Search } from "@vibe/icons";

type Story = StoryObj<typeof BaseList>;

export default {
  title: "Internal/BaseList",
  component: BaseList,
  tags: ["internal"]
} satisfies Meta<typeof BaseList>;

export const Overview: Story = {
  render: args => (
    <BaseList {...args} ariaLabel="Example list" style={{ width: 300 }}>
      <BaseItem
        item={{
          value: "1",
          label: "First item",
          startElement: { type: "icon", value: Person }
        }}
      />
      <BaseItem
        item={{
          value: "2",
          label: "Second item",
          startElement: { type: "icon", value: Email }
        }}
      />
      <BaseItem
        item={{
          value: "3",
          label: "Third item",
          startElement: { type: "icon", value: Settings }
        }}
      />
    </BaseList>
  )
};

export const WithSelectedItem: Story = {
  render: () => (
    <BaseList ariaLabel="List with selection" style={{ width: 300 }} size="small">
      <BaseItem item={{ value: "1", label: "Unselected item" }} />
      <BaseItem item={{ value: "2", label: "Selected item" }} selected />
      <BaseItem item={{ value: "3", label: "Another unselected item" }} />
    </BaseList>
  )
};

export const WithDisabledItems: Story = {
  render: () => (
    <BaseList ariaLabel="List with disabled items" style={{ width: 300 }}>
      <BaseItem item={{ value: "1", label: "Enabled item" }} />
      <BaseItem item={{ value: "2", label: "Disabled item", disabled: true }} />
      <BaseItem item={{ value: "3", label: "Another enabled item" }} />
    </BaseList>
  )
};

export const ScrollableList: Story = {
  render: () => (
    <BaseList ariaLabel="Scrollable list" maxHeight={200} style={{ width: 300 }}>
      {Array.from({ length: 10 }, (_, i) => (
        <BaseItem key={i} item={{ value: String(i), label: `Item ${i + 1}` }} />
      ))}
    </BaseList>
  )
};

export const WithFocusCallback: Story = {
  render: function WithFocusCallbackExample() {
    const [focusedIndex, setFocusedIndex] = useState(0);

    return (
      <div>
        <p style={{ marginBottom: 16 }}>Currently focused index: {focusedIndex}</p>
        <BaseList ariaLabel="List with focus callback" onFocusChange={setFocusedIndex} style={{ width: 300 }}>
          <BaseItem
            item={{
              value: "1",
              label: "First item",
              startElement: { type: "icon", value: Favorite }
            }}
          />
          <BaseItem
            item={{
              value: "2",
              label: "Second item",
              startElement: { type: "icon", value: Search }
            }}
          />
          <BaseItem
            item={{
              value: "3",
              label: "Third item",
              startElement: { type: "icon", value: Settings }
            }}
          />
        </BaseList>
      </div>
    );
  }
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 24 }}>
      <div>
        <p style={{ marginBottom: 8 }}>Small</p>
        <BaseList ariaLabel="Small list" size="small" style={{ width: 200 }}>
          <BaseItem item={{ value: "1", label: "Small item 1" }} />
          <BaseItem item={{ value: "2", label: "Small item 2" }} />
        </BaseList>
      </div>
      <div>
        <p style={{ marginBottom: 8 }}>Medium</p>
        <BaseList ariaLabel="Medium list" size="medium" style={{ width: 200 }}>
          <BaseItem item={{ value: "1", label: "Medium item 1" }} />
          <BaseItem item={{ value: "2", label: "Medium item 2" }} />
        </BaseList>
      </div>
      <div>
        <p style={{ marginBottom: 8 }}>Large</p>
        <BaseList ariaLabel="Large list" size="large" style={{ width: 200 }}>
          <BaseItem item={{ value: "1", label: "Large item 1" }} />
          <BaseItem item={{ value: "2", label: "Large item 2" }} />
        </BaseList>
      </div>
    </div>
  )
};

export const AsMenu: Story = {
  render: () => (
    <BaseList ariaLabel="Menu example" role="menu" style={{ width: 250 }}>
      <BaseItem
        item={{
          value: "profile",
          label: "View Profile",
          startElement: { type: "icon", value: Person }
        }}
        role="menuitem"
      />
      <BaseItem
        item={{
          value: "settings",
          label: "Settings",
          startElement: { type: "icon", value: Settings }
        }}
        role="menuitem"
      />
      <BaseItem
        item={{
          value: "favorites",
          label: "Favorites",
          startElement: { type: "icon", value: Favorite }
        }}
        role="menuitem"
      />
    </BaseList>
  )
};

export const KeyboardNavigationWithLooping: Story = {
  render: () => (
    <div>
      <p style={{ marginBottom: 16 }}>
        Try using arrow keys to navigate. The focus will wrap from the last item to the first (and vice versa).
      </p>
      <BaseList ariaLabel="List with keyboard navigation" style={{ width: 300 }}>
        <BaseItem item={{ value: "1", label: "First item - Press ↑ to wrap to last" }} />
        <BaseItem item={{ value: "2", label: "Second item" }} />
        <BaseItem item={{ value: "3", label: "Third item" }} />
        <BaseItem item={{ value: "4", label: "Fourth item - Press ↓ to wrap to first" }} />
      </BaseList>
    </div>
  )
};

export const HomeEndNavigation: Story = {
  render: () => (
    <div>
      <p style={{ marginBottom: 16 }}>
        Press <strong>Home</strong> to jump to the first item, or <strong>End</strong> to jump to the last item.
      </p>
      <BaseList ariaLabel="List with Home/End navigation" style={{ width: 300 }}>
        {Array.from({ length: 8 }, (_, i) => (
          <BaseItem key={i} item={{ value: String(i), label: `Item ${i + 1}` }} />
        ))}
      </BaseList>
    </div>
  )
};

export const PageUpDownNavigation: Story = {
  render: () => (
    <div>
      <p style={{ marginBottom: 16 }}>
        Press <strong>Page Up</strong> or <strong>Page Down</strong> to move by 10 items at a time.
      </p>
      <BaseList ariaLabel="List with PageUp/PageDown navigation" maxHeight={300} style={{ width: 300 }}>
        {Array.from({ length: 25 }, (_, i) => (
          <BaseItem key={i} item={{ value: String(i), label: `Item ${i + 1}` }} />
        ))}
      </BaseList>
    </div>
  )
};

export const DefaultFocusIndex: Story = {
  render: () => (
    <div>
      <p style={{ marginBottom: 16 }}>This list starts with the third item focused (defaultFocusIndex=2).</p>
      <BaseList ariaLabel="List with default focus" defaultFocusIndex={2} style={{ width: 300 }}>
        <BaseItem item={{ value: "1", label: "First item" }} />
        <BaseItem item={{ value: "2", label: "Second item" }} />
        <BaseItem item={{ value: "3", label: "Third item (initially focused)" }} />
        <BaseItem item={{ value: "4", label: "Fourth item" }} />
      </BaseList>
    </div>
  )
};

export const ControlledFocus: Story = {
  render: function ControlledFocusExample() {
    const [focusIndex, setFocusIndex] = useState(0);

    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <p style={{ marginBottom: 8 }}>
            Controlled focus (external state): <strong>Item {focusIndex + 1}</strong>
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setFocusIndex(0)}>Focus First</button>
            <button onClick={() => setFocusIndex(1)}>Focus Second</button>
            <button onClick={() => setFocusIndex(2)}>Focus Third</button>
            <button onClick={() => setFocusIndex(3)}>Focus Fourth</button>
          </div>
        </div>
        <BaseList
          ariaLabel="Controlled focus list"
          focusIndex={focusIndex}
          onFocusChange={setFocusIndex}
          style={{ width: 300 }}
        >
          <BaseItem item={{ value: "1", label: "First item" }} />
          <BaseItem item={{ value: "2", label: "Second item" }} />
          <BaseItem item={{ value: "3", label: "Third item" }} />
          <BaseItem item={{ value: "4", label: "Fourth item" }} />
        </BaseList>
      </div>
    );
  }
};

export const WithAriaControls: Story = {
  render: () => {
    const detailsId = "list-details";
    return (
      <div>
        <p style={{ marginBottom: 16 }}>
          This list controls the details panel below (using <code>aria-controls</code>).
        </p>
        <BaseList ariaLabel="Navigation list" aria-controls={detailsId} style={{ width: 300 }}>
          <BaseItem
            item={{
              value: "1",
              label: "Settings",
              startElement: { type: "icon", value: Settings }
            }}
          />
          <BaseItem
            item={{
              value: "2",
              label: "Profile",
              startElement: { type: "icon", value: Person }
            }}
          />
          <BaseItem
            item={{
              value: "3",
              label: "Favorites",
              startElement: { type: "icon", value: Favorite }
            }}
          />
        </BaseList>
        <div id={detailsId} style={{ marginTop: 16, padding: 16, border: "1px solid #ccc", borderRadius: 4 }}>
          <p>Details panel controlled by the list above</p>
        </div>
      </div>
    );
  }
};

export const WithMixedChildren: Story = {
  render: () => (
    <div>
      <p style={{ marginBottom: 16 }}>
        BaseList can contain a mix of BaseItems and other elements (like dividers). Keyboard navigation automatically
        skips non-focusable elements.
      </p>
      <BaseList ariaLabel="List with mixed children" style={{ width: 300 }}>
        <BaseItem item={{ value: "1", label: "First item" }} />
        <BaseItem item={{ value: "2", label: "Second item" }} />
        <li
          style={{
            padding: "8px 0",
            margin: "8px 0",
            borderTop: "1px solid #ddd",
            borderBottom: "1px solid #ddd",
            textAlign: "center",
            color: "#666",
            fontSize: "12px"
          }}
        >
          Group Divider
        </li>
        <BaseItem item={{ value: "3", label: "Third item" }} />
        <BaseItem item={{ value: "4", label: "Fourth item" }} />
      </BaseList>
    </div>
  )
};
