import React, { forwardRef } from "react";
import cx from "classnames";
import { getTestId } from "../../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../../tests/constants";
import styles from "./ModalBasicLayout.module.scss";
import { ModalBasicLayoutProps } from "./ModalBasicLayout.types";
import { useModal } from "../../context/ModalContext";
import Flex from "../../../Flex/Flex";
import Divider from "../../../Divider/Divider";

const ModalBasicLayout = forwardRef(
  (
    { children, className, id, "data-testid": dataTestId }: ModalBasicLayoutProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [header, content] = React.Children.toArray(children);
    const { isContentScrolled } = useModal();

    return (
      <Flex
        direction={Flex.directions.COLUMN}
        align={Flex.align.START}
        ref={ref}
        className={cx(styles.layout, className)}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_NEXT_BASIC_LAYOUT, id)}
      >
        <div className={styles.header}>{header}</div>
        {isContentScrolled && <Divider className={styles.divider} withoutMargin />}
        <div className={styles.content}>{content}</div>
      </Flex>
    );
  }
);

export default ModalBasicLayout;
