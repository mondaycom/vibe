import { camelCase } from "lodash-es";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import cx from "classnames";
import React, { useRef, forwardRef } from "react";
import useMergeRef from "../../hooks/useMergeRef";
import { DialogSize, DialogType } from "./DialogContentContainerConstants";
import { withStaticProps, VibeComponentProps, VibeComponent } from "../../types";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import styles from "./DialogContentContainer.module.scss";

export interface DialogContentContainerProps extends VibeComponentProps {
  children?: React.ReactNode;
  ariaLabelledby?: string;
  ariaDescribedby?: string;
  type?: DialogType;
  size?: DialogSize;
  style?: React.CSSProperties;
}

const DialogContentContainer: VibeComponent<DialogContentContainerProps> & {
  types?: typeof DialogType;
  sizes?: typeof DialogSize;
} = forwardRef(
  (
    {
      id,
      className = "",
      ariaLabelledby = "",
      ariaDescribedby = "",
      type = DialogType.POPOVER,
      size = DialogSize.MEDIUM,
      children,
      style,
      "data-testid": dataTestId = getTestId(ComponentDefaultTestId.DIALOG_CONTENT_CONTAINER, id)
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    return (
      <div
        role="dialog"
        data-testid={dataTestId}
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
        ref={mergedRef}
        style={style}
        className={cx(
          styles.dialogContentContainer,
          className,
          getStyle(styles, camelCase("type--" + type)),
          getStyle(styles, camelCase("size--" + size))
        )}
      >
        {children}
      </div>
    );
  }
);

export default withStaticProps(DialogContentContainer, {
  types: DialogType,
  sizes: DialogSize
});
