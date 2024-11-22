import React, { forwardRef } from "react";
import cx from "classnames";
import { getTestId } from "../../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../../tests/constants";
import styles from "./ModalBasicLayout.module.scss";
import { ModalBasicLayoutProps } from "./ModalBasicLayout.types";
import Flex from "../../../Flex/Flex";
import Divider from "../../../Divider/Divider";
import ModalFooterShadow from "../ModalFooterShadow";
import ModalLayoutScrollableContent from "../ModalLayoutScrollableContent";
import useLayoutScrolledContent from "../useLayoutScrolledContent";

const ModalBasicLayout = forwardRef(
  (
    { children, className, id, "data-testid": dataTestId }: ModalBasicLayoutProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { isContentScrolled, onScroll } = useLayoutScrolledContent();
    const [header, content] = React.Children.toArray(children);

    return (
      <>
        <Flex
          direction={Flex.directions.COLUMN}
          align={Flex.align.START}
          ref={ref}
          className={cx(styles.layout, className)}
          id={id}
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_NEXT_BASIC_LAYOUT, id)}
        >
          <div className={styles.header}>{header}</div>
          <Divider className={cx(styles.divider, { [styles.showDivider]: isContentScrolled })} withoutMargin />
          <ModalLayoutScrollableContent onScroll={onScroll} className={styles.content}>
            {content}
          </ModalLayoutScrollableContent>
        </Flex>
        <ModalFooterShadow show={isContentScrolled} />
      </>
    );
  }
);

export default ModalBasicLayout;
