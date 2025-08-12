export function isFirefox() {
  return !!/Firefox\/([0-9.]+)(?:\s|$)/.exec(window.navigator.userAgent);
}

export function isIE11() {
  return !!window.MSInputMethodContext && !!document.documentMode;
}
