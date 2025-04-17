import { camelCase } from "lodash-es";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import cx from "classnames";
import React, { useRef, forwardRef } from "react";
import useMergeRef from "../../hooks/useMergeRef";
import { DialogSize as DialogSizeEnum, DialogType as DialogTypeEnum } from "../Dialog/DialogConstants";
import { DialogSize, DialogType } from "../Dialog/Dialog.types";
import { withStaticProps, VibeComponentProps, VibeComponent } from "../../types";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
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
}

const DialogContentContainer: VibeComponent<DialogContentContainerProps> & {
  types?: typeof DialogTypeEnum;
  sizes?: typeof DialogSizeEnum;
} = forwardRef(
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
      "data-testid": dataTestId = getTestId(ComponentDefaultTestId.DIALOG_CONTENT_CONTAINER, id),
      ...props
    }: DialogContentContainerProps,
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
        {...props}
      >
        {children}
      </div>
    );
  }
);

export default withStaticProps(DialogContentContainer, {
  types: DialogTypeEnum,
  sizes: DialogSizeEnum
});
