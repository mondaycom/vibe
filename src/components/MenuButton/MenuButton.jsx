import React, { useCallback, useState, useMemo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Dialog from "../Dialog/Dialog";
import Menu from "../Icon/Icons/components/Menu";
import "./MenuButton.scss";
import DialogContentContainer from "../DialogContentContainer/DialogContentContainer";

function BEMClass(className) {
  return `menu-button--wrapper--${className}`;
}

const showTrigger = ["click", "enter"];
const MOVE_BY = { main: 0, secondary: -6 };

const MenuButton = ({
  componentClassName,
  children,
  component,
  size,
  open,
  zIndex,
  ariaLabel,
  closeDialogOnContentClick,
  dialogClassName,
  dialogPaddingSize
}) => {
  const [isOpen, setIsOpen] = useState(open);

  const onDialogDidHide = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  const onDialogDidShow = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const hideTrigger = useMemo(() => {
    const triggers = ["clickoutside", "esckey"];
    if (closeDialogOnContentClick) {
      triggers.push("onContentClick");
    }
    return triggers;
  }, [closeDialogOnContentClick]);

  const content = useMemo(() => {
    return (
      <DialogContentContainer size={dialogPaddingSize} type={DialogContentContainer.types.POPOVER}>
        {children}
      </DialogContentContainer>
    );
  }, [children, dialogPaddingSize]);

  const Icon = component;
  const iconSize = size - 4;

  return (
    <Dialog
      wrapperClassName={dialogClassName}
      position="bottom-start"
      startingEdge="bottom"
      animationType="expand"
      content={content}
      moveBy={MOVE_BY}
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
          [BEMClass("open")]: isOpen
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

MenuButton.sizes = MenuButtonSizes;
MenuButton.paddingSizes = DialogContentContainer.sizes;

MenuButton.propTypes = {
  componentClassName: PropTypes.string,
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
  dialogPaddingSize: PropTypes.oneOf([
    MenuButton.paddingSizes.NONE,
    MenuButton.paddingSizes.SMALL,
    MenuButton.paddingSizes.MEDIUM,
    MenuButton.paddingSizes.LARGE
  ])
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
  dialogPaddingSize: DialogContentContainer.sizes.MEDIUM
};

export default MenuButton;
