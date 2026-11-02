import { Board, Bolt, Chart, Graph, Group, Idea } from "@mondaydotcomorg/icons";
import type { ComponentType, SVGProps } from "react";

import budgetTracker from "../assets/inspirations/budget-tracker.png";
import calendarApp from "../assets/inspirations/calendar-app.png";
import calendarView from "../assets/inspirations/calendar-view.png";
import contentCalendar from "../assets/inspirations/content-calendar.png";
import documentation from "../assets/inspirations/documentation.png";
import editorialCalendar from "../assets/inspirations/editorial-calendar.png";
import employeeDirectory from "../assets/inspirations/employee-directory.png";
import eventPortal from "../assets/inspirations/event-portal.png";
import inspiration1 from "../assets/inspirations/inspiration-1.png";
import inspiration2 from "../assets/inspirations/inspiration-2.png";
import inspiration3 from "../assets/inspirations/inspiration-3.png";
import inspiration4 from "../assets/inspirations/inspiration-4.png";
import inspiration5 from "../assets/inspirations/inspiration-5.png";
import knowledgeBase from "../assets/inspirations/knowledge-base.png";
import orgChart from "../assets/inspirations/org-chart.png";
import portfolio from "../assets/inspirations/portfolio.png";
import presentation from "../assets/inspirations/presentation.png";
import projectDashboard from "../assets/inspirations/project-dashboard.png";
import projectOverview from "../assets/inspirations/project-overview.png";
import quotaCalculator from "../assets/inspirations/quota-calculator.png";
import knowledgeManagerTemplate from "../assets/app-templates/knowledge-manager.png";
import orgChartTemplate from "../assets/app-templates/org-chart.png";
import quoteCalculatorTemplate from "../assets/app-templates/quote-calculator.png";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

// Brand-gradient palette set ported from the mini-home redesign
// (gradientPalettes.ts). A radial highlight is painted on top of a linear base.
interface GradientPalette {
  base: string;
  radialColor: string;
  radialCenter: string;
}

const PALETTES: readonly GradientPalette[] = [
  {
    base: "linear-gradient(90deg, rgb(79, 195, 247) 0%, rgb(41, 182, 246) 100%)",
    radialColor: "rgba(111, 232, 154, 1)",
    radialCenter: "33.333% 33.333%",
  },
  {
    base: "linear-gradient(90deg, rgb(79, 216, 160) 0%, rgb(0, 186, 95) 100%)",
    radialColor: "rgba(255, 204, 0, 1)",
    radialCenter: "-10.952% 5.714%",
  },
  {
    base: "linear-gradient(90deg, rgb(255, 184, 64) 0%, rgb(254, 155, 11) 100%)",
    radialColor: "rgba(255, 204, 0, 1)",
    radialCenter: "4.096% 35.904%",
  },
  {
    base: "linear-gradient(90deg, rgb(217, 145, 230) 0%, rgb(186, 86, 217) 100%)",
    radialColor: "rgba(255, 161, 199, 1)",
    radialCenter: "78% 28%",
  },
  {
    base: "linear-gradient(90deg, rgb(149, 134, 247) 0%, rgb(112, 95, 230) 100%)",
    radialColor: "rgba(180, 220, 255, 1)",
    radialCenter: "14% 70%",
  },
  {
    base: "linear-gradient(90deg, rgb(91, 192, 235) 0%, rgb(54, 154, 233) 100%)",
    radialColor: "rgba(168, 233, 255, 1)",
    radialCenter: "85% 85%",
  },
];

export function buildPaletteBackground(index: number): string {
  const palette = PALETTES[index % PALETTES.length];
  return `radial-gradient(circle at ${palette.radialCenter}, ${palette.radialColor} 0%, ${palette.radialColor} 15%, transparent 70%), ${palette.base}`;
}

export interface LiveSuggestionBoard {
  label: string;
  icon: IconComponent;
}

export interface LiveSuggestion {
  name: string;
  description: string;
  glyph: IconComponent;
  paletteIndex: number;
  basedOn: LiveSuggestionBoard[];
  overflowCount?: number;
}

