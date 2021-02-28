import React, { forwardRef, useCallback } from "react";
import "./BreadcrumbContent.scss";

export const BreadcrumbContent = forwardRef(({ className, isClickable, link, func, text, icon }, ref) => {
  const Icon = icon;
  const onKeyDown = useCallback(
    event => {
      if (event.key === "Enter" || event.key === " ") {
        link ? (window.parent.location.href = link) : func();
      }
    },
    [func, link]
  );

  const renderBreadcrumbContent = () => {
    let elementToRender;

    if (isClickable && (link || func)) {
      if (link) {
        elementToRender = (
          <a className={className} href={link} onKeyDown={onKeyDown} style={{ cursor: "pointer" }}>
            {Icon && <Icon className="breadcrumb-icon" size={"14"} />}
            <span ref={ref} className="breadcrumb-text">
              {text}
            </span>
          </a>
        );
      } else {
        elementToRender = (
          <span className={className} onClick={func} onKeyDown={onKeyDown} tabIndex="0" style={{ cursor: "pointer" }}>
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
