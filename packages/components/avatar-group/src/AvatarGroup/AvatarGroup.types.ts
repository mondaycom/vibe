import { type CounterColor } from "@vibe/counter";

export type AvatarGroupCounterVisualProps = {
  color?: Extract<CounterColor, "light" | "dark">;
  count?: number;
  prefix?: string;
  maxDigits?: number;
  ariaLabelItemsName?: string;
  noAnimation?: boolean;
  tabIndex?: number;
  /**
   * Relevant only for when AvatarGroup contains a clickable avatar
   */
  dialogContainerSelector?: string;
};
