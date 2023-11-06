import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React, { forwardRef, useCallback } from "react";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { NOOP } from "../../utils/function-utils";
import Icon from "../Icon/Icon";
import { IconPosition, LinkTarget } from "./LinkConsts";
import { SubIcon, VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import styles from "./Link.module.scss";

export interface LinkProps extends VibeComponentProps {
  /**
   * @deprecated - use className instead
   */
  componentClassName?: string;
  /**
   * Class name for overriding link text styles
   */
  textClassName?: string;
  /** Specifies the location (URL) of the external resource */
  href?: string;
  /** The link text */
  text?: string;
  /** Defines the relationship between a linked resource and the current document */
  rel?: string;
  /** onClick function - MouseEvent */
  onClick?: (event: React.MouseEvent) => void;
  /** Specifies where to open the linked document */
  target?: LinkTarget;
  /** Aria label description */
  ariaLabelDescription?: string;
  /** Identifies the element (or elements) that describes the element on which the attribute is set. */
  ariaDescribedby?: string;
  /** element id to describe the counter accordingly */
  ariaLabeledBy?: string;
  /** Icon to add to the link element */
  icon?: SubIcon;
  /** the position of the icon in relation to the etext */
  iconPosition?: IconPosition;
  /** disable navigation */
  disableNavigation?: boolean;
  /** inherit text size */
  inheritFontSize?: boolean;
  /** if the link is in part of other text content */
  inlineText?: boolean;
}

const Link: VibeComponent<LinkProps, HTMLAnchorElement> & {
  targets?: typeof LinkTarget;
  target?: typeof LinkTarget;
  iconPositions?: typeof IconPosition;
  position?: typeof IconPosition;
} = forwardRef(
  (
    {
      className,
      componentClassName,
      textClassName,
      href = "",
      text = "",
      rel = "noreferrer",
      onClick = NOOP,
      target = Link.targets.NEW_WINDOW,
      ariaLabelDescription = "",
      ariaDescribedby = "",
      icon = "",
      iconPosition = Link.position.START,
      id = "",
      ariaLabeledBy = "",
      disableNavigation = false,
      inheritFontSize = false,
      inlineText = false,
      "data-testid": dataTestId
    },
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => {
    const overrideClassName = backwardCompatibilityForProperties([className, componentClassName]);
    const isStart = iconPosition === IconPosition.START;

    const onClickWrapper = useCallback(
      (e: React.MouseEvent<HTMLElement>) => {
        if (disableNavigation) {
          e.preventDefault();
        }
        onClick && onClick(e);
      },
      [disableNavigation, onClick]
    );

    return (
      <a
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.LINK, id)}
        id={id}
        href={href}
        rel={rel}
        ref={ref}
        onClick={onClickWrapper}
        target={target}
        className={cx(styles.link, overrideClassName, {
          [styles.inheritFontSize]: inheritFontSize,
          [styles.inlineText]: inlineText
        })}
        aria-label={ariaLabelDescription}
        aria-describedby={ariaDescribedby}
        aria-labelledby={ariaLabeledBy}
      >
        {getIcon(isStart, icon, cx(styles.iconStart))}
        <span className={cx(styles.text, textClassName)}>{text}</span>
        {getIcon(!isStart, icon, cx(styles.iconEnd))}
      </a>
    );
  }
);

function getIcon(shouldShow: boolean, icon: string | React.FunctionComponent | null, className: string) {
  if (!shouldShow) return;
  return <Icon className={className} clickable={false} icon={icon} iconType={Icon.type.ICON_FONT} />;
}

export default withStaticProps(Link, {
  position: IconPosition,
  target: LinkTarget,
  iconPositions: IconPosition,
  targets: LinkTarget
});
