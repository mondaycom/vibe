import React, { forwardRef, useCallback } from "react";
import "./BreadcrumbContent.scss";

const ENTER_KEY = "Enter";
const SPACE_KEY = " ";

export const BreadcrumbContent = forwardRef(({ className, isClickable, link, onClick, text, icon, isCurrent }, ref) => {
  const Icon = icon;
  const onKeyDown = useCallback(
    event => {
      if (event.key === ENTER_KEY || event.key === SPACE_KEY) {
        link ? (window.parent.location.href = link) : onClick();
      }
    },
    [onClick, link]
  );

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
    } else {
      return (
        <span
          className={className}
          onClick={onClick}
          onKeyDown={onKeyDown}
          tabIndex="0"
          aria-current={isCurrent ? "page" : undefined}
        >
          {Icon && <Icon className="breadcrumb-icon" size="14" clickable={false} />}
          <span ref={ref} className="breadcrumb-text">
            {text}
          </span>
        </span>
      );
    }
  }
  return (
    <span className={className} aria-disabled="true" tabIndex="0" aria-current={isCurrent ? "page" : undefined}>
      {Icon && <Icon className="breadcrumb-icon" size="14" clickable={false} />}
      <span ref={ref} className="breadcrumb-text">
        {text}
      </span>
    </span>
  );
});
