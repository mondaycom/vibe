import { Button } from "@vibe/core";
import { Bolt, Calendar } from "@vibe/icons";
import type { ReactNode } from "react";
import { ComponentGallery, type GalleryVariation } from "./ComponentGallery";

function ButtonRow({ children }: { children: ReactNode }) {
  return <div className="button-gallery-row">{children}</div>;
}

const buttonVariations: GalleryVariation[] = [
  {
    id: "kind-primary",
    label: "Kind — Primary",
    render: () => <Button kind="primary">Primary</Button>
  },
  {
    id: "kind-secondary",
    label: "Kind — Secondary",
    render: () => <Button kind="secondary">Secondary</Button>
  },
  {
    id: "kind-tertiary",
    label: "Kind — Tertiary",
    render: () => <Button kind="tertiary">Tertiary</Button>
  },
  {
    id: "sizes",
    label: "Sizes",
    render: () => (
      <ButtonRow>
        <Button size="xs">XS</Button>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </ButtonRow>
    )
  },
  {
    id: "icon-left",
    label: "Icon — Left",
    render: () => (
      <ButtonRow>
        <Button size="xs" leftIcon={Calendar}>
          Left
        </Button>
        <Button size="small" leftIcon={Calendar}>
          Left
        </Button>
        <Button size="medium" leftIcon={Calendar}>
          Left
        </Button>
      </ButtonRow>
    )
  },
  {
    id: "icon-right",
    label: "Icon — Right",
    render: () => (
      <ButtonRow>
        <Button size="xs" rightIcon={Calendar}>
          Right
        </Button>
        <Button size="small" rightIcon={Calendar}>
          Right
        </Button>
        <Button size="medium" rightIcon={Calendar}>
          Right
        </Button>
      </ButtonRow>
    )
  },
  {
    id: "icon-both",
    label: "Icon — Both sides",
    render: () => (
      <Button leftIcon={Bolt} rightIcon={Bolt}>
        Both icons
      </Button>
    )
  },
  {
    id: "disabled-primary",
    label: "Disabled — Primary",
    render: () => <Button disabled>Primary</Button>
  },
  {
    id: "disabled-secondary",
    label: "Disabled — Secondary",
    render: () => (
      <Button kind="secondary" disabled>
        Secondary
      </Button>
    )
  },
  {
    id: "disabled-tertiary",
    label: "Disabled — Tertiary",
    render: () => (
      <Button kind="tertiary" disabled>
        Tertiary
      </Button>
    )
  },
  {
    id: "state-active",
    label: "State — Active",
    render: () => <Button active>Active</Button>
  },
  {
    id: "color-positive",
    label: "Color — Positive",
    render: () => <Button color="positive">Positive</Button>
  },
  {
    id: "color-negative",
    label: "Color — Negative",
    render: () => <Button color="negative">Negative</Button>
  },
  {
    id: "loading",
    label: "State — Loading",
    render: () => <Button loading>Loading</Button>
  }
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
