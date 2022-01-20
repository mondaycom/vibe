import React from "react";
import useGridKeyboardNavigation from "../../../../hooks/useGridKeyboardNavigation/useGridKeyboardNavigation";
import Button from "../../../Button/Button";

export const ColorPickerClearButton = React.forwardRef(({ onClick, text, Icon, isActive, onOutboundNavigation }, ref) => {
  const { onSelectionAction } = useGridKeyboardNavigation({
    ref,
    itemsCount: 1,
    numberOfItemsInLine: 1,
    onOutboundNavigation,
    onItemClicked: onClick
  });

  return (
    <Button
      ref={ref}
      size={Button.sizes.SMALL}
      kind={Button.kinds.TERTIARY}
      onClick={onSelectionAction}
      active={isActive}
      className="clear-color-button"
    >
      <Icon size="16" className="clear-color-icon" />
      {text}
    </Button>
  );
});
