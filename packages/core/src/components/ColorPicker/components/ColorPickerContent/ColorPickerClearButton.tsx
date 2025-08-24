import React, { forwardRef } from "react";
import useGridKeyboardNavigation from "../../../../hooks/useGridKeyboardNavigation/useGridKeyboardNavigation";
import Button from "../../../Button/Button";
import { type VibeComponentProps } from "../../../../types";
import { type SubIcon } from "@vibe/icon";
import { NOOP } from "../../../../utils/function-utils";
import styles from "./ColorPickerClearButton.module.scss";

export interface ColorPickerClearButtonProps extends VibeComponentProps {
  /**
   * Callback fired when the clear button is clicked.
   */
  onClick: () => void;
  /**
   * The text displayed inside the button.
   */
  text?: string;
  /**
   * The icon displayed inside the button.
   */
  Icon: SubIcon;
}

const ColorPickerClearButton = forwardRef(
  ({ onClick, text, Icon }: ColorPickerClearButtonProps, ref: React.ForwardedRef<HTMLElement>) => {
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
        size="small"
        kind="tertiary"
        onClick={() => onSelectionAction(-1)} //hack - we don't really have a grid, it's just for keyboard navigation outside the clear button
        blurOnMouseUp={false}
        className={styles.clearColorButton}
      >
        <Icon size="16" className={styles.clearColorIcon} />
        {text || "Clear"}
      </Button>
    );
  }
);

export default ColorPickerClearButton;