// Static stand-in for the data-driven live suggestions. Each card renders up to
// two named board chips with an optional "+N" overflow chip.
export const LIVE_SUGGESTIONS: readonly LiveSuggestion[] = [
  {
    name: "Creative Request Hub",
    description:
      "Build a creative intake portal that designers and stakeholders use to submit and track requests.",
    glyph: Idea,
    paletteIndex: 0,
    basedOn: [
      { label: "Design backlog", icon: Board },
      { label: "Tasks - Vibe agent core", icon: Board },
    ],
    overflowCount: 1,
  },
  {
    name: "Design Project Tracker",
    description:
      "Create a project management suite that creative leads use to align status and ownership.",
    glyph: Graph,
    paletteIndex: 1,
    basedOn: [
      { label: "Vibe Platform Tasks", icon: Board },
      { label: "Tasks", icon: Board },
    ],
  },
  {
    name: "Brand Asset Library",
    description:
      "Launch a brand asset manager that designers and marketing teams use daily.",
    glyph: Bolt,
    paletteIndex: 3,
    basedOn: [
      { label: "Infra Drift board", icon: Board },
      { label: "Vibe Platform Backlog", icon: Board },
    ],
    overflowCount: 1,
  },
];

// Available for future cards that want a generic glyph/group icon.
export const FALLBACK_GLYPHS: readonly IconComponent[] = [Chart, Group];

export interface AppTemplate {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

export const APP_TEMPLATES: readonly AppTemplate[] = [
  {
    id: "knowledge-manager",
    title: "Knowledge manager",
    description: "Centralize your team's knowledge in one searchable hub",
    thumbnail: knowledgeManagerTemplate,
  },
  {
    id: "org-chart",
    title: "Org chart",
    description: "Visualize your company's structure in a clear org chart",
    thumbnail: orgChartTemplate,
  },
  {
    id: "quote-calculator",
    title: "Quote calculator",
    description: "Create sales quotes on the spot",
    thumbnail: quoteCalculatorTemplate,
  },
];

export interface Inspiration {
  slug: string;
  label: string;
  theme: string;
  thumbnail: string;
}

// Ported 1:1 from the redesign's inspirations.constants.ts + translations.json.
export const INSPIRATIONS: readonly Inspiration[] = [
  {
    slug: "editorial",
    label: "Reading list",
    theme: "Editorial",
    thumbnail: inspiration1,
  },
  {
    slug: "playful",
    label: "Project tracker",
    theme: "Playful",
    thumbnail: inspiration2,
  },
  {
    slug: "minimal",
    label: "Note taking",
    theme: "Minimalistic",
    thumbnail: inspiration3,
  },
  {
    slug: "monochrome",
    label: "Document hub",
    theme: "Monochrome",
    thumbnail: inspiration4,
  },
  {
    slug: "dense-data",
    label: "Data dashboard",
    theme: "Dense data",
    thumbnail: inspiration5,
  },
  {
    slug: "portfolio",
    label: "Portfolio",
    theme: "Tactile",
    thumbnail: portfolio,
  },
  {
    slug: "project-dashboard",
    label: "Project dashboard",
    theme: "Dark mode",
    thumbnail: projectDashboard,
  },
  {
    slug: "budget-tracker",
    label: "Budget tracker",
    theme: "Spreadsheet",
    thumbnail: budgetTracker,
  },
  {
    slug: "presentation",
    label: "Presentation",
    theme: "Soft",
    thumbnail: presentation,
  },
  {
    slug: "quota-calculator",
    label: "Quota calculator",
    theme: "Bright",
    thumbnail: quotaCalculator,
  },
  {
    slug: "knowledge-base",
    label: "Knowledge base",
    theme: "Sci-fi",
    thumbnail: knowledgeBase,
  },
  {
    slug: "org-chart",
    label: "Org chart",
    theme: "Corporate",
    thumbnail: orgChart,
  },
  {
    slug: "project-overview",
    label: "Project overview",
    theme: "Sticker",
    thumbnail: projectOverview,
  },
  {
    slug: "content-calendar",
    label: "Content calendar",
    theme: "Magazine",
    thumbnail: contentCalendar,
  },
  {
    slug: "calendar-app",
    label: "Calendar app",
    theme: "Modernist",
    thumbnail: calendarApp,
  },
  {
    slug: "editorial-calendar",
    label: "Editorial calendar",
    theme: "Newspaper",
    thumbnail: editorialCalendar,
  },
  {
    slug: "calendar-view",
    label: "Calendar view",
    theme: "Pop",
    thumbnail: calendarView,
  },
  {
    slug: "employee-directory",
    label: "Employee directory",
    theme: "Card grid",
    thumbnail: employeeDirectory,
  },
  {
    slug: "event-portal",
    label: "Event portal",
    theme: "Marketing",
    thumbnail: eventPortal,
  },
  {
    slug: "documentation",
    label: "Documentation",
    theme: "Calm",
    thumbnail: documentation,
  },
];
