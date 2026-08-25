import { BOARD_VIEWS, type BoardViewId } from "../board/boardViews";
import {
  DEFAULT_HEADING_FONT,
  DEFAULT_TEXT_FONT,
} from "../components/fontsConfig";
import type { AgentsView } from "../context/AgentsViewContext";
import type { RailItemId } from "../components/NavigationRail";

export const ROUTE_THEME_CLASSES = [
  "slick",
  "glaze",
  "glaze-neue",
  "warmth",
  "editorial-amber",
  "editorial-terracotta",
  "editorial-espresso",
] as const;

export const ROUTE_MODE_CLASSES = [
  "dark-app-theme",
  "black-app-theme",
] as const;

export type RouteTheme = "" | (typeof ROUTE_THEME_CLASSES)[number];
export type RouteMode = "" | (typeof ROUTE_MODE_CLASSES)[number];

export interface HashRoute {
  railItem: RailItemId;
  boardViewId: BoardViewId;
  agentsView: AgentsView;
  sidekickChatId: string | null;
  theme: RouteTheme;
  mode: RouteMode;
  headingFont: string | null;
  textFont: string | null;
}

export const DEFAULT_HASH_ROUTE: HashRoute = {
  railItem: "workspace",
  boardViewId: "main-table",
  agentsView: "home",
  sidekickChatId: null,
  theme: "",
  mode: "",
  headingFont: null,
  textFont: null,
};

const RAIL_ITEMS = [
  "workspace",
  "home-modes",
  "sidekick",
  "agents",
  "vibe",
  "notetaker",
  "favorites",
  "more",
] as const satisfies readonly RailItemId[];

function decodeRouteSegment(value: string | undefined): string | null {
  if (!value) return null;
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function isRailItem(value: string | undefined): value is RailItemId {
  return RAIL_ITEMS.includes(value as RailItemId);
}

function isTheme(value: string | null): value is Exclude<RouteTheme, ""> {
  return ROUTE_THEME_CLASSES.includes(value as Exclude<RouteTheme, "">);
}

function isBoardViewId(value: string | null): value is BoardViewId {
  return BOARD_VIEWS.some((view) => view.id === value);
}

function parseMode(value: string | null): RouteMode {
  if (value === "dark") return "dark-app-theme";
  if (value === "black") return "black-app-theme";
  return "";
}

function modeToParam(mode: RouteMode): string | null {
  if (mode === "dark-app-theme") return "dark";
  if (mode === "black-app-theme") return "black";
  return null;
}

function normalizeFontParam(value: string | null): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

export function parseHashRoute(hash = window.location.hash): HashRoute {
  const raw = hash.replace(/^#/, "");
  const [pathPart = "", queryPart = ""] = raw.split("?");
  const segments = pathPart.replace(/^\//, "").split("/").filter(Boolean);
  const params = new URLSearchParams(queryPart);

  const railItem = isRailItem(segments[0]) ? segments[0] : "workspace";
  const viewParam = params.get("view");
  const themeParam = params.get("theme");
  const boardViewId = isBoardViewId(viewParam)
    ? viewParam
    : DEFAULT_HASH_ROUTE.boardViewId;
  const theme: RouteTheme = isTheme(themeParam) ? themeParam : "";
  const mode = parseMode(params.get("mode"));

  const route: HashRoute = {
    ...DEFAULT_HASH_ROUTE,
    railItem,
    boardViewId,
    theme,
    mode,
    headingFont: normalizeFontParam(params.get("heading")),
    textFont: normalizeFontParam(params.get("text")),
  };

  if (railItem === "agents") {
    route.agentsView =
      segments[1] === "manage" || segments[1] === "feed" ? segments[1] : "home";
  }

  if (railItem === "sidekick" && segments[1] === "chat") {
    route.sidekickChatId = decodeRouteSegment(segments[2]);
  }

  return route;
}

export function buildHashRoute(route: HashRoute): string {
  const params = new URLSearchParams();
  let path = `/${route.railItem}`;

  if (route.railItem === "workspace") {
    params.set("view", route.boardViewId);
  }

  if (route.railItem === "agents" && route.agentsView !== "home") {
    path = `/agents/${route.agentsView}`;
  }

  if (route.railItem === "sidekick" && route.sidekickChatId) {
    path = `/sidekick/chat/${encodeURIComponent(route.sidekickChatId)}`;
  }

  if (route.theme) params.set("theme", route.theme);

  const modeParam = modeToParam(route.mode);
  if (modeParam) params.set("mode", modeParam);

  if (route.headingFont && route.headingFont !== DEFAULT_HEADING_FONT) {
    params.set("heading", route.headingFont);
  }

  if (route.textFont && route.textFont !== DEFAULT_TEXT_FONT) {
    params.set("text", route.textFont);
  }

  const query = params.toString();
  return `#${path}${query ? `?${query}` : ""}`;
}

export function routesEqual(a: HashRoute, b: HashRoute): boolean {
  return buildHashRoute(a) === buildHashRoute(b);
}
