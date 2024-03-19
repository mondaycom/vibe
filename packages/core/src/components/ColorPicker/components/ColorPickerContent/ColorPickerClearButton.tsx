import React from "react";
import useGridKeyboardNavigation from "../../../../hooks/useGridKeyboardNavigation/useGridKeyboardNavigation";
import Button from "../../../Button/Button";
import { VibeComponentProps, VibeComponent, SubIcon } from "../../../../types";
import { NOOP } from "../../../../utils/function-utils";
import styles from "./ColorPickerClearButton.module.scss";

export interface ColorPickerClearButtonProps extends VibeComponentProps {
  onClick: () => void;
  text?: string;
  Icon: SubIcon;
}

export const ColorPickerClearButton: VibeComponent<ColorPickerClearButtonProps> = React.forwardRef(
  ({ onClick, text, Icon }, ref) => {
    const { onSelectionAction } = useGridKeyboardNavigation({
      ref: ref as React.MutableRefObject<HTMLElement>,
      itemsCount: 1,
      numberOfItemsInLine: 1,
      onItemClicked: onClick,
      getItemByIndex: NOOP //hack - we don't really have a grid, it's just for keyboard navigation outside the clear button
    });

    return (
      <Button
        ref={ref}
        size={Button.sizes.SMALL}
        kind={Button.kinds.TERTIARY}
        onClick={() => onSelectionAction(-1)} //hack - we don't really have a grid, it's just for keyboard navigation outside the clear button
        className={styles.clearColorButton}
      >
        <Icon size="16" className={styles.clearColorIcon} />
        {text || "Clear"}
      </Button>
    );
  }
);
