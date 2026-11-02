import { useEffect, useRef, useState } from "react";
import { IconButton } from "@vibe/core";
import { ColorPicker } from "@mondaydotcomorg/icons";
import styles from "./ThemeSwitcher.module.scss";
import {
  CURATED_FONTS,
  PROTECTED_FONTS,
  verifyGoogleFont,
} from "./fontsConfig";

interface ThemeSwitcherProps {
  activeTheme: string;
  onThemeChange: (theme: string) => void;
  activeMode: string;
  onModeChange: (mode: string) => void;
  activeHeadingFont: string;
  onHeadingFontChange: (font: string) => void;
  activeTextFont: string;
  onTextFontChange: (font: string) => void;
  customFonts: string[];
  removedFonts: string[];
  onAddCustomFont: (font: string) => void;
  onRemoveFont: (font: string) => void;
  onError: (message: string) => void;
}

interface FontSubsectionProps {
  title: string;
  activeFont: string;
  onFontChange: (font: string) => void;
  customFonts: string[];
  removedFonts: string[];
  onAddCustomFont: (font: string) => void;
  onRemoveFont: (font: string) => void;
  onError: (message: string) => void;
}

function TrashIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
      aria-hidden
    >
      <path d="M3 4h10M6.5 4V2.5h3V4M5 4l.5 8.5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1L11 4M7 6.5v5M9 6.5v5" />
    </svg>
  );
}

