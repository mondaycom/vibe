import React, { useCallback, useState, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import NOOP from "lodash/noop";
import Dialog from "../Dialog/Dialog";
import Menu from "../Icon/Icons/components/Menu";
import DialogContentContainer from "../DialogContentContainer/DialogContentContainer";
import "./MenuButton.scss";
import Tooltip from "../Tooltip/Tooltip";

function BEMClass(className) {
  return `menu-button--wrapper--${className}`;
}

const TOOLTIP_SHOW_TRIGGER = [Dialog.hideShowTriggers.MOUSE_ENTER];
const TOOLTIP_HIDE_TRIGGER = [Dialog.hideShowTriggers.MOUSE_LEAVE];

const showTrigger = ["click", "enter"];
const EMPTY_ARRAY = [];
const MOVE_BY = { main: 0, secondary: -6 };

const MenuButton = ({
  id,
  componentClassName,
  openDialogComponentClassName,
  children,
  component,
  size,
  open,
  zIndex,
  ariaLabel,
  closeDialogOnContentClick,
  dialogOffset,
  dialogPosition,
  dialogClassName,
  dialogPaddingSize,
  onMenuHide,
  onMenuShow,
  disabled,
  text,
  disabledReason,
  startingEdge,
  removeTabCloseTrigger
}) => {
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(open);
  // const onClick = useCallback(
  //   event => {
  //     if (disabled) {
  //       return;
  //     }
  //
  //     if (isOpen) {
  //       event.preventDefault();
  //       event.stopPropagation();
  //       return;
  //     }
  //     setIsOpen(true);
  //   },
  //   [setIsOpen, isOpen, disabled]
  // );

  const onMenuDidClose = useCallback(
    event => {
      if (event && event.key === "Escape") {
        setIsOpen(false);
        const button = buttonRef.current;
        window.requestAnimationFrame(() => {
          button.focus();
        });
      }
    },
    [buttonRef, setIsOpen]
  );

  const onDialogDidHide = useCallback(
    (event, hideEvent) => {
      setIsOpen(false);
      onMenuHide();
      const button = buttonRef.current;
      window.requestAnimationFrame(() => {
        if (button && hideEvent === Dialog.hideShowTriggers.ESCAPE_KEY) {
          button.focus();
        }
      });
    },
    [setIsOpen, onMenuHide, buttonRef]
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
    }

    if (removeTabCloseTrigger) {
      triggers.delete(Dialog.hideShowTriggers.TAB_KEY);
    }

    const childrenArr = React.Children.toArray(children);
    const cloned = childrenArr.map(child => {
      const newProps = {};
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
    if (!clonedChildren.length === 0) return <div />;
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

  const onMouseUp = event => {
    if (disabled) {
      event.currentTarget.blur();
    }
  };

  const Icon = component;
  const iconSize = size - 4;
  return (
    <Tooltip
      content={disabledReason}
      position="right"
      showTrigger={TOOLTIP_SHOW_TRIGGER}
      hideTrigger={TOOLTIP_HIDE_TRIGGER}
    >
      <Dialog
        wrapperClassName={dialogClassName}
        position={dialogPosition}
        startingEdge={startingEdge}
        animationType="expand"
        content={content}
        moveBy={computedDialogOffset}
        showTrigger={disabled ? EMPTY_ARRAY : showTrigger}
        hideTrigger={hideTrigger}
        useDerivedStateFromProps={true}
        onDialogDidShow={onDialogDidShow}
        onDialogDidHide={onDialogDidHide}
        referenceWrapperClassName={BEMClass("reference-icon")}
        zIndex={zIndex}
        isOpen={isOpen}
      >
        <button
          id={id}
          ref={buttonRef}
          type="button"
          role="menu"
          className={cx("menu-button--wrapper", componentClassName, BEMClass(`size-${size}`), {
            [BEMClass("open")]: isOpen,
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
          <Icon size={Math.min(iconSize, 28).toString()} role="img" aria-hidden="true" />
          {text && <span className={BEMClass("inner-text")}>{text}</span>}
        </button>
      </Dialog>
    </Tooltip>
  );
};

const MenuButtonSizes = {
  XXS: "16",
  XS: "24",
  SMALL: "32",
  MEDIUM: "40",
  LARGE: "48"
};

const DialogPositions = {
  LEFT: "left",
  LEFT_START: "left-start",
  LEFT_END: "left-end",
  RIGHT: "right",
  RIGHT_START: "right-start",
  RIGHT_END: "right-end",
  TOP: "top",
  TOP_START: "top-start",
  TOP_END: "top-end",
  BOTTOM: "bottom",
  BOTTOM_START: "bottom-start",
  BOTTOM_END: "bottom-end"
};

MenuButton.sizes = MenuButtonSizes;
MenuButton.paddingSizes = DialogContentContainer.sizes;
MenuButton.dialogPositions = DialogPositions;

MenuButton.propTypes = {
  /*
    Id for the menu button
   */
  id: PropTypes.string,
  componentClassName: PropTypes.string,
  /*
    Class name to add to the button when the dialog is open
   */
  openDialogComponentClassName: PropTypes.string,
  /**
   * Receives React Component
   */
  component: PropTypes.func,
  size: PropTypes.oneOf([
    MenuButtonSizes.XXS,
    MenuButtonSizes.XS,
    MenuButtonSizes.SMALL,
    MenuButtonSizes.MEDIUM,
    MenuButtonSizes.LARGE
  ]),
  open: PropTypes.bool,
  zIndex: PropTypes.number,
  ariaLabel: PropTypes.string,
  closeDialogOnContentClick: PropTypes.bool,
  /*
    Class name to provide the element which wraps the popover/modal/dialog
   */
  dialogClassName: PropTypes.string,
  /**
   * main - `dialogOffset.main` - main axis offset; `dialogOffset.secondary` secondary axis offset
   */
  dialogOffset: PropTypes.shape({
    main: PropTypes.number,
    secondary: PropTypes.number
  }),
  dialogPaddingSize: PropTypes.oneOf([
    MenuButton.paddingSizes.NONE,
    MenuButton.paddingSizes.SMALL,
    MenuButton.paddingSizes.MEDIUM,
    MenuButton.paddingSizes.LARGE
  ]),
  dialogPosition: PropTypes.oneOf([
    MenuButton.dialogPositions.BOTTOM_START,
    MenuButton.dialogPositions.BOTTOM,
    MenuButton.dialogPositions.BOTTOM_END,
    MenuButton.dialogPositions.LEFT,
    MenuButton.dialogPositions.LEFT_START,
    MenuButton.dialogPositions.LEFT_END,
    MenuButton.dialogPositions.RIGHT,
    MenuButton.dialogPositions.RIGHT_START,
    MenuButton.dialogPositions.RIGHT_END,
    MenuButton.dialogPositions.TOP,
    MenuButton.dialogPositions.TOP_END,
    MenuButton.dialogPositions.TOP_START
  ]),

  /**
   * Dialog Alignment
   */
  startingEdge: PropTypes.string,
  /*
    Callback function to be called when the menu is shown
   */
  onMenuShow: PropTypes.func,
  /*
  Callback function to be called when the menu is shown
 */
  onMenuHide: PropTypes.func,
  /**
   * Text to be displayed after the icon
   */
  text: PropTypes.string,
  disabled: PropTypes.bool,
  /**
   * Disabled tooltip text
   */
  disabledReason: PropTypes.string,
  /*
    Remove "Tab" key from the hide trigger
   */
  removeTabCloseTrigger: PropTypes.bool
};
MenuButton.defaultProps = {
  id: undefined,
  componentClassName: "",
  component: Menu,
  size: MenuButtonSizes.SMALL,
  open: false,
  zIndex: null,
  ariaLabel: "Menu",
  startingEdge: "bottom",
  closeDialogOnContentClick: false,
  dialogClassName: "",
  openDialogComponentClassName: "",
  dialogOffset: MOVE_BY,
  dialogPaddingSize: DialogContentContainer.sizes.MEDIUM,
  dialogPosition: MenuButton.dialogPositions.BOTTOM_START,
  onMenuShow: NOOP,
  onMenuHide: NOOP,
  disabled: false,
  text: undefined,
  disabledReason: undefined,
  removeTabCloseTrigger: false
};

export default MenuButton;
