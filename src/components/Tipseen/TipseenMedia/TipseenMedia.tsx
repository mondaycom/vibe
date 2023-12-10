import React, { forwardRef, PropsWithChildren, ReactNode, useRef } from "react";
import cx from "classnames";
import useMergeRef from "../../../hooks/useMergeRef";
import VibeComponentProps from "../../../types/VibeComponentProps";
import VibeComponent from "../../../types/VibeComponent";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import styles from "./TipseenMedia.module.scss";

export interface TipseenMediaProps extends PropsWithChildren<VibeComponentProps> {
  children: ReactNode;
}

const TipseenMedia: VibeComponent<TipseenMediaProps, HTMLElement> = forwardRef(
  ({ className, id, "data-testid": dataTestId, children }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    return (
      <div
        ref={mergedRef}
        className={cx(styles.tipseenMedia, className)}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TIPSEEN_MEDIA, id)}
      >
        {children}
      </div>
    );
  }
);

export default TipseenMedia;
