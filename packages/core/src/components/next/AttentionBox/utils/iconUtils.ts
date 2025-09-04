import type { SubIcon } from "../../../../types";
import type { AttentionBoxType } from "../AttentionBox.types";
import { ATTENTION_BOX_DEFAULT_ICONS } from "../consts/icons";

export const resolveAttentionBoxIcon = (icon?: SubIcon | false, type?: AttentionBoxType): SubIcon | null => {
  if (icon === false) return null;
  return icon || ATTENTION_BOX_DEFAULT_ICONS[type || "primary"];
};
