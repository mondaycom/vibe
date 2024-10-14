import React, { forwardRef } from "react";
import cx from "classnames";
import { getTestId } from "../../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../../tests/constants";
import styles from "./ModalSideBySideLayout.module.scss";
import { ModalSideBySideLayoutProps } from "./ModalSideBySideLayout.types";
import Flex from "../../../Flex/Flex";

const ModalSideBySideLayout = forwardRef(
  (
    { children, className, id, "data-testid": dataTestId }: ModalSideBySideLayoutProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [header, content, media] = React.Children.toArray(children);
    return (
      <Flex
        ref={ref}
        className={cx(styles.layout, className)}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_NEXT_SIDE_BY_SIDE_LAYOUT, id)}
      >
        <Flex direction={Flex.directions.COLUMN} align={Flex.align.START} className={styles.leftPane}>
          <div className={styles.header}>{header}</div>
          <div className={styles.content}>{content}</div>
        </Flex>
        <div className={styles.media}>{media}</div>
      </Flex>
    );
  }
);

export default ModalSideBySideLayout;
