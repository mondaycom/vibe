import React, { forwardRef, useMemo } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { BACKGROUND_COLORS } from "./AlertBannerConstants";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import CloseSmall from "../Icon/Icons/components/CloseSmall";

import "./AlertBanner.scss";

const AlertBanner = forwardRef(({ children: originalChildren, className, backgroundColor, ariaLabel }, ref) => {
  const classNames = useMemo(() => {
    return cx(className, "monday-alert-banner", `monday-alert-banner--background-color-${backgroundColor}`);
  }, [className, backgroundColor]);

  const children = useMemo(() => {
    const allChildren = React.Children.toArray(originalChildren);
    const filteredChildren = allChildren.filter(child => {
      if (child.type.isAlertBannerItem) return true;
      console.error(
        "Alert banner child is not supported. Please use AlertBannerText, AlertBannerLink or AlertBannerButton.",
        child
      );
      return false;
    });

    return filteredChildren.map((child, index) => {
      return React.cloneElement(child, {
        ...child?.props,
        marginLeft: index > 0
      });
    });
  }, [originalChildren]);

  return (
    <div className={classNames}>
      {children}
      <Button
        className="alert-banner-close-btn"
        onClick={() => {}}
        size={Button.sizes.SMALL}
        kind={Button.kinds.TERTIARY}
        color={Button.colors.ON_PRIMARY_COLOR}
        ariaLabel="close-toast"
      >
        <Icon iconType={Icon.type.SVG} clickable={false} icon={CloseSmall} iconSize="20px" ignoreFocusStyle />
      </Button>
    </div>
  );
});

AlertBanner.backgroundColors = BACKGROUND_COLORS;
AlertBanner.propTypes = {
  /**
   * Set external styling to the progress bar.
   */
  className: PropTypes.string,
  backgroundColor: PropTypes.oneOf([
    AlertBanner.backgroundColors.PRIMARY,
    AlertBanner.backgroundColors.NEGATIVE,
    AlertBanner.backgroundColors.POSITIVE,
    AlertBanner.backgroundColors.DARK
  ]),

  /** ARIA description for the progress bar */
  ariaLabel: PropTypes.string
};

AlertBanner.defaultProps = {
  backgroundColor: AlertBanner.backgroundColors.PRIMARY,
  className: "",
  ariaLabel: ""
};

export default AlertBanner;
