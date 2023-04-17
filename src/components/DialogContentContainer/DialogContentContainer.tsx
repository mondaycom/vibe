import { camelCase } from "lodash-es";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import cx from "classnames";
import React, { useRef, forwardRef } from "react";
import useMergeRefs from "../../hooks/useMergeRefs";
import VibeComponentProps from "src/types/VibeComponentProps";
import VibeComponent from "src/types/VibeComponent";
import { DialogSize, DialogType } from "./DialogContentContainerConstants";
import styles from "./DialogContentContainer.module.scss";

interface DialogContentContainerProps extends VibeComponentProps {
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
      className = "",
      ariaLabelledby = "",
      ariaDescribedby = "",
      type = DialogType.POPOVER,
      size = DialogSize.MEDIUM,
      children,
      style
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    return (
      <div
        role="dialog"
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

Object.assign(DialogContentContainer, {
  types: DialogType,
  sizes: DialogSize
});

export default DialogContentContainer;
