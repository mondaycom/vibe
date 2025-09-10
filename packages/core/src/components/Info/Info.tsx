import React, { forwardRef, useCallback, useRef, useState } from "react";
import { Info as InfoIcon } from "@vibe/icons";
import { IconButton, Dialog } from "../../";
import { InfoDialogContent } from "./components";
import { type InfoProps } from "./Info.types";
import { ComponentDefaultTestId, ComponentVibeId } from "../../tests/constants";
import { getTestId } from "../../tests/test-ids-utils";
import useMergeRef from "../../hooks/useMergeRef";
import { type DialogEvent } from "../Dialog/Dialog";

const Info = forwardRef(
  (
    {
      id,
      className,
      title,
      body,
      link,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      position = "bottom-start",
      disabled = false,
      onDialogShow,
      onDialogHide,
      hideButtonTooltip,
      dialogClassName,
      "data-testid": dataTestId
    }: InfoProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const iconButtonRef = useRef<HTMLButtonElement>(null);
    const mergedRef = useMergeRef(ref, iconButtonRef);
    const dialogRef = useRef<Dialog>(null);
    const dialogContentRef = useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = useState(false);

    const dialogId = id ? `${id}-dialog` : undefined;

    const handleDialogShow = useCallback(() => {
      setIsOpen(true);
      onDialogShow?.();
      requestAnimationFrame(() => {
        dialogContentRef.current?.focus();
      });
    }, [onDialogShow]);

    const handleDialogHide = useCallback(
      (e: DialogEvent) => {
        setIsOpen(false);
        onDialogHide?.();
        if ((e as React.KeyboardEvent).key === "Escape") {
          iconButtonRef.current?.focus();
        }
      },
      [onDialogHide]
    );

    return (
      <Dialog
        ref={dialogRef}
        id={dialogId}
        disable={disabled}
        position={position}
        moveBy={{ main: 4, secondary: 0 }}
        showTrigger={["click"]}
        hideTrigger={["click", "clickoutside", "esckey"]}
        onDialogDidShow={handleDialogShow}
        onDialogDidHide={handleDialogHide}
        content={
          <InfoDialogContent
            ref={dialogContentRef}
            id={dialogId}
            title={title}
            body={body}
            link={link}
            className={dialogClassName}
          />
        }
        hideWhenReferenceHidden
      >
        <IconButton
          ref={mergedRef}
          id={id}
          className={className}
          icon={InfoIcon}
          size="xs"
          kind="tertiary"
          active={isOpen}
          disabled={disabled}
          ariaLabel={ariaLabel}
          ariaLabeledBy={ariaLabelledby}
          ariaControls={dialogId}
          ariaHasPopup="dialog"
          ariaExpanded={isOpen}
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.INFO, id)}
          data-vibe={ComponentVibeId.INFO}
          hideTooltip={hideButtonTooltip}
        />
      </Dialog>
    );
  }
);

export default Info;
