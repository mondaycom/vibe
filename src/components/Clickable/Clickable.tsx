/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { AriaRole, forwardRef } from "react";
import NOOP from "lodash/noop";
import { ComponentDefaultTestId } from "../../tests/constants";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import useClickableProps from "../../hooks/useClickableProps";

export interface ClickableProps extends VibeComponentProps {
  elementType?: keyof JSX.IntrinsicElements | string;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  role?: AriaRole;
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  enableTextSelection?: boolean;
  onMouseDown?: (event: React.MouseEvent) => void;
  ariaLabel?: string;
  ariaHidden?: boolean;
  ariaHasPopup?: boolean;
  ariaExpanded?: boolean;
  tabIndex?: string | number;
  disabled?: boolean;
  style?: React.CSSProperties;
  dataTestId?: string;
}

const Clickable: VibeComponent<ClickableProps, HTMLElement> = forwardRef(
  (
    {
      elementType = "div",
      className = "",
      id,
      children,
      role = "button",
      onClick = NOOP,
      enableTextSelection = false,
      onMouseDown = NOOP,
      ariaLabel,
      ariaHidden,
      ariaHasPopup,
      ariaExpanded,
      tabIndex = "0",
      disabled = false,
      style,
      dataTestId
    },
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const clickableProps = useClickableProps(
      {
        onClick,
        onMouseDown,
        className,
        enableTextSelection,
        disabled,
        id,
        dataTestId,
        role,
        tabIndex,
        ariaLabel,
        ariaHidden,
        ariaHasPopup,
        ariaExpanded,
        style
      },
      ref
    );

    return React.createElement(
      elementType,
      {
        ...clickableProps
      },
      children
    );
  }
);

Object.assign(Clickable, {
  defaultTestId: ComponentDefaultTestId.CLICKABLE
});

export default Clickable;
