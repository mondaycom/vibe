import React, { useMemo } from "react";
import Tooltip from "../Tooltip/Tooltip";
import { AvatarGroupCounterTooltip } from "components/AvatarGroup/AvatarGroupCounterTooltip";

export const AvatarGroupCounterTooltipContainer = ({
  children,
  avatars,
  counterTooltipProps,
  max,
  type,
  className
}) => {
  const counterTooltipComponent = useMemo(() => {
    return AvatarGroupCounterTooltip({ children: avatars, max, type, className });
  }, [avatars, className, max, type]);

  if (!counterTooltipComponent && !counterTooltipProps) {
    return <>{children}</>;
  }

  if (counterTooltipProps) {
    return <Tooltip {...counterTooltipProps}>{children}</Tooltip>;
  }

  return (
    // TODO disable hide on timer in Tooltip
    <Tooltip content={counterTooltipComponent} hideDelay={10000000}>
      {children}
    </Tooltip>
  );
};
