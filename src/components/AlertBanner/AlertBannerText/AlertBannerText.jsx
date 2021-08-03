import React, { useRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Tooltip from "../../Tooltip/Tooltip";
import useIsOverflowing from "../../../hooks/useIsOverflowing";

import "./AlertBannerText.scss";

const TOOLTIP_SHOW_TRIGGERS = ["mouseenter"];
const TOOLTIP_HIDE_TRIGGERS = ["mouseleave"];

const AlertBannerText = ({ text, marginLeft }) => {
  const componentRef = useRef(null);
  const classNames = cx("monday-style-alert-banner-text", { "monday-style-alert-banner-text-margin-left": marginLeft });
  const isOverflowing = useIsOverflowing({ ref: componentRef });

  return (
    <Tooltip
      position="bottom"
      content={isOverflowing && text}
      showTrigger={TOOLTIP_SHOW_TRIGGERS}
      hideTrigger={TOOLTIP_HIDE_TRIGGERS}
    >
      <div ref={componentRef} className={classNames}>
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
