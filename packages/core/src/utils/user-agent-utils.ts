export function isFirefox() {
  return !!/Firefox\/([0-9.]+)(?:\s|$)/.exec(window.navigator.userAgent);
}

export function isSafari() {
  // NOTE - Chrome userAgent contains Safari, so we need to exclude it (see: https://stackoverflow.com/a/12799309)
  return !!/^(?!.*Chrome).*Safari\/([0-9.]+)(?:\s|$)/.exec(window.navigator.userAgent);
}

export function isIE11() {
  return !!window.MSInputMethodContext && !!document.documentMode;
}
