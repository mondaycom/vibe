import React, { FC, forwardRef, ReactElement, useCallback, useRef, useState } from "react";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import Icon from "../Icon/Icon";
import Heading from "../Heading/Heading";
import DropdownChevronDown from "../Icon/Icons/components/DropdownChevronDown";
import { VibeComponentProps } from "../../types";
import { ElementContent } from "../../types/ElementContent";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import styles from "./ExpandCollapse.module.scss";

interface ExpandCollapseProps extends VibeComponentProps {
  /**
   * Component as parameter to be rendered as header
   */
  headerComponentRenderer?: () => ReactElement;
  headerClassName?: string;
  contentClassName?: string;
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
   * Should be open or closed by default (when rendered)
   */
  defaultOpenState?: boolean;
  open?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  hideBorder?: boolean;
}

const ExpandCollapse: FC<ExpandCollapseProps> = forwardRef(
  (
    {
      children,
      headerComponentRenderer = null,
      title = "",
      className,
      defaultOpenState = false,
      iconSize = 24,
      id = "",
      open,
      onClick = null,
      hideBorder = false,
      headerClassName,
      contentClassName,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const [isOpen, setIsOpen] = useState(defaultOpenState);
    const isExpanded = open === undefined ? isOpen : open;

    const toggleExpand = () => {
      setIsOpen(!isOpen);
    };
    const renderHeader = useCallback(() => {
      return (
        <Heading
          type={Heading.types.h5}
          value={title}
          className={cx(styles.headerContent, "expand-collapse__header-content")}
        />
      );
    }, [title]);

    return (
      <div
        ref={mergedRef}
        className={cx(styles.wrapper, "expand-collapse--wrapper", className)}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.EXPAND_COLLAPSE, id)}
      >
        <div className={cx(styles.expandCollapse, "expand-collapse", { [styles.hideBorder]: hideBorder })}>
          <button
            type="button"
            className={cx(
              headerClassName,
              styles.header,
              "expand-collapse__header",
              styles.section,
              "expand-collapse__section",
              {
                [styles.headerOpen]: isExpanded,
                ["expand-collapse__header--open"]: isExpanded,
                [styles.hideBorderBottom]: hideBorder
              }
            )}
            onClickCapture={onClick || toggleExpand}
            aria-expanded={isExpanded}
            aria-controls={`${id}-controls`}
          >
            {title.length !== 0 ? renderHeader() : headerComponentRenderer && headerComponentRenderer()}
            <Icon
              className={
                isExpanded
                  ? cx(styles.animateIconOpen, "animate-icon-open")
                  : cx(styles.animateIconClose, "animate-icon-close")
              }
              iconType={Icon.type.SVG}
              icon={DropdownChevronDown}
              iconSize={iconSize}
              clickable={false}
            />
          </button>
          {isExpanded && (
            <div
              className={cx(
                styles.content,
                "expand-collapse__content",
                styles.section,
                "expand-collapse__section",
                contentClassName,
                { [styles.animateExpandCollapseContent]: isExpanded, "animate-expand-collapse__content": isExpanded }
              )}
              id={`${id}-controls`}
              role="region"
            >
              {children}
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default ExpandCollapse;
