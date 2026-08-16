import { Chips } from "@vibe/core";
import { Bolt, Email } from "@vibe/icons";
import { type ReactNode, useLayoutEffect, useRef } from "react";
import { ComponentGallery, type GalleryVariation } from "./ComponentGallery";

type ChipColor =
  | "primary"
  | "positive"
  | "negative"
  | "warning"
  | "info"
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
  { value: "info", label: "Info" },
];

const PALETTE_COLORS: { value: ChipColor; label: string }[] = [
  { value: "done-green", label: "Done green" },
  { value: "bright-blue", label: "Bright blue" },
  { value: "purple", label: "Purple" },
  { value: "stuck-red", label: "Stuck red" },
  { value: "working_orange", label: "Working orange" },
];

function themeClassName(value: ChipColor, ...extra: (string | undefined)[]) {
  return [`chips-theme-${value}`, ...extra].filter(Boolean).join(" ") || undefined;
}

function chipClassName(...parts: (string | undefined | false)[]) {
  return parts.filter(Boolean).join(" ") || undefined;
}

function ChipRow({ children }: { children: ReactNode }) {
  return <div className="chips-gallery-row">{children}</div>;
}

const chipsVariations: GalleryVariation[] = [
  {
    id: "read-only",
    label: "Read only",
    render: () => (
      <ChipRow>
        {THEME_COLORS.map(({ value, label }) => (
          <Chips
            key={`ro-${value}`}
            label={label}
            color={value}
            readOnly
            className={themeClassName(value, "chips-readonly")}
          />
        ))}
        <Chips
          label="With icon"
          color="primary"
          leftIcon={Email}
          readOnly
          className={chipClassName("chips-readonly", "chips-has-left")}
        />
      </ChipRow>
    ),
  },
  {
    id: "clickable",
    label: "Clickable",
    render: () => (
      <ChipRow>
        <Chips label="Clickable" readOnly onClick={() => {}} />
        <Chips label="With icon" leftIcon={Email} readOnly onClick={() => {}} className="chips-has-left" />
      </ChipRow>
    ),
  },
  {
    id: "removable",
    label: "Removable",
    render: () => (
      <Chips label="Primary" color="primary" onDelete={() => {}} className="chips-close-on-hover" />
    ),
  },
  {
    id: "size",
    label: "Size",
    render: () => (
      <ChipRow>
        <Chips label="Medium" color="primary" readOnly />
        <Chips label="Small" color="primary" size="small" readOnly className="chips-size-small" />
        <Chips label="Medium icon" color="primary" leftIcon={Email} readOnly className="chips-has-left" />
        <Chips
          label="Small icon"
          color="primary"
          leftIcon={Email}
          size="small"
          readOnly
          className={chipClassName("chips-size-small", "chips-has-left")}
        />
      </ChipRow>
    ),
  },
  {
    id: "filterable-primary",
    label: "Filterable — Primary",
    render: () => (
      <ChipRow>
        <Chips label="Default" color="primary" readOnly className="chips-filterable" onClick={() => {}} />
        <Chips
          label="Hover"
          color="primary"
          readOnly
          className="chips-filterable chips-filterable--hover"
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
          className={chipClassName("chips-filterable", "chips-has-left")}
          onClick={() => {}}
        />
        <Chips label="Disabled" color="primary" disabled className="chips-filterable chips-filterable--disabled" />
      </ChipRow>
    ),
  },
  {
    id: "themes",
    label: "Themes",
    render: () => (
      <ChipRow>
        {THEME_COLORS.map(({ value, label }) => (
          <Chips key={value} label={label} color={value} readOnly className={themeClassName(value)} />
        ))}
        <Chips label="Disabled" disabled />
      </ChipRow>
    ),
  },
  {
    id: "icons-left",
    label: "Icons — Left",
    render: () => (
      <ChipRow>
        {THEME_COLORS.map(({ value, label }) => (
          <Chips
            key={`left-${value}`}
            label={label}
            color={value}
            leftIcon={Email}
            readOnly
            className={themeClassName(value, "chips-has-left")}
          />
        ))}
      </ChipRow>
    ),
  },
  {
    id: "icons-right",
    label: "Icons — Right",
    render: () => (
      <ChipRow>
        {THEME_COLORS.map(({ value, label }) => (
          <Chips
            key={`right-${value}`}
            label={label}
            color={value}
            rightIcon={Bolt}
            readOnly
            className={themeClassName(value, "chips-has-right")}
          />
        ))}
      </ChipRow>
    ),
  },
  {
    id: "icons-both",
    label: "Icons — Both sides",
    render: () => (
      <ChipRow>
        {THEME_COLORS.map(({ value, label }) => (
          <Chips
            key={`both-${value}`}
            label={label}
            color={value}
            leftIcon={Email}
            rightIcon={Bolt}
            readOnly
            className={themeClassName(value, "chips-has-left", "chips-has-right")}
          />
        ))}
      </ChipRow>
    ),
  },
  {
    id: "with-border",
    label: "With border",
    render: () => (
      <ChipRow>
        {THEME_COLORS.map(({ value, label }) => (
          <Chips
            key={`border-${value}`}
            label={label}
            color={value}
            showBorder
            readOnly
            className={themeClassName(value)}
          />
        ))}
      </ChipRow>
    ),
  },
  {
    id: "palette-samples",
    label: "Palette samples",
    render: () => (
      <ChipRow>
        {PALETTE_COLORS.map(({ value, label }) => (
          <Chips key={value} label={label} color={value} readOnly />
        ))}
      </ChipRow>
    ),
  },
];

export function ChipsGalleryView() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Published Chips keep the close button in-flow; lock resting width after CSS takes it out of flow
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const lockWidths = () => {
      root.querySelectorAll<HTMLElement>('[data-vibe="Chips"]:has([data-testid$="-close"])').forEach(chip => {
        chip.style.width = "";
        chip.style.width = `${chip.getBoundingClientRect().width}px`;
      });
    };

    lockWidths();
    const frame = requestAnimationFrame(lockWidths);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div ref={rootRef}>
      <ComponentGallery
        className="chips-gallery"
        title="Chips"
        description="All chips variations currently supported by the component."
        variations={chipsVariations}
      />
    </div>
  );
}
