import React, { forwardRef, useCallback, useMemo, useRef, useState } from "react";
import cx from "classnames";
import { camelCase } from "lodash-es";
import { isForwardRef } from "react-is";
import Dialog, { DialogEvent } from "../Dialog/Dialog";
import DialogContentContainer from "../DialogContentContainer/DialogContentContainer";
import Tooltip, { TooltipProps } from "../Tooltip/Tooltip";
import useIsomorphicLayoutEffect from "../../hooks/ssr/useIsomorphicLayoutEffect";
import useMergeRef from "../../hooks/useMergeRef";
import { BUTTON_ICON_SIZE } from "../Button/ButtonConstants";
import { ElementContent, VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import {
  MenuButtonComponentPosition as MenuButtonComponentPositionEnum,
  MenuButtonSize as MenuButtonSizeEnum
} from "./MenuButtonConstants";
import {
  DialogPosition as DialogPositionEnum,
  HideShowEvent as DialogTriggerEventEnum,
  DialogSize as DialogSizeEnum
} from "../Dialog/DialogConstants";
import { MenuButtonComponentPosition, MenuButtonSize } from "./MenuButton.types";
import { DialogOffset, DialogPosition, DialogSize, DialogTriggerEvent } from "../Dialog/Dialog.types";
import { NOOP } from "../../utils/function-utils";
import { Menu } from "@vibe/icons";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { MenuChild } from "../Menu/Menu/MenuConstants";
import styles from "./MenuButton.module.scss";
import { TooltipPositions } from "../Tooltip/Tooltip.types";

const MOVE_BY = { main: 8, secondary: 0 };

export interface MenuButtonProps extends VibeComponentProps {
  /**
   * Control the button's selected state
   */
  active?: boolean;
  /**
   *Class name to add to the button when the dialog is open
   */
  openDialogComponentClassName?: string;
  /**
   * Receives React Component
   */
  component?: (() => JSX.Element) | React.ElementType;
  size?: MenuButtonSize;
  open?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  zIndex?: number;
  ariaLabel?: string;
  /*
    Class name to provide the element which wraps the popover/modal/dialog
   */
  dialogClassName?: string;
  /**
   * main - `dialogOffset.main` - main axis offset; `dialogOffset.secondary` secondary axis offset
   */
  dialogOffset?: DialogOffset;
  dialogPaddingSize?: DialogSize;
  dialogPosition?: DialogPosition;
  dialogShowTriggerIgnoreClass?: string;
  dialogHideTriggerIgnoreClass?: string;
  /**
   * the container selector in which to append the dialog
   * for examples: "body" , ".my-class", "#my-id"
   */
  dialogContainerSelector?: string;
  /**
   * Dialog Alignment
   */
  startingEdge?: string;
  /*
    Callback function to be called when the menu is shown
   */
  onMenuShow?: () => void;
  /*
  Callback function to be called when the menu is hidden
 */
  onMenuHide?: () => void;
  /**
   * Text to be displayed after the icon
   */
  text?: string;
  disabled?: boolean;
  tooltipContent?: string;
  /**
   Remove "Tab" key from the hide trigger
   */
  removeTabCloseTrigger?: boolean;
  /**
   is an array with the content of types:
   CLICK, CLICK_OUTSIDE, ESCAPE_KEY, TAB_KEY, MOUSE_ENTER, MOUSE_LEAVE,
   ENTER, MOUSE_DOWN, FOCUS, BLUR, CONTENT_CLICK
   */
  tooltipTriggers?: DialogTriggerEvent | DialogTriggerEvent[];
  /**
   * the disabled/tooltip position of the menu button - one of the MenuButton.dialogPositions
   */
  tooltipPosition?: TooltipPositions;
  /**
   * Tooltip Element Wrapper ClassName
   */
  tooltipReferenceClassName?: string;
  tooltipProps?: Partial<TooltipProps>;
  /**
   * When the MenuButton is hidden hide the dialog and tooltip as well
   */
  hideWhenReferenceHidden?: boolean;
  children?: ElementContent;
  /**
   * Specifies whether to render the component before or after the text
   */
  componentPosition?: MenuButtonComponentPosition;
  /**
   * Element to be used as the trigger element for the Menu - default is button
   */
  triggerElement?: React.ElementType;
  /**
   * Close the menu when an item is clicked
   */
  closeMenuOnItemClick?: boolean;
  /**
   * Whether tooltip should appear only when the trigger element is hovered and not the menu dialog
   */
  showTooltipOnlyOnTriggerElement?: boolean;
  closeDialogOnContentClick?: boolean;
}

const MenuButton: VibeComponent<MenuButtonProps> & {
  sizes?: typeof MenuButtonSizeEnum;
  paddingSizes?: typeof DialogContentContainer.sizes;
  dialogPositions?: typeof DialogPositionEnum;
  hideTriggers?: typeof Dialog.hideShowTriggers;
  componentPositions?: typeof MenuButtonComponentPositionEnum;
} = forwardRef(
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
      dialogPosition = Dialog.positions.BOTTOM_START,
      dialogClassName,
      dialogPaddingSize = DialogContentContainer.sizes.SMALL,
      dialogShowTriggerIgnoreClass,
      dialogHideTriggerIgnoreClass,
      onMenuHide = NOOP,
      onMenuShow = NOOP,
      disabled = false,
      text,
      tooltipContent,
      tooltipProps,
      tooltipTriggers = [MenuButton.hideTriggers.MOUSE_LEAVE],
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
      closeDialogOnContentClick = false
    }: MenuButtonProps,
    ref
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
        const isEscapeKey = event?.key === "Escape";
        if (isEscapeKey || closeMenuOnItemClick) {
          // @ts-ignore
          if (event.propagate) {
            handleMenuClose(isEscapeKey);
          }
        }
      },
      [closeMenuOnItemClick, handleMenuClose]
    );

    const onDialogDidHide = useCallback(
      (event: DialogEvent, hideEvent: string) => {
        handleMenuClose(hideEvent === Dialog.hideShowTriggers.ESCAPE_KEY);
      },
      [handleMenuClose]
    );

    const onDialogDidShow = useCallback(() => {
      setIsOpen(true);
      onMenuShow();
    }, [setIsOpen, onMenuShow]);

    const [clonedChildren, hideTrigger] = useMemo(() => {
      const triggers = new Set([
        Dialog.hideShowTriggers.CLICK_OUTSIDE,
        Dialog.hideShowTriggers.TAB_KEY,
        Dialog.hideShowTriggers.ESCAPE_KEY
      ]);

      if (closeDialogOnContentClick) {
        triggers.add(Dialog.hideShowTriggers.CONTENT_CLICK);
        triggers.add(Dialog.hideShowTriggers.ENTER);
      }

      if (removeTabCloseTrigger) {
        triggers.delete(Dialog.hideShowTriggers.TAB_KEY);
      }
      const childrenArr = React.Children.toArray(children) as MenuChild[];
      const cloned = childrenArr.map(child => {
        if (!React.isValidElement(child)) return null;

        const newProps: { focusOnMount?: boolean; onClose?: (event: React.KeyboardEvent) => void } = {};
        if (child.type && child.type.supportFocusOnMount) {
          newProps.focusOnMount = true;
          triggers.delete(Dialog.hideShowTriggers.ESCAPE_KEY);
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
        <DialogContentContainer size={dialogPaddingSize} type={DialogContentContainer.types.POPOVER}>
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
          return BUTTON_ICON_SIZE;
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
        data-vibe={ComponentDefaultTestId.MENU_BUTTON}
        type="button"
        className={cx(styles.wrapper, className, getStyle(styles, camelCase(`size-${size}`)), {
          [styles.active]: isActive,
          [getStyle(styles, openDialogComponentClassName)]: isOpen && openDialogComponentClassName,
          [styles.disabled]: disabled,
          [styles.text]: text
        })}
        aria-haspopup="true"
        aria-expanded={isOpen}
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

export default withStaticProps(MenuButton, {
  sizes: MenuButtonSizeEnum,
  paddingSizes: DialogSizeEnum,
  dialogPositions: DialogPositionEnum,
  hideTriggers: DialogTriggerEventEnum,
  componentPositions: MenuButtonComponentPositionEnum
});
