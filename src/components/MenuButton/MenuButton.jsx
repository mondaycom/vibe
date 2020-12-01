import React, { useCallback, useState, useMemo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Dialog from "../Dialog/Dialog";
import Menu from "../Icon/Icons/components/Menu";
import "./MenuButton.scss";
import { DialogContentContainer } from "../index";

function BEMClass(className) {
  return `menu-button--wrapper--${className}`;
}

const showTrigger = ["click", "enter"];

const MenuButton = ({
  componentClassName,
  children,
  component,
  size,
  open,
  zIndex,
  ariaLabel,
  closeDialogOnContentClick,
  dialogClassName
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const onMenuChangeCallback = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  const hideTrigger = useMemo(() => {
    const triggers = ["clickoutside", "esckey"];
    if (closeDialogOnContentClick) {
      triggers.push("onContentClick");
    }
    return triggers;
  }, [closeDialogOnContentClick]);

  const content = useMemo(() => {
    return (
      <DialogContentContainer
        size={DialogContentContainer.sizes.MEDIUM}
        type={DialogContentContainer.types.POPOVER}
      >
        {children}
      </DialogContentContainer>
    );
  }, [children]);

  const Icon = component;
  const iconSize = size - 4;

  return (
    <Dialog
      wrapperClassName={dialogClassName}
      position="bottom-start"
      startingEdge="bottom"
      animationType="expand"
      content={content}
      showTrigger={showTrigger}
      hideTrigger={hideTrigger}
      onDialogDidShow={onMenuChangeCallback}
      onDialogDidHide={onMenuChangeCallback}
      referenceWrapperClassName={BEMClass("reference-icon")}
      zIndex={zIndex}
    >
      <button
        type="button"
        className={cx(
          "menu-button--wrapper",
          componentClassName,
          BEMClass(`size-${size}`),
          {
            [BEMClass("open")]: isOpen
          }
        )}
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
  dialogClassName: PropTypes.string
};
MenuButton.defaultProps = {
  componentClassName: "",
  component: Menu,
  size: MenuButtonSizes.SMALL,
  open: false,
  zIndex: null,
  ariaLabel: "Menu Button",
  closeDialogOnContentClick: false,
  dialogClassName: ""
};

export default MenuButton;
