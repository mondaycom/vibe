import { Label } from "@vibe/core";
import { ComponentGallery, type GalleryVariation } from "./ComponentGallery";

const labelVariations: GalleryVariation[] = [
  {
    id: "kind-fill",
    label: "Kind — Fill",
    render: () => <Label text="New" />,
  },
  {
    id: "kind-line",
    label: "Kind — Outline (line)",
    render: () => <Label text="New" kind="line" />,
  },
  {
    id: "size-medium",
    label: "Size — Medium",
    render: () => <Label text="New" size="medium" />,
  },
  {
    id: "size-small",
    label: "Size — Small",
    render: () => <Label text="New" size="small" />,
  },
  {
    id: "color-primary-fill",
    label: "Color — Primary fill",
    render: () => <Label text="New" color="primary" />,
  },
  {
    id: "color-positive-fill",
    label: "Color — Positive fill",
    render: () => <Label text="New" color="positive" />,
  },
  {
    id: "color-negative-fill",
    label: "Color — Negative fill",
    render: () => <Label text="New" color="negative" />,
  },
  {
    id: "color-dark-fill",
    label: "Color — Dark fill",
    render: () => <Label text="New" color="dark" />,
  },
  {
    id: "color-primary-line",
    label: "Color — Primary outline",
    render: () => <Label text="New" color="primary" kind="line" />,
  },
  {
    id: "color-positive-line",
    label: "Color — Positive outline",
    render: () => <Label text="New" color="positive" kind="line" />,
  },
  {
    id: "color-negative-line",
    label: "Color — Negative outline",
    render: () => <Label text="New" color="negative" kind="line" />,
  },
  {
    id: "color-dark-line",
    label: "Color — Dark outline",
    render: () => <Label text="New" color="dark" kind="line" />,
  },
  {
    id: "clickable-fill",
    label: "Clickable — Fill",
    render: () => <Label text="New" onClick={() => {}} aria-label="Clickable new feature label" />,
  },
  {
    id: "clickable-line",
    label: "Clickable — Outline",
    render: () => (
      <Label text="New" kind="line" onClick={() => {}} aria-label="Clickable new feature label" />
    ),
  },
];

export function LabelGalleryView() {
  return (
    <ComponentGallery
      title="Label"
      description="All label variations currently supported by the component."
      variations={labelVariations}
    />
  );
}
