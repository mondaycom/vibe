import React, { forwardRef } from "react";
import cx from "classnames";
import { getTestId } from "../../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../../tests/constants";
import styles from "./ModalHeroLayout.module.scss";
import { ModalHeroLayoutProps } from "./ModalHeroLayout.types";
import Flex from "../../../Flex/Flex";

const ModalHeroLayout = forwardRef(
  (
    { children, className, id, "data-testid": dataTestId }: ModalHeroLayoutProps,
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
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_NEXT_HERO_LAYOUT, id)}
      >
        <div className={styles.media}>{media}</div>
        <div className={styles.header}>{header}</div>
        <div className={styles.content}>{content}</div>
      </Flex>
    );
  }
);

export default ModalHeroLayout;
