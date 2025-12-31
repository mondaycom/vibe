const fs = require("fs");
const path = require("path");

const isPerformanceTest = process.env.PERFORMANCE_TEST === "true";

// Metrics are written relative to repo root (from packages/docs)
const METRICS_DIR = path.join(process.cwd(), "../../scripts/performance/reports");
const TEMP_METRICS_FILE = path.join(METRICS_DIR, ".metrics-temp.jsonl");

function ensureDir() {
  if (!fs.existsSync(METRICS_DIR)) {
    fs.mkdirSync(METRICS_DIR, { recursive: true });
  }
}

function appendMetric(title, name, data) {
  try {
    ensureDir();
    const line = JSON.stringify({ title, name, data }) + "\n";
    fs.appendFileSync(TEMP_METRICS_FILE, line, "utf-8");
  } catch (e) {
    // Silently ignore write errors
  }
}

module.exports = {
  async preVisit(page) {
    if (!isPerformanceTest) return;
    await page.addInitScript(() => {
      window.__PERFORMANCE_TEST_ENABLED__ = true;
      window.__VIBE_PERFORMANCE__ = { renders: {} };
    });
  },

  async postVisit(page, context) {
    if (!isPerformanceTest) return;
    const { id, title, name } = context;

    try {
      const root = await page.waitForSelector("#storybook-root", { timeout: 5000 }).catch(() => null);
      if (!root) return;
      
      await page.waitForTimeout(50);

      const metrics = await page.evaluate((storyId) => {
        const container = document.querySelector("#storybook-root");
        if (!container) return null;

        const perfData = window.__VIBE_PERFORMANCE__;
        const renderMetrics = perfData?.renders?.[storyId];

        const countNodes = (el) => {
          let count = 1;
          for (let i = 0; i < el.children.length; i++) {
            count += countNodes(el.children[i]);
          }
          return count;
        };

        const memory = performance.memory;

        return {
          actualDuration: renderMetrics?.actualDuration ?? 0,
          baseDuration: renderMetrics?.baseDuration ?? 0,
          phase: renderMetrics?.phase ?? "unknown",
          domNodes: countNodes(container),
          heapUsed: memory?.usedJSHeapSize ?? 0,
          heapTotal: memory?.totalJSHeapSize ?? 0
        };
      }, id);

      if (metrics) {
        appendMetric(title, name, {
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
        });
      }
    } catch (e) {
      // Silently ignore errors
    }
  }
};
