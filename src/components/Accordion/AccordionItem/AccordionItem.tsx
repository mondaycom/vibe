import cx from "classnames";
import React, { forwardRef, ForwardRefExoticComponent, ReactNode, useCallback, useRef } from "react";
import VibeComponentProps from "src/types/VibeComponentProps";
import useMergeRefs from "../../../hooks/useMergeRefs";
import ExpandCollapse from "../../ExpandCollapse/ExpandCollapse";

interface AccordionItemProps extends VibeComponentProps {
  /**
   * custom style
   */
  className: string;
  /**
   * id to be add to the wrapper
   */
  id: string;
  /**
   * Header title
   */
  title: string;
  /**
   * The value of the expandable section
   */
  children: Array<ReactNode> | ReactNode;
  /**
   * The expand icon font size
   */
  iconSize: number | string;
  /**
   * On click callback
   */
  onClick: () => void;
  open: boolean;
  onClickAccordionCallback: () => void;
}

const AccordionItem: ForwardRefExoticComponent<AccordionItemProps & React.PropsWithChildren<unknown>> = forwardRef<
  unknown,
  AccordionItemProps
>(
  (
    { children = null, title = "", className = "", iconSize = 24, id, open, onClick, onClickAccordionCallback },
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
        >
          {children}
        </ExpandCollapse>
      </div>
    );
  }
);

export default AccordionItem;
