import { MutableRefObject } from "react";
import { TextSize, TextWeight } from "./TextConstants";

export function useGlobalTextClass(size: TextSize, weight: TextWeight) {
  return `vibe-text-${size}-${weight}`;
}
