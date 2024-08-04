import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import cx from "classnames";
import React, { FC, useRef } from "react";
import Tooltip from "../../Tooltip/Tooltip";
import useIsOverflowing from "../../../hooks/useIsOverflowing/useIsOverflowing";
import VibeComponentProps from "../../../types/VibeComponentProps";

import styles from "./AlertBannerText.module.scss";

export interface AlertBannerTextProps extends VibeComponentProps {
  text: string;
  marginLeft?: boolean;
}

const AlertBannerText: FC<AlertBannerTextProps> = ({ text, marginLeft = false, id, "data-testid": dataTestId }) => {
  const componentRef = useRef(null);
  const classNames = cx(styles.bannerText, {
    [styles.marginLeft]: marginLeft
  });
  const isOverflowing = useIsOverflowing({ ref: componentRef });

  return (
    <Tooltip position="bottom" content={isOverflowing && text} showTrigger="mouseenter" hideTrigger="mouseleave">
      <div
        ref={componentRef}
        className={classNames}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.ALERT_BANNER_TEXT, id)}
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
