import React, { FC, forwardRef, ReactElement, useCallback, useRef, useState } from "react";
import useMergeRefs from "../../hooks/useMergeRefs";
import Icon from "../Icon/Icon";
import Heading from "../Heading/Heading";
import DropdownChevronDown from "../Icon/Icons/components/DropdownChevronDown";
import { VibeComponentProps } from "../../types";
import cx from "classnames";
import { ElementContent } from "../../types/ElementContent";
import "./ExpandCollapse.scss";

interface ExpandCollapseProps extends VibeComponentProps {
  /**
   * Component as parameter to be rendered as header
   */
  headerComponentRenderer?: () => ReactElement;
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
      onClick = null
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
      return <Heading type={Heading.types.h5} value={title} className="expand-collapse__header-content" />;
    }, [title]);

    return (
      <div ref={mergedRef} className={cx("expand-collapse--wrapper", className)} id={id}>
        <div className="expand-collapse">
          <button
            type="button"
            className={cx("expand-collapse__header", "expand-collapse__section", {
              "expand-collapse__header--open": isExpanded
            })}
            onClickCapture={onClick || toggleExpand}
            aria-expanded={isExpanded}
            aria-controls={`${id}-controls`}
          >
            {title.length !== 0 ? renderHeader() : headerComponentRenderer && headerComponentRenderer()}
            <Icon
              className={isExpanded ? "animate-icon-open" : "animate-icon-close"}
              iconType={Icon.type.SVG}
              icon={DropdownChevronDown}
              iconSize={iconSize}
              clickable={false}
            />
          </button>
          {isExpanded && (
            <div
              className={`expand-collapse__content expand-collapse__section ${
                isExpanded && "animate-expand-collapse__content"
              }`}
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
