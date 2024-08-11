import React from "react";
import styles from "./ModalTopActions.module.scss";
import { ModalTopActionsButtonColor, ModalTopActionsProps } from "./ModalTopActions.types";
import Flex from "../../Flex/Flex";
import IconButton from "../../IconButton/IconButton";
import { CloseSmall } from "../../Icon/Icons";
import { ButtonColor } from "../../Button/ButtonConstants";

const ModalTopActions = ({ renderAction, color, closeButtonAriaLabel, onClose }: ModalTopActionsProps) => {
  const buttonColor: ModalTopActionsButtonColor =
    color === "dark"
      ? ButtonColor.ON_INVERTED_BACKGROUND
      : color === "light"
      ? ButtonColor.ON_PRIMARY_COLOR
      : ButtonColor.PRIMARY;

  return (
    <Flex className={styles.actions}>
      {/* this allows passing back to consumer the color he chose, so he won't have to define it twice */}
      {renderAction && renderAction(buttonColor)}
      <IconButton
        icon={CloseSmall}
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
