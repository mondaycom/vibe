import React, { forwardRef, useCallback, useRef } from "react";
import useMergeRef from "../../../hooks/useMergeRef";
import ExpandCollapse from "../../ExpandCollapse/ExpandCollapse";
import { VibeComponentProps, ElementContent } from "../../../types";

export interface AccordionItemProps extends VibeComponentProps {
  /**
   * Header title for the accordion item.
   */
  title?: ElementContent;
  /**
   * The value of the expandable section
   */
  children?: ElementContent;
  /**
   * The font size of the expand/collapse icon.
   */
  iconSize?: number | string;
  /**
   * Custom callback triggered when the item is clicked.
   */
  onClick?: () => void;
  /** @ignore */
  open?: boolean;
  /** @ignore */
  onClickAccordionCallback?: () => void;
  /**
   * Determines whether the item's border is hidden.
   */
  hideBorder?: boolean;
  /**
   * Custom class name to add to the header of the expandable
   */
  headerClassName?: string;
  /**
   * Custom class name to add to the content of the expandable
   */
  contentClassName?: string;
  /**
   * Custom class name to add to the ExpandCollapse component
   */
  expandCollapseComponentClassName?: string;
  /**
   * If true, the click event is handled during the capture phase instead of bubbling.
   */
  captureOnClick?: boolean;
  /**
   * A class name to be added to the accordion item container
   */
  className?: string;
  /**
   * An id to be added the accordion item container.
   */
  id?: string;
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
