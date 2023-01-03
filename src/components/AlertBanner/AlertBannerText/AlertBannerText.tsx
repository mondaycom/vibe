import React, { FC, useRef } from "react";
import cx from "classnames";
import Tooltip from "../../Tooltip/Tooltip";
import useIsOverflowing from "../../../hooks/useIsOverflowing";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { HideShowEvent } from "../../../constants";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import styles from "./AlertBannerText.module.scss";

const TOOLTIP_SHOW_TRIGGERS: Array<HideShowEvent> = [HideShowEvent.MOUSE_ENTER];
const TOOLTIP_HIDE_TRIGGERS: Array<HideShowEvent> = [HideShowEvent.MOUSE_LEAVE];

export interface AlertBannerTextProps extends VibeComponentProps {
  text: string;
  marginLeft?: boolean;
}

const AlertBannerText: FC<AlertBannerTextProps> = ({ text, marginLeft = false, id, "data-testid": dataTestId }) => {
  const componentRef = useRef(null);
  const isOverflowing = useIsOverflowing({ ref: componentRef });

  return (
    <Tooltip
      position={Tooltip.positions.BOTTOM}
      content={isOverflowing && text}
      showTrigger={TOOLTIP_SHOW_TRIGGERS}
      hideTrigger={TOOLTIP_HIDE_TRIGGERS}
    >
      <div
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.ALERT_BANNER_TEXT, id)}
        ref={componentRef}
        className={cx(styles.text, "monday-style-alert-banner-text", {
          [styles.marginLeft]: marginLeft,
          ["monday-style-alert-banner-text-margin-left"]: marginLeft
        })}
      >
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
