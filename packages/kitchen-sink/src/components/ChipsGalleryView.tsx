import { Chips } from "@vibe/core";
import { Bolt, Email } from "@vibe/icons";
import type { ReactNode } from "react";

type ChipColor =
  | "primary"
  | "positive"
  | "negative"
  | "warning"
  | "neutral"
  | "done-green"
  | "bright-blue"
  | "purple"
  | "stuck-red"
  | "working_orange";

const THEME_COLORS: { value: ChipColor; label: string }[] = [
  { value: "primary", label: "Primary" },
  { value: "positive", label: "Positive" },
  { value: "negative", label: "Negative" },
  { value: "warning", label: "Warning" },
  { value: "neutral", label: "Neutral" },
];

const PALETTE_COLORS: { value: ChipColor; label: string }[] = [
  { value: "done-green", label: "Done green" },
  { value: "bright-blue", label: "Bright blue" },
  { value: "purple", label: "Purple" },
  { value: "stuck-red", label: "Stuck red" },
  { value: "working_orange", label: "Working orange" },
];

function VariantSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="chips-gallery-section">
      <h2 className="chips-gallery-section-title">{title}</h2>
      <div className="chips-gallery-row">{children}</div>
    </section>
  );
}

export function ChipsGalleryView() {
  return (
    <div className="component-gallery chips-gallery">
      <header className="component-gallery-header">
        <h1 className="component-gallery-title">Chips</h1>
        <p className="component-gallery-description">
          Variants, colors, icons, borders, and interaction states.
        </p>
      </header>

      <VariantSection title="Read only">
        {THEME_COLORS.map(({ value, label }) => (
          <Chips
            key={`ro-${value}`}
            label={label}
            color={value}
            readOnly
            className="chips-readonly"
          />
        ))}
        <Chips label="With icon" color="primary" leftIcon={Email} readOnly className="chips-readonly" />
      </VariantSection>

      <VariantSection title="Filterable (primary)">
        <Chips
          label="Default"
          color="primary"
          readOnly
          className="chips-filterable"
          onClick={() => {}}
        />
        <Chips
          label="Hover me"
          color="primary"
          readOnly
          className="chips-filterable"
          onClick={() => {}}
        />
        <Chips
          label="Pressed"
          color="primary"
          readOnly
          className="chips-filterable chips-filterable--pressed"
          onClick={() => {}}
        />
        <Chips
          label="With icon"
          color="primary"
          leftIcon={Bolt}
          readOnly
          className="chips-filterable"
          onClick={() => {}}
        />
        <Chips
          label="Disabled"
          color="primary"
          disabled
          className="chips-filterable chips-filterable--disabled"
        />
      </VariantSection>

      <VariantSection title="Themes">
        {THEME_COLORS.map(({ value, label }) => (
          <Chips key={value} label={label} color={value} readOnly />
        ))}
        <Chips label="Disabled" disabled />
      </VariantSection>

      <VariantSection title="Removable">
        {THEME_COLORS.map(({ value, label }) => (
          <Chips key={`removable-${value}`} label={label} color={value} onDelete={() => {}} />
        ))}
      </VariantSection>

      <VariantSection title="Icons — left">
        {THEME_COLORS.map(({ value, label }) => (
          <Chips key={`left-${value}`} label={label} color={value} leftIcon={Email} readOnly />
        ))}
      </VariantSection>

      <VariantSection title="Icons — right">
        {THEME_COLORS.map(({ value, label }) => (
          <Chips key={`right-${value}`} label={label} color={value} rightIcon={Bolt} readOnly />
        ))}
      </VariantSection>

      <VariantSection title="Icons — both">
        {THEME_COLORS.map(({ value, label }) => (
          <Chips
            key={`both-${value}`}
            label={label}
            color={value}
            leftIcon={Email}
            rightIcon={Bolt}
            readOnly
          />
        ))}
      </VariantSection>

      <VariantSection title="With border">
        {THEME_COLORS.map(({ value, label }) => (
          <Chips key={`border-${value}`} label={label} color={value} showBorder readOnly />
        ))}
      </VariantSection>

      <VariantSection title="Clickable">
        <Chips label="Clickable" readOnly onClick={() => {}} />
        <Chips label="With icon" leftIcon={Email} readOnly onClick={() => {}} />
      </VariantSection>

      <VariantSection title="Palette samples">
        {PALETTE_COLORS.map(({ value, label }) => (
          <Chips key={value} label={label} color={value} readOnly />
        ))}
      </VariantSection>
    </div>
  );
}
