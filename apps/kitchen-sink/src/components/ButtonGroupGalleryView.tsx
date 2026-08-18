import { ButtonGroup } from "@vibe/core";
import { ComponentGallery, type GalleryVariation } from "./ComponentGallery";

const options = [
  { value: 1, text: "Alpha" },
  { value: 2, text: "Beta" },
  { value: 3, text: "Gamma" },
  { value: 4, text: "Delta" },
];

const buttonGroupVariations: GalleryVariation[] = [
  {
    id: "kind-secondary",
    label: "Kind — Secondary (default)",
    render: () => (
      <ButtonGroup groupAriaLabel="Secondary button group" options={options} value={1} kind="secondary" />
    ),
  },
  {
    id: "kind-tertiary",
    label: "Kind — Tertiary",
    render: () => (
      <ButtonGroup groupAriaLabel="Tertiary button group" options={options} value={1} kind="tertiary" />
    ),
  },
  {
    id: "size-medium",
    label: "Size — Medium",
    render: () => (
      <ButtonGroup groupAriaLabel="Medium button group" options={options} value={1} size="medium" />
    ),
  },
  {
    id: "size-small",
    label: "Size — Small",
    render: () => (
      <ButtonGroup groupAriaLabel="Small button group" options={options} value={1} size="small" />
    ),
  },
  {
    id: "disabled",
    label: "State — Disabled",
    render: () => <ButtonGroup groupAriaLabel="Disabled button group" options={options} disabled />,
  },
  {
    id: "disabled-single",
    label: "State — Single option disabled",
    render: () => (
      <ButtonGroup
        groupAriaLabel="Button group with disabled option"
        options={[
          { value: 1, text: "Alpha" },
          { value: 2, text: "Beta" },
          { value: 3, text: "Gamma" },
          { value: 4, text: "Delta", disabled: true, tooltipContent: "Unavailable option" },
        ]}
        value={1}
      />
    ),
  },
  {
    id: "full-width",
    label: "Layout — Full width",
    render: () => (
      <div style={{ width: "100%" }}>
        <ButtonGroup groupAriaLabel="Full width button group" options={options} value={1} fullWidth />
      </div>
    ),
  },
];

export function ButtonGroupGalleryView() {
  return (
    <ComponentGallery
      title="Button Group"
      description="All button group variations currently supported by the component."
      variations={buttonGroupVariations}
    />
  );
}
