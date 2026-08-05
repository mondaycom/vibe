import type { ComponentType } from "react";
import type { ComponentGalleryId } from "../types";
import { ButtonGalleryView } from "./ButtonGalleryView";
import { ButtonGroupGalleryView } from "./ButtonGroupGalleryView";
import { ChipGalleryView } from "./ChipGalleryView";
import { DropdownGalleryView } from "./DropdownGalleryView";
import { IconButtonGalleryView } from "./IconButtonGalleryView";
import { LabelGalleryView } from "./LabelGalleryView";
import { TabsGalleryView } from "./TabsGalleryView";
import { TextFieldGalleryView } from "./TextFieldGalleryView";
import { ToastGalleryView } from "./ToastGalleryView";

export const COMPONENT_GALLERY_ORDER: ComponentGalleryId[] = [
  "icon-button",
  "button",
  "button-group",
  "tabs",
  "label",
  "chip",
  "text-field",
  "dropdown",
  "toast",
];

export const COMPONENT_GALLERY_LABELS: Record<ComponentGalleryId, string> = {
  "icon-button": "Icon Button",
  button: "Button",
  "button-group": "Button Group",
  tabs: "Tabs",
  label: "Label",
  chip: "Chip",
  "text-field": "Text Field",
  dropdown: "Dropdown",
  toast: "Toast",
};

export const componentGalleries: Record<ComponentGalleryId, ComponentType> = {
  "icon-button": IconButtonGalleryView,
  button: ButtonGalleryView,
  "button-group": ButtonGroupGalleryView,
  tabs: TabsGalleryView,
  label: LabelGalleryView,
  chip: ChipGalleryView,
  "text-field": TextFieldGalleryView,
  dropdown: DropdownGalleryView,
  toast: ToastGalleryView,
};

export function isComponentGalleryId(value: string): value is ComponentGalleryId {
  return (COMPONENT_GALLERY_ORDER as string[]).includes(value);
}
