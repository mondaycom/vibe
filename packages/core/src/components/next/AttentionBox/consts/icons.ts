import { Info, Check, Alert, Warning, Favorite } from "@vibe/icons";
import { AttentionBoxType } from "../AttentionBox.types";
import { SubIcon } from "../../../../types";

export const ATTENTION_BOX_DEFAULT_ICONS: Record<AttentionBoxType, SubIcon> = {
  primary: Info,
  success: Check,
  danger: Alert,
  warning: Warning,
  dark: Favorite
};
