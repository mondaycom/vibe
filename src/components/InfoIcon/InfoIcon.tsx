import React, { forwardRef, useRef, ReactNode } from "react";
import { useMergeRefs } from "../../hooks";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import Tooltip from "../Tooltip/Tooltip";
import Icon from "../Icon/Icon";
import { Info } from "../Icon/Icons";

export interface InfoIconProps extends VibeComponentProps {
  children: ReactNode;
}

const InfoIcon: VibeComponent<InfoIconProps, HTMLElement> = forwardRef(
  ({ children, className, id, "data-testid": dataTestId }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    return (
      <span
        ref={mergedRef}
        className={className}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.INFO_ICON, id)}
      >
        <Tooltip content={children}>
          <Icon icon={Info} clickable={false} />
        </Tooltip>
      </span>
    );
  }
);

export default InfoIcon;
