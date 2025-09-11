import { Info, Check, Alert, Warning, Favorite } from "@vibe/icons";
import type { AttentionBoxType } from "../AttentionBox.types";
import type { SubIcon } from "../../../../types";

export const ATTENTION_BOX_DEFAULT_ICONS: Record<AttentionBoxType, SubIcon> = {
  primary: Info,
  positive: Check,
  negative: Alert,
  warning: Warning,
  neutral: Favorite
};
