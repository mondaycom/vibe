import cx from "classnames";
import React, { type FC, forwardRef, type ReactElement, useCallback, useRef, useState } from "react";
import useMergeRef from "../../hooks/useMergeRef";
import { Icon } from "@vibe/icon";
import { Text } from "../../../../components/typography/dist";
import { DropdownChevronDown } from "@vibe/icons";
import { type VibeComponentProps, type ElementContent } from "../../types";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import styles from "./ExpandCollapse.module.scss";
import { type ExpandCollapseIconPosition } from "./ExpandCollapse.types";
import { ComponentVibeId } from "../../tests/constants";

export interface ExpandCollapseProps extends VibeComponentProps {
  /**
   * Custom renderer for the header component.
   */
  headerComponentRenderer?: () => ReactElement;
  /**
   * Class name applied to the header.
   */
  headerClassName?: string;
  /**
   * Class name applied to the content.
   */
  contentClassName?: string;
  /**
   * Class name applied to the root component.
   */
  componentClassName?: string;
  /**
   * The title displayed in the header.
   */
  title?: ElementContent;
  /**
   * The content inside the expandable section.
   */
  children?: ElementContent;
  /**
   * The size of the expand/collapse icon.
   */
  iconSize?: number | string;
  /**
   * The position of the icon.
   */
  iconPosition?: ExpandCollapseIconPosition;
  /**
   * If true, the section is open by default when rendered.
   */
  defaultOpenState?: boolean;
  /**
   * Controls the open state of the section.
   */
  open?: boolean;
  /**
   * Callback fired when the header is clicked.
   */
  onClick?: (event: React.MouseEvent) => void;
  /**
   * If true, hides the border around the component.
   */
  hideBorder?: boolean;
  /**
   * If true, captures the click event on the button.
   */
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
      iconPosition = "right",
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
        <Text type="text1" className={cx(styles.headerContent)}>
          {title}
        </Text>
      ) : (
        title
      );
    }, [title]);

    const renderIcon = () => (
      <Icon
        className={cx(styles.iconComponent, {
          [styles.animateIconOpen]: isExpanded,
          [styles.animateIconClose]: !isExpanded
        })}
        iconType="svg"
        icon={DropdownChevronDown}
        iconSize={iconSize}
      />
    );

    return (
      <div
        ref={mergedRef}
        className={className}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.EXPAND_COLLAPSE, id)}
        data-vibe={ComponentVibeId.EXPAND_COLLAPSE}
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
              [styles.hideBorderBottom]: hideBorder,
              [styles.leftIcon]: iconPosition === "left"
            })}
            onClickCapture={captureOnClick ? onClick || toggleExpand : undefined}
            onClick={!captureOnClick ? onClick || toggleExpand : undefined}
            aria-expanded={isExpanded}
            aria-controls={`${id}-controls`}
          >
            {iconPosition === "left" && renderIcon()}
            {typeof title !== "string" || title.length !== 0
              ? renderHeader()
              : headerComponentRenderer && headerComponentRenderer()}
            {iconPosition === "right" && renderIcon()}
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
