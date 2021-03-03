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
  isClickable,
  link,
  func,
  isCurrent = false,
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
          { clickable: isClickable },
          { current: isCurrent },
          { disabled: isDisabled }
        )}
      >
        <BreadcrumbContent
          className={classNames(
            "breadcrumb-content",
            { clickable: isClickable },
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
