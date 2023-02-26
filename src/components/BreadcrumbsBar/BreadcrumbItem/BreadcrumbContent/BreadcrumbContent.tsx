/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { ForwardedRef, forwardRef, useCallback, useMemo } from "react";
import { keyCodes } from "../../../../constants";
import { SubIcon, VibeComponentProps } from "../../../../types";
import "./BreadcrumbContent.scss";

interface BreadcrumbContentProps extends VibeComponentProps {
  isClickable?: boolean;
  link?: string;
  onClick?: () => void;
  text?: string;
  icon?: SubIcon;
  isCurrent?: boolean;
  disabled?: boolean;
}

const iconProps = { className: "breadcrumb-icon", size: 14, clickable: false };

export const BreadcrumbContent: React.ForwardRefExoticComponent<BreadcrumbContentProps & React.RefAttributes<unknown>> =
  forwardRef<unknown, BreadcrumbContentProps>(
    (
      { className, isClickable, link, onClick, text, icon, isCurrent, disabled = false },
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
            <a className={className} href={link} onKeyDown={onKeyDown} aria-current={isCurrent ? "page" : undefined}>
              {Icon && <Icon {...iconProps} />}
              <span ref={ref} className="breadcrumb-text">
                {text}
              </span>
            </a>
          );
        }
        return (
          <span
            className={className}
            onClick={onClick}
            onKeyDown={onKeyDown}
            tabIndex={tabIndex}
            aria-current={isCurrent ? "page" : undefined}
            role="button"
          >
            {Icon && <Icon {...iconProps} />}
            <span ref={ref} className="breadcrumb-text">
              {text}
            </span>
          </span>
        );
      }
      return (
        <span
          className={className}
          aria-disabled="true"
          tabIndex={tabIndex}
          aria-current={isCurrent ? "page" : undefined}
        >
          {Icon && <Icon {...iconProps} />}
          <span ref={ref} className="breadcrumb-text">
            {text}
          </span>
        </span>
      );
    }
  );
