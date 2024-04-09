/* eslint-disable jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events */
import cx from "classnames";
import React, { FC, forwardRef, ReactElement, useRef } from "react";
import { noop as NOOP } from "lodash-es";
import useMergeRef from "../../../hooks/useMergeRef";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import Icon from "../../Icon/Icon";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { IconType } from "../../Icon/IconConstants";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import styles from "./Tab.module.scss";
import { SubIcon } from "../../../types/SubIcon";

export interface TabProps extends VibeComponentProps {
  /**
   * Class name for tab link-name
   */
  tabInnerClassName?: string;
  /**
   * Tab index
   */
  value?: number;
  disabled?: boolean;
  active?: boolean;
  focus?: boolean;
  icon?: SubIcon;
  iconType?: IconType;
  iconSide?: string;
  onClick?: (value: number) => void;
  /**
   * Tab link-name
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
      icon,
      iconType,
      iconSide = "left",
      children,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    function renderIconAndChildren() {
      if (!icon) return children;

      const iconElement = (
        <Icon
          clickable={false}
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
    return (
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
      >
        <a className={cx(styles.tabInner, tabInnerClassName)} onClick={() => !disabled && onClick(value)}>
          {renderIconAndChildren()}
        </a>
      </li>
    );
  }
);

export default Tab;
