import React, { forwardRef } from "react";
import cx from "classnames";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import styles from "./ModalTopActions.module.scss";
import { ModalTopActionsButtonColor, ModalTopActionsProps } from "./ModalTopActions.types";
import Flex from "../../Flex/Flex";
import IconButton from "../../IconButton/IconButton";
import { CloseSmall } from "../../Icon/Icons";
import { ButtonColor } from "../../Button/ButtonConstants";

const ModalTopActions = forwardRef(
  (
    {
      renderAction,
      color,
      closeButtonAriaLabel,
      onClose,
      className,
      id,
      "data-testid": dataTestId
    }: ModalTopActionsProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const buttonColor: ModalTopActionsButtonColor =
      color === "dark"
        ? ButtonColor.ON_INVERTED_BACKGROUND
        : color === "light"
        ? ButtonColor.ON_PRIMARY_COLOR
        : ButtonColor.PRIMARY;

    return (
      <Flex
        ref={ref}
        className={cx(styles.actions, className)}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_NEXT_TOP_ACTIONS, id)}
      >
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
  }
);

export default ModalTopActions;
