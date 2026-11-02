export * from "@vibe-original/core";

// SegmentedControl does not exist in the pinned npm release. Its kitchen-sink
// entries are hidden in Original mode, but the no-op export keeps eager modules loadable.
export function SegmentedControl() {
  return null;
}
