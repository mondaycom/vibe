import React, { FC } from "react";
import { bem } from "../SliderHelpers";
import VibeComponentProps from "../../../types/VibeComponentProps";

export interface SliderTrackProps extends VibeComponentProps {
  /**
   * Consumer/Custom/Extra `class names` to be added to the Component's-Root-Node
   */
  className?: string;
}

const SliderTrack: FC<SliderTrackProps> = React.memo(({ className }) => {
  return <div className={bem("track", "", className)} />;
});

export default SliderTrack;
