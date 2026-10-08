const SCHEME_REGEX = /^([a-z][a-z0-9+.-]*):/i;
// eslint-disable-next-line no-control-regex
const IGNORED_CHARS_REGEX = /[\u0000-\u0020\u007f-\u009f\u00ad\u200b-\u200d\u2028\u2029\ufeff]/g;
const ALLOWED_SCHEMES = ["http", "https"];
const ALLOWED_DATA_PREFIX = "data:image/svg+xml";

export function sanitizeSvgSrc(src: string): string | null {
  const normalized = src.replace(IGNORED_CHARS_REGEX, "");
  if (!normalized) return null;

  const scheme = SCHEME_REGEX.exec(normalized)?.[1].toLowerCase();
  if (!scheme) return src.trim();

  if (ALLOWED_SCHEMES.includes(scheme)) return src.trim();
  if (normalized.toLowerCase().startsWith(ALLOWED_DATA_PREFIX)) return src.trim();

  return null;
}
