import type { AppState } from "../types";

export type VibeSource = "original" | "current";

export const vibeSource: VibeSource = import.meta.env.MODE === "original" ? "original" : "current";
export const isCurrentVibeSource = vibeSource === "current";

const SOURCE_PORTS: Record<VibeSource, string> = {
  original: "5221",
  current: "5220"
};

const STATE_TRANSFER_PARAM = "vibeKitchenSinkState";

export function readTransferredVibeState(): AppState | null {
  const url = new URL(window.location.href);
  const serializedState = url.searchParams.get(STATE_TRANSFER_PARAM);
  if (!serializedState) return null;

  try {
    return JSON.parse(serializedState) as AppState;
  } catch {
    return null;
  }
}

export function clearTransferredVibeState(): void {
  const url = new URL(window.location.href);
  if (!url.searchParams.has(STATE_TRANSFER_PARAM)) return;

  url.searchParams.delete(STATE_TRANSFER_PARAM);
  window.history.replaceState(null, "", url);
}

export function switchVibeSource(source: VibeSource, state: AppState): void {
  if (source === vibeSource) return;

  const url = new URL(window.location.href);
  url.searchParams.set(STATE_TRANSFER_PARAM, JSON.stringify(state));
  url.port = SOURCE_PORTS[source];
  window.location.assign(url);
}
