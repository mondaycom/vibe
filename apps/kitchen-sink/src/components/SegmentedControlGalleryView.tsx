import { SegmentedControl } from "@vibe/core";
import { Board, Calendar, Chart } from "@vibe/icons";
import { ComponentGallery, type GalleryVariation } from "./ComponentGallery";

const textOptions = [
  { value: "day", label: "Day" },
  { value: "week", label: "Week" },
  { value: "month", label: "Month" },
];

const iconOptions = [
  { value: "calendar", label: "Calendar", icon: Calendar },
  { value: "board", label: "Board", icon: Board },
  { value: "chart", label: "Chart", icon: Chart },
];

const segmentedControlVariations: GalleryVariation[] = [
  {
    id: "default",
    label: "Default",
    render: () => (
      <SegmentedControl ariaLabel="View options" options={textOptions} defaultValue="week" />
    ),
  },
  {
    id: "size-xs",
    label: "Size — XS",
    render: () => (
      <SegmentedControl ariaLabel="XS segmented control" options={textOptions} defaultValue="week" size="xs" />
    ),
  },
  {
    id: "size-small",
    label: "Size — Small",
    render: () => (
      <SegmentedControl
        ariaLabel="Small segmented control"
        options={textOptions}
        defaultValue="week"
        size="small"
      />
    ),
  },
  {
    id: "size-medium",
    label: "Size — Medium",
    render: () => (
      <SegmentedControl
        ariaLabel="Medium segmented control"
        options={textOptions}
        defaultValue="week"
        size="medium"
      />
    ),
  },
  {
    id: "size-large",
    label: "Size — Large",
    render: () => (
      <SegmentedControl
        ariaLabel="Large segmented control"
        options={textOptions}
        defaultValue="week"
        size="large"
      />
    ),
  },
  {
    id: "with-icons",
    label: "With icons",
    render: () => (
      <SegmentedControl ariaLabel="View with icons" options={iconOptions} defaultValue="board" />
    ),
  },
  {
    id: "disabled-option",
    label: "State — Option disabled",
    render: () => (
      <SegmentedControl
        ariaLabel="Segmented control with disabled option"
        options={[
          { value: "day", label: "Day" },
          { value: "week", label: "Week" },
          { value: "month", label: "Month", disabled: true },
        ]}
        defaultValue="week"
      />
    ),
  },
  {
    id: "disabled-group",
    label: "State — Disabled",
    render: () => (
      <SegmentedControl
        ariaLabel="Disabled segmented control"
        options={textOptions}
        defaultValue="week"
        disabled
      />
    ),
  },
  {
    id: "full-width",
    label: "Layout — Full width",
    render: () => (
      <div style={{ width: "100%" }}>
        <SegmentedControl
          ariaLabel="Full width segmented control"
          options={textOptions}
          defaultValue="week"
          fullWidth
        />
      </div>
    ),
  },
];

export function SegmentedControlGalleryView() {
  return (
    <ComponentGallery
      className="segmented-control-gallery"
      title="Button Group"
      description="Button Group on Current uses Segmented Control — all variations currently supported by the component."
      variations={segmentedControlVariations}
    />
  );
}
