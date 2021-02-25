import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import useIsOverflowing from "../../../hooks/useIsOverflowing";
import Tooltip from "../../Tooltip/Tooltip";
import "./BreadcrumbItem.scss";
import useKeyEvent from "../../../hooks/useKeyEvent";

export const BreadcrumbItem = ({
  className,
  text,
  isDisabled,
  isClickable,
  link,
  func,
  isCurrent = false,
  hasHover,
  icon,
  isActive,
  index,
  setActiveItemIndex
}) => {
  const Icon = icon;
  const componentRef = useRef(null);
  const isOverflowing = useIsOverflowing({ ref: componentRef });

  const renderBreadcrumbText = ( {className} ) => {
    let elementToRender;
  
    if (isClickable && (link || func)) {
      if (link) {
        elementToRender = (
          <a ref={componentRef} className={className} href={link}>
            {text}
          </a>
        );
      } else {
        elementToRender = (
          <span ref={componentRef} className={className} onClick={func}>
            {text}
          </span>
        );
      }
    } else {
      elementToRender = (
        <span ref={componentRef} className={className}>
          {text}
        </span>
      );
    }
  
    return elementToRender;
  };

  const renderBreadcrumbItem = () => {
    const breadcrumbItem = (
      <>
        {Icon && <Icon className="breadcrumb-icon" size={"14"} />}
        {renderBreadcrumbText({className: "breadcrumb-text"})}
      </>
    );
  
    if (isOverflowing) {
      console.log(`${index} isOverflowing`)
      return (
        <Tooltip
          position="top"
          justify="center"
          disableDialogSlide={true}
          withoutDialog={false}
          content={text}
          showTrigger={["mouseenter"]}
          hideTrigger={["mouseleave"]}
        >
          {breadcrumbItem}
        </Tooltip>
      );
    }
    console.log(`${index} is not Overflowing`)
    return breadcrumbItem;
  };

  useKeyEvent({
    keys: ["Tab"],
    callback: () => {
      setActiveItemIndex(index + 1);
    }
  });

  // useEffect(() => {
  //   //isActive && componentRef && componentRef.current && componentRef.current.focus();
  //   //console.log(componentRef);
  //   //console.log(isOverflowing);
  // }, [isOverflowing, componentRef]);

  return (
    <li
      className={classNames(
        "breadcrumbItem--wrapper",
        className,
        { hover: hasHover },
        { 'current': isCurrent },
        { disabled: isDisabled }
      )}
    >
      {renderBreadcrumbItem(isOverflowing, Icon, isClickable, link, func, text, componentRef)}
    </li>
  );
};
