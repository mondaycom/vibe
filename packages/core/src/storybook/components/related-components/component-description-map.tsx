import React from "react";

/* eslint-disable react/jsx-key */
import { SplitButtonDescription } from "./descriptions/split-button-description";
import { ButtonGroupDescription } from "./descriptions/button-group-description";
import { CheckboxDescription } from "./descriptions/checkbox-description";
import { RadioButtonDescription } from "./descriptions/radio-button-description";
import { LabelDescription } from "./descriptions/label-description";
import { LinkDescription } from "./descriptions/link-description";
import { CounterDescription } from "./descriptions/counter-description";
import { ChipsDescription } from "./descriptions/chips-description";
import { TooltipDescription } from "./descriptions/tooltip-description";
import { ToggleDescription } from "./descriptions/toggle-description";
import { DropdownDescription } from "./descriptions/dropdown-description";
import { ButtonDescription } from "./descriptions/button-description";
import { TabsDescription } from "./descriptions/tab-description";
import { BreadcrumbsDescription } from "./descriptions/breadcrumbs-description";
import { MenuDescription } from "./descriptions/menu-description";
import { AttentionBoxDescription } from "./descriptions/attention-box-description";
import { AlertBannerDescription } from "./descriptions/alert-banner-description";
import { ToastDescription } from "./descriptions/toast-description";
import { MultiStepIndicatorDescription } from "./descriptions/multi-step-indicator-description";
import { TipseenDescription } from "./descriptions/tipseen-description";
import { TextFieldDescription } from "./descriptions/text-field-description";
import { SearchDescription } from "./descriptions/search-description";
import { ComboboxDescription } from "./descriptions/combobox-description";
import { StepsDescription } from "./descriptions/steps-description";
import { ColorsDescription } from "./descriptions/colors-description/colors-description";
import { AvatarDescription } from "./descriptions/avatar-description";
import { AvatarGroupDescription } from "./descriptions/avatar-group-description";
import { IconsDescription } from "./descriptions/icons-description";
import { SpinnerDescription } from "./descriptions/spinner-description";
import { SkeletonDescription } from "./descriptions/skeleton-description";
import { TypographyDescription } from "./descriptions/typography-description/typography-description";
import { LinearProgressBarDescription } from "./descriptions/linear-progress-bar-description";
import { EditableHeadingDescription } from "./descriptions/editable-heading-description";
import { EditableTextDescription } from "./descriptions/editable-text-description";
import { ShadowDescription } from "./descriptions/shadow-description/shadow-description";
import { HeadingDescription } from "./descriptions/heading-description";
import { SpacingDescription } from "./descriptions/spacing-description/spacing-description";
import { IconButtonDescription } from "./descriptions/icon-button-description";
import { MenuButtonDescription } from "./descriptions/menu-button-description";
import { ClickableDescription } from "./descriptions/clickable-description/clickable-description";
import { HiddenTextDescription } from "./descriptions/hidden-text-description";
import { ListDescription } from "./descriptions/list-description";
import { FlexDescription } from "./descriptions/flex-description";
import { DividerDescription } from "./descriptions/divider";
import { DialogContentContainerDescription } from "./descriptions/dialog-content-container";
import { DialogDescription } from "./descriptions/dialog-description/dialog-description";
import { AccordionDescription } from "./descriptions/accordion-description/accordion-description";
import { ExpandCollapseDescription } from "./descriptions/expand-collapse-description/expand-collapse-description";
import { TextDescription } from "./descriptions/text-description";
import { VirtualizedListDescription } from "./descriptions/virtualized-list-description/virtualized-list-description";
import { ColorPickerDescription } from "./descriptions/color-picker-description";
import { BadgeDescription } from "./descriptions/badge-description";
import { SliderDescription } from "./descriptions/slider-description";
import { IconDescription } from "./descriptions/icon-description";
import { BoxDescription } from "./descriptions/box-description";
import { TableDescription } from "./descriptions/table-description";
import { VirtualizedGridDescription } from "./descriptions/virtualized-grid-description/virtualized-grid-description";

