import React, { FC, forwardRef, ReactElement, useCallback, useRef, useState } from "react";
import useMergeRefs from "../../hooks/useMergeRefs";
import Icon from "../Icon/Icon";
import Heading from "../Heading/Heading";
import DropdownChevronDown from "../Icon/Icons/components/DropdownChevronDown";
import { VibeComponentProps } from "../../types";
import cx from "classnames";
import { ElementContent } from "../../types/ElementContent";
import "./ExpandCollapse.scss";
import extraStyles from "./styles.module.scss";

interface ExpandCollapseProps extends VibeComponentProps {
  /**
   * Component as parameter to be rendered as header
   */
  headerComponentRenderer?: () => ReactElement;
  /**
   * Class name to add to the header of the expandable
   */
  headerClassName?: string;
  /**
   * Class name to add to the content of the expandable
   */
  contentClassName?: string;
  /**
   * Class name to add to the component
   */
  componentClassName?: string;
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
      componentClassName
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
        <div
          className={cx("expand-collapse", componentClassName, {
            [extraStyles.hideBorder]: hideBorder,
            [extraStyles.showBorder]: !hideBorder
          })}
        >
          <button
            type="button"
            className={cx("expand-collapse__header", "expand-collapse__section", headerClassName, {
              "expand-collapse__header--open": isExpanded,
              [extraStyles.hideBorderBottom]: hideBorder
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
              className={cx("expand-collapse__content", "expand-collapse__section", contentClassName, {
                "animate-expand-collapse__content": isExpanded
              })}
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
