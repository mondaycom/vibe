import React from "react";
import styles from "./ModalTopActions.module.scss";
import { ModalTopActionsButtonColor, ModalTopActionsColor, ModalTopActionsProps } from "./ModalTopActions.types";
import Flex from "../../Flex/Flex";
import IconButton from "../../IconButton/IconButton";
import { CloseMedium } from "../../Icon/Icons";
import { ButtonColor } from "../../Button/ButtonConstants";

const colorToButtonColor: Record<ModalTopActionsColor, ModalTopActionsButtonColor> = {
  dark: ButtonColor.ON_INVERTED_BACKGROUND,
  light: ButtonColor.ON_PRIMARY_COLOR
};

const ModalTopActions = ({ renderAction, color, closeButtonAriaLabel, onClose }: ModalTopActionsProps) => {
  const buttonColor = colorToButtonColor[color] || ButtonColor.PRIMARY;

  return (
    <Flex className={styles.actions}>
      {typeof renderAction === "function" ? renderAction(buttonColor) : renderAction}
      <IconButton
        icon={CloseMedium}
        onClick={onClose}
        size={IconButton.sizes.SMALL}
        kind={IconButton.kinds.TERTIARY}
        color={buttonColor}
        ariaLabel={closeButtonAriaLabel}
      />
    </Flex>
  );
};

export default ModalTopActions;
