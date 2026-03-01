import React, { forwardRef, useCallback, useMemo, useRef, useState } from "react";
import cx from "classnames";
import { camelCase } from "es-toolkit";
import { isForwardRef } from "react-is";
import { Dialog, type DialogEvent, DialogContentContainer } from "@vibe/dialog";
import { type DialogOffset, type DialogPosition, type DialogSize, type DialogTriggerEvent } from "@vibe/dialog";
import { Tooltip, type TooltipProps } from "@vibe/tooltip";
import useIsomorphicLayoutEffect from "../../hooks/ssr/useIsomorphicLayoutEffect";
import useMergeRef from "../../hooks/useMergeRef";
import { type ElementContent, type VibeComponentProps } from "../../types";
import { type MenuButtonComponentPosition, type MenuButtonSize } from "./MenuButton.types";
import { type MenuChild } from "../Menu/Menu/MenuConstants";
import { NOOP } from "../../utils/function-utils";
import { Menu } from "@vibe/icons";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import styles from "./MenuButton.module.scss";
import { type TooltipPositions } from "@vibe/tooltip";
import { ComponentVibeId } from "../../tests/constants";

const MOVE_BY = { main: 8, secondary: 0 };
const CLOSE_KEYS: DialogTriggerEvent[] = ["esckey", "tab"];

export interface MenuButtonProps extends VibeComponentProps {
  /**
   * If true, the button is in an active state.
   */
  active?: boolean;
  /**
   * Class name applied to the button when the dialog is open.
   */
  openDialogComponentClassName?: string;
  /**
   * The component used as the button icon.
   */
  component?: (() => JSX.Element) | React.ElementType;
  /**
   * The size of the button.
   */
  size?: MenuButtonSize;
  /**
   * If true, the menu is open.
   */
  open?: boolean;
  /**
   * Callback fired when the button is clicked.
   */
  onClick?: (event: React.MouseEvent) => void;
  /**
   * The z-index of the menu.
   */
  zIndex?: number;
  /**
   * The label of the button for accessibility.
   */
  ariaLabel?: string;
  /**
   * Class name applied to the menu dialog wrapper.
   */
  dialogClassName?: string;
  /**
   * The offset of the menu relative to the button.
   */
  dialogOffset?: DialogOffset;
  /**
   * The padding size inside the menu dialog.
   */
  dialogPaddingSize?: DialogSize;
  /**
   * The position of the menu dialog relative to the button.
   */
  dialogPosition?: DialogPosition;
  /**
   * Classes that prevent showing the dialog when present.
   */
  dialogShowTriggerIgnoreClass?: string | Array<string>;
  /**
   * Classes that prevent hiding the dialog when present.
   */
  dialogHideTriggerIgnoreClass?: string | Array<string>;
  /**
   * The container selector in which to append the dialog.
   */
  dialogContainerSelector?: string;
  /**
   * The starting edge alignment of the menu.
   */
  startingEdge?: string;
  /**
   * Callback fired when the menu is shown.
   */
  onMenuShow?: () => void;
  /**
   * Callback fired when the menu is hidden.
   */
  onMenuHide?: () => void;
  /**
   * The text displayed inside the button.
   */
  text?: string;
  /**
   * If true, the button is disabled.
   */
  disabled?: boolean;
  /**
   * The tooltip content displayed when hovering over the button.
   */
  tooltipContent?: string;
  /**
   * If true, removes the tab key from the hide trigger.
   */
  removeTabCloseTrigger?: boolean;
  /**
   * The triggers that cause the tooltip to show or hide.
   */
  tooltipTriggers?: DialogTriggerEvent | DialogTriggerEvent[];
  /**
   * The position of the tooltip.
   */
  tooltipPosition?: TooltipPositions;
  /**
   * Class name applied to the tooltip reference wrapper.
   */
  tooltipReferenceClassName?: string;
  /**
   * Additional props for customizing the tooltip.
   */
  tooltipProps?: Partial<TooltipProps>;
  /**
   * If true, hides the menu and tooltip when the button is not visible.
   */
  hideWhenReferenceHidden?: boolean;
  /**
   * The content inside the menu button.
   */
  children?: ElementContent;
  /**
   * The position of the component relative to the text.
   */
  componentPosition?: MenuButtonComponentPosition;
  /**
   * The element used as the trigger for the menu.
   */
  triggerElement?: React.ElementType;
  /**
   * If true, closes the menu when a menu item is clicked.
   */
  closeMenuOnItemClick?: boolean;
  /**
   * If true, the tooltip appears only when hovering over the trigger element, not the menu dialog.
   */
  showTooltipOnlyOnTriggerElement?: boolean;
  /**
   * If true, closes the menu when clicking inside the dialog.
   */
  closeDialogOnContentClick?: boolean;
  /**
   * The ARIA control of the menu button for accessibility.
   */
  ariaControls?: string;
}

