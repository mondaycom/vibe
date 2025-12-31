import type { TestRunnerConfig } from "@storybook/test-runner";

interface CollectedMetrics {
  // From React Profiler
  actualDuration: number;
  baseDuration: number;
  phase: string;
  // From browser APIs
  domNodes: number;
  heapUsed: number;
  heapTotal: number;
}

const isPerformanceTest = process.env.PERFORMANCE_TEST === "true";

const config: TestRunnerConfig = {
  /**
   * Pre-visit hook - enable performance testing mode in browser
   */
  async preVisit(page) {
    if (!isPerformanceTest) return;

    // Enable performance profiler decorator
    await page.addInitScript(() => {
      (window as any).__PERFORMANCE_TEST_ENABLED__ = true;
      (window as any).__VIBE_PERFORMANCE__ = { renders: {} };
    });
  },

  /**
   * Post-visit hook - collect performance metrics
   */
  async postVisit(page, context) {
    if (!isPerformanceTest) return;

    const { id, title, name } = context;

    try {
      // Wait for story to render
      await page.waitForSelector("#storybook-root", { timeout: 10000 });

      // Small delay to ensure React Profiler callback has fired
      await page.waitForTimeout(150);

      // Collect all metrics from browser context
      const metrics = (await page.evaluate((storyId: string) => {
        const container = document.querySelector("#storybook-root");
        if (!container) return null;

        // Get React Profiler data
        const perfData = (window as any).__VIBE_PERFORMANCE__;
        const renderMetrics = perfData?.renders?.[storyId];

        // Count DOM nodes
        const countNodes = (el: Element): number => {
          let count = 1;
          for (let i = 0; i < el.children.length; i++) {
            count += countNodes(el.children[i]);
          }
          return count;
        };

        // Get memory metrics
        const memory = (performance as any).memory;

        return {
          // React Profiler metrics (accurate render timing!)
          actualDuration: renderMetrics?.actualDuration ?? 0,
          baseDuration: renderMetrics?.baseDuration ?? 0,
          phase: renderMetrics?.phase ?? "unknown",
          // Browser metrics
          domNodes: countNodes(container),
          heapUsed: memory?.usedJSHeapSize ?? 0,
          heapTotal: memory?.totalJSHeapSize ?? 0
        };
      }, id)) as CollectedMetrics | null;

      if (metrics) {
        const globalMetrics = (global as any).__PERFORMANCE_METRICS__ || {};

        if (!globalMetrics[title]) {
          globalMetrics[title] = {};
        }

        globalMetrics[title][name] = {
          renderMetrics: {
            mountTime: metrics.actualDuration,
            baseDuration: metrics.baseDuration,
            phase: metrics.phase,
            rerenderCount: metrics.phase === "update" ? 1 : 0,
            totalTime: metrics.actualDuration
          },
          memoryMetrics: {
            heapUsed: metrics.heapUsed,
            heapTotal: metrics.heapTotal,
            domNodes: metrics.domNodes
          }
        };

        (global as any).__PERFORMANCE_METRICS__ = globalMetrics;
      }
    } catch (error) {
      console.error(`Failed to collect metrics for ${title}/${name}:`, error);
    }
  },

  /**
   * initialize metrics storage
   */
  async setup() {
    if (!isPerformanceTest) return;
    (global as any).__PERFORMANCE_METRICS__ = {};
  }
};

(config as any).teardown = async function () {
  if (!isPerformanceTest) return;

  const metrics = (global as any).__PERFORMANCE_METRICS__;
  if (!metrics || Object.keys(metrics).length === 0) return;

  try {
    const fs = require("fs");
    const path = require("path");

    const report = {
      timestamp: new Date().toISOString(),
      commit: process.env.GIT_COMMIT || "unknown",
      components: metrics
    };

    // Write report to scripts/performance/reports/
    const outputDir = path.resolve(__dirname, "../../../scripts/performance/reports");
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    const filepath = path.join(outputDir, "metrics.json");
    fs.writeFileSync(filepath, JSON.stringify(report, null, 2), "utf-8");

    const componentCount = Object.keys(metrics).length;
    let storyCount = 0;
    Object.values(metrics).forEach((stories: any) => {
      storyCount += Object.keys(stories).length;
    });

    console.log("\n📊 Performance metrics collected (React Profiler)");
    console.log(`   Components: ${componentCount}, Stories: ${storyCount}`);
    console.log(`   Report: ${filepath}\n`);
  } catch (error) {
    console.error("Failed to write performance report:", error);
  }
};

export default config;
