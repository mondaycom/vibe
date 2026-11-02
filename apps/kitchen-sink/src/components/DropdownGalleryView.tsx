import { Dropdown } from "@vibe/core/next";
import { Attach, Email, Mobile, Send } from "@mondaydotcomorg/icons";
import type { ComponentProps } from "react";
import avatar1 from "../screens/assets/31a207ddb210814d45f4e60c5afe26c81fb55207.png";
import avatar2 from "../screens/assets/44a0d931f8b012dcfc18715f7a64847e76751825.png";
import avatar3 from "../screens/assets/6f1e4ef08a4e8899bba87998c3410a8132536714.png";

type DropdownVariation = {
  id: string;
  label: string;
  render: () => React.ReactNode;
};

const basicOptions = [
  { value: 1, label: "Option 1" },
  { value: 2, label: "Option 2" },
  { value: 3, label: "Option 3" },
];

const chipOptions = [
  { value: "done", label: "Done", chipColor: "positive" as const },
  { value: "blocked", label: "Blocked", chipColor: "negative" as const },
  { value: "working", label: "Working on it", chipColor: "warning" as const },
  { value: "info", label: "Info", chipColor: "info" as const },
];

const iconOptions = [
  { value: "email", label: "Email", startElement: { type: "icon" as const, value: Email } },
  { value: "attach", label: "Attach", startElement: { type: "icon" as const, value: Attach } },
];

const avatarOptions = [
  { value: "Julia", label: "Julia Martinez", startElement: { type: "avatar" as const, value: avatar1 } },
  { value: "Sophia", label: "Sophia Johnson", startElement: { type: "avatar" as const, value: avatar2 } },
  { value: "Marco", label: "Marco DiAngelo", startElement: { type: "avatar" as const, value: avatar3 } },
];

const groupedOptions = [
  {
    label: "Category 1",
    options: [
      { value: "1", label: "Item 1" },
      { value: "2", label: "Item 2" },
      { value: "3", label: "Item 3" },
    ],
  },
  {
    label: "Category 2",
    options: [
      { value: "4", label: "Item 1" },
      { value: "5", label: "Item 2" },
      { value: "6", label: "Item 3" },
    ],
  },
];

const groupedByDividerOptions = [
  {
    options: [
      { value: "1", label: "Item 1" },
      { value: "2", label: "Item 2" },
      { value: "3", label: "Item 3" },
    ],
  },
  {
    options: [
      { value: "4", label: "Item 1" },
      { value: "5", label: "Item 2" },
    ],
  },
];

const startElementOptions = [
  { value: "icon", label: "Item with icon", startElement: { type: "icon" as const, value: Email } },
  { value: "avatar", label: "Item with avatar", startElement: { type: "avatar" as const, value: avatar1 } },
  { value: "indent", label: "Item with indent", startElement: { type: "indent" as const } },
];

const endElementOptions = [
  { value: "endIcon", label: "Item with icon", endElement: { type: "icon" as const, value: Email } },
  { value: "hintText", label: "Item with hint text", endElement: { type: "suffix" as const, value: "⌘C" } },
];

const tooltipOptions = [
  {
    value: "Option 1",
    label: "Tooltip",
    tooltipProps: { content: "This is a title message for further information will appear here." },
  },
  {
    value: "Option 2",
    label: "Chip",
    tooltipProps: { content: "This is a title message for further information will appear here." },
  },
  { value: "Option 3", label: "Button" },
];

const boxModeIconOptions = [
  { value: "email", label: "Email", startElement: { type: "icon" as const, value: Email } },
  { value: "send", label: "Send", startElement: { type: "icon" as const, value: Send } },
  { value: "mobile", label: "Mobile", startElement: { type: "icon" as const, value: Mobile } },
  { value: "notification", label: "Send notification" },
];

const peopleOptions = [
  {
    label: "Suggested people",
    options: [
      { value: "Matt", label: "Matt Gaman", startElement: { type: "avatar" as const, value: avatar1 } },
      { value: "Jennifer", label: "Jennifer Lawrence", startElement: { type: "avatar" as const, value: avatar2 } },
      { value: "Emma", label: "Emma Stone", startElement: { type: "avatar" as const, value: avatar3 } },
    ],
  },
];

