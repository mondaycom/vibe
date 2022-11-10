/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { ForwardedRef, forwardRef, useCallback, useMemo } from "react";
import { keyCodes } from "../../../../constants";
import cx from "classnames";
import { ELEMENT_TYPES, getTestId } from "../../../../utils/test-utils";
import { SubIcon, VibeComponent, VibeComponentProps } from "../../../../types";
import { IconSubComponentProps } from "../../../Icon/Icon";
import styles from "./BreadcrumbContent.module.scss";

interface BreadcrumbContentProps extends VibeComponentProps {
  isClickable?: boolean;
  link?: string;
  onClick?: () => void;
  text?: string;
  icon?: SubIcon;
  isCurrent?: boolean;
  disabled?: boolean;
}

const iconProps: IconSubComponentProps = {
  className: cx(styles.breadcrumbIcon, "breadcrumb-icon"),
  size: "14",
  clickable: false
};

export const BreadcrumbContent: VibeComponent<BreadcrumbContentProps> = forwardRef(
  (
    { className, isClickable, link, onClick, text, icon, isCurrent, disabled = false, id, "data-testid": dataTestId },
    ref: ForwardedRef<HTMLSpanElement>
  ) => {
    const Icon = icon;

    const onKeyDown = useCallback(
      (event: React.KeyboardEvent) => {
        if (event.key === keyCodes.ENTER || event.key === keyCodes.SPACE) {
          link ? (window.parent.location.href = link) : onClick();
        }
      },
      [onClick, link]
    );

    const tabIndex = useMemo(() => (disabled ? -1 : 0), [disabled]);

    const overrideClassName = cx(
      styles.breadcrumbContent,
      "breadcrumb-content",
      {
        [styles.current]: isCurrent,
        ["current"]: isCurrent,
        [styles.disabled]: disabled,
        ["disabled"]: disabled,
        [styles.clickable]: isClickable,
        ["clickable"]: isClickable
      },
      className
    );

    if (isClickable && (link || onClick)) {
      if (link) {
        return (
          <a
            className={overrideClassName}
            href={link}
            onKeyDown={onKeyDown}
            aria-current={isCurrent ? "page" : undefined}
            id={id}
            data-testid={dataTestId || getTestId(ELEMENT_TYPES.BREADCRUMB_CONTENT, id)}
          >
            {Icon && <Icon {...iconProps} />}
            <span ref={ref} className={cx(styles.breadcrumbText, "breadcrumb-text")}>
              {text}
            </span>
          </a>
        );
      }
      return (
        <span
          className={overrideClassName}
          onClick={onClick}
          onKeyDown={onKeyDown}
          tabIndex={tabIndex}
          aria-current={isCurrent ? "page" : undefined}
          role="button"
          id={id}
          data-testid={dataTestId || getTestId(ELEMENT_TYPES.BREADCRUMB_CONTENT, id)}
        >
          {Icon && <Icon {...iconProps} />}
          <span ref={ref} className={cx(styles.breadcrumbText, "breadcrumb-text")}>
            {text}
          </span>
        </span>
      );
    }
    return (
      <span
        className={overrideClassName}
        aria-disabled="true"
        tabIndex={tabIndex}
        aria-current={isCurrent ? "page" : undefined}
        id={id}
        data-testid={dataTestId || getTestId(ELEMENT_TYPES.BREADCRUMB_CONTENT, id)}
      >
        {Icon && <Icon {...iconProps} />}
        <span ref={ref} className={cx(styles.breadcrumbText, "breadcrumb-text")}>
          {text}
        </span>
      </span>
    );
  }
);
