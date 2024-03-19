import React, { ForwardedRef, forwardRef, ReactElement } from "react";
import { NOOP } from "../../../utils/function-utils";
import { useSliderUi } from "../SliderContext";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { VibeComponent } from "../../../types";
import { SliderSize } from "../SliderConstants";
import cx from "classnames";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import styles from "./SliderRail.module.scss";

export interface SliderRailProps extends VibeComponentProps {
  /**
   * Consumer/Custom/Extra `class names` to be added to the Component's-Root-Node
   */
  className?: string;
  /**
   * onClick callback function
   */
  onClick?: (event: React.MouseEvent) => void;
  children?: ReactElement | ReactElement[];
  size: SliderSize;
}

const SliderRail: VibeComponent<SliderRailProps, unknown> = forwardRef<unknown, SliderRailProps>(
  ({ className, children, onClick = NOOP, size }, ref: ForwardedRef<HTMLDivElement>) => {
    const { shapeTestId } = useSliderUi();
    function handleClick(e: React.MouseEvent) {
      onClick(e);
    }

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div
        data-testid={shapeTestId("rail")}
        className={cx(styles.rail, getStyle(styles, size), className)}
        onClick={handleClick}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

export default SliderRail;
