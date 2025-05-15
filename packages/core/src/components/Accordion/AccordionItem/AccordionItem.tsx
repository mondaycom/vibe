import React, { forwardRef, useCallback, useRef } from "react";
import useMergeRef from "../../../hooks/useMergeRef";
import ExpandCollapse from "../../ExpandCollapse/ExpandCollapse";
import { VibeComponentProps, ElementContent } from "../../../types";
import { ExpandCollapseIconPosition } from "../../ExpandCollapse/ExpandCollapse.types";

export interface AccordionItemProps extends VibeComponentProps {
  /**
   * The header content displayed in the accordion item.
   */
  title?: ElementContent;
  /**
   * The content rendered inside the accordion item.
   */
  children?: ElementContent;
  /**
   * The size of the expand/collapse icon.
   */
  iconSize?: number | string;
  /**
   * The position of the expand/collapse icon.
   */
  iconPosition?: ExpandCollapseIconPosition;
  /**
   * Callback fired upon item click.
   */
  onClick?: () => void;
  /** @ignore */
  open?: boolean;
  /** @ignore */
  onClickAccordionCallback?: () => void;
  /**
   * If true, the accordion item's border is hidden.
   */
  hideBorder?: boolean;
  /**
   * Class name applied to the accordion item's header.
   */
  headerClassName?: string;
  /**
   * Class name applied to the accordion item's content.
   */
  contentClassName?: string;
  /**
   * Class name applied to the expand/collapse component.
   */
  expandCollapseComponentClassName?: string;
  /**
   * If true, the click event is handled during the capture phase.
   */
  captureOnClick?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = forwardRef(
  (
    {
      children = null,
      title = "",
      className = "",
      iconSize = 24,
      iconPosition = "right",
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
          iconPosition={iconPosition}
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