export const SPLIT_BUTTON = "split-button";
export const BUTTON_GROUP = "button-group";
export const LABEL = "label";
export const LINK = "link";
export const CHECKBOX = "checkbox";
export const RADIO_BUTTON = "radio-button";
export const COUNTER = "counter";
export const TOOLTIP = "tooltip";
export const TOGGLE = "toggle";
export const DROPDOWN = "dropdown";
export const CHIP = "chips";
export const BUTTON = "button";
export const TABS = "tabs";
export const BREADCRUBMS = "breadcrumbs";
export const MENU = "menu";
export const ATTENTION_BOX = "attention-box";
export const ALERT_BANNER = "alert-banner";
export const TOAST = "toast";
export const BADGE = "badge";
export const MULTI_STEP_INDICATOR = "wizard";
export const TIPSEEN = "tipseen";
export const TEXT_FIELD = "text-field";
export const SEARCH = "search";
export const COMBOBOX = "combobox";
export const AVATAR = "avatar";
export const AVATAR_GROUP = "avatar-group";
export const ICONS = "icons";
export const STEPS = "steps";
export const SPINNER = "spinner";
export const SKELETON = "skeleton";
export const LINEAR_PROGRESS_BAR = "linear-progress-bar";
export const HEADING = "heading";
export const EDITABLE_HEADING = "editable-heading";
export const EDITABLE_TEXT = "editable-text";
export const ICON = "icon";
export const ICON_BUTTON = "icon-button";
export const MENU_BUTTON = "menu-button";
export const CLICKABLE = "clickable";
export const HIDDEN_TEXT = "hidden-text-description";
export const LIST = "list";
export const FLEX = "flex";
export const DIVIDER = "divider";
export const DIALOG_CONTENT_CONTAINER = "dialog-content-container-description";
export const DIALOG = "dialog";
export const TEXT = "text";
export const ACCORDION = "accordion";
export const EXPAND_COLLAPSE = "expand-collapse";
export const VIRTUALIZED_LIST = "virtualized-list";
export const VIRTUALIZED_GRID = "virtualized-grid";
export const COLOR_PICKER = "color-picker";
export const SLIDER = "slider";
export const BOX = "box";
export const TABLE = "table";

export const COLORS = "colors";
export const TYPOGRAPHY = "typography";
export const SHADOW = "shadow";
export const SPACING = "spacing";

// Component description names (related to specific components)
const COMPONENTS_DESCRIPTIONS_ENTRIES: [string, JSX.Element][] = [
  [SPLIT_BUTTON, <SplitButtonDescription />],
  [BUTTON_GROUP, <ButtonGroupDescription />],
  [LABEL, <LabelDescription />],
  [LINK, <LinkDescription />],
  [CHECKBOX, <CheckboxDescription />],
  [RADIO_BUTTON, <RadioButtonDescription />],
  [COUNTER, <CounterDescription />],
  [TOOLTIP, <TooltipDescription />],
  [TOGGLE, <ToggleDescription />],
  [DROPDOWN, <DropdownDescription />],
  [CHIP, <ChipsDescription />],
  [ATTENTION_BOX, <AttentionBoxDescription />],
  [ALERT_BANNER, <AlertBannerDescription />],
  [TOAST, <ToastDescription />],
  [BADGE, <BadgeDescription />],
  [BUTTON, <ButtonDescription />],
  [TABS, <TabsDescription />],
  [BREADCRUBMS, <BreadcrumbsDescription />],
  [MENU, <MenuDescription />],
  [MULTI_STEP_INDICATOR, <MultiStepIndicatorDescription />],
  [TIPSEEN, <TipseenDescription />],
  [TEXT_FIELD, <TextFieldDescription />],
  [SEARCH, <SearchDescription />],
  [COMBOBOX, <ComboboxDescription />],
  [AVATAR, <AvatarDescription />],
  [AVATAR_GROUP, <AvatarGroupDescription />],
  [ICON, <IconDescription />],
  [ICONS, <IconsDescription />],
  [STEPS, <StepsDescription />],
  [SPINNER, <SpinnerDescription />],
  [SKELETON, <SkeletonDescription />],
  [SLIDER, <SliderDescription />],
  [ICON_BUTTON, <IconButtonDescription />],
  [MENU_BUTTON, <MenuButtonDescription />],
  [LINEAR_PROGRESS_BAR, <LinearProgressBarDescription />],
  [EDITABLE_HEADING, <EditableHeadingDescription />],
  [EDITABLE_TEXT, <EditableTextDescription />],
  [HEADING, <HeadingDescription />],
  [CLICKABLE, <ClickableDescription />],
  [HIDDEN_TEXT, <HiddenTextDescription />],
  [LIST, <ListDescription />],
  [FLEX, <FlexDescription />],
  [DIVIDER, <DividerDescription />],
  [DIALOG_CONTENT_CONTAINER, <DialogContentContainerDescription />],
  [DIALOG, <DialogDescription />],
  [TEXT, <TextDescription />],
  [ACCORDION, <AccordionDescription />],
  [EXPAND_COLLAPSE, <ExpandCollapseDescription />],
  [VIRTUALIZED_LIST, <VirtualizedListDescription />],
  [VIRTUALIZED_GRID, <VirtualizedGridDescription />],
  [COLOR_PICKER, <ColorPickerDescription />],
  [BOX, <BoxDescription />],
  [TABLE, <TableDescription />]
];

// General description names (not related to specific components)
const GENERAL_DESCRIPTIONS_ENTRIES: [string, JSX.Element][] = [
  [COLORS, <ColorsDescription />],
  [TYPOGRAPHY, <TypographyDescription />],
  [SHADOW, <ShadowDescription />],
  [SPACING, <SpacingDescription />]
];

export const DESCRIPTION_COMPONENTS_WITHOUT_GENERAL_DESCRIPTION_MAP = new Map<string, JSX.Element>(
  COMPONENTS_DESCRIPTIONS_ENTRIES
);
export const DESCRIPTION_COMPONENTS_MAP = new Map<string, JSX.Element>([
  ...COMPONENTS_DESCRIPTIONS_ENTRIES,
  ...GENERAL_DESCRIPTIONS_ENTRIES
]);
