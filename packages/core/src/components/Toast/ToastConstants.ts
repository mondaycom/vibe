import Info from "../Icon/Icons/components/Info";
import Check from "../Icon/Icons/components/Check";
import Alert from "../Icon/Icons/components/Alert";
import Warning from "../Icon/Icons/components/Warning";

/**
 * @deprecated
 */
export enum ToastType {
  NORMAL = "normal",
  POSITIVE = "positive",
  NEGATIVE = "negative",
  WARNING = "warning",
  DARK = "dark"
}

/**
 * @deprecated
 */
export enum ToastActionType {
  LINK = "link",
  BUTTON = "button"
}

export const defaultIconMap = {
  [ToastType.NORMAL]: Info,
  [ToastType.POSITIVE]: Check,
  [ToastType.NEGATIVE]: Alert,
  [ToastType.WARNING]: Warning,
  [ToastType.DARK]: Info
};

/**
 * @deprecated
 */
export type ToastAction = {
  type: ToastActionType;
  content?: string;
  text?: string;
  href?: string;
};
