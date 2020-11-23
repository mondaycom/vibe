import React, { useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Dialog from "../Dialog/Dialog";
import Menu from "../Icon/Icons/components/Menu";
import "./MenuButton.scss";
import useKeyEvent from "../../hooks/useKeyEvent";

function BEMClass(className) {
  return `menu-button--wrapper--${className}`;
}

const MenuButton = ({
  componentClassName,
  children,
  icon,
  size,
  open,
  zIndex,
  ariaLabel
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const onMenuChangeCallback = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  const Icon = icon;
  const iconSize = size - 4;

  return (
    <Dialog
      position="bottom"
      animationType="expand"
      content={children}
      showTrigger={["click", "enter"]}
      hideTrigger={["click", "clickoutside", "onContentClick"]}
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
   * Receives icon type component (SVG)
   */
  icon: PropTypes.func,
  size: PropTypes.oneOf([
    MenuButtonSizes.XXS,
    MenuButtonSizes.XS,
    MenuButtonSizes.SMALL,
    MenuButtonSizes.MEDIUM,
    MenuButtonSizes.LARGE
  ]),
  open: PropTypes.bool,
  zIndex: PropTypes.number,
  ariaLabel: PropTypes.string
};
MenuButton.defaultProps = {
  componentClassName: "",
  icon: Menu,
  size: MenuButtonSizes.SMALL,
  open: false,
  zIndex: 100,
  ariaLabel: "Menu Button"
};

export default MenuButton;
