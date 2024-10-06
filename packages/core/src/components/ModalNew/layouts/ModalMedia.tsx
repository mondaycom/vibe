import React, { forwardRef } from "react";
import Flex from "../../Flex/Flex";
import { ModalMediaProps } from "./ModalMedia.types";
import styles from "./ModalMedia.module.scss";
import cx from "classnames";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";

const ModalMedia = forwardRef(
  (
    { children, className, id, "data-testid": dataTestId }: ModalMediaProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <Flex
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_NEXT_MEDIA, id)}
        justify={Flex.justify.CENTER}
        align={Flex.align.STRETCH}
        ref={ref}
        className={cx(styles.media, className)}
      >
        {children}
      </Flex>
    );
  }
);

export default ModalMedia;
