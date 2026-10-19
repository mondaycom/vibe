const FOREIGN_OBJECT_REGEX = /<foreignObject[\s>/]/i;

export const EMPTY_SVG = '<svg xmlns="http://www.w3.org/2000/svg"></svg>';

export function hasForeignObject(svg: string): boolean {
  return FOREIGN_OBJECT_REGEX.test(svg);
}

export function toImgSrc(safeSrc: string): string {
  if (safeSrc.includes("<svg")) {
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(safeSrc)}`;
  }
  return safeSrc;
}
