import React, { useCallback, useState, useMemo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import NOOP from "lodash/noop";
import Dialog from "../Dialog/Dialog";
import Menu from "../Icon/Icons/components/Menu";
import DialogContentContainer from "../DialogContentContainer/DialogContentContainer";
import "./MenuButton.scss";

function BEMClass(className) {
  return `menu-button--wrapper--${className}`;
}

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
  onMenuShow
}) => {
  const [isOpen, setIsOpen] = useState(open);

  const onDialogDidHide = useCallback(() => {
    setIsOpen(false);
    onMenuHide();
  }, [setIsOpen, onMenuHide]);

  const onDialogDidShow = useCallback(() => {
    setIsOpen(true);
    onMenuShow();
  }, [setIsOpen, onMenuShow]);

  const hideTrigger = useMemo(() => {
    const triggers = ["clickoutside", "esckey"];
    if (closeDialogOnContentClick) {
      triggers.push("onContentClick");
    }
    return triggers;
  }, [closeDialogOnContentClick]);

  const content = useMemo(() => {
    if (!children) return <div/>;
    return (
      <DialogContentContainer size={dialogPaddingSize} type={DialogContentContainer.types.POPOVER}>
        {children}
      </DialogContentContainer>
    );
  }, [children, dialogPaddingSize]);

  const computedDialogOffset = useMemo(
    () => ({
      ...MOVE_BY,
      ...dialogOffset
    }),
    [dialogOffset]
  );

  const Icon = component;
  const iconSize = size - 4;

  return (
    <Dialog
      wrapperClassName={dialogClassName}
      position={dialogPosition}
      startingEdge="bottom"
      animationType="expand"
      content={content}
      moveBy={computedDialogOffset}
      showTrigger={showTrigger}
      hideTrigger={hideTrigger}
      onDialogDidShow={onDialogDidShow}
      onDialogDidHide={onDialogDidHide}
      referenceWrapperClassName={BEMClass("reference-icon")}
      zIndex={zIndex}
    >
      <button
        type="button"
        role="menu"
        className={cx("menu-button--wrapper", componentClassName, BEMClass(`size-${size}`), {
          [BEMClass("open")]: isOpen,
          [openDialogComponentClassName]: isOpen && openDialogComponentClassName
        })}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={ariaLabel}
      >
        <Icon size={Math.min(iconSize, 28).toString()} />
      </button>
    </Dialog>
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
    MenuButton.dialogPositions.BOTTOM_END
  ]),
  /*
    Callback function to be called when the menu is shown
   */
  onMenuShow: PropTypes.func,
  /*
  Callback function to be called when the menu is shown
 */
  onMenuHide: PropTypes.func
};
MenuButton.defaultProps = {
  componentClassName: "",
  component: Menu,
  size: MenuButtonSizes.SMALL,
  open: false,
  zIndex: null,
  ariaLabel: "Menu",
  closeDialogOnContentClick: false,
  dialogClassName: "",
  openDialogComponentClassName: "",
  dialogOffset: MOVE_BY,
  dialogPaddingSize: DialogContentContainer.sizes.MEDIUM,
  dialogPosition: MenuButton.dialogPositions.BOTTOM_START,
  onMenuShow: NOOP,
  onMenuHide: NOOP
};

export default MenuButton;
