import Info from "../Icon/Icons/components/Info";
import Check from "../Icon/Icons/components/Check";
import Alert from "../Icon/Icons/components/Alert";

export enum ToastType {
  NORMAL = "normal",
  POSITIVE = "positive",
  NEGATIVE = "negative"
}

export enum ToastActionType {
  LINK = "link",
  BUTTON = "button"
}

export const defaultIconMap = {
  [ToastType.NORMAL]: Info,
  [ToastType.POSITIVE]: Check,
  [ToastType.NEGATIVE]: Alert
};

export type ToastAction = {
  type: ToastActionType;
  content?: string;
  text?: string;
  href?: string;
};
