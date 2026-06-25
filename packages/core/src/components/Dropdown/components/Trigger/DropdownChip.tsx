import React from "react";
import { Chips, type ChipsProps } from "../../../Chips";
import { type BaseItemData } from "../../../BaseItem";

const getChipPropsFromItemElements = (item: BaseItemData<Record<string, unknown>>): Partial<ChipsProps> => {
  const chipProps: Partial<ChipsProps> = {};
  if (item?.startElement) {
    switch (item?.startElement?.type) {
      case "icon":
        chipProps.leftIcon = item?.startElement?.value;
        break;
      case "avatar":
        chipProps.leftAvatar = item?.startElement?.value;
        break;
      case "custom":
        chipProps.leftRenderer = item?.startElement?.render() as React.ReactNode;
        break;
      default:
        break;
    }
  }

  if (item?.endElement) {
    switch (item?.endElement?.type) {
      case "icon":
        chipProps.rightIcon = item?.endElement?.value;
        break;
      case "custom":
        chipProps.rightRenderer = item?.endElement?.render() as React.ReactNode;
        break;
      default:
        break;
    }
  }
  return chipProps;
};

interface DropdownChipProps<Item extends BaseItemData<Record<string, unknown>>> {
  item: Item;
  onDelete?: () => void;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  /** Render the chip as visual-only (no close button) — used when the chip wrapper is itself the remove button. */
  presentational?: boolean;
}

const DropdownChip = <Item extends BaseItemData<Record<string, unknown>>>({
  item,
  onDelete,
  disabled,
  readOnly,
  className,
  presentational
}: DropdownChipProps<Item>) => {
  const chipSpecificProps = getChipPropsFromItemElements(item);

  return (
    <Chips
      label={item.label}
      closeButtonAriaLabel={`Remove ${item.label}`}
      onDelete={onDelete}
      disabled={disabled}
      // presentational chips hide their own × — removal is handled by the wrapping button.
      readOnly={presentational || readOnly}
      noMargin
      className={className}
      color={item.chipColor || "primary"}
      {...chipSpecificProps}
    />
  );
};

export default DropdownChip;
