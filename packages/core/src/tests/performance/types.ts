export interface RenderMetrics {
  /** Actual time spent rendering this commit (ms) - from React Profiler */
  mountTime: number;
  /** Time to render without memoization (ms) - from React Profiler */
  baseDuration?: number;
  /** Render phase: "mount", "update", or "nested-update" */
  phase?: string;
  /** Number of re-renders that occurred */
  rerenderCount: number;
  /** Total render time (ms) */
  totalTime: number;
}

export interface MemoryMetrics {
  /** Heap size used (bytes) */
  heapUsed: number;
  /** Total heap size (bytes) */
  heapTotal: number;
  /** Number of DOM nodes in component tree */
  domNodes: number;
}

export interface ComponentMetrics {
  renderMetrics: RenderMetrics;
  memoryMetrics: MemoryMetrics;
}

export interface StoryMetrics {
  [storyName: string]: ComponentMetrics;
}

export interface PerformanceReport {
  timestamp: string;
  commit: string;
  components: {
    [componentName: string]: StoryMetrics;
  };
}
