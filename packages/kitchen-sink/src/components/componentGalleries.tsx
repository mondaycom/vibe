import { lazy, Suspense, type ComponentType } from "react";
import type { ComponentGalleryId } from "../types";
import { ButtonGalleryView } from "./ButtonGalleryView";
import { ButtonGroupGalleryView } from "./ButtonGroupGalleryView";
import { ChipsGalleryView } from "./ChipsGalleryView";
import { IconButtonGalleryView } from "./IconButtonGalleryView";
import { LabelGalleryView } from "./LabelGalleryView";
import { MenuGalleryView } from "./MenuGalleryView";
import { SegmentedControlGalleryView } from "./SegmentedControlGalleryView";
import { TabsGalleryView } from "./TabsGalleryView";
import { TextFieldGalleryView } from "./TextFieldGalleryView";
import { ToastGalleryView } from "./ToastGalleryView";

const LazyDropdownGalleryView = lazy(() =>
  import("./DropdownGalleryView").then((m) => ({ default: m.DropdownGalleryView }))
);

function DropdownGalleryEntry() {
  return (
    <Suspense fallback={<p className="component-gallery">Loading dropdown gallery…</p>}>
      <LazyDropdownGalleryView />
    </Suspense>
  );
}

export const COMPONENT_GALLERY_ORDER: ComponentGalleryId[] = [
  "icon-button",
  "button",
  "button-group",
  "segmented-control",
  "tabs",
  "label",
  "chip",
  "menu",
  "text-field",
  "dropdown",
  "toast",
];

export const COMPONENT_GALLERY_LABELS: Record<ComponentGalleryId, string> = {
  "icon-button": "Icon Button",
  button: "Button",
  "button-group": "Button Group",
  "segmented-control": "Segmented Control",
  tabs: "Tabs",
  label: "Label",
  chip: "Chips",
  menu: "Menu",
  "text-field": "Text Field",
  dropdown: "Dropdown",
  toast: "Toast",
};

export const componentGalleries: Record<ComponentGalleryId, ComponentType> = {
  "icon-button": IconButtonGalleryView,
  button: ButtonGalleryView,
  "button-group": ButtonGroupGalleryView,
  "segmented-control": SegmentedControlGalleryView,
  tabs: TabsGalleryView,
  label: LabelGalleryView,
  chip: ChipsGalleryView,
  menu: MenuGalleryView,
  "text-field": TextFieldGalleryView,
  dropdown: DropdownGalleryEntry,
  toast: ToastGalleryView,
};

export function isComponentGalleryId(value: string): value is ComponentGalleryId {
  return (COMPONENT_GALLERY_ORDER as string[]).includes(value);
}
