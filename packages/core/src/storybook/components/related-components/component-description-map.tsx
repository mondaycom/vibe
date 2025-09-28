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
import { NumberFieldDescription } from "./descriptions/number-field-description";
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
import { MenuGridItemDescription } from "./descriptions/menu-grid-item-description";
import { ModalMediaLayoutRelatedComponent } from "../../../components/Modal/layouts/ModalMediaLayout/__stories__/ModalMediaLayoutRelatedComponent";
import { ModalSideBySideLayoutRelatedComponent } from "../../../components/Modal/layouts/ModalSideBySideLayout/__stories__/ModalSideBySideLayoutRelatedComponent";
import { ModalBasicLayoutRelatedComponent } from "../../../components/Modal/layouts/ModalBasicLayout/__stories__/ModalBasicLayoutRelatedComponent";

// Component description names (related to specific components)
const COMPONENTS_DESCRIPTIONS_ENTRIES = [
  ["SplitButton", <SplitButtonDescription />],
  ["ButtonGroup", <ButtonGroupDescription />],
  ["Label", <LabelDescription />],
  ["Link", <LinkDescription />],
  ["Checkbox", <CheckboxDescription />],
  ["RadioButton", <RadioButtonDescription />],
  ["Counter", <CounterDescription />],
  ["Tooltip", <TooltipDescription />],
  ["Toggle", <ToggleDescription />],
  ["Dropdown", <DropdownDescription />],
  ["Chips", <ChipsDescription />],
  ["AttentionBox", <AttentionBoxDescription />],
  ["AlertBanner", <AlertBannerDescription />],
  ["Toast", <ToastDescription />],
  ["Badge", <BadgeDescription />],
  ["Button", <ButtonDescription />],
  ["Tabs", <TabsDescription />],
  ["Breadcrumbs", <BreadcrumbsDescription />],
  ["Menu", <MenuDescription />],
  ["MultiStepIndicator", <MultiStepIndicatorDescription />],
  ["Tipseen", <TipseenDescription />],
  ["TextField", <TextFieldDescription />],
  ["NumberField", <NumberFieldDescription />],
  ["Search", <SearchDescription />],
  ["Combobox", <ComboboxDescription />],
  ["Avatar", <AvatarDescription />],
  ["AvatarGroup", <AvatarGroupDescription />],
  ["Icon", <IconDescription />],
  ["icons", <IconsDescription />],
  ["Steps", <StepsDescription />],
  ["Spinner", <SpinnerDescription />],
  ["Skeleton", <SkeletonDescription />],
  ["ModalBasicLayout", <ModalBasicLayoutRelatedComponent />],
  ["ModalSideBySideLayout", <ModalSideBySideLayoutRelatedComponent />],
  ["ModalMediaLayout", <ModalMediaLayoutRelatedComponent />],
  ["Slider", <SliderDescription />],
  ["IconButton", <IconButtonDescription />],
  ["MenuButton", <MenuButtonDescription />],
  ["LinearProgressBar", <LinearProgressBarDescription />],
  ["EditableHeading", <EditableHeadingDescription />],
  ["EditableText", <EditableTextDescription />],
  ["Heading", <HeadingDescription />],
  ["Clickable", <ClickableDescription />],
  ["HiddenText", <HiddenTextDescription />],
  ["List", <ListDescription />],
  ["Flex", <FlexDescription />],
  ["Divider", <DividerDescription />],
  ["DialogContentContainer", <DialogContentContainerDescription />],
  ["Dialog", <DialogDescription />],
  ["Text", <TextDescription />],
  ["Accordion", <AccordionDescription />],
  ["ExpandCollapse", <ExpandCollapseDescription />],
  ["VirtualizedList", <VirtualizedListDescription />],
  ["VirtualizedGrid", <VirtualizedGridDescription />],
  ["ColorPicker", <ColorPickerDescription />],
  ["Box", <BoxDescription />],
  ["Table", <TableDescription />],
  ["MenuGridItem", <MenuGridItemDescription />]
] as const;

// General description names (not related to specific components)
const GENERAL_DESCRIPTIONS_ENTRIES = [
  ["colors", <ColorsDescription />],
  ["typography", <TypographyDescription />],
  ["shadow", <ShadowDescription />],
  ["spacing", <SpacingDescription />]
] as const;

export type ComponentDescriptionName =
  | (typeof COMPONENTS_DESCRIPTIONS_ENTRIES)[number][0]
  | (typeof GENERAL_DESCRIPTIONS_ENTRIES)[number][0];

export const DESCRIPTION_COMPONENTS_WITHOUT_GENERAL_DESCRIPTION_MAP = new Map<ComponentDescriptionName, JSX.Element>(
  COMPONENTS_DESCRIPTIONS_ENTRIES
);
export const DESCRIPTION_COMPONENTS_MAP = new Map<ComponentDescriptionName, JSX.Element>([
  ...COMPONENTS_DESCRIPTIONS_ENTRIES,
  ...GENERAL_DESCRIPTIONS_ENTRIES
]);
