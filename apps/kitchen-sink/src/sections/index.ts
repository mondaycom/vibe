import type { Section } from "../section";

const SECTION_ORDER = [
  "icon-button",
  "button",
  "button-group",
  "tabs",
  "label",
  "chip",
  "text-field",
  "dropdown",
  "menu",
  "toast",
  "stroke-spotlight",
] as const;

const modules = import.meta.glob<{ default: Section }>("./*.section.tsx", {
  eager: true,
});

export const sections: Section[] = Object.values(modules)
  .map((mod) => mod.default)
  .filter((section) => SECTION_ORDER.includes(section.id as (typeof SECTION_ORDER)[number]))
  .sort(
    (a, b) =>
      SECTION_ORDER.indexOf(a.id as (typeof SECTION_ORDER)[number]) -
      SECTION_ORDER.indexOf(b.id as (typeof SECTION_ORDER)[number])
  );
