import { StrokeSpotlight, type StrokeSpotlightPalette } from "@vibe/core";
import type { Section } from "../section";

const controls: Section["controls"] = [
  {
    key: "palette",
    label: "Palette",
    type: "select",
    options: [
      { value: "default", label: "Default (Agents)" },
      { value: "sidekick", label: "Sidekick" },
      { value: "vibe", label: "Vibe" },
    ],
  },
  {
    key: "borderWidth",
    label: "Border width",
    type: "select",
    options: [
      { value: "1.5", label: "1.5" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
    ],
  },
];

const defaultState = {
  palette: "default",
  borderWidth: "1.5",
};

const Demo: Section["Demo"] = ({ state }) => (
  <div style={{ width: "100%", maxWidth: 420 }}>
    <StrokeSpotlight
      palette={state.palette as StrokeSpotlightPalette}
      borderWidth={Number(state.borderWidth)}
      glowBlur={12}
      spread={40}
      proximity={64}
      radius={16}
    >
      <div
        style={{
          borderRadius: 16,
          background: "var(--primary-background-color)",
          boxShadow:
            "rgba(50, 50, 93, 0.06) 0 4px 10px -2px, rgba(0, 0, 0, 0.08) 0 2px 4px -1px",
          overflow: "hidden",
        }}
      >
        <textarea
          aria-label="Chat prompt"
          placeholder="Move your pointer around this box…"
          style={{
            display: "block",
            width: "100%",
            minHeight: 88,
            padding: "20px 20px 8px",
            border: "none",
            outline: "none",
            resize: "none",
            background: "transparent",
            fontFamily: "inherit",
            fontSize: 14,
            lineHeight: 1.5,
            color: "var(--primary-text-color)",
            boxSizing: "border-box",
          }}
        />
        <div style={{ padding: "8px 12px 12px", fontSize: 12, color: "var(--secondary-text-color)" }}>
          Click for pulse · focus to pause traveling stroke
        </div>
      </div>
    </StrokeSpotlight>
  </div>
);

const section: Section = {
  id: "stroke-spotlight",
  title: "Stroke Spotlight",
  defaultState,
  controls,
  Demo,
};

export default section;
