import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import useIsOverflowing from "../../../hooks/useIsOverflowing";
import Tooltip from "../../Tooltip/Tooltip";
import "./BreadcrumbItem.scss";
import useKeyEvent from "../../../hooks/useKeyEvent";
import { BreadcrumbContent } from "./BreadcrumbContent/BreadcrumbContent";

const MOUSEENTER = ["mouseenter"];
const MOUSELEAVE = ["mouseleave"];

export const BreadcrumbItem = ({
  className,
  text,
  isDisabled = false,
  isClickable = false,
  link,
  func,
  isCurrent = false,
  hasHover,
  icon
}) => {
  const componentRef = useRef(null);
  const isOverflowing = useIsOverflowing({ ref: componentRef });

  return (
    <Tooltip
      disableDialogSlide={true}
      withoutDialog={false}
      content={isOverflowing && text}
      showTrigger={MOUSEENTER}
      hideTrigger={MOUSELEAVE}
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
        <BreadcrumbContent
          className={classNames(
            "breadcrumb-content",
            { hover: hasHover },
            { current: isCurrent },
            { disabled: isDisabled }
          )}
          ref={componentRef}
          isClickable={isClickable}
          link={link}
          func={func}
          text={text}
          icon={icon}
        />
      </li>
    </Tooltip>
  );
};
