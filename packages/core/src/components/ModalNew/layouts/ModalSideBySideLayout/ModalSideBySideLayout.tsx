import React, { forwardRef } from "react";
import cx from "classnames";
import { getTestId } from "../../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../../tests/constants";
import styles from "./ModalSideBySideLayout.module.scss";
import { ModalSideBySideLayoutProps } from "./ModalSideBySideLayout.types";
import ModalLayoutScrollableContent from "../ModalLayoutScrollableContent";
import ModalFooterShadow from "../ModalFooterShadow";

const ModalSideBySideLayout = forwardRef(
  (
    { children, className, id, "data-testid": dataTestId }: ModalSideBySideLayoutProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [header, content, media] = React.Children.toArray(children);
    return (
      <>
        <div
          ref={ref}
          className={cx(styles.layout, className)}
          id={id}
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_NEXT_SIDE_BY_SIDE_LAYOUT, id)}
        >
          <div className={styles.header}>{header}</div>
          <ModalLayoutScrollableContent className={styles.content}>{content}</ModalLayoutScrollableContent>
          <div className={styles.media}>{media}</div>
        </div>
        <ModalFooterShadow />
      </>
    );
  }
);

export default ModalSideBySideLayout;
