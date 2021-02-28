import React, { forwardRef } from "react";
import "./BreadcrumbText.scss";

export const BreadcrumbText = forwardRef(({ className, isClickable, link, func, text }, ref) => {
  const renderBreadcrumbText = () => {
    let elementToRender;

    if (isClickable && (link || func)) {
      if (link) {
        elementToRender = (
          <a ref={ref} className={className} href={link}>
            {text}
          </a>
        );
      } else {
        elementToRender = (
          <span ref={ref} className={className} onClick={func}>
            {text}
          </span>
        );
      }
    } else {
      elementToRender = (
        <span ref={ref} className={className}>
          {text}
        </span>
      );
    }

    return elementToRender;
  };

  return renderBreadcrumbText();
});