function FontSubsection({
  title,
  activeFont,
  onFontChange,
  customFonts,
  removedFonts,
  onAddCustomFont,
  onRemoveFont,
  onError,
}: FontSubsectionProps) {
  const [expanded, setExpanded] = useState(false);
  const [customFont, setCustomFont] = useState("");
  const [validating, setValidating] = useState(false);

  const removedSet = new Set(removedFonts);
  const allFonts = [
    ...CURATED_FONTS.filter((f) => !removedSet.has(f.value)),
    ...customFonts.map((f) => ({
      value: f,
      label: f,
      googleFontParam: undefined as string | undefined,
    })),
  ];

  async function handleApplyCustom() {
    const trimmed = customFont.trim();
    if (!trimmed) return;
    setValidating(true);
    const ok = await verifyGoogleFont(trimmed);
    setValidating(false);
    if (!ok) {
      onError(`Font "${trimmed}" not found on Google Fonts`);
      return;
    }
    onFontChange(trimmed);
  }

  async function handleAddCustom() {
    const trimmed = customFont.trim();
    if (!trimmed) return;
    setValidating(true);
    const ok = await verifyGoogleFont(trimmed);
    setValidating(false);
    if (!ok) {
      onError(`Font "${trimmed}" not found on Google Fonts`);
      return;
    }
    onAddCustomFont(trimmed);
    setCustomFont("");
  }

  return (
    <div className={styles.fontSubsection}>
      <button
        type="button"
        className={styles.fontSubsectionHeader}
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        <span
          className={`${styles.fontSubsectionChevron} ${expanded ? styles.chevronExpanded : ""}`}
          aria-hidden
        >
          <svg
            viewBox="0 0 16 16"
            width="12"
            height="12"
            fill="currentColor"
            focusable="false"
          >
            <path d="M6 4l4 4-4 4V4Z" />
          </svg>
        </span>
        <span
          className={styles.fontSubsectionTitle}
          style={{ color: "var(--primary-text-color)" }}
        >
          {title}
        </span>
        <span
          className={styles.fontSubsectionValue}
          style={{ color: "var(--secondary-text-color)" }}
        >
          {activeFont}
        </span>
      </button>

      {expanded && (
        <div className={styles.fontSubsectionContent}>
          {allFonts.map((font) => {
            const isActive = activeFont === font.value;
            const removable = !PROTECTED_FONTS.has(font.value);
            return (
              <div
                key={font.value}
                className={`${styles.fontRowWrapper} ${isActive ? styles.active : ""}`}
              >
                <button
                  type="button"
                  className={styles.fontRow}
                  onClick={() => onFontChange(font.value)}
                  aria-pressed={isActive}
                >
                  <span
                    className={styles.fontLabel}
                    style={{
                      color: "var(--primary-text-color)",
                      fontFamily: `"${font.value}", sans-serif`,
                    }}
                  >
                    {font.label}
                  </span>
                  {isActive && (
                    <span
                      className={styles.activeCheck}
                      style={{ color: "var(--primary-color)" }}
                      aria-hidden
                    >
                      ✓
                    </span>
                  )}
                </button>
                {removable && (
                  <button
                    type="button"
                    className={styles.removeFontButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveFont(font.value);
                    }}
                    aria-label={`Remove ${font.value}`}
                    title={`Remove ${font.value}`}
                  >
                    <TrashIcon />
                  </button>
                )}
              </div>
            );
          })}

          <div className={styles.customFontRow}>
            <input
              type="text"
              className={styles.customFontInput}
              placeholder="Custom Google Font"
              value={customFont}
              onChange={(e) => setCustomFont(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleApplyCustom();
              }}
              aria-label={`Custom Google Font name for ${title}`}
            />
            <button
              type="button"
              className={styles.customFontApply}
              onClick={handleApplyCustom}
              disabled={!customFont.trim() || validating}
            >
              {validating ? "..." : "Apply"}
            </button>
            <button
              type="button"
              className={styles.customFontAdd}
              onClick={handleAddCustom}
              disabled={!customFont.trim() || validating}
              title="Add to font list"
            >
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

interface ThemeDefinition {
  value: string;
  label: string;
  colors: {
    primary: string;
    surface: string;
    ui: string;
  };
}

const THEMES: ThemeDefinition[] = [
  {
    value: "",
    label: "Default",
    colors: { primary: "#0073ea", surface: "#f0f2f8", ui: "#e7e9ef" },
  },
  {
    value: "slick",
    label: "Slick",
    colors: { primary: "#1d1d1f", surface: "#f2f3f5", ui: "#e8e8ed" },
  },
  {
    value: "glaze",
    label: "Glaze",
    colors: { primary: "#404643", surface: "#f4f5f3", ui: "#f2f3f2" },
  },
  {
    value: "glaze-neue",
    label: "Glaze Neue",
    colors: { primary: "#2d5bff", surface: "#f4f3f1", ui: "#f1f0ee" },
  },
  {
    value: "warmth",
    label: "Warmth",
    colors: { primary: "#2d5bff", surface: "#f9f7f7", ui: "#f5f1ef" },
  },
  {
    value: "editorial-amber",
    label: "Amber",
    colors: { primary: "#b45309", surface: "#fdf8f0", ui: "#f5ead8" },
  },
  {
    value: "editorial-terracotta",
    label: "Terracotta",
    colors: { primary: "#c2410c", surface: "#fdf4ef", ui: "#f5e4d8" },
  },
  {
    value: "editorial-espresso",
    label: "Espresso",
    colors: { primary: "#3d2a1e", surface: "#f7f3ef", ui: "#ede4da" },
  },
];

const MODES = [
  { value: "", label: "Light" },
  { value: "dark-app-theme", label: "Dark" },
  { value: "black-app-theme", label: "Black" },
];

function SwatchCard({
  theme,
  isActive,
  onClick,
}: {
  theme: ThemeDefinition;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`${styles.swatchRow} ${isActive ? styles.active : ""}`}
      onClick={onClick}
      aria-pressed={isActive}
      type="button"
    >
      {/* Hardcoded color previews — CSS vars can't be scoped to a child element */}
      <div className={styles.swatchColors}>
        <div
          className={styles.swatch}
          style={{ background: theme.colors.primary }}
        />
        <div
          className={styles.swatch}
          style={{ background: theme.colors.surface }}
        />
        <div
          className={styles.swatchBordered}
          style={{ background: theme.colors.ui }}
        />
      </div>

      {/* Label */}
      <span
        className={styles.swatchLabel}
        style={{ color: "var(--primary-text-color)" }}
      >
        {theme.label}
      </span>

      {/* Active indicator */}
      {isActive && (
        <span
          className={styles.activeCheck}
          style={{ color: "var(--primary-color)" }}
          aria-hidden
        >
          ✓
        </span>
      )}
    </button>
  );
}

export function ThemeSwitcher({
  activeTheme,
  onThemeChange,
  activeMode,
  onModeChange,
  activeHeadingFont,
  onHeadingFontChange,
  activeTextFont,
  onTextFontChange,
  customFonts,
  removedFonts,
  onAddCustomFont,
  onRemoveFont,
  onError,
}: ThemeSwitcherProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  function handleThemeChange(value: string) {
    onThemeChange(value);
    setOpen(false);
  }

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Popover panel — renders above the button */}
      {open && (
        <div
          className={styles.popover}
          style={{
            minWidth: "220px",
            background: "var(--primary-background-color, #ffffff)",
            borderColor: "var(--ui-border-color, #c3c6d4)",
          }}
        >
          <div className={styles.popoverInner}>
            <p
              className={styles.sectionLabel}
              style={{ color: "var(--secondary-text-color)" }}
            >
              Theme
            </p>
            {THEMES.map((theme) => (
              <SwatchCard
                key={theme.value}
                theme={theme}
                isActive={activeTheme === theme.value}
                onClick={() => handleThemeChange(theme.value)}
              />
            ))}

            {/* Divider */}
            <div
              style={{ borderColor: "var(--ui-border-color, #c3c6d4)" }}
              className={styles.divider}
            />

            {/* Font section */}
            <p
              className={styles.sectionLabel}
              style={{ color: "var(--secondary-text-color)" }}
            >
              Font
            </p>
            <FontSubsection
              title="Heading"
              activeFont={activeHeadingFont}
              onFontChange={onHeadingFontChange}
              customFonts={customFonts}
              removedFonts={removedFonts}
              onAddCustomFont={onAddCustomFont}
              onRemoveFont={onRemoveFont}
              onError={onError}
            />
            <FontSubsection
              title="Text"
              activeFont={activeTextFont}
              onFontChange={onTextFontChange}
              customFonts={customFonts}
              removedFonts={removedFonts}
              onAddCustomFont={onAddCustomFont}
              onRemoveFont={onRemoveFont}
              onError={onError}
            />

            {/* Divider */}
            <div
              style={{ borderColor: "var(--ui-border-color, #c3c6d4)" }}
              className={styles.divider}
            />

            {/* Mode section */}
            <p
              className={styles.sectionLabel}
              style={{ color: "var(--secondary-text-color)" }}
            >
              Mode
            </p>
            <div className={styles.modeButtons}>
              {MODES.map((mode) => {
                const isActive = activeMode === mode.value;
                const isDarkPill = mode.value === "dark-app-theme";
                const isBlackPill = mode.value === "black-app-theme";
                return (
                  <button
                    key={mode.value}
                    type="button"
                    onClick={() => onModeChange(mode.value)}
                    className={styles.modeButton}
                    style={
                      isActive
                        ? {
                            background:
                              isDarkPill || isBlackPill
                                ? isDarkPill
                                  ? "#1b1b20"
                                  : "#000000"
                                : "var(--primary-color)",
                            color: "#ffffff",
                          }
                        : {
                            background: "var(--ui-background-color)",
                            color: "var(--primary-text-color)",
                          }
                    }
                  >
                    {mode.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Trigger button with background */}
      <div
        className={styles.triggerWrap}
        style={{
          background: "var(--primary-background-color, #ffffff)",
          border: "1px solid var(--ui-border-color, #c3c6d4)",
        }}
      >
        <IconButton
          icon={ColorPicker}
          aria-label="Switch theme"
          kind="tertiary"
          size="medium"
          onClick={() => setOpen((v) => !v)}
        />
      </div>
    </div>
  );
}
