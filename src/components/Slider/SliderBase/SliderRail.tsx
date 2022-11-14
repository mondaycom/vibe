import React, { ForwardedRef, forwardRef, ReactElement } from "react";
import { NOOP } from "../../../utils/function-utils";
import { useSliderUi } from "../SliderContext";
import { bem } from "../SliderHelpers";
import VibeComponentProps from "../../../types/VibeComponentProps";

interface SliderRailProps extends VibeComponentProps {
  /**
   * Consumer/Custom/Extra `class names` to be added to the Component's-Root-Node
   */
  className?: string;
  /**
   * onClick callback function
   */
  onClick?: (event: React.MouseEvent) => void;
  children?: ReactElement | ReactElement[];
}

const SliderRail: React.ForwardRefExoticComponent<SliderRailProps & React.RefAttributes<unknown>> = forwardRef<
  unknown,
  SliderRailProps
>(({ className, children, onClick = NOOP }, ref: ForwardedRef<HTMLDivElement>) => {
  const { shapeTestId } = useSliderUi();
  function handleClick(e: React.MouseEvent) {
    onClick(e);
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div data-testid={shapeTestId("rail")} className={bem("rail", "", className)} onClick={handleClick} ref={ref}>
      {children}
    </div>
  );
});

export default SliderRail;
