import { Label } from "@vibe/core";
import { ComponentGallery, type GalleryVariation } from "./ComponentGallery";

const labelVariations: GalleryVariation[] = [
  {
    id: "default",
    label: "Default",
    render: () => <Label text="New" />,
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
    id: "color-primary",
    label: "Color — Primary",
    render: () => <Label text="New" color="primary" />,
  },
  {
    id: "color-positive",
    label: "Color — Positive",
    render: () => <Label text="New" color="positive" />,
  },
  {
    id: "color-negative",
    label: "Color — Negative",
    render: () => <Label text="New" color="negative" />,
  },
  {
    id: "color-dark",
    label: "Color — Dark",
    render: () => <Label text="New" color="dark" />,
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
