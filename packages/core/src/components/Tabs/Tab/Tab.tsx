import cx from "classnames";
import React, { FC, forwardRef, ReactElement, useRef } from "react";
import { noop as NOOP } from "lodash-es";
import useMergeRef from "../../../hooks/useMergeRef";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import Icon from "../../Icon/Icon";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { IconType } from "../../Icon";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import styles from "./Tab.module.scss";
import { SubIcon } from "../../../types/SubIcon";
import Tooltip, { TooltipProps } from "../../Tooltip/Tooltip";
import { ComponentVibeId } from "../../../tests/constants";
import { keyCodes } from "../../../constants";

export interface TabProps extends VibeComponentProps {
  /**
   * Class name applied to the inner tab content.
   */
  tabInnerClassName?: string;
  /**
   * The index value of the tab.
   */
  value?: number;
  /**
   * If true, disables the tab.
   */
  disabled?: boolean;
  /**
   * If true, marks the tab as active.
   */
  active?: boolean;
  /**
   * If true, applies focus styles to the tab.
   */
  focus?: boolean;
  /**
   * The icon displayed in the tab.
   */
  icon?: SubIcon;
  /**
   * The type of icon.
   */
  iconType?: IconType;
  /**
   * The position of the icon relative to the text.
   */
  iconSide?: string;
  /**
   * Callback fired when the tab is clicked.
   */
  onClick?: (value: number) => void;
  /**
   * Props passed to the tab's tooltip.
   */
  tooltipProps?: Partial<TooltipProps>;
  /**
   * The content displayed inside the tab.
   */
  children?: string | ReactElement | ReactElement[];
}

const Tab: FC<TabProps> = forwardRef(
  (
    {
      className,
      tabInnerClassName,
      id,
      value = 0,
      disabled = false,
      active = false,
      focus = false,
      onClick = NOOP,
      tooltipProps = {} as TooltipProps,
      icon,
      iconType,
      iconSide = "left",
      children,
      "data-testid": dataTestId
    }: TabProps,
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    function renderIconAndChildren() {
      if (!icon) return children;

      const iconElement = (
        <Icon
          ariaHidden={true}
          iconType={iconType}
          icon={icon}
          className={cx(styles.tabIcon, getStyle(styles, iconSide))}
          iconSize={18}
          ignoreFocusStyle
        />
      );

      const childrenArray = React.Children.toArray(children);

      if (iconSide === "left") {
        return [iconElement, ...childrenArray];
      }

      return [...childrenArray, iconElement];
    }

    function handleKeyDown(event: React.KeyboardEvent) {
      if (event.key === keyCodes.ENTER || event.key === keyCodes.SPACE) {
        event.preventDefault();
        !disabled && onClick(value);
      }
    }

    return (
      <Tooltip {...tooltipProps} content={tooltipProps.content}>
        <li
          ref={mergedRef}
          key={id}
          className={cx(styles.tabWrapper, className, {
            [styles.active]: active,
            [styles.disabled]: disabled,
            [styles.tabFocusVisibleInset]: focus
          })}
          id={id}
          role="tab"
          aria-selected={active}
          aria-disabled={disabled}
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.TAB, id)}
          data-vibe={ComponentVibeId.TAB}
          onClick={() => !disabled && onClick(value)}
          onKeyDown={handleKeyDown}
        >
          <div className={cx(styles.tabInner, tabInnerClassName)}>{renderIconAndChildren()}</div>
        </li>
      </Tooltip>
    );
  }
);

export default Tab;
