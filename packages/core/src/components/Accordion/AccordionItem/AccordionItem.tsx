import React, { forwardRef, useCallback, useRef } from "react";
import useMergeRef from "../../../hooks/useMergeRef";
import ExpandCollapse from "../../ExpandCollapse/ExpandCollapse";
import { VibeComponentProps, ElementContent } from "../../../types";

export interface AccordionItemProps extends VibeComponentProps {
  /**
   * Header title
   */
  title?: ElementContent;
  /**
   * The value of the expandable section
   */
  children?: ElementContent;
  /**
   * The expand icon font size
   */
  iconSize?: number | string;
  /**
   * On click callback
   */
  onClick?: () => void;
  open?: boolean;
  onClickAccordionCallback?: () => void;
  hideBorder?: boolean;
  headerClassName?: string;
  contentClassName?: string;
  expandCollapseComponentClassName?: string;
  captureOnClick?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = forwardRef(
  (
    {
      children = null,
      title = "",
      className = "",
      iconSize = 24,
      id,
      open,
      onClick,
      onClickAccordionCallback,
      hideBorder = false,
      headerClassName,
      contentClassName,
      expandCollapseComponentClassName,
      captureOnClick = true
    },
    ref
  ) => {
    // Change onClick param name to onClickCallback in 1.0.0
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    const onClickCallback = useCallback(() => {
      onClickAccordionCallback && onClickAccordionCallback();
      onClick && onClick();
    }, [onClickAccordionCallback, onClick]);

    return (
      <div ref={mergedRef} className={className} id={id}>
        <ExpandCollapse
          iconSize={iconSize}
          id={`expand-collapse--${id}`}
          onClick={onClickCallback}
          open={open}
          title={title}
          hideBorder={hideBorder}
          componentClassName={expandCollapseComponentClassName}
          headerClassName={headerClassName}
          contentClassName={contentClassName}
          captureOnClick={captureOnClick}
        >
          {children}
        </ExpandCollapse>
      </div>
    );
  }
);

export default AccordionItem;