function DropdownPreview(props: ComponentProps<typeof Dropdown>) {
  return (
    <div style={{ width: 300 }}>
      <Dropdown clearAriaLabel="Clear" size="small" {...props} />
    </div>
  );
}

const dropdownVariations: DropdownVariation[] = [
  {
    id: "overview",
    label: "Overview",
    render: () => (
      <DropdownPreview
        id="gallery-overview"
        ariaLabel="Overview dropdown"
        options={basicOptions}
        label="Label"
        helperText="Helper text"
        placeholder="Placeholder text here"
      />
    ),
  },
  {
    id: "size-large",
    label: "Size — Large",
    render: () => (
      <DropdownPreview
        id="gallery-size-large"
        ariaLabel="Large dropdown"
        options={basicOptions}
        label="Label"
        size="large"
        placeholder="Placeholder text here"
      />
    ),
  },
  {
    id: "size-medium",
    label: "Size — Medium",
    render: () => (
      <DropdownPreview
        id="gallery-size-medium"
        ariaLabel="Medium dropdown"
        options={basicOptions}
        label="Label"
        size="medium"
        placeholder="Placeholder text here"
      />
    ),
  },
  {
    id: "size-small",
    label: "Size — Small",
    render: () => (
      <DropdownPreview
        id="gallery-size-small"
        ariaLabel="Small dropdown"
        options={basicOptions}
        label="Label"
        size="small"
        placeholder="Placeholder text here"
      />
    ),
  },
  {
    id: "state-default",
    label: "State — Default",
    render: () => (
      <DropdownPreview id="gallery-state-default" ariaLabel="Default dropdown" options={[]} placeholder="Default" />
    ),
  },
  {
    id: "state-disabled",
    label: "State — Disabled",
    render: () => (
      <DropdownPreview
        id="gallery-state-disabled"
        ariaLabel="Disabled dropdown"
        options={[]}
        placeholder="Disabled"
        disabled
      />
    ),
  },
  {
    id: "state-error",
    label: "State — Error",
    render: () => (
      <DropdownPreview id="gallery-state-error" ariaLabel="Error dropdown" options={[]} placeholder="Error" error />
    ),
  },
  {
    id: "state-readonly",
    label: "State — Read only",
    render: () => (
      <DropdownPreview
        id="gallery-state-readonly"
        ariaLabel="Readonly dropdown"
        options={[]}
        placeholder="Readonly"
        readOnly
      />
    ),
  },
  {
    id: "multi-single-line",
    label: "Multi select — Single line",
    render: () => (
      <div style={{ width: 350 }}>
        <Dropdown
          placeholder="Single line multi state"
          defaultValue={[chipOptions[0]!, chipOptions[1]!, chipOptions[2]!]}
          options={chipOptions}
          multi
          size="small"
          clearAriaLabel="Clear"
        />
      </div>
    ),
  },
  {
    id: "multi-multiline",
    label: "Multi select — Multiple lines",
    render: () => (
      <div style={{ width: 350 }}>
        <Dropdown
          placeholder="Multiple line multi state"
          defaultValue={[chipOptions[0]!, chipOptions[1]!, chipOptions[2]!]}
          options={chipOptions}
          multi
          multiline
          size="small"
          clearAriaLabel="Clear"
        />
      </div>
    ),
  },
  {
    id: "multi-hide-selected",
    label: "Multi select — Hide selected in menu",
    render: () => (
      <DropdownPreview
        options={[
          { value: "Option 1", label: "Label" },
          { value: "Option 2", label: "Label" },
          { value: "Option 3", label: "Label" },
          { value: "Option 4", label: "Label" },
          { value: "Option 5", label: "Label" },
          { value: "Option 6", label: "Label" },
        ]}
        defaultValue={[
          { value: "Option 1", label: "Label" },
          { value: "Option 3", label: "Label" },
          { value: "Option 4", label: "Label" },
        ]}
        label="Label"
        required
        multi
        showSelectedOptions={false}
        placeholder="Placeholder text here"
      />
    ),
  },
  {
    id: "icon-single",
    label: "With icon — Single value",
    render: () => <DropdownPreview defaultValue={iconOptions[0]} options={iconOptions} />,
  },
  {
    id: "icon-multi",
    label: "With icon — Multi value",
    render: () => <DropdownPreview defaultValue={[iconOptions[0]!]} options={iconOptions} multi />,
  },
  {
    id: "avatar-single",
    label: "With avatar — Single value",
    render: () => <DropdownPreview defaultValue={avatarOptions[0]} options={avatarOptions} />,
  },
  {
    id: "avatar-multi",
    label: "With avatar — Multi value",
    render: () => <DropdownPreview defaultValue={[avatarOptions[0]!]} options={avatarOptions} multi />,
  },
  {
    id: "searchable",
    label: "Searchable",
    render: () => (
      <DropdownPreview
        placeholder="Search an item"
        options={[
          { value: "Item 1", label: "Item 1" },
          { value: "Item 2", label: "Item 2" },
          { value: "Item 3", label: "Item 3" },
        ]}
        searchable
        maxMenuHeight={170}
      />
    ),
  },
  {
    id: "group-divider",
    label: "Groups — Divider",
    render: () => (
      <DropdownPreview
        placeholder="Group by divider"
        options={groupedByDividerOptions}
        withGroupDivider
        maxMenuHeight={170}
      />
    ),
  },
  {
    id: "group-category",
    label: "Groups — Category",
    render: () => (
      <DropdownPreview placeholder="Group by category" options={groupedOptions} maxMenuHeight={170} />
    ),
  },
  {
    id: "group-sticky",
    label: "Groups — Sticky category title",
    render: () => (
      <DropdownPreview
        placeholder="Group by category title sticky"
        options={groupedOptions}
        stickyGroupTitle
        maxMenuHeight={170}
      />
    ),
  },
  {
    id: "start-element",
    label: "Item elements — Start",
    render: () => (
      <DropdownPreview
        placeholder="Start element"
        options={startElementOptions}
        label="Start element"
        required
      />
    ),
  },
  {
    id: "end-element",
    label: "Item elements — End",
    render: () => (
      <DropdownPreview placeholder="End element" options={endElementOptions} label="End element" required />
    ),
  },
  {
    id: "tooltips",
    label: "With tooltips",
    render: () => <DropdownPreview placeholder="Placeholder text here" options={tooltipOptions} />,
  },
  {
    id: "box-mode-default",
    label: "Box mode — Default",
    render: () => (
      <DropdownPreview
        id="gallery-box-mode"
        ariaLabel="Box mode dropdown"
        options={basicOptions}
        label="Label"
        placeholder="Placeholder text here"
        helperText="Helper text"
        searchable
        boxMode
      />
    ),
  },
  {
    id: "box-mode-multi-single",
    label: "Box mode — Multi single line",
    render: () => (
      <DropdownPreview
        options={basicOptions}
        placeholder="Placeholder text"
        searchable
        multi
        boxMode
      />
    ),
  },
  {
    id: "box-mode-multi-multiline",
    label: "Box mode — Multi multiline",
    render: () => (
      <DropdownPreview
        options={basicOptions}
        placeholder="Placeholder text"
        searchable
        multi
        multiline
        boxMode
      />
    ),
  },
  {
    id: "box-mode-icons",
    label: "Box mode — With icons",
    render: () => (
      <DropdownPreview
        options={boxModeIconOptions}
        label="Notify via"
        placeholder="You can choose multiple options"
        searchable
        multi
        boxMode
      />
    ),
  },
  {
    id: "box-mode-people",
    label: "Box mode — People picker",
    render: () => (
      <div style={{ width: 350 }}>
        <Dropdown
          options={peopleOptions}
          label="Person"
          placeholder="Search for people"
          searchable
          boxMode
          multi
          size="small"
          clearAriaLabel="Clear"
        />
      </div>
    ),
  },
];

export function DropdownGalleryView() {
  return (
    <div className="component-gallery">
      <header className="component-gallery-header">
        <h1 className="component-gallery-title">Dropdown</h1>
        <p className="component-gallery-description">
          All dropdown variations currently supported by the component.
        </p>
      </header>
      <div className="component-gallery-grid">
        {dropdownVariations.map(({ id, label, render }) => (
          <article key={id} className="component-gallery-item">
            <h2 className="component-gallery-item-label">{label}</h2>
            <div className="component-gallery-item-preview">{render()}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
