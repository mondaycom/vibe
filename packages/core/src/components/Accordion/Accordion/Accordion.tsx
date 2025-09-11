import cx from "classnames";
import React, { forwardRef, type ReactElement, useCallback, useMemo, useRef, useState } from "react";
import useMergeRef from "../../../hooks/useMergeRef";
import { type VibeComponentProps } from "../../../types";
import styles from "./Accordion.module.scss";
import { ComponentVibeId } from "../../../tests/constants";

const COMPONENT_ID = "monday-accordion";

function defineChildId(index: number, props: { id: string }, accordionId: string) {
  if (props.id) {
    return props.id;
  }
  if (accordionId) {
    return `${accordionId}--item-${index}`;
  }
  return `${COMPONENT_ID}--item-${index}`;
}

export interface AccordionProps extends VibeComponentProps {
  /**
   * The content of the accordion (`AccordionItem` components).
   */
  children?: Array<ReactElement> | ReactElement;
  /**
   * If true, multiple accordion items can be expanded at the same time.
   */
  allowMultiple?: boolean;
  /**
   * An array of initially expanded item indexes.
   */
  defaultIndex?: Array<number>;
}

const Accordion = forwardRef(
  (
    {
      children: originalChildren = null,
      allowMultiple = false,
      "data-testid": dataTestId = COMPONENT_ID,
      defaultIndex = [],
      className = "",
      id
    }: AccordionProps,
    ref: React.ForwardedRef<unknown>
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    const [expandedItems, setExpandedItems] = useState(defaultIndex);

    const children = useMemo(() => React.Children.toArray(originalChildren), [originalChildren]);

    const isChildExpanded = useCallback(
      (itemIndex: number) => {
        return expandedItems.includes(itemIndex);
      },
      [expandedItems]
    );

    const onChildClick = useCallback(
      (itemIndex: number) => {
        if (allowMultiple) {
          const newExpandedItems = [...expandedItems];
          if (isChildExpanded(itemIndex)) {
            const index = newExpandedItems.indexOf(itemIndex);
            if (index > -1) {
              newExpandedItems.splice(index, 1);
            }
          } else {
            newExpandedItems.push(itemIndex);
          }
          setExpandedItems(newExpandedItems);
          return;
        }

        if (isChildExpanded(itemIndex)) {
          setExpandedItems([]);
        } else {
          setExpandedItems([itemIndex]);
        }
      },
      [isChildExpanded, expandedItems, allowMultiple]
    );

    const renderChildElements = useMemo(() => {
      return React.Children.map(children, (child: ReactElement, itemIndex) => {
        const originalProps = { ...child?.props };
        const childId = defineChildId(itemIndex, originalProps, id);
        return React.cloneElement(child, {
          ...originalProps,
          id: childId,
          onClickAccordionCallback: () => {
            onChildClick(itemIndex);
          },
          open: isChildExpanded(itemIndex),
          expandCollapseComponentClassName: cx(styles.accordionItemExpandCollapse, {
            [styles.accordionItemExpandCollapseLast]: itemIndex === children.length - 1
          })
        });
      });
    }, [children, id, isChildExpanded, onChildClick]);

    return (
      <div
        ref={mergedRef}
        className={cx(styles.accordion, className)}
        data-testid={dataTestId}
        data-vibe={ComponentVibeId.ACCORDION}
        id={id}
      >
        {children && renderChildElements}
      </div>
    );
  }
);

export default Accordion;
