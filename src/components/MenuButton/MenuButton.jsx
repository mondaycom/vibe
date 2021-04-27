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

const TOOLTIP_SHOW_TRIGGER = ["mouseenter"];
const TOOLTIP_HIDE_TRIGGER = ["mouseleave"];

const showTrigger = ["click", "enter"];
const MOVE_BY = { main: 0, secondary: -6 };

const MenuButton = ({
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
  startingEdge
}) => {
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(open);
  const onClick = useCallback(
    event => {
      if (isOpen) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      setIsOpen(true);
    },
    [setIsOpen, isOpen]
  );
  const onDialogDidHide = useCallback(
    (event, hideEvent) => {
      setIsOpen(false);

      onMenuHide();
      if (buttonRef.current && hideEvent === Dialog.hideShowTriggers.ESCAPE_KEY) {
        buttonRef.current.focus();
      } else {
        hideEvent && buttonRef.current && buttonRef.current.blur();
      }
    },
    [setIsOpen, onMenuHide, buttonRef]
  );

  const onDialogDidShow = useCallback(() => {
    setIsOpen(true);
    onMenuShow();
  }, [setIsOpen, onMenuShow]);

  const hideTrigger = useMemo(() => {
    const triggers = ["clickoutside", "esckey", "click"];
    if (closeDialogOnContentClick) {
      triggers.push("onContentClick");
    }
    return triggers;
  }, [closeDialogOnContentClick]);

  const clonedChildren = useMemo(() => {
    const childrenArr = React.Children.toArray(children);

    return childrenArr.map(child => {
      const newProps = {};
      if (child.type && child.type.supportFocusOnMount) {
        newProps.focusOnMount = true;
      }

      // if (child.type && child.type.isMenu) {
      //   newProps.onClose = onDialogDidHide;
      // }

      return React.cloneElement(child, newProps);
    });
  }, [children, onDialogDidHide]);

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
      startingEdge="bottom"
      animationType="expand"
      content={content}
      moveBy={computedDialogOffset}
      showTrigger={showTrigger}
      hideTrigger={hideTrigger}
      useDerivedStateFromProps={true}
      onDialogDidShow={onDialogDidShow}
      onDialogDidHide={onDialogDidHide}
      referenceWrapperClassName={BEMClass("reference-icon")}
      zIndex={zIndex}
      isOpen={isOpen}
    >
      <button
        onClick={onClick}
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
        aria-label={ariaLabel}
        onMouseUp={onMouseUp}
        aria-disabled={disabled}
      >
        <Icon size={Math.min(iconSize, 28).toString()} />
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
  disabledReason: PropTypes.string
};
MenuButton.defaultProps = {
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
  disabledReason: undefined
};

export default MenuButton;
