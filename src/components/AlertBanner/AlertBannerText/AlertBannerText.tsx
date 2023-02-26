import React, { FC, useRef } from "react";
import cx from "classnames";
import Tooltip from "../../Tooltip/Tooltip";
import useIsOverflowing from "../../../hooks/useIsOverflowing/useIsOverflowing";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { HideShowEvent } from "../../../constants";
import "./AlertBannerText.scss";

const TOOLTIP_SHOW_TRIGGERS: Array<HideShowEvent> = [HideShowEvent.MOUSE_ENTER];
const TOOLTIP_HIDE_TRIGGERS: Array<HideShowEvent> = [HideShowEvent.MOUSE_LEAVE];

export interface AlertBannerTextProps extends VibeComponentProps {
  text: string;
  marginLeft?: boolean;
}

const AlertBannerText: FC<AlertBannerTextProps> = ({ text, marginLeft = false }) => {
  const componentRef = useRef(null);
  const classNames = cx("monday-style-alert-banner-text", { "monday-style-alert-banner-text-margin-left": marginLeft });
  const isOverflowing = useIsOverflowing({ ref: componentRef });

  return (
    <Tooltip
      position={Tooltip.positions.BOTTOM}
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

Object.assign(AlertBannerText, {
  isAlertBannerItem: true,
  isAlertBannerText: true
});

export default AlertBannerText;
