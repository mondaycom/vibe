import type { SubIcon } from "@vibe/icon";
import { Home } from "@mondaydotcomorg/icons";
import vibeLogoColored from "../assets/vibe-logo-colored.png";

export interface BoardView {
  id: string;
  label: string;
  icon: SubIcon;
}

export function VibeAppColoredIcon({ size = 18 }: { size?: string | number }) {
  return (
    <img
      src={vibeLogoColored}
      alt=""
      width={size}
      height={size}
      style={{ display: "block", flexShrink: 0, objectFit: "contain" }}
    />
  );
}

export const BOARD_VIEWS: BoardView[] = [
  { id: "main-table", label: "Main table", icon: Home },
  { id: "vibe-app-1", label: "Vibe app", icon: VibeAppColoredIcon },
  { id: "vibe-app-2", label: "Vibe app", icon: VibeAppColoredIcon },
  { id: "vibe-app-3", label: "Vibe app", icon: VibeAppColoredIcon },
];

export type BoardViewId = (typeof BOARD_VIEWS)[number]["id"];

export function isVibeAppView(viewId: BoardViewId): boolean {
  return viewId.startsWith("vibe-app");
}
