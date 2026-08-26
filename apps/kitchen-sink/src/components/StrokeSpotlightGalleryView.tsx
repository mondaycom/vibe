import { StrokeSpotlight, Text, type StrokeSpotlightPalette } from "@vibe/core";
import { ComponentGallery, type GalleryVariation } from "./ComponentGallery";

function ComposerPreview({
  palette,
  placeholder,
}: {
  palette: StrokeSpotlightPalette;
  placeholder: string;
}) {
  return (
    <div className="stroke-spotlight-gallery-shell">
      <StrokeSpotlight
        palette={palette}
        borderWidth={1.5}
        glowBlur={12}
        spread={40}
        proximity={64}
        radius={16}
      >
        <div className="stroke-spotlight-gallery-composer">
          <textarea
            className="stroke-spotlight-gallery-input"
            aria-label={`${palette} palette chat prompt`}
            placeholder={placeholder}
          />
          <Text type="text3" color="secondary" className="stroke-spotlight-gallery-hint">
            Move pointer near the box · click to pulse
          </Text>
        </div>
      </StrokeSpotlight>
    </div>
  );
}

const strokeSpotlightVariations: GalleryVariation[] = [
  {
    id: "default",
    label: "Palette — Default (Agents)",
    render: () => (
      <ComposerPreview palette="default" placeholder="Build your agent…" />
    ),
  },
  {
    id: "sidekick",
    label: "Palette — Sidekick",
    render: () => (
      <ComposerPreview palette="sidekick" placeholder="@ Mention boards and docs…" />
    ),
  },
  {
    id: "vibe",
    label: "Palette — Vibe",
    render: () => (
      <ComposerPreview palette="vibe" placeholder="Build your new application…" />
    ),
  },
];

export function StrokeSpotlightGalleryView() {
  return (
    <ComponentGallery
      title="Stroke Spotlight"
      description="Pointer-following chat stroke — move near each composer to travel the glow. Click for a pulse; focus the textarea to pause the traveling stroke."
      variations={strokeSpotlightVariations}
      className="stroke-spotlight-gallery"
    />
  );
}
