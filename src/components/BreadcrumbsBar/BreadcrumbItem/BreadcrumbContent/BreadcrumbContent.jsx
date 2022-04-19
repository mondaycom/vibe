/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { forwardRef, useCallback, useMemo } from "react";
import "./BreadcrumbContent.scss";

const ENTER_KEY = "Enter";
const SPACE_KEY = " ";

export const BreadcrumbContent = forwardRef(
  ({ className, isClickable, link, onClick, text, icon, isCurrent, disabled = false }, ref) => {
    const Icon = icon;
    const onKeyDown = useCallback(
      event => {
        if (event.key === ENTER_KEY || event.key === SPACE_KEY) {
          link ? (window.parent.location.href = link) : onClick();
        }
      },
      [onClick, link]
    );

    const tabIndex = useMemo(() => (disabled ? "-1" : "0"), [disabled]);

    if (isClickable && (link || onClick)) {
      if (link) {
        return (
          <a className={className} href={link} onKeyDown={onKeyDown} aria-current={isCurrent ? "page" : undefined}>
            {Icon && <Icon className="breadcrumb-icon" size="14" clickable={false} />}
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
        >
          {Icon && <Icon className="breadcrumb-icon" size="14" clickable={false} />}
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
        {Icon && <Icon className="breadcrumb-icon" size="14" clickable={false} />}
        <span ref={ref} className="breadcrumb-text">
          {text}
        </span>
      </span>
    );
  }
);
