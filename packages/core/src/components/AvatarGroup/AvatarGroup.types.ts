import { CounterColor } from "../Counter/Counter.types";

export type AvatarGroupCounterVisualProps = {
  color?: Extract<CounterColor, "light" | "dark">;
  count?: number;
  prefix?: string;
  maxDigits?: number;
  ariaLabelItemsName?: string;
  noAnimation?: boolean;
};
