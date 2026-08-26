import { Text } from "@vibe/core";
import { useEffect, useId, useRef, useState } from "react";
import { useKitchenSink } from "../context/KitchenSinkContext";
import type { ColorTokenDef } from "../lib/colorTokenDefinitions";
import { formatRgba, parseColor, readComputedRgba, toHex } from "../lib/colorUtils";

type ThemeColorSwatchProps = {
  token: ColorTokenDef;
  value: string;
  isOverridden: boolean;
  onChange: (value: string) => void;
  onClear: () => void;
};

const ALPHA_TOKEN_DEFAULTS: Record<string, { r: number; g: number; b: number; a: number }> = {
  "disabled-text-color": { r: 50, g: 51, b: 56, a: 0.38 },
  "primary-background-hover-color": { r: 103, g: 104, b: 121, a: 0.1 },
};

function readComputedTokenValue(tokenName: string): string {
  return getComputedStyle(document.body).getPropertyValue(`--${tokenName}`).trim();
}

function toPickerHex(value: string): string {
  const parsed = parseColor(value);
  return parsed ? toHex(parsed) : "#0073ea";
}

function resolveDisplayColor(tokenName: string, override: string): string {
  if (override) return override;
  const computed = readComputedTokenValue(tokenName);
  if (!computed) return "transparent";
  if (computed.startsWith("#") || computed.startsWith("rgb")) return computed;
  return `var(--${tokenName})`;
}

export function ThemeColorSwatch({
  token,
  value,
  isOverridden,
  onChange,
  onClear,
}: ThemeColorSwatchProps) {
  const { faceliftTheme, systemTheme } = useKitchenSink();
  const [editing, setEditing] = useState(false);
  const [pickerValue, setPickerValue] = useState("#0073ea");
  const [opacity, setOpacity] = useState(1);
  const [displayColor, setDisplayColor] = useState(() => resolveDisplayColor(token.name, value));
  const colorInputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();

  useEffect(() => {
    setDisplayColor(resolveDisplayColor(token.name, value));

    if (token.supportsAlpha) {
      const fallback = ALPHA_TOKEN_DEFAULTS[token.name] ?? { r: 0, g: 0, b: 0, a: 1 };
      const parsed = value ? parseColor(value) : readComputedRgba(token.name, fallback);
      if (parsed) {
        setPickerValue(toHex(parsed));
        setOpacity(parsed.a);
      }
      return;
    }

    setPickerValue(toPickerHex(value || readComputedTokenValue(token.name)));
  }, [token.name, token.supportsAlpha, value, faceliftTheme, systemTheme]);

  const openEditor = () => {
    if (token.supportsAlpha) {
      setEditing((current) => !current);
      return;
    }
    colorInputRef.current?.click();
  };

  const applyAlphaColor = (hex: string, nextOpacity: number) => {
    const parsed = parseColor(hex);
    if (!parsed) return;
    onChange(formatRgba({ ...parsed, a: nextOpacity }));
  };

  return (
    <div className={`theme-color-swatch${isOverridden ? " is-overridden" : ""}`}>
      <button
        type="button"
        className={`theme-color-swatch-preview${token.showBorder ? " has-border" : ""}`}
        style={{ backgroundColor: displayColor }}
        onClick={openEditor}
        aria-label={`Edit ${token.name}`}
        aria-expanded={token.supportsAlpha ? editing : undefined}
      />

      {!token.supportsAlpha && (
        <input
          ref={colorInputRef}
          id={inputId}
          type="color"
          className="theme-color-swatch-picker"
          value={pickerValue}
          onChange={(event) => onChange(event.target.value)}
          tabIndex={-1}
          aria-hidden
        />
      )}

      <div className="theme-color-swatch-meta">
        <Text type="text2" weight="medium">
          {token.name}
        </Text>
        <Text type="text2" color="secondary">
          {token.description}
        </Text>
      </div>

      {token.supportsAlpha && editing && (
        <div className="theme-color-swatch-editor">
          <label className="theme-color-alpha-field">
            <Text type="text2">Color</Text>
            <input
              type="color"
              className="theme-color-alpha-picker"
              value={pickerValue}
              onChange={(event) => {
                setPickerValue(event.target.value);
                applyAlphaColor(event.target.value, opacity);
              }}
            />
          </label>
          <label className="theme-color-alpha-field">
            <Text type="text2">Opacity</Text>
            <div className="theme-color-alpha-slider-row">
              <input
                type="range"
                min="0"
                max="100"
                value={Math.round(opacity * 100)}
                className="theme-color-alpha-slider"
                onChange={(event) => {
                  const nextOpacity = Number(event.target.value) / 100;
                  setOpacity(nextOpacity);
                  applyAlphaColor(pickerValue, nextOpacity);
                }}
              />
              <Text type="text2">{Math.round(opacity * 100)}%</Text>
            </div>
          </label>
        </div>
      )}

      {isOverridden && (
        <button type="button" className="theme-color-swatch-reset" onClick={onClear}>
          Reset
        </button>
      )}
    </div>
  );
}
