import React from "react";
import styles from "./ModalTopActions.module.scss";
import {
  type ModalTopActionsButtonColor,
  type ModalTopActionsTheme,
  type ModalTopActionsProps
} from "./ModalTopActions.types";
import { IconButton } from "@vibe/icon-button";
import { CloseMedium } from "@vibe/icons";
import { ComponentDefaultTestId } from "../../../tests/constants";

const colorToButtonColor: Record<ModalTopActionsTheme, ModalTopActionsButtonColor> = {
  dark: "fixed-dark",
  light: "fixed-light"
};

const ModalTopActions = ({ renderAction, theme, closeButtonAriaLabel, onClose }: ModalTopActionsProps) => {
  const buttonColor = colorToButtonColor[theme] || "primary";

  return (
    <div className={styles.actions} data-no-autofocus={true}>
      {typeof renderAction === "function" ? renderAction(buttonColor) : renderAction}
      <IconButton
        data-testid={ComponentDefaultTestId.MODAL_NEXT_CLOSE_BUTTON}
        icon={CloseMedium}
        onClick={onClose}
        size="small"
        kind="tertiary"
        color={buttonColor}
        ariaLabel={closeButtonAriaLabel}
      />
    </div>
  );
};

export default ModalTopActions;
