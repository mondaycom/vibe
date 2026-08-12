import { IconButton } from "@vibe/core";
import { Add, Bolt, Doc, Robot } from "@vibe/icons";
import { ComponentGallery, type GalleryVariation } from "./ComponentGallery";

const iconButtonVariations: GalleryVariation[] = [
  {
    id: "kind-primary",
    label: "Kind — Primary",
    render: () => <IconButton icon={Bolt} kind="primary" aria-label="Primary icon button" />
  },
  {
    id: "kind-secondary",
    label: "Kind — Secondary",
    render: () => <IconButton icon={Bolt} kind="secondary" aria-label="Secondary icon button" />
  },
  {
    id: "kind-tertiary",
    label: "Kind — Tertiary",
    render: () => <IconButton icon={Bolt} kind="tertiary" aria-label="Tertiary icon button" />
  },
  {
    id: "size-xs",
    label: "Size — XS",
    render: () => <IconButton icon={Robot} kind="secondary" size="xs" aria-label="XS icon button" />
  },
  {
    id: "size-small",
    label: "Size — Small",
    render: () => <IconButton icon={Robot} kind="secondary" size="small" aria-label="Small icon button" />
  },
  {
    id: "size-medium",
    label: "Size — Medium",
    render: () => <IconButton icon={Robot} kind="secondary" size="medium" aria-label="Medium icon button" />
  },
  {
    id: "size-large",
    label: "Size — Large",
    render: () => <IconButton icon={Robot} kind="secondary" size="large" aria-label="Large icon button" />
  },
  {
    id: "active-primary",
    label: "Active — Primary",
    render: () => <IconButton icon={Doc} kind="primary" active aria-label="Active primary icon button" />
  },
  {
    id: "active-secondary",
    label: "Active — Secondary",
    render: () => <IconButton icon={Doc} kind="secondary" active aria-label="Active secondary icon button" />
  },
  {
    id: "active-tertiary",
    label: "Active — Tertiary",
    render: () => <IconButton icon={Doc} kind="tertiary" active aria-label="Active tertiary icon button" />
  },
  {
    id: "disabled-primary",
    label: "Disabled — Primary",
    render: () => (
      <IconButton
        icon={Doc}
        kind="primary"
        disabled
        disabledReason="This function is not available"
        aria-label="Disabled primary icon button"
      />
    )
  },
  {
    id: "disabled-secondary",
    label: "Disabled — Secondary",
    render: () => (
      <IconButton
        icon={Doc}
        kind="secondary"
        disabled
        disabledReason="This function is not available"
        aria-label="Disabled secondary icon button"
      />
    )
  },
  {
    id: "disabled-tertiary",
    label: "Disabled — Tertiary",
    render: () => (
      <IconButton
        icon={Doc}
        kind="tertiary"
        disabled
        disabledReason="This function is not available"
        aria-label="Disabled tertiary icon button"
      />
    )
  },
  {
    id: "default-add",
    label: "Default — Add",
    render: () => <IconButton icon={Add} aria-label="Add" onClick={() => {}} />
  }
];

export function IconButtonGalleryView() {
  return (
    <ComponentGallery
      title="Icon Button"
      description="All icon button variations currently supported by the component."
      variations={iconButtonVariations}
    />
  );
}
