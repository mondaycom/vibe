import DOMPurify from "dompurify";

export function sanitizeSvgContent(svg: string): string {
  if (!DOMPurify.isSupported) return "";

  return DOMPurify.sanitize(svg, {
    USE_PROFILES: { svg: true, svgFilters: true },
    FORBID_TAGS: ["script", "foreignObject"]
  });
}
