import { IconButton } from "@vibe/core";
import { Add, Bolt, Doc, Robot } from "@vibe/icons";
import { ComponentGallery, type GalleryVariation } from "./ComponentGallery";

const iconButtonVariations: GalleryVariation[] = [
  {
    id: "kind-primary",
    label: "Kind — Primary",
    render: () => <IconButton icon={Bolt} kind="primary" ariaLabel="Primary icon button" />,
  },
  {
    id: "kind-secondary",
    label: "Kind — Secondary",
    render: () => <IconButton icon={Bolt} kind="secondary" ariaLabel="Secondary icon button" />,
  },
  {
    id: "kind-tertiary",
    label: "Kind — Tertiary",
    render: () => <IconButton icon={Bolt} kind="tertiary" ariaLabel="Tertiary icon button" />,
  },
  {
    id: "size-xxs",
    label: "Size — XXS",
    render: () => <IconButton icon={Robot} kind="secondary" size="xxs" ariaLabel="XXS icon button" />,
  },
  {
    id: "size-xs",
    label: "Size — XS",
    render: () => <IconButton icon={Robot} kind="secondary" size="xs" ariaLabel="XS icon button" />,
  },
  {
    id: "size-small",
    label: "Size — Small",
    render: () => <IconButton icon={Robot} kind="secondary" size="small" ariaLabel="Small icon button" />,
  },
  {
    id: "size-medium",
    label: "Size — Medium",
    render: () => <IconButton icon={Robot} kind="secondary" size="medium" ariaLabel="Medium icon button" />,
  },
  {
    id: "size-large",
    label: "Size — Large",
    render: () => <IconButton icon={Robot} kind="secondary" size="large" ariaLabel="Large icon button" />,
  },
  {
    id: "active-primary",
    label: "Active — Primary",
    render: () => <IconButton icon={Doc} kind="primary" active ariaLabel="Active primary icon button" />,
  },
  {
    id: "active-secondary",
    label: "Active — Secondary",
    render: () => <IconButton icon={Doc} kind="secondary" active ariaLabel="Active secondary icon button" />,
  },
  {
    id: "active-tertiary",
    label: "Active — Tertiary",
    render: () => <IconButton icon={Doc} kind="tertiary" active ariaLabel="Active tertiary icon button" />,
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
        ariaLabel="Disabled primary icon button"
      />
    ),
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
        ariaLabel="Disabled secondary icon button"
      />
    ),
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
        ariaLabel="Disabled tertiary icon button"
      />
    ),
  },
  {
    id: "default-add",
    label: "Default — Add",
    render: () => <IconButton icon={Add} ariaLabel="Add" onClick={() => {}} />,
  },
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
