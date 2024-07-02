import cx from "classnames";
import React, { FC, forwardRef, ReactElement, useCallback, useRef, useState } from "react";
import useMergeRef from "../../hooks/useMergeRef";
import Icon from "../Icon/Icon";
import Heading from "../LegacyHeading/LegacyHeading";
import DropdownChevronDown from "../Icon/Icons/components/DropdownChevronDown";
import { VibeComponentProps, ElementContent } from "../../types";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import styles from "./ExpandCollapse.module.scss";

export interface ExpandCollapseProps extends VibeComponentProps {
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
   * Should be open or closed by default (when rendered)
   */
  defaultOpenState?: boolean;
  open?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  hideBorder?: boolean;
  captureOnClick?: boolean;
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
      componentClassName,
      "data-testid": dataTestId,
      captureOnClick = true
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    const [isOpen, setIsOpen] = useState(defaultOpenState);
    const isExpanded = open === undefined ? isOpen : open;

    const toggleExpand = () => {
      setIsOpen(!isOpen);
    };
    const renderHeader = useCallback(() => {
      return typeof title === "string" ? (
        <Heading type={Heading.types.h5} value={title} className={cx(styles.headerContent)} />
      ) : (
        title
      );
    }, [title]);

    return (
      <div
        ref={mergedRef}
        className={className}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.EXPAND_COLLAPSE, id)}
      >
        <div
          className={cx(
            styles.expandCollapse,
            {
              [styles.hideBorder]: hideBorder,
              [styles.showBorder]: !hideBorder
            },
            componentClassName
          )}
        >
          <button
            type="button"
            className={cx(styles.header, styles.section, headerClassName, {
              [styles.headerOpen]: isExpanded,
              [styles.hideBorderBottom]: hideBorder
            })}
            onClickCapture={captureOnClick ? onClick || toggleExpand : undefined}
            onClick={!captureOnClick ? onClick || toggleExpand : undefined}
            aria-expanded={isExpanded}
            aria-controls={`${id}-controls`}
          >
            {typeof title !== "string" || title.length !== 0
              ? renderHeader()
              : headerComponentRenderer && headerComponentRenderer()}
            <Icon
              className={cx(styles.iconComponent, {
                [styles.animateIconOpen]: isExpanded,
                [styles.animateIconClose]: !isExpanded
              })}
              iconType={Icon.type.SVG}
              icon={DropdownChevronDown}
              iconSize={iconSize}
              clickable={false}
            />
          </button>
          {isExpanded && (
            <div
              className={cx(styles.content, styles.section, contentClassName, {
                [styles.animateExpandCollapseContent]: isExpanded
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
