import React, { ForwardedRef, forwardRef, ReactElement, useMemo } from "react";
import cx from "classnames";
import Button from "../../components/Button/Button";
import Icon from "../../components/Icon/Icon";
import CloseSmall from "../../components/Icon/Icons/components/CloseSmall";
import { AlertBannerBackgroundColor } from "./AlertBannerConstants";
import { NOOP } from "../../utils/function-utils";
import VibeComponentProps from "../../types/VibeComponentProps";
import { AlertBannerLinkProps } from "./AlertBannerLink/AlertBannerLink";
import { AlertBannerButtonProps } from "./AlertBannerButton/AlertBannerButton";
import { AlertBannerTextProps } from "./AlertBannerText/AlertBannerText";
import "./AlertBanner.scss";

interface AlertBannerProps extends VibeComponentProps {
  /**
   * Set external styling to the progress bar.
   */
  className?: string;
  backgroundColor?: AlertBannerBackgroundColor;
  isCloseHidden?: boolean;
  /** ARIA description for the progress bar */
  ariaLabel?: string;
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactElement<AlertBannerButtonProps | AlertBannerLinkProps | AlertBannerTextProps>;
}

const AlertBanner: React.FC<AlertBannerProps> & {
  backgroundColors?: typeof AlertBannerBackgroundColor;
} = forwardRef(
  (
    {
      children: originalChildren,
      className,
      backgroundColor = AlertBanner.backgroundColors.PRIMARY,
      onClose = NOOP,
      ariaLabel = "",
      isCloseHidden = false
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const classNames = useMemo(() => {
      return cx(className, "monday-alert-banner", `monday-alert-banner--background-color-${backgroundColor}`);
    }, [className, backgroundColor]);

    const isDarkBackground = backgroundColor === AlertBanner.backgroundColors.DARK;
    const children = useMemo(() => {
      const allChildren = React.Children.toArray(originalChildren) as ReactElement[];
      const filteredChildren = allChildren.filter((child: ReactElement) => {
        // @ts-ignore displayName & isAlertBannerItem is coming from child assigned field: AlertBannerButton, AlertBannerLink, AlertBannerText
        if (child.type.isAlertBannerItem || child.type.displayName === "MDXCreateElement") return true;
        console.error(
          "Alert banner child is not supported. Please use AlertBannerText, AlertBannerLink or AlertBannerButton.",
          child
        );
        return false;
      });

      return filteredChildren.map((child, index) => {
        return React.cloneElement(child, {
          ...child?.props,
          marginLeft: index > 0,
          isDarkBackground
        });
      });
    }, [originalChildren, isDarkBackground]);

    return (
      <div ref={ref} className={classNames} role="banner" aria-label={ariaLabel || "banner"}>
        <div className="monday-alert-banner__inner">
          {children.map((child, index) => {
            // @ts-ignore isAlertBannerItem is coming from child assigned field: AlertBannerButton, AlertBannerLink, AlertBannerText
            const childTypeIsAlertBannerText = child.type.isAlertBannerText;
            return (
              <div
                key={index}
                className={cx("monday-alert-banner__inner-item", {
                  "monday-alert-banner__inner-item-text": childTypeIsAlertBannerText
                })}
              >
                {childTypeIsAlertBannerText ? <div className="monday-alert-banner__ellipsis">{child}</div> : child}
              </div>
            );
          })}
        </div>
        <div className="monday-alert-banner__close-button-wrapper">
          {isCloseHidden ? null : (
            <Button
              className="monday-alert-banner__alert-banner-close-btn"
              onClick={onClose}
              size={Button.sizes.SMALL}
              kind={Button.kinds.TERTIARY}
              color={isDarkBackground ? Button.colors.ON_INVERTED_BACKGROUND : Button.colors.ON_PRIMARY_COLOR}
              ariaLabel="close-toast"
            >
              <Icon iconType={Icon.type.SVG} clickable={false} icon={CloseSmall} iconSize="20px" ignoreFocusStyle />
            </Button>
          )}
        </div>
      </div>
    );
  }
);

Object.assign(AlertBanner, {
  backgroundColors: AlertBannerBackgroundColor
});

export default AlertBanner;
