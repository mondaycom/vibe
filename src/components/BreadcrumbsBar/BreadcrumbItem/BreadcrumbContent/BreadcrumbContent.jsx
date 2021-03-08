import React, { forwardRef, useCallback } from "react";
import "./BreadcrumbContent.scss";

const ENTER_KEY = "Enter";
const SPACE_KEY = " ";

export const BreadcrumbContent = forwardRef(({ className, isClickable, link, onClick, text, icon }, ref) => {
  const Icon = icon;
  const onKeyDown = useCallback(
    event => {
      if (event.key === ENTER_KEY || event.key === SPACE_KEY) {
        link ? (window.parent.location.href = link) : onClick();
      }
    },
    [onClick, link]
  );

  const renderBreadcrumbContent = () => {
    let elementToRender;

    if (isClickable && (link || onClick)) {
      if (link) {
        elementToRender = (
          <a className={className} href={link} onKeyDown={onKeyDown}>
            {Icon && <Icon className="breadcrumb-icon" size={"14"} />}
            <span ref={ref} className="breadcrumb-text">
              {text}
            </span>
          </a>
        );
      } else {
        elementToRender = (
          <span className={className} onClick={onClick} onKeyDown={onKeyDown} tabIndex="0">
            {Icon && <Icon className="breadcrumb-icon" size={"14"} />}
            <span ref={ref} className="breadcrumb-text">
              {text}
            </span>
          </span>
        );
      }
    } else {
      elementToRender = (
        <span className={className} aria-disabled="true" tabIndex="0">
          {Icon && <Icon className="breadcrumb-icon" size={"14"} />}
          <span ref={ref} className="breadcrumb-text">
            {text}
          </span>
        </span>
      );
    }

    return elementToRender;
  };

  return renderBreadcrumbContent();
});
