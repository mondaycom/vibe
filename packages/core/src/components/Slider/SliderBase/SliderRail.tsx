import React, { ForwardedRef, forwardRef, ReactElement } from "react";
import { NOOP } from "../../../utils/function-utils";
import { useSliderUi } from "../SliderContext";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { VibeComponent } from "../../../types";
import cx from "classnames";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import styles from "./SliderRail.module.scss";
import { SliderSize } from "../Slider.types";

export interface SliderRailProps extends VibeComponentProps {
  /**
   * Callback fired when the rail is clicked.
   */
  onClick?: (event: React.MouseEvent) => void;
  /**
   * The child elements inside the slider rail.
   */
  children?: ReactElement | ReactElement[];
  /**
   * The size of the slider rail.
   */
  size: SliderSize;
}

const SliderRail: VibeComponent<SliderRailProps, unknown> = forwardRef<unknown, SliderRailProps>(
  ({ className, children, onClick = NOOP, size }: SliderRailProps, ref: ForwardedRef<HTMLDivElement>) => {
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
