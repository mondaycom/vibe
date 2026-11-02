export interface FontDefinition {
  /** CSS font-family name (also used as the unique identifier). */
  value: string;
  /** UI label shown in the picker. */
  label: string;
  /** Google Fonts URL family parameter, e.g. "DM+Sans:wght@400;500;600;700". */
  googleFontParam: string;
}

/**
 * Curated list of fonts available in the ThemeSwitcher Font section.
 * To add a new font, append an entry here.
 *
 * Custom fonts not in this list can still be applied via the free-text input
 * in the ThemeSwitcher — they'll be loaded on demand from Google Fonts.
 */
export const CURATED_FONTS: FontDefinition[] = [
  {
    value: "Poppins",
    label: "Poppins",
    googleFontParam: "Poppins:wght@400;500;600;700",
  },
  {
    value: "Figtree",
    label: "Figtree",
    googleFontParam: "Figtree:wght@400;500;600;700",
  },
  {
    value: "DM Sans",
    label: "DM Sans",
    googleFontParam: "DM+Sans:wght@400;500;600;700",
  },
  {
    value: "Hanken Grotesk",
    label: "Hanken Grotesk",
    googleFontParam: "Hanken+Grotesk:wght@400;500;600;700",
  },
  {
    value: "Geist",
    label: "Geist",
    googleFontParam: "Geist:wght@400;500;600;700",
  },
];

/** Default for the Heading subsection. */
export const DEFAULT_HEADING_FONT = "Poppins";
/** Default for the Text subsection. */
export const DEFAULT_TEXT_FONT = "Figtree";

/**
 * Fonts that cannot be removed from the picker via the trash icon.
 * Defaults + a safety net so the user can always fall back to a known-good choice.
 */
export const PROTECTED_FONTS = new Set<string>([
  "Poppins",
  "Figtree",
  "DM Sans",
]);

/**
 * Verify a font family exists on Google Fonts by hitting the css2 endpoint.
 * Returns true if the response is OK (font exists), false otherwise (network
 * error, 400 unknown family, etc.). Used to validate custom user input before
 * applying or adding it to the list.
 */
export async function verifyGoogleFont(family: string): Promise<boolean> {
  const param = `${family.replace(/\s+/g, "+")}:wght@400`;
  try {
    const res = await fetch(
      `https://fonts.googleapis.com/css2?family=${param}`,
    );
    return res.ok;
  } catch {
    return false;
  }
}
