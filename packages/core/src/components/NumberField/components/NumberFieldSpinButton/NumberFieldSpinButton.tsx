import React from "react";
import { NumberFieldSpinButtonProps } from "./NumberFieldSpinButton.types";
import IconButton from "../../../IconButton/IconButton";
import { DropdownChevronUp, DropdownChevronDown } from "@vibe/icons";
import Flex from "../../../Flex/Flex";

const NumberFieldSpinButton = ({
  inputId,
  onIncrement,
  onDecrement,
  disabled,
  size,
  isAtMin,
  isAtMax
}: NumberFieldSpinButtonProps) => {
  const iconButtonSize = size === "small" ? IconButton.sizes.XXXS : IconButton.sizes.XXS;

  const handleMouseDown = (event: React.MouseEvent) => {
    // to prevent `IconButton`s from stealing focus
    event.preventDefault();
  };

  return (
    <Flex direction="column" align="stretch" justify="center" onMouseDown={handleMouseDown}>
      <IconButton
        aria-hidden
        ariaLabel="Increase"
        ariaControls={inputId}
        tabIndex={-1}
        onClick={onIncrement}
        disabled={disabled || isAtMax}
        size={iconButtonSize}
        icon={DropdownChevronUp}
      />
      <IconButton
        aria-hidden
        ariaLabel="Decrease"
        ariaControls={inputId}
        tabIndex={-1}
        onClick={onDecrement}
        disabled={disabled || isAtMin}
        size={iconButtonSize}
        icon={DropdownChevronDown}
      />
    </Flex>
  );
};

export default NumberFieldSpinButton;
