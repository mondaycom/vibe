type VibeStorybookMainConfig = {
  features: {
    interactionsDebugger: boolean;
  };
};

export function buildStorybookMainConfig(): VibeStorybookMainConfig {
  return {
    features: {
      interactionsDebugger: true
    }
  };
}
