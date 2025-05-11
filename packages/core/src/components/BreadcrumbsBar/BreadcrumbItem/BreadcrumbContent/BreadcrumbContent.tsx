import React, { ForwardedRef, forwardRef, useCallback, useMemo } from "react";
import { keyCodes } from "../../../../constants";
import { SubIcon, VibeComponentProps } from "../../../../types";
import cx from "classnames";
import styles from "./BreadcrumbContent.module.scss";

export interface BreadcrumbContentProps extends VibeComponentProps {
  /**
   * If true, the breadcrumb is clickable.
   */
  isClickable?: boolean;
  /**
   * The URL the breadcrumb links to.
   */
  link?: string;
  /**
   * Callback fired when the breadcrumb is clicked.
   */
  onClick?: () => void;
  /**
   * The text displayed inside the breadcrumb.
   */
  text?: string;
  /**
   * The icon displayed next to the text.
   */
  icon?: SubIcon;
  /**
   * If true, the breadcrumb represents the current page.
   */
  isCurrent?: boolean;
  /**
   * If true, the breadcrumb is disabled.
   */
  disabled?: boolean;
  /**
   * If true, the breadcrumb text is shown.
   */
  showText?: boolean;
}

const iconProps = { className: styles.breadcrumbIcon, size: 14, clickable: false };

export const BreadcrumbContent: React.ForwardRefExoticComponent<BreadcrumbContentProps & React.RefAttributes<unknown>> =
  forwardRef<unknown, BreadcrumbContentProps>(
    (
      { className, isClickable, link, onClick, text, icon, isCurrent, disabled = false, showText = true },
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

      if (isClickable && (link || onClick)) {
        if (link) {
          return (
            <a
              className={cx(styles.breadcrumbContent, className, {
                [styles.disabled]: disabled,
                [styles.clickable]: isClickable,
                [styles.current]: isCurrent,
                [styles.withoutText]: !showText
              })}
              href={link}
              onKeyDown={onKeyDown}
              aria-current={isCurrent ? "page" : undefined}
            >
              {Icon && <Icon {...iconProps} />}
              {showText && (
                <span ref={ref} className={styles.breadcrumbText}>
                  {text}
                </span>
              )}
            </a>
          );
        }
        return (
          <span
            className={cx(styles.breadcrumbContent, className, {
              [styles.disabled]: disabled,
              [styles.clickable]: isClickable,
              [styles.current]: isCurrent,
              [styles.withoutText]: !showText
            })}
            onClick={onClick}
            onKeyDown={onKeyDown}
            tabIndex={tabIndex}
            aria-current={isCurrent ? "page" : undefined}
            role="button"
          >
            {Icon && <Icon {...iconProps} />}
            {showText && (
              <span ref={ref} className={styles.breadcrumbText}>
                {text}
              </span>
            )}
          </span>
        );
      }
      return (
        <span
          className={cx(styles.breadcrumbContent, className, {
            [styles.disabled]: disabled,
            [styles.clickable]: isClickable,
            [styles.current]: isCurrent,
            [styles.notClickable]: !isClickable,
            [styles.withoutText]: !showText
          })}
          aria-disabled="true"
          tabIndex={tabIndex}
          aria-current={isCurrent ? "page" : undefined}
        >
          {Icon && <Icon {...iconProps} />}
          {showText && (
            <span ref={ref} className={styles.breadcrumbText}>
              {text}
            </span>
          )}
        </span>
      );
    }
  );
