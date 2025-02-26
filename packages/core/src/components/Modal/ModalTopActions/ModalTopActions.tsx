import React from "react";
import styles from "./ModalTopActions.module.scss";
import { ModalTopActionsButtonColor, ModalTopActionsTheme, ModalTopActionsProps } from "./ModalTopActions.types";
import IconButton from "../../IconButton/IconButton";
import { CloseMedium } from "@vibe/icons";
import { ButtonColor } from "../../Button/ButtonConstants";
import { ComponentDefaultTestId } from "../../../tests/constants";

const colorToButtonColor: Record<ModalTopActionsTheme, ModalTopActionsButtonColor> = {
  dark: ButtonColor.ON_INVERTED_BACKGROUND,
  light: ButtonColor.ON_PRIMARY_COLOR
};

const ModalTopActions = ({ renderAction, theme, closeButtonAriaLabel, onClose }: ModalTopActionsProps) => {
  const buttonColor = colorToButtonColor[theme] || ButtonColor.PRIMARY;

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
