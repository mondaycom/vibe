import { describe, expect, it, beforeEach } from "vitest";
import { loadPersistedState, savePersistedState, createInitialAppState } from "../lib/storage";
import { STORAGE_KEY, STORAGE_VERSION } from "../types";

beforeEach(() => {
  localStorage.clear();
});

describe("storage", () => {
  it("returns initial state when nothing stored", () => {
    const state = loadPersistedState();
    expect(state.view).toBe("components");
    expect(state.systemTheme).toBe("light");
    expect(state.componentStates.button.kind).toBe("primary");
  });

  it("round-trips persisted fields", () => {
    const initial = createInitialAppState();
    initial.systemTheme = "dark";
    initial.componentStates.button = { ...initial.componentStates.button, kind: "secondary" };
    savePersistedState(initial);

    const loaded = loadPersistedState();
    expect(loaded.systemTheme).toBe("dark");
    expect(loaded.componentStates.button.kind).toBe("secondary");
  });

  it("resets when version mismatches", () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ version: 999, systemTheme: "black" })
    );
    const loaded = loadPersistedState();
    expect(loaded.systemTheme).toBe("light");

    const persisted = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}") as { version: number };
    expect(persisted.version).toBe(STORAGE_VERSION);
  });
});
