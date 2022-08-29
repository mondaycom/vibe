import { ELEMENT_TYPES, getTestId } from "../../../utils/test-utils";
import cx from "classnames";
import React, { useRef } from "react";
import PropTypes from "prop-types";
import Tooltip from "../../Tooltip/Tooltip";
import useIsOverflowing from "../../../hooks/useIsOverflowing";
import styles from "./AlertBannerText.module.scss";

const TOOLTIP_SHOW_TRIGGERS = ["mouseenter"];
const TOOLTIP_HIDE_TRIGGERS = ["mouseleave"];

const AlertBannerText = ({ text, marginLeft, id, "data-testid": dataTestId }) => {
  const componentRef = useRef(null);
  const isOverflowing = useIsOverflowing({ ref: componentRef });

  return (
    <Tooltip
      position="bottom"
      content={isOverflowing && text}
      showTrigger={TOOLTIP_SHOW_TRIGGERS}
      hideTrigger={TOOLTIP_HIDE_TRIGGERS}
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.ALERT_BANNER_TEXT, id)}
    >
      <div
        ref={componentRef}
        className={cx(styles.bannerText, "monday-style-alert-banner-text", {
          [styles.bannerTextMarginLeft]: marginLeft,
          ["monday-style-alert-banner-text-margin-left"]: marginLeft
        })}
      >
        <span>{text}</span>
      </div>
    </Tooltip>
  );
};

AlertBannerText.isAlertBannerItem = true;
AlertBannerText.isAlertBannerText = true;

AlertBannerText.propTypes = {
  text: PropTypes.string.isRequired,
  marginLeft: PropTypes.bool
};

AlertBannerText.defaultProps = {
  marginLeft: false
};

export default AlertBannerText;
