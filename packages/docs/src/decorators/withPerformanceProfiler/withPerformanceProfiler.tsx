import React, { Profiler, ProfilerOnRenderCallback } from "react";
import type { Decorator } from "@storybook/react";

interface RenderMetric {
  /** Actual time spent rendering (ms) */
  actualDuration: number;
  /** Time to render entire subtree without memoization (ms) */
  baseDuration: number;
  /** "mount" for first render, "update" for re-renders */
  phase: "mount" | "update" | "nested-update";
  /** When React started rendering */
  startTime: number;
  /** When React committed to DOM */
  commitTime: number;
  /** Timestamp when metric was recorded */
  timestamp: number;
}

interface VibePerformanceData {
  renders: Record<string, RenderMetric>;
}

declare global {
  interface Window {
    __VIBE_PERFORMANCE__?: VibePerformanceData;
    __PERFORMANCE_TEST_ENABLED__?: boolean;
  }
}

function initializeStore(): void {
  if (typeof window === "undefined") return;

  if (!window.__VIBE_PERFORMANCE__) {
    window.__VIBE_PERFORMANCE__ = {
      renders: {}
    };
  }
}

function createOnRenderCallback(storyId: string): ProfilerOnRenderCallback {
  return (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    if (typeof window === "undefined" || !window.__VIBE_PERFORMANCE__) return;

    window.__VIBE_PERFORMANCE__.renders[storyId] = {
      actualDuration,
      baseDuration,
      phase: phase as RenderMetric["phase"],
      startTime,
      commitTime,
      timestamp: Date.now()
    };
  };
}

function isPerformanceEnabled(): boolean {
  if (typeof window === "undefined") return false;
  return window.__PERFORMANCE_TEST_ENABLED__ === true;
}

const withPerformanceProfiler: Decorator = (Story, context) => {
  // Always initialize store so it's accessible in console
  initializeStore();

  // Only wrap in Profiler when enabled
  if (!isPerformanceEnabled()) {
    return <Story />;
  }

  const storyId = context.id;
  const onRender = createOnRenderCallback(storyId);

  return (
    <Profiler id={storyId} onRender={onRender}>
      <Story />
    </Profiler>
  );
};

export default withPerformanceProfiler;
