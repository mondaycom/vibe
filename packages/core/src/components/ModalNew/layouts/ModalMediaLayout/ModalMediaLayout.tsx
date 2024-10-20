import React, { forwardRef } from "react";
import cx from "classnames";
import { getTestId } from "../../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../../tests/constants";
import styles from "./ModalMediaLayout.module.scss";
import { ModalMediaLayoutProps } from "./ModalMediaLayout.types";
import Flex from "../../../Flex/Flex";

const ModalMediaLayout = forwardRef(
  (
    { children, className, id, "data-testid": dataTestId }: ModalMediaLayoutProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [media, header, content] = React.Children.toArray(children);

    return (
      <Flex
        ref={ref}
        direction={Flex.directions.COLUMN}
        align={Flex.align.START}
        className={cx(styles.layout, className)}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_NEXT_MEDIA_LAYOUT, id)}
      >
        <div className={styles.media}>{media}</div>
        <div className={styles.header}>{header}</div>
        <div className={styles.content}>{content}</div>
      </Flex>
    );
  }
);

export default ModalMediaLayout;
