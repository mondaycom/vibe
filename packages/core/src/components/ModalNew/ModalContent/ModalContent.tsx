import React, { forwardRef, UIEventHandler, useCallback } from "react";
import cx from "classnames";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import styles from "./ModalContent.module.scss";
import { ModalContentProps } from "./ModalContent.types";
import { useModal } from "../context/ModalContext";

const ModalContent = forwardRef(
  (
    { children, className, id, "data-testid": dataTestId }: ModalContentProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { setContentScrolled } = useModal();

    const onScroll: UIEventHandler<HTMLDivElement> = useCallback(
      e => {
        setContentScrolled(e.currentTarget?.scrollTop > 0);
      },
      [setContentScrolled]
    );

    return (
      <div
        ref={ref}
        className={cx(styles.content, className)}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_NEXT_CONTENT, id)}
        onScroll={onScroll}
      >
        {children}
      </div>
    );
  }
);

export default ModalContent;
