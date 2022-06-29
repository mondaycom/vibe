import React from "react";
import { startMemoryStats, stopMemoryStats } from "../functions/memory-stats";

export function withMemoryStats(Story, options) {
  const {
    globals: { memoryStats }
  } = options;
  if (memoryStats === "yes") {
    startMemoryStats();
  } else {
    stopMemoryStats();
  }
  return <Story />;
}
