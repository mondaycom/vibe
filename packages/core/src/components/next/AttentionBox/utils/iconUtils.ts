import { SubIcon } from "../../../../types";
import { AttentionBoxType } from "../AttentionBox.types";
import { ATTENTION_BOX_DEFAULT_ICONS } from "../consts/icons";

export const resolveAttentionBoxIcon = (
  icon?: SubIcon,
  hideIcon?: boolean,
  type?: AttentionBoxType
): SubIcon | null => {
  if (hideIcon) return null;
  return icon || ATTENTION_BOX_DEFAULT_ICONS[type || "primary"];
};
