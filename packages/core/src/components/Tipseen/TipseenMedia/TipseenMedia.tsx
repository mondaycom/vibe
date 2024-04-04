import React, { forwardRef, PropsWithChildren, ReactNode, useContext, useMemo, useRef } from "react";
import cx from "classnames";
import useMergeRef from "../../../hooks/useMergeRef";
import VibeComponentProps from "../../../types/VibeComponentProps";
import VibeComponent from "../../../types/VibeComponent";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import styles from "./TipseenMedia.module.scss";
import { TipseenContext } from "../Tipseen";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import { camelCase } from "lodash-es";

export interface TipseenMediaProps extends PropsWithChildren<VibeComponentProps> {
  children: ReactNode;
}

const TipseenMedia: VibeComponent<TipseenMediaProps, HTMLElement> = forwardRef(
  ({ className, id, "data-testid": dataTestId, children }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);
    const color = useContext(TipseenContext);

    const classNames = useMemo(() => {
      return cx(styles.tipseenMedia, getStyle(styles, camelCase("color-" + color)), className);
    }, [color, className]);

    return (
      <div
        ref={mergedRef}
        className={classNames}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TIPSEEN_MEDIA, id)}
      >
        {children}
      </div>
    );
  }
);

export default TipseenMedia;
