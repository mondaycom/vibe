import React from "react";
import cx from "classnames";
import { type NumberFieldSpinButtonProps } from "./NumberFieldSpinButton.types";
import IconButton from "../../../IconButton/IconButton";
import { DropdownChevronUp, DropdownChevronDown } from "@vibe/icons";
import Flex from "../../../Flex/Flex";
import { getStyle } from "../../../../helpers/typesciptCssModulesHelper";
import styles from "./NumberFieldSpinButton.module.scss";

const NumberFieldSpinButton = ({
  inputId,
  onIncrement,
  onDecrement,
  disabled,
  size,
  isAtMin,
  isAtMax
}: NumberFieldSpinButtonProps) => {
  const iconButtonClassName = cx(styles.spinButton, getStyle(styles, size));
  const iconClassName = styles.icon;

  const handleMouseDown = (event: React.MouseEvent) => {
    // to prevent `IconButton`s from stealing focus
    event.preventDefault();
  };

  return (
    <Flex direction="column" align="stretch" justify="center" onMouseDown={handleMouseDown}>
      <IconButton
        ariaLabel="Increase"
        hideTooltip
        ariaControls={inputId}
        tabIndex={-1}
        onClick={onIncrement}
        disabled={disabled || isAtMax}
        size={null}
        className={iconButtonClassName}
        iconClassName={iconClassName}
        icon={DropdownChevronUp}
      />
      <IconButton
        ariaLabel="Decrease"
        hideTooltip
        ariaControls={inputId}
        tabIndex={-1}
        onClick={onDecrement}
        disabled={disabled || isAtMin}
        size={null}
        className={iconButtonClassName}
        iconClassName={iconClassName}
        icon={DropdownChevronDown}
      />
    </Flex>
  );
};

export default NumberFieldSpinButton;
