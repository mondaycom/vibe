import { Button } from "@vibe/core";
import { Bolt, Calendar } from "@vibe/icons";
import { ComponentGallery, type GalleryVariation } from "./ComponentGallery";

const buttonVariations: GalleryVariation[] = [
  {
    id: "kind-primary",
    label: "Kind — Primary",
    render: () => <Button kind="primary">Primary</Button>,
  },
  {
    id: "kind-secondary",
    label: "Kind — Secondary",
    render: () => <Button kind="secondary">Secondary</Button>,
  },
  {
    id: "kind-tertiary",
    label: "Kind — Tertiary",
    render: () => <Button kind="tertiary">Tertiary</Button>,
  },
  {
    id: "size-large",
    label: "Size — Large",
    render: () => <Button size="large">Large</Button>,
  },
  {
    id: "size-medium",
    label: "Size — Medium",
    render: () => <Button size="medium">Medium</Button>,
  },
  {
    id: "size-small",
    label: "Size — Small",
    render: () => <Button size="small">Small</Button>,
  },
  {
    id: "disabled-primary",
    label: "Disabled — Primary",
    render: () => <Button disabled>Primary</Button>,
  },
  {
    id: "disabled-secondary",
    label: "Disabled — Secondary",
    render: () => (
      <Button kind="secondary" disabled>
        Secondary
      </Button>
    ),
  },
  {
    id: "disabled-tertiary",
    label: "Disabled — Tertiary",
    render: () => (
      <Button kind="tertiary" disabled>
        Tertiary
      </Button>
    ),
  },
  {
    id: "state-active",
    label: "State — Active",
    render: () => <Button active>Active</Button>,
  },
  {
    id: "color-positive",
    label: "Color — Positive",
    render: () => <Button color="positive">Positive</Button>,
  },
  {
    id: "color-negative",
    label: "Color — Negative",
    render: () => <Button color="negative">Negative</Button>,
  },
  {
    id: "icon-left",
    label: "Icon — Left",
    render: () => <Button leftIcon={Calendar}>Left icon</Button>,
  },
  {
    id: "icon-right",
    label: "Icon — Right",
    render: () => <Button rightIcon={Calendar}>Right icon</Button>,
  },
  {
    id: "icon-both",
    label: "Icon — Both sides",
    render: () => (
      <Button leftIcon={Bolt} rightIcon={Bolt}>
        Both icons
      </Button>
    ),
  },
  {
    id: "loading",
    label: "State — Loading",
    render: () => <Button loading>Loading</Button>,
  },
];

export function ButtonGalleryView() {
  return (
    <ComponentGallery
      title="Button"
      description="All button variations currently supported by the component."
      variations={buttonVariations}
    />
  );
}
