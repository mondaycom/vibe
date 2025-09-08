import React, { forwardRef, useCallback, useState } from "react";
import { Info as InfoIcon } from "@vibe/icons";
import { IconButton, Dialog } from "../../";
import { InfoDialogContent } from "./components";
import { type InfoProps } from "./Info.types";
import { ComponentDefaultTestId, ComponentVibeId } from "../../tests/constants";
import { getTestId } from "../../tests/test-ids-utils";

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
    const [isOpen, setIsOpen] = useState(false);

    const dialogId = id ? `${id}-dialog` : undefined;

    const handleDialogShow = useCallback(() => {
      setIsOpen(true);
      onDialogShow?.();
    }, [onDialogShow]);

    const handleDialogHide = useCallback(() => {
      setIsOpen(false);
      onDialogHide?.();
    }, [onDialogHide]);

    return (
      <Dialog
        id={dialogId}
        disable={disabled}
        position={position}
        moveBy={{ main: 4, secondary: 0 }}
        showTrigger={["click"]}
        hideTrigger={["click", "clickoutside", "esckey"]}
        onDialogDidShow={handleDialogShow}
        onDialogDidHide={handleDialogHide}
        content={<InfoDialogContent id={dialogId} title={title} body={body} link={link} className={dialogClassName} />}
      >
        <IconButton
          ref={ref}
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
