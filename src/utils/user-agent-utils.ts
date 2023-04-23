export function isFirefox() {
  if (typeof window === "undefined") return false;
  return !!/Firefox\/([0-9.]+)(?:\s|$)/.exec(window.navigator.userAgent);
}

export function isIE11() {
  if (typeof window === "undefined") return false;
  return !!window.MSInputMethodContext && !!document.documentMode;
}
