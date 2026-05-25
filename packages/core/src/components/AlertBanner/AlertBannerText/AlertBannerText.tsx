import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import cx from "classnames";
import React, { type FC, useRef } from "react";
import { Tooltip } from "@vibe/tooltip";
import { useIsOverflowing } from "@vibe/hooks";
import type VibeComponentProps from "../../../types/VibeComponentProps";

import styles from "./AlertBannerText.module.scss";

export interface AlertBannerTextProps extends VibeComponentProps {
  /**
   * The text content displayed within the alert banner.
   */
  text: string;
  /**
   * If true, a left margin is applied to the alert banner text.
   */
  marginLeft?: boolean;
  /**
   * The aria-live attribute value for the alert banner text.
   */
  ariaLive?: "polite" | "assertive" | "off";
}

const AlertBannerText: FC<AlertBannerTextProps> = ({
  text,
  marginLeft = false,
  id,
  "data-testid": dataTestId,
  ariaLive
}) => {
  const componentRef = useRef(null);
  const classNames = cx(styles.bannerText, {
    [styles.marginLeft]: marginLeft
  });
  const isOverflowing = useIsOverflowing({ ref: componentRef });

  return (
    <Tooltip
      position="bottom"
      content={isOverflowing && text}
      showTrigger={["mouseenter"]}
      hideTrigger={["mouseleave"]}
    >
      <div
        ref={componentRef}
        className={classNames}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.ALERT_BANNER_TEXT, id)}
      >
        <span aria-live={ariaLive}>{text}</span>
      </div>
    </Tooltip>
  );
};

Object.assign(AlertBannerText, {
  isAlertBannerItem: true,
  isAlertBannerText: true
});

export default AlertBannerText;
