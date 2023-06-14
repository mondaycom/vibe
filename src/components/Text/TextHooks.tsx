import { TextSize, TextWeight } from "./TextConstants";

export function useGlobalTextClass(size: TextSize, weight: TextWeight) {
  return `vibe-text${size == TextSize.MEDIUM ? 1 : 2}-${weight}`;
}
