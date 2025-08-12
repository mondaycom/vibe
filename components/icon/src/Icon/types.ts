import { CSSProperties, Ref } from "react";

export interface IconSubComponentProps {
  /**
   * Ref for the icon component.
   */
  ref?: Ref<HTMLElement>;
  /**
   * The ID of the icon component.
   */
  id?: string;
  /**
   * The size of the icon.
   */
  size?: string | number;
  /**
   * Class name applied to the icon.
   */
  className?: string;
  /**
   * Inline styles applied to the icon.
   */
  style?: CSSProperties;
  /**
   * Test ID for testing purposes.
   */
  "data-testid"?: string;
}

export type SubIcon = string | React.FC<IconSubComponentProps> | null;
export type IconType = "svg" | "font" | "src";
