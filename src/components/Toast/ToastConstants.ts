import Info from "../Icon/Icons/components/Info";
import Check from "../Icon/Icons/components/Check";
import Alert from "../Icon/Icons/components/Alert";
import Warning from "../Icon/Icons/components/Warning";

export enum ToastType {
  NORMAL = "normal",
  POSITIVE = "positive",
  NEGATIVE = "negative",
  WARNING = "warning"
}

export enum ToastActionType {
  LINK = "link",
  BUTTON = "button"
}

export const defaultIconMap = {
  [ToastType.NORMAL]: Info,
  [ToastType.POSITIVE]: Check,
  [ToastType.NEGATIVE]: Alert,
  [ToastType.WARNING]: Warning
};

export type ToastAction = {
  type: ToastActionType;
  content?: string;
  text?: string;
  href?: string;
};
