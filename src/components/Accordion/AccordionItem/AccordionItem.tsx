import cx from "classnames";
import React, { forwardRef, useCallback, useRef } from "react";
import VibeComponentProps from "src/types/VibeComponentProps";
import useMergeRefs from "../../../hooks/useMergeRefs";
import ExpandCollapse from "../../ExpandCollapse/ExpandCollapse";
import { ElementContent } from "../../../types/ElementContent";

interface AccordionItemProps extends VibeComponentProps {
  /**
   * Header title
   */
  title?: string;
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
      contentClassName
    },
    ref
  ) => {
    // Change onClick param name to onClickCallback in 1.0.0
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const onClickCallback = useCallback(() => {
      onClickAccordionCallback && onClickAccordionCallback();
      onClick && onClick();
    }, [onClickAccordionCallback, onClick]);

    return (
      <div ref={mergedRef} className={cx("accordion-item", className)} id={id}>
        <ExpandCollapse
          iconSize={iconSize}
          id={`expand-collapse--${id}`}
          onClick={onClickCallback}
          open={open}
          title={title}
          hideBorder={hideBorder}
          headerClassName={headerClassName}
          contentClassName={contentClassName}
        >
          {children}
        </ExpandCollapse>
      </div>
    );
  }
);

export default AccordionItem;
