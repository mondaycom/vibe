import { ELEMENT_TYPES, getTestId } from "../../../utils/test-utils";
import cx from "classnames";
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import Link from "../../Link/Link";
import styles from "./AlertBannerLink.module.scss";

const AlertBannerLink = ({ marginLeft, isDarkBackground, id, "data-testid": dataTestId, ...linkProps }) => {
  return (
    <div
      className={cx({
        [styles.bannerLinkMarginLeft]: marginLeft,
        ["monday-style-alert-banner-link-margin-left"]: marginLeft,
        [styles.bannerLinkDarkBackground]: isDarkBackground,
        ["monday-style-alert-banner-link-dark-background"]: isDarkBackground
      })}
      id={id}
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.ALERT_BANNER_LINK, id)}
    >
      <Link {...linkProps} className={cx(styles.bannerLink, "monday-style-alert-banner-link")} />
    </div>
  );
};

AlertBannerLink.isAlertBannerItem = true;

// eslint-disable-next-line no-unused-vars
const { componentClassName: _componentClassNamePropsType, ...linkPropsTypes } = Link.propTypes;
AlertBannerLink.propTypes = {
  ...linkPropsTypes,
  /** adds 8px margin to the left */
  marginLeft: PropTypes.bool,
  isDarkBackground: PropTypes.bool
};

// eslint-disable-next-line no-unused-vars
const { componentClassName: _componentClassNameDefaultProp, ...linkDefaultPropTypes } = Link.defaultProps;
AlertBannerLink.defaultProps = {
  ...linkDefaultPropTypes,
  marginLeft: false,
  isDarkBackground: false
};

export default AlertBannerLink;
