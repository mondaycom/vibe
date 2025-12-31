import type { MemoryMetrics } from "./types";

interface PerformanceMemory {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

export function captureMemoryMetrics(): Omit<MemoryMetrics, "domNodes"> {
  const memory = (performance as typeof performance & { memory?: PerformanceMemory }).memory;

  if (!memory) {
    return { heapUsed: 0, heapTotal: 0 };
  }

  return {
    heapUsed: memory.usedJSHeapSize,
    heapTotal: memory.totalJSHeapSize
  };
}
