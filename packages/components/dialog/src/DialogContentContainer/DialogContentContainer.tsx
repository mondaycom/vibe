import { camelCase } from "es-toolkit";
import cx from "classnames";
import React, { useRef, forwardRef } from "react";
import {
  useMergeRef,
  type VibeComponentProps,
  withStaticProps,
  ComponentDefaultTestId,
  getTestId,
  getStyle
} from "@vibe/shared";
import { DialogSize as DialogSizeEnum, DialogType as DialogTypeEnum } from "../Dialog/DialogConstants";
import { type DialogSize, type DialogType } from "../Dialog";
import styles from "./DialogContentContainer.module.scss";

export interface DialogContentContainerProps extends VibeComponentProps {
  /**
   * The content inside the dialog container.
   */
  children?: React.ReactNode;
  /**
   * The ID of the element that labels this dialog.
   */
  ariaLabelledby?: string;
  /**
   * The ID of the element that describes this dialog.
   */
  ariaDescribedby?: string;
  /**
   * The type of dialog.
   */
  type?: DialogType;
  /**
   * The size of the dialog.
   */
  size?: DialogSize;
  /**
   * Custom styles applied to the dialog container.
   */
  style?: React.CSSProperties;
  /**
   * The ARIA role applied to the dialog container.
   * Defaults to "dialog" when not provided. Pass `null` to remove the role attribute entirely.
   */
  role?: string | null;
}

const DialogContentContainer = forwardRef(
  (
    {
      id,
      className = "",
      ariaLabelledby = "",
      ariaDescribedby = "",
      type = "popover",
      size = "small",
      children,
      style,
      role,
      "data-testid": dataTestId = getTestId(ComponentDefaultTestId.DIALOG_CONTENT_CONTAINER, id),
      ...props
    }: DialogContentContainerProps,
    ref: React.Ref<HTMLElement>
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    const roleValue = role === null ? undefined : role || "dialog";

    return (
      <div
        id={id}
        role={roleValue}
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
        {...props}
      >
        {children}
      </div>
    );
  }
);

interface DialogContentContainerStaticProps {
  types: typeof DialogTypeEnum;
  sizes: typeof DialogSizeEnum;
}

export default withStaticProps<DialogContentContainerProps, DialogContentContainerStaticProps>(DialogContentContainer, {
  types: DialogTypeEnum,
  sizes: DialogSizeEnum
});
