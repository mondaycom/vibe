/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { AriaRole, CSSProperties, forwardRef, MouseEventHandler, ElementType, ReactNode, useRef } from "react";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import { BEMClass } from "../../helpers/bem-helper";
import { useKeyboardButtonPressedFunc } from "../../hooks/useKeyboardButtonPressedFunc";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import VibeBaseButtonComponentProps from "../../types/VibeBaseButtonComponentProps";
import VibeComponent from "../../types/VibeComponent";
import "./Clickable.scss";

const CSS_BASE_CLASS = "monday-style-clickable";
const bemHelper = BEMClass(CSS_BASE_CLASS);

export interface ClickableProps extends VibeBaseButtonComponentProps<HTMLElement> {
  elementType?: ElementType;
  children?: string | ReactNode | null | [ReactNode];
  role?: AriaRole;
  enableTextSelection?: boolean;
  onMouseDown?: MouseEventHandler<HTMLDivElement>;
  ariaHidden?: boolean;
  ariaLabel?: string;
  tabIndex?: string | number;
  style?: CSSProperties;
  /**
   * @deprecated Backward compatibility for props naming - please do not use
   */
  dataTestId?: string;
}

const Clickable: VibeComponent<ClickableProps, HTMLElement> = forwardRef(
  (
    {
      elementType = "div",
      className,
      id,
      children,
      role = "button",
      onClick,
      enableTextSelection = false,
      onMouseDown,
      ariaLabel,
      ariaHidden,
      ariaHasPopup,
      ariaExpanded,
      tabIndex = 0,
      disabled,
      style,
      // Backward compatibility for props naming
      dataTestId,
      "data-testid": dataTestIdUpdated
    },
    ref
  ) => {
    const overrideTabIndex = tabIndex && +tabIndex;
    const baseDataTestId = backwardCompatibilityForProperties([dataTestIdUpdated, dataTestId]);
    const overrideDataTestId = baseDataTestId || getTestId(ELEMENT_TYPES.CLICKABLE, id);
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const onKeyDown = useKeyboardButtonPressedFunc(onClick);
    const elementClassNames = cx(CSS_BASE_CLASS, className, {
      disabled,
      [bemHelper({ state: "disable-text-selection" })]: !enableTextSelection
    });
    const Element = elementType;

    return (
      <Element
        ref={mergedRef}
        className={elementClassNames}
        data-testid={overrideDataTestId}
        role={role}
        onClick={disabled ? undefined : onClick}
        id={id}
        onKeyDown={disabled ? undefined : onKeyDown}
        tabIndex={disabled ? -1 : overrideTabIndex}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        aria-haspopup={ariaHasPopup}
        aria-expanded={ariaExpanded}
        onMouseDown={onMouseDown}
        style={style}
      >
        {children}
      </Element>
    );
  }
);

export default Clickable;
