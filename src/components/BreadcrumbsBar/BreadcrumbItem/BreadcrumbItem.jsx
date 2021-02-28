import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import useIsOverflowing from "../../../hooks/useIsOverflowing";
import Tooltip from "../../Tooltip/Tooltip";
import "./BreadcrumbItem.scss";
import useKeyEvent from "../../../hooks/useKeyEvent";
import { BreadcrumbText } from "./BreadcrumbText/BreadcrumbText";

export const BreadcrumbItem = ({
  className,
  text,
  isDisabled = false,
  isClickable = false,
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
    <Tooltip
      position="top"
      justify="center"
      disableDialogSlide={true}
      withoutDialog={false}
      content={isOverflowing && text}
      showTrigger={["mouseenter"]}
      hideTrigger={["mouseleave"]}
    >
      <li
        className={classNames(
          "breadcrumbItem--wrapper",
          className,
          { hover: hasHover },
          { current: isCurrent },
          { disabled: isDisabled }
        )}
      >
        {Icon && <Icon className="breadcrumb-icon" size={"14"} />}
        <BreadcrumbText
          className="breadcrumb-text"
          ref={componentRef}
          isClickable={isClickable}
          link={link}
          func={func}
          text={text}
        />
      </li>
    </Tooltip>
  );
};
