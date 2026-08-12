import type { ReactNode } from "react";
import { TextField } from "@vibe/core";
import { Check, CloseSmall, Duplicate, Email } from "@vibe/icons";
import { ComponentGallery, type GalleryVariation } from "./ComponentGallery";

function FieldFrame({ children }: { children: ReactNode }) {
  return <div style={{ width: "100%", maxWidth: 300 }}>{children}</div>;
}

const textFieldVariations: GalleryVariation[] = [
  {
    id: "size-small",
    label: "Size — Small",
    render: () => (
      <FieldFrame>
        <TextField placeholder="Small" size="small" />
      </FieldFrame>
    ),
  },
  {
    id: "size-medium",
    label: "Size — Medium",
    render: () => (
      <FieldFrame>
        <TextField placeholder="Medium" size="medium" />
      </FieldFrame>
    ),
  },
  {
    id: "size-large",
    label: "Size — Large",
    render: () => (
      <FieldFrame>
        <TextField placeholder="Large" size="large" />
      </FieldFrame>
    ),
  },
  {
    id: "with-title",
    label: "With title",
    render: () => (
      <FieldFrame>
        <TextField title="Project name" placeholder="Enter a project name" size="medium" />
      </FieldFrame>
    ),
  },
  {
    id: "disabled",
    label: "State — Disabled",
    render: () => (
      <FieldFrame>
        <TextField placeholder="Disabled" size="medium" disabled />
      </FieldFrame>
    ),
  },
  {
    id: "with-icon",
    label: "With icon",
    render: () => (
      <FieldFrame>
        <TextField placeholder="With icon" iconName={Email} size="medium" />
      </FieldFrame>
    ),
  },
  {
    id: "clickable-icon",
    label: "With clickable icon",
    render: () => (
      <FieldFrame>
        <TextField
          placeholder="With clickable icon"
          iconName={Duplicate}
          iconTooltipContent="Copy"
          onIconClick={() => {}}
          size="medium"
        />
      </FieldFrame>
    ),
  },
  {
    id: "validation-success",
    label: "Validation — Success",
    render: () => (
      <FieldFrame>
        <TextField
          placeholder="Success"
          validation={{ status: "success", text: "Looks good" }}
          iconName={Check}
          size="medium"
        />
      </FieldFrame>
    ),
  },
  {
    id: "validation-error",
    label: "Validation — Error",
    render: () => (
      <FieldFrame>
        <TextField
          title="Name"
          placeholder="Validate me"
          validation={{ status: "error", text: "This field needs attention" }}
          iconName={CloseSmall}
          size="medium"
        />
      </FieldFrame>
    ),
  },
  {
    id: "required",
    label: "Required",
    render: () => (
      <FieldFrame>
        <TextField title="Email" placeholder="Required field" size="medium" required />
      </FieldFrame>
    ),
  },
];

export function TextFieldGalleryView() {
  return (
    <ComponentGallery
      className="text-field-gallery"
      title="Text Field"
      description="All text field variations currently supported by the component."
      variations={textFieldVariations}
    />
  );
}
