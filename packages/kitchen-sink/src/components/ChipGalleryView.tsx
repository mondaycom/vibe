import { Chips } from "@vibe/core";
import { Email } from "@vibe/icons";
import { ComponentGallery, type GalleryVariation } from "./ComponentGallery";

const chipVariations: GalleryVariation[] = [
  {
    id: "default",
    label: "Default",
    render: () => <Chips label="This is a chip" readOnly />,
  },
  {
    id: "color-primary",
    label: "Color — Primary",
    render: () => <Chips label="Primary" color="primary" readOnly />,
  },
  {
    id: "color-positive",
    label: "Color — Positive",
    render: () => <Chips label="Positive" color="positive" readOnly />,
  },
  {
    id: "color-negative",
    label: "Color — Negative",
    render: () => <Chips label="Negative" color="negative" readOnly />,
  },
  {
    id: "color-warning",
    label: "Color — Warning",
    render: () => <Chips label="Warning" color="warning" readOnly />,
  },
  {
    id: "color-neutral",
    label: "Color — Neutral",
    render: () => <Chips label="Neutral" color="neutral" readOnly />,
  },
  {
    id: "readonly",
    label: "State — Read only",
    render: () => <Chips label="Read only chip" readOnly />,
  },
  {
    id: "disabled",
    label: "State — Disabled",
    render: () => <Chips label="Disabled" disabled />,
  },
  {
    id: "removable",
    label: "Removable",
    render: () => <Chips label="Removable chip" onDelete={() => {}} />,
  },
  {
    id: "clickable",
    label: "Clickable",
    render: () => <Chips label="Clickable chip" readOnly onClick={() => {}} />,
  },
  {
    id: "left-icon",
    label: "With left icon",
    render: () => <Chips label="Left icon" leftIcon={Email} readOnly />,
  },
  {
    id: "right-icon",
    label: "With right icon",
    render: () => <Chips label="Right icon" rightIcon={Email} readOnly />,
  },
];

export function ChipGalleryView() {
  return (
    <ComponentGallery
      title="Chip"
      description="All chip variations currently supported by the component."
      variations={chipVariations}
    />
  );
}
