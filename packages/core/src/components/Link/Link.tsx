import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React, { forwardRef, useCallback } from "react";
import { NOOP } from "../../utils/function-utils";
import Icon from "../Icon/Icon";
import { IconPosition as IconPositionEnum, LinkTarget as LinkTargetEnum } from "./LinkConsts";
import { type LinkColor, type LinkIconPosition, type LinkTarget } from "./Link.types";
import { type SubIcon, type VibeComponentProps, withStaticProps } from "../../types";
import styles from "./Link.module.scss";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { camelCase } from "lodash-es";

export interface LinkProps extends VibeComponentProps {
  /**
   * Class name applied to the link text.
   */
  textClassName?: string;
  /**
   * The URL the link points to.
   */
  href?: string;
  /**
   * The text content of the link.
   */
  text?: string;
  /**
   * Specifies the relationship between the current document and the linked resource.
   */
  rel?: string;
  /**
   * Callback fired when the link is clicked.
   */
  onClick?: (event: React.MouseEvent) => void;
  /**
   * Specifies where to open the linked document.
   */
  target?: LinkTarget;
  /**
   * The ARIA label description for accessibility.
   */
  ariaLabelDescription?: string;
  /**
   * The ID of the element that describes this link.
   */
  ariaDescribedby?: string;
  /**
   * The ID of the element labeling this link.
   */
  ariaLabeledBy?: string;
  /**
   * Icon displayed next to the link text.
   */
  icon?: SubIcon;
  /**
   * The position of the icon relative to the text.
   */
  iconPosition?: LinkIconPosition;
  /**
   * If true, disables navigation when the link is clicked.
   */
  disableNavigation?: boolean;
  /**
   * If true, the link inherits the surrounding text's font size.
   */
  inheritFontSize?: boolean;
  /**
   * If true, the link is styled to fit within inline text content.
   */
  inlineText?: boolean;
  /** The link's color style */
  color?: LinkColor;
  /**
   * Inline style object applied to the link element.
   */
  style?: React.CSSProperties;
}

const Link = forwardRef(
  (
    {
      className,
      textClassName,
      href = "",
      text = "",
      rel = "noreferrer",
      onClick = NOOP,
      target = "_blank",
      ariaLabelDescription = "",
      color = "primary",
      ariaDescribedby = "",
      icon = "",
      iconPosition = "start",
      id = "",
      ariaLabeledBy = "",
      disableNavigation = false,
      inheritFontSize = false,
      inlineText = false,
      style,
      "data-testid": dataTestId
    }: LinkProps,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => {
    const isStart = iconPosition === "start";

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
        style={style}
        className={cx(styles.link, className, getStyle(styles, camelCase("color-" + color)), {
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
  return <Icon className={className} icon={icon} iconType="font" />;
}

interface LinkStaticProps {
  targets: typeof LinkTargetEnum;
  iconPositions: typeof IconPositionEnum;
  position: typeof IconPositionEnum;
}

export default withStaticProps<LinkProps, LinkStaticProps>(Link, {
  position: IconPositionEnum,
  iconPositions: IconPositionEnum,
  targets: LinkTargetEnum
});
