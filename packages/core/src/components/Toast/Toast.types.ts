export type ToastType = "normal" | "positive" | "negative" | "warning" | "dark";

export type ToastActionType = "link" | "button";

export type ToastAction = {
  type: ToastActionType;
  content?: string;
  text?: string;
  href?: string;
  [key: string]: any;
};
