/* eslint-disable react/forbid-prop-types */
import React, { forwardRef, useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import cx from "classnames";
import Dialog, { DialogEvent } from "../Dialog/Dialog";
import DialogContentContainer from "../DialogContentContainer/DialogContentContainer";
import Tooltip from "../Tooltip/Tooltip";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import useMergeRefs from "../../hooks/useMergeRefs";
import { BUTTON_ICON_SIZE } from "../Button/ButtonConstants";
import { ElementContent, VibeComponent, VibeComponentProps } from "../../types";
import { MenuButtonComponentPosition, MenuButtonSize } from "./MenuButtonConstants";
import { AnimationType, DialogOffset, DialogPosition } from "../../constants";
import { HideShowEvent } from "../Dialog/consts/dialog-show-hide-event";
import { NOOP } from "../../utils/function-utils";
import { DialogSize } from "../DialogContentContainer/DialogContentContainerConstants";
import { Menu } from "../Icon/Icons";
import "./MenuButton.scss";

function BEMClass(className: string) {
  return `menu-button--wrapper--${className}`;
}

const TOOLTIP_SHOW_TRIGGER = [Tooltip.hideShowTriggers.MOUSE_ENTER];

const showTrigger = [HideShowEvent.CLICK, HideShowEvent.ENTER];
const EMPTY_ARRAY: HideShowEvent[] = [];
const MOVE_BY = { main: 0, secondary: -6 };

interface MenuButtonProps extends VibeComponentProps {
  /**
   * Backward compatibility for props naming
   */
  componentClassName?: string;
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
  component?: () => JSX.Element;
  size?: MenuButtonSize;
  open?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  zIndex?: number;
  ariaLabel?: string;
  closeDialogOnContentClick?: boolean;
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
  Callback function to be called when the menu is shown
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
  tooltipTriggers?: HideShowEvent | HideShowEvent[];
  /**
   * the disabled/tooltip position of the menu button - one of the MenuButton.dialogPositions
   */
  tooltipPosition?: DialogPosition;
  /**
   * Tooltip Element Wrapper ClassName
   */
  tooltipReferenceClassName?: string;
  /**
   * When the MenuButton is hidden hide the dialog and tooltip as well
   */
  hideWhenReferenceHidden?: boolean;
  /**
   * Backward compatibility for props naming
   */
  disabledReason?: boolean;
  children?: ElementContent;
  /**
   * Specifies whether to render the component before or after the text
   */
  componentPosition?: typeof MenuButtonComponentPosition[keyof typeof MenuButtonComponentPosition];
}

const MenuButton: VibeComponent<MenuButtonProps> & {
  sizes?: typeof MenuButtonSize;
  paddingSizes?: typeof DialogContentContainer.sizes;
  dialogPositions?: typeof DialogPosition;
  hideTriggers?: typeof Dialog.hideShowTriggers;
  componentPositions?: typeof MenuButtonComponentPosition;
} = forwardRef(
  (
    {
      id,
      className,
      // Backward compatibility for props naming
      componentClassName,
      openDialogComponentClassName,
      children,
      component = Menu,
      componentPosition = MenuButton.componentPositions.START,
      size = MenuButtonSize.SMALL,
      open = false,
      onClick = NOOP,
      zIndex = null,
      ariaLabel = "Menu",
      closeDialogOnContentClick = false,
      dialogOffset = MOVE_BY,
      dialogPosition = Dialog.positions.BOTTOM_START,
      dialogClassName,
      dialogPaddingSize = DialogContentContainer.sizes.MEDIUM,
      dialogShowTriggerIgnoreClass,
      dialogHideTriggerIgnoreClass,
      onMenuHide = NOOP,
      onMenuShow = NOOP,
      disabled = false,
      text,
      tooltipContent,
      // Backward compatibility for props naming
      disabledReason,
      tooltipTriggers = [MenuButton.hideTriggers.MOUSE_LEAVE],
      tooltipPosition = MenuButton.dialogPositions.RIGHT,
      startingEdge = "bottom",
      removeTabCloseTrigger = false,
      tooltipReferenceClassName,
      hideWhenReferenceHidden = false,
      dialogContainerSelector,
      active
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const [isOpen, setIsOpen] = useState(open);
    const isActive = active ?? isOpen;
    const onMenuDidClose = useCallback(
      (event: React.KeyboardEvent) => {
        if (event && event.key === "Escape") {
          setIsOpen(false);
          const button = componentRef.current;
          window.requestAnimationFrame(() => {
            button.focus();
          });
        }
      },
      [componentRef, setIsOpen]
    );

    const onDialogDidHide = useCallback(
      (event: DialogEvent, hideEvent: string) => {
        setIsOpen(false);
        onMenuHide();
        const button = componentRef.current;
        window.requestAnimationFrame(() => {
          if (button && hideEvent === Dialog.hideShowTriggers.ESCAPE_KEY) {
            button.focus();
          }
        });
      },
      [setIsOpen, onMenuHide, componentRef]
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
      const childrenArr = React.Children.toArray(children);
      const cloned = childrenArr.map(child => {
        if (!React.isValidElement(child)) return null;

        const newProps: { focusOnMount?: boolean; onClose?: (event: React.KeyboardEvent) => void } = {};
        // @ts-ignore
        if (child.type && child.type.supportFocusOnMount) {
          newProps.focusOnMount = true;
          triggers.delete(Dialog.hideShowTriggers.ESCAPE_KEY);
        }

        // @ts-ignore
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
        case MenuButtonSize.XXS:
        case MenuButtonSize.XS:
          return 16;
        case MenuButtonSize.SMALL:
        case MenuButtonSize.MEDIUM:
        case MenuButtonSize.LARGE:
          return BUTTON_ICON_SIZE;
        default:
          return 24;
      }
    }, [size]);
    const icon = Icon ? <Icon size={iconSize.toString()} role="img" aria-hidden="true" /> : null;

    useLayoutEffect(() => {
      setIsOpen(open);
    }, [open, setIsOpen]);

    // TODO disabledReason - boolean, why?
    const overrideTooltipContent = backwardCompatibilityForProperties([tooltipContent, disabledReason]) as string;
    const overrideClassName = backwardCompatibilityForProperties([className, componentClassName]);

    return (
      <Tooltip
        content={overrideTooltipContent}
        position={tooltipPosition}
        showTrigger={TOOLTIP_SHOW_TRIGGER}
        hideTrigger={tooltipTriggers}
        referenceWrapperClassName={tooltipReferenceClassName}
        hideWhenReferenceHidden={hideWhenReferenceHidden}
      >
        <Dialog
          wrapperClassName={dialogClassName}
          position={dialogPosition}
          containerSelector={dialogContainerSelector}
          startingEdge={startingEdge}
          animationType={AnimationType.EXPAND}
          content={content}
          moveBy={computedDialogOffset}
          showTrigger={disabled ? EMPTY_ARRAY : showTrigger}
          hideTrigger={hideTrigger}
          showTriggerIgnoreClass={dialogShowTriggerIgnoreClass}
          hideTriggerIgnoreClass={dialogHideTriggerIgnoreClass}
          useDerivedStateFromProps={true}
          onDialogDidShow={onDialogDidShow}
          onDialogDidHide={onDialogDidHide}
          referenceWrapperClassName={BEMClass("reference-icon")}
          zIndex={zIndex}
          isOpen={isOpen}
          hideWhenReferenceHidden={hideWhenReferenceHidden}
        >
          <button
            id={id}
            ref={mergedRef}
            type="button"
            className={cx("menu-button--wrapper", overrideClassName, BEMClass(`size-${size}`), {
              [BEMClass("open")]: isActive,
              [openDialogComponentClassName]: isOpen && openDialogComponentClassName,
              [BEMClass("disabled")]: disabled,
              [BEMClass("text")]: text
            })}
            aria-haspopup="true"
            aria-expanded={isOpen}
            aria-label={!text && ariaLabel}
            onMouseUp={onMouseUp}
            aria-disabled={disabled}
          >
            {componentPosition === MenuButton.componentPositions.START && icon}
            {text && <span className={BEMClass("inner-text")}>{text}</span>}
            {componentPosition === MenuButton.componentPositions.END && icon}
          </button>
        </Dialog>
      </Tooltip>
    );
  }
);

Object.assign(MenuButton, {
  sizes: MenuButtonSize,
  paddingSizes: DialogContentContainer.sizes,
  dialogPositions: Dialog.positions,
  hideTriggers: Dialog.hideShowTriggers,
  componentPositions: MenuButtonComponentPosition
});

export default MenuButton;
