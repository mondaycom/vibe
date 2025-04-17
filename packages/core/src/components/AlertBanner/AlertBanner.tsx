import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import cx from "classnames";
import React, { ForwardedRef, forwardRef, ReactElement, useMemo } from "react";
import IconButton from "../../components/IconButton/IconButton";
import { CloseSmall } from "@vibe/icons";
import { AlertBannerBackgroundColor as AlertBannerBackgroundColorEnum } from "./AlertBannerConstants";
import { AlertBannerBackgroundColor } from "./AlertBanner.types";
import { NOOP } from "../../utils/function-utils";
import VibeComponentProps from "../../types/VibeComponentProps";
import { AlertBannerLinkProps } from "./AlertBannerLink/AlertBannerLink";
import { AlertBannerButtonProps } from "./AlertBannerButton/AlertBannerButton";
import { AlertBannerTextProps } from "./AlertBannerText/AlertBannerText";
import { ComponentDefaultTestId } from "../../tests/constants";
import { getTestId } from "../../tests/test-ids-utils";
import { VibeComponent, withStaticProps } from "../../types";
import styles from "./AlertBanner.module.scss";
import Text from "../Text/Text";
import { AlertBannerContext } from "./AlertBannerContext";

type ChildrenType = ReactElement<AlertBannerButtonProps | AlertBannerLinkProps | AlertBannerTextProps>;

export interface AlertBannerProps extends VibeComponentProps {
  /**
   * The background color of the alert banner.
   */
  backgroundColor?: AlertBannerBackgroundColor;
  /**
   * If true, the close button is hidden.
   */
  isCloseHidden?: boolean;
  /**
   * The ARIA label of the alert banner for accessibility.
   */
  ariaLabel?: string;
  /**
   * The ARIA label of the close button for accessibility.
   */
  closeButtonAriaLabel?: string;
  /**
   * Callback fired when the close button is clicked.
   */
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * The content of the alert banner.
   */
  children?: ChildrenType | ChildrenType[];
}

const AlertBanner: VibeComponent<AlertBannerProps> & {
  backgroundColors?: typeof AlertBannerBackgroundColorEnum;
} = forwardRef(
  (
    {
      children: originalChildren,
      className,
      backgroundColor = "primary",
      onClose = NOOP,
      ariaLabel = "",
      closeButtonAriaLabel = "Close",
      isCloseHidden = false,
      id,
      "data-testid": dataTestId
    }: AlertBannerProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const classNames = useMemo(() => {
      return cx(className, styles.alertBanner, getStyle(styles, backgroundColor));
    }, [className, backgroundColor]);

    const isDarkBackground = backgroundColor === "dark";
    const isFixedColor = backgroundColor === "warning";
    const textColor = useMemo(() => {
      if (isFixedColor) {
        return "fixedDark";
      }
      return isDarkBackground ? "onInverted" : "onPrimary";
    }, [isDarkBackground, isFixedColor]);
    const children = useMemo(() => {
      const allChildren = React.Children.toArray(originalChildren) as ReactElement[];
      const filteredChildren = allChildren.filter(
        (
          child: ReactElement & {
            type: Record<string, unknown>;
          }
        ) => {
          if (child.type.isAlertBannerItem || child.type.displayName === "MDXCreateElement") return true;
          console.error(
            "Alert banner child is not supported. Please use AlertBannerText, AlertBannerLink or AlertBannerButton.",
            child
          );
          return false;
        }
      );

      return filteredChildren.map((child, index) => {
        return React.cloneElement(child, {
          ...child?.props,
          marginLeft: index > 0,
          isDarkBackground
        });
      });
    }, [originalChildren, isDarkBackground]);

    return (
      <Text
        type="text2"
        color={textColor}
        ref={ref}
        className={classNames}
        role="banner"
        aria-label={ariaLabel || "banner"}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.ALERT_BANNER, id)}
      >
        <AlertBannerContext.Provider value={{ textColor }}>
          <div className={cx(styles.content)}>
            {children.map(
              (
                child: ReactElement & {
                  type: Record<string, unknown>;
                },
                index
              ) => {
                const childTypeIsAlertBannerText = child.type.isAlertBannerText;
                return (
                  <div
                    key={index}
                    className={cx(styles.contentItem, {
                      [styles.contentItemText]: childTypeIsAlertBannerText
                    })}
                  >
                    {childTypeIsAlertBannerText ? <div className={cx(styles.ellipsis)}>{child}</div> : child}
                  </div>
                );
              }
            )}
          </div>
        </AlertBannerContext.Provider>
        <div className={cx(styles.closeButtonWrapper)}>
          {isCloseHidden ? null : (
            <IconButton
              data-testid="alert-banner-close-button"
              icon={CloseSmall}
              className={cx(styles.closeBtn)}
              hideTooltip
              onClick={onClose}
              size="small"
              kind="tertiary"
              color={isDarkBackground ? "on-inverted-background" : "on-primary-color"}
              ariaLabel={closeButtonAriaLabel}
            />
          )}
        </div>
      </Text>
    );
  }
);

export default withStaticProps(AlertBanner, { backgroundColors: AlertBannerBackgroundColorEnum });
