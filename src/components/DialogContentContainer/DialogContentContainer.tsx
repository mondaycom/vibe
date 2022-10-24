import React, { useRef, forwardRef } from "react";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import { BEMClass } from "../../helpers/bem-helper";
import VibeComponentProps from "src/types/VibeComponentProps";
import VibeComponent from "src/types/VibeComponent";
import "./DialogContentContainer.scss";
import { DialogSize, DialogType } from "./DialogContentContainerConstants";

interface DialogContentContainerProps extends VibeComponentProps {
  children?: React.ReactNode;
  className?: string;
  ariaLabelledby?: string;
  ariaDescribedby?: string;
  type?: "modal" | "popover";
  size?: "small" | "medium" | "large";
  style?: React.CSSProperties;
}

const bemHelper = BEMClass("dialog-content-container");

const DialogContentContainer: VibeComponent<DialogContentContainerProps> & {
  types?: typeof DialogType;
  sizes?: typeof DialogSize;
} = forwardRef(({ className, ariaLabelledby, ariaDescribedby, type, size, children, style }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  return (
    <div
      role="dialog"
      aria-labelledby={ariaLabelledby}
      aria-describedby={ariaDescribedby}
      ref={mergedRef}
      style={style}
      className={cx("dialog-content-container", className, bemHelper({ state: type }), bemHelper({ state: size }))}
    >
      {children}
    </div>
  );
});

Object.assign(DialogContentContainer, {
  types: DialogType,
  sizes: DialogSize
});

DialogContentContainer.defaultProps = {
  className: "",
  ariaLabelledby: "",
  ariaDescribedby: "",
  type: "popover",
  size: "medium"
};

export default DialogContentContainer;
