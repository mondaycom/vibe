export type RgbaColor = {
  r: number;
  g: number;
  b: number;
  a: number;
};

export function parseColor(value: string): RgbaColor | null {
  const rgbaMatch = value.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);
  if (rgbaMatch) {
    return {
      r: Number(rgbaMatch[1]),
      g: Number(rgbaMatch[2]),
      b: Number(rgbaMatch[3]),
      a: rgbaMatch[4] !== undefined ? Number(rgbaMatch[4]) : 1,
    };
  }

  const hexMatch = value.match(/^#([0-9a-f]{6})$/i);
  if (hexMatch) {
    const hex = hexMatch[1];
    return {
      r: Number.parseInt(hex.slice(0, 2), 16),
      g: Number.parseInt(hex.slice(2, 4), 16),
      b: Number.parseInt(hex.slice(4, 6), 16),
      a: 1,
    };
  }

  return null;
}

export function formatRgba(color: RgbaColor): string {
  const alpha = Number.isInteger(color.a) ? color.a : Math.round(color.a * 1000) / 1000;
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
}

export function toHex(color: Pick<RgbaColor, "r" | "g" | "b">): string {
  return `#${[color.r, color.g, color.b]
    .map((channel) => channel.toString(16).padStart(2, "0"))
    .join("")}`;
}

export function readComputedRgba(tokenName: string, fallback: RgbaColor): RgbaColor {
  const computed = getComputedStyle(document.body).getPropertyValue(`--${tokenName}`).trim();
  return parseColor(computed) ?? fallback;
}
