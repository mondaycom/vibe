import { lazy, Suspense, type ComponentType } from "react";
import { isCurrentVibeSource } from "../lib/vibeSource";
import type { ComponentGalleryId, ComponentSubPage } from "../types";
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
import { StrokeSpotlightGalleryView } from "./StrokeSpotlightGalleryView";

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

const ALL_COMPONENT_GALLERIES: ComponentGalleryId[] = [
  "icon-button",
  "button",
  "button-group",
  "tabs",
  "label",
  "chip",
  "menu",
  "text-field",
  "dropdown",
  "toast",
  "stroke-spotlight",
];

export const COMPONENT_GALLERY_ORDER = ALL_COMPONENT_GALLERIES;

function ButtonGroupGalleryEntry() {
  const Gallery = isCurrentVibeSource ? SegmentedControlGalleryView : ButtonGroupGalleryView;
  return <Gallery />;
}

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
  "stroke-spotlight": "Stroke Spotlight",
};

export const componentGalleries: Record<ComponentGalleryId, ComponentType> = {
  "icon-button": IconButtonGalleryView,
  button: ButtonGalleryView,
  "button-group": ButtonGroupGalleryEntry,
  "segmented-control": SegmentedControlGalleryView,
  tabs: TabsGalleryView,
  label: LabelGalleryView,
  chip: ChipsGalleryView,
  menu: MenuGalleryView,
  "text-field": TextFieldGalleryView,
  dropdown: DropdownGalleryEntry,
  toast: ToastGalleryView,
  "stroke-spotlight": StrokeSpotlightGalleryView,
};

export function migrateComponentSubPage(page: ComponentSubPage): ComponentSubPage {
  return page === "segmented-control" ? "button-group" : page;
}

export function resolveComponentSubPage(page: unknown): ComponentSubPage {
  if (page === "grid") return "grid";
  if (typeof page !== "string") return "grid";

  const migrated = migrateComponentSubPage(page as ComponentSubPage);
  return isComponentGalleryId(migrated) ? migrated : "grid";
}

export function isComponentGalleryId(value: string): value is ComponentGalleryId {
  return (COMPONENT_GALLERY_ORDER as string[]).includes(value);
}
