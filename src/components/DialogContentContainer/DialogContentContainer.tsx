import React, { forwardRef, useRef } from "react";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import VibeComponentProps from "src/types/VibeComponentProps";
import VibeComponent from "src/types/VibeComponent";
import { DialogSize, DialogType } from "./DialogContentContainerConstants";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import styles from "./DialogContentContainer.module.scss";

interface DialogContentContainerProps extends VibeComponentProps {
  children?: React.ReactNode;
  className?: string;
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
      className = "",
      ariaLabelledby = "",
      ariaDescribedby = "",
      type = DialogType.POPOVER,
      size = DialogSize.MEDIUM,
      children,
      style,
      id,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    return (
      <div
        id={id}
        data-testid={dataTestId || getTestId(ELEMENT_TYPES.DIALOG_CONTENT_CONTAINER, id)}
        role="dialog"
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
        ref={mergedRef}
        style={style}
        className={cx(
          styles.dialogContentContainer,
          "dialog-content-container",
          className,
          getStyle(styles, type),
          `dialog-content-container--${type}`,
          getStyle(styles, size),
          `dialog-content-container--${size}`
        )}
      >
        {children}
      </div>
    );
  }
);

Object.assign(DialogContentContainer, {
  types: DialogType,
  sizes: DialogSize
});

export default DialogContentContainer;
