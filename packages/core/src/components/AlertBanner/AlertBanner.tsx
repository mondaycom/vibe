import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import cx from "classnames";
import React, { ForwardedRef, forwardRef, ReactElement, useMemo } from "react";
import Button from "../../components/Button/Button";
import IconButton from "../../components/IconButton/IconButton";
import CloseSmall from "../../components/Icon/Icons/components/CloseSmall";
import { AlertBannerBackgroundColor } from "./AlertBannerConstants";
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

// TODO: [breaking] type it to adopt a structure of a text and one (optional) cta (either link/button)
type ChildrenType = ReactElement<AlertBannerButtonProps | AlertBannerLinkProps | AlertBannerTextProps>;

export interface AlertBannerProps extends VibeComponentProps {
  /**
   * Set external styling to the progress bar.
   */
  className?: string;
  backgroundColor?: AlertBannerBackgroundColor;
  isCloseHidden?: boolean;
  /** ARIA description for the progress bar */
  ariaLabel?: string;
  closeButtonAriaLabel?: string;
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ChildrenType | ChildrenType[];
}

const AlertBanner: VibeComponent<AlertBannerProps> & {
  backgroundColors?: typeof AlertBannerBackgroundColor;
} = forwardRef(
  (
    {
      children: originalChildren,
      className,
      backgroundColor = AlertBanner.backgroundColors.PRIMARY,
      onClose = NOOP,
      ariaLabel = "",
      closeButtonAriaLabel = "Close",
      isCloseHidden = false,
      id,
      "data-testid": dataTestId
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const classNames = useMemo(() => {
      return cx(className, styles.alertBanner, getStyle(styles, backgroundColor));
    }, [className, backgroundColor]);

    const isDarkBackground = backgroundColor === AlertBanner.backgroundColors.DARK;
    const isFixedColor = backgroundColor === AlertBanner.backgroundColors.WARNING;
    const textColor = useMemo(() => {
      if (isFixedColor) {
        return Text.colors.FIXED_DARK;
      }
      return isDarkBackground ? Text.colors.ON_INVERTED : Text.colors.ON_PRIMARY;
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
        type={Text.types.TEXT2}
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
              size={Button.sizes.SMALL}
              kind={IconButton.kinds.TERTIARY}
              color={isDarkBackground ? Button.colors.ON_INVERTED_BACKGROUND : Button.colors.ON_PRIMARY_COLOR}
              ariaLabel={closeButtonAriaLabel}
            />
          )}
        </div>
      </Text>
    );
  }
);

export default withStaticProps(AlertBanner, { backgroundColors: AlertBannerBackgroundColor });