const MenuButton = forwardRef(
  (
    {
      id,
      className,
      openDialogComponentClassName,
      children,
      component = Menu,
      componentPosition = "start",
      size = "small",
      open = false,
      onClick = NOOP,
      zIndex = null,
      ariaLabel = "Menu",
      closeMenuOnItemClick,
      dialogOffset = MOVE_BY,
      dialogPosition = "bottom-start",
      dialogClassName,
      dialogPaddingSize = "small",
      dialogShowTriggerIgnoreClass,
      dialogHideTriggerIgnoreClass,
      onMenuHide = NOOP,
      onMenuShow = NOOP,
      disabled = false,
      text,
      tooltipContent,
      tooltipProps,
      tooltipTriggers = ["mouseleave"],
      tooltipPosition = "right",
      startingEdge = "bottom",
      removeTabCloseTrigger = false,
      tooltipReferenceClassName,
      hideWhenReferenceHidden = true,
      dialogContainerSelector,
      active,
      triggerElement: TriggerElement = "button",
      showTooltipOnlyOnTriggerElement,
      "data-testid": dataTestId,
      closeDialogOnContentClick = false,
      ariaControls
    }: MenuButtonProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    const [isOpen, setIsOpen] = useState(open);
    const isActive = active ?? isOpen;

    const handleMenuClose = useCallback(
      (focusOnMenuButtonAfterClose: boolean) => {
        onMenuHide();
        setIsOpen(false);
        const button = componentRef.current;
        if (!button || !focusOnMenuButtonAfterClose) {
          return;
        }
        window.requestAnimationFrame(() => {
          button.focus();
        });
      },
      [onMenuHide]
    );

    const onMenuDidClose = useCallback(
      (event: React.KeyboardEvent) => {
        // TODO: check the functionality of the isEscapeKey since the event is not an actual KeyboardEVent but an object with propagate property only
        const isCloseKey = CLOSE_KEYS.includes(event.key as DialogTriggerEvent);
        if (isCloseKey || closeMenuOnItemClick) {
          // @ts-ignore
          if (event.propagate) {
            handleMenuClose(isCloseKey);
          }
        }
      },
      [closeMenuOnItemClick, handleMenuClose]
    );

    const onDialogDidHide = useCallback(
      (event: DialogEvent, hideEvent: string) => {
        handleMenuClose(isOpen && CLOSE_KEYS.includes(hideEvent as DialogTriggerEvent));
      },
      [handleMenuClose, isOpen]
    );

    const onDialogDidShow = useCallback(() => {
      setIsOpen(true);
      onMenuShow();
    }, [setIsOpen, onMenuShow]);

    const [clonedChildren, hideTrigger] = useMemo(() => {
      const triggers = new Set<DialogTriggerEvent>(["clickoutside", "tab", "esckey"]);

      if (closeDialogOnContentClick) {
        triggers.add("onContentClick");
        triggers.add("enter");
      }

      if (removeTabCloseTrigger) {
        triggers.delete("tab");
      }
      const childrenArr = React.Children.toArray(children) as MenuChild[];
      const cloned = childrenArr.map(child => {
        if (!React.isValidElement(child)) return null;

        const newProps: {
          focusOnMount?: boolean;
          focusItemIndexOnMount?: number;
          onClose?: (event: React.KeyboardEvent) => void;
        } = {};
        if (child.type && child.type.supportFocusOnMount) {
          newProps.focusOnMount = true;
          if (child.props.focusItemIndexOnMount === undefined) {
            newProps.focusItemIndexOnMount = 0;
          }
          triggers.delete("esckey");
        }

        if (child.type && child.type.isMenu) {
          newProps.onClose = onMenuDidClose;
        }

        return React.cloneElement(child, newProps);
      });
      return [cloned, Array.from(triggers)];
    }, [children, onMenuDidClose, closeDialogOnContentClick, removeTabCloseTrigger]);

    const content = useMemo(() => {
      if (clonedChildren.length === 0) return null;
      return (
        <DialogContentContainer size={dialogPaddingSize} type="popover" role={null}>
          {clonedChildren}
        </DialogContentContainer>
      );
    }, [clonedChildren, dialogPaddingSize]);

    const computedDialogOffset = useMemo(
      () => ({
        ...MOVE_BY,
        ...dialogOffset
      }),
      [dialogOffset]
    );

    const onMouseUp = (event: React.MouseEvent<HTMLElement>) => {
      if (disabled) {
        event.currentTarget.blur();
        return;
      }
      onClick(event);
    };

    const Icon = component;
    const iconSize = useMemo(() => {
      switch (size) {
        case "xxs":
        case "xs":
          return 16;
        case "small":
        case "medium":
        case "large":
          return 20;
        default:
          return 24;
      }
    }, [size]);
    const icon = Icon ? <Icon size={iconSize.toString()} role="img" aria-hidden="true" /> : null;

    useIsomorphicLayoutEffect(() => {
      setIsOpen(open);
    }, [open, setIsOpen]);

    // Trigger element props, which are only relevant for "button" element, but might be needed for other elements e.g. Button
    const triggerElementProps =
      TriggerElement === "button"
        ? {
            ref: mergedRef
          }
        : {
            active: isActive,
            disabled: disabled,
            ref: isForwardRef(TriggerElement) ? mergedRef : undefined
          };

    const triggerElementNode = (
      <TriggerElement
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MENU_BUTTON, id)}
        data-vibe={ComponentVibeId.MENU_BUTTON}
        type="button"
        className={cx(styles.wrapper, className, getStyle(styles, camelCase(`size-${size}`)), {
          [styles.active]: isActive,
          [getStyle(styles, openDialogComponentClassName)]: isOpen && openDialogComponentClassName,
          [styles.disabled]: disabled,
          [styles.text]: text
        })}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={ariaControls}
        aria-label={!text && ariaLabel}
        onMouseUp={onMouseUp}
        aria-disabled={disabled}
        {...triggerElementProps}
      >
        {componentPosition === "start" && icon}
        {text && <span className={styles.innerText}>{text}</span>}
        {componentPosition === "end" && icon}
      </TriggerElement>
    );

    const dialogNode = (dialogChildren: React.ReactElement) => (
      <Dialog
        wrapperClassName={dialogClassName}
        position={dialogPosition}
        containerSelector={dialogContainerSelector}
        startingEdge={startingEdge}
        animationType="expand"
        content={content}
        moveBy={computedDialogOffset}
        showTrigger={disabled ? [] : ["click", "enter"]}
        hideTrigger={hideTrigger}
        showTriggerIgnoreClass={dialogShowTriggerIgnoreClass}
        hideTriggerIgnoreClass={dialogHideTriggerIgnoreClass}
        useDerivedStateFromProps={true}
        onDialogDidShow={onDialogDidShow}
        onDialogDidHide={onDialogDidHide}
        zIndex={zIndex}
        isOpen={isOpen}
        hideWhenReferenceHidden={hideWhenReferenceHidden}
      >
        {dialogChildren}
      </Dialog>
    );

    const tooltipNode = (tooltipChildren: React.ReactElement) => (
      <Tooltip
        content={tooltipContent}
        position={tooltipPosition}
        showTrigger="mouseenter"
        hideTrigger={tooltipTriggers}
        referenceWrapperClassName={tooltipReferenceClassName}
        hideWhenReferenceHidden={hideWhenReferenceHidden}
        {...tooltipProps}
      >
        {tooltipChildren}
      </Tooltip>
    );

    if (showTooltipOnlyOnTriggerElement) {
      return dialogNode(tooltipNode(triggerElementNode));
    }
    return tooltipNode(dialogNode(triggerElementNode));
  }
);

export default MenuButton;
