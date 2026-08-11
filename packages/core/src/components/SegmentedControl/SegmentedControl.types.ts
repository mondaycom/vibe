import { type SubIcon } from "@vibe/icon";
import { type VibeComponentProps } from "../../types";

export type SegmentedControlSize = "xs" | "small" | "medium" | "large";

export type SegmentedControlOption = {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: SubIcon;
  tooltip?: string;
};

export interface SegmentedControlProps extends VibeComponentProps {
  /**
   * The list of segment options.
   */
  options: SegmentedControlOption[];
  /**
   * The currently selected segment value (controlled).
   */
  value?: string;
  /**
   * The default selected segment value (uncontrolled).
   */
  defaultValue?: string;
  /**
   * Callback fired when the selected segment changes.
   */
  onChange?: (value: string) => void;
  /**
   * The size of the segmented control.
   */
  size?: SegmentedControlSize;
  /**
   * If true, disables the entire segmented control.
   */
  disabled?: boolean;
  /**
   * If true, makes the segmented control take the full width of its container.
   */
  fullWidth?: boolean;
  /**
   * Accessible label for the radiogroup.
   */
  ariaLabel?: string;
  /**
   * ID of the element that labels the radiogroup.
   */
  "aria-labelledby"?: string;
}
