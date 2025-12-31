import type { TestRunnerConfig } from "@storybook/test-runner";
import * as fs from "fs";
import * as path from "path";

interface CollectedMetrics {
  actualDuration: number;
  baseDuration: number;
  phase: string;
  domNodes: number;
  heapUsed: number;
  heapTotal: number;
}

const isPerformanceTest = process.env.PERFORMANCE_TEST === "true";

// Use process.cwd() for consistent path resolution in CI
const METRICS_DIR = path.join(process.cwd(), "scripts/performance/reports");
const METRICS_FILE = path.join(METRICS_DIR, "metrics.json");
const TEMP_METRICS_FILE = path.join(METRICS_DIR, ".metrics-temp.jsonl");

function ensureDir() {
  if (!fs.existsSync(METRICS_DIR)) {
    fs.mkdirSync(METRICS_DIR, { recursive: true });
  }
}

function appendMetric(title: string, name: string, data: object) {
  try {
    ensureDir();
    const line = JSON.stringify({ title, name, data }) + "\n";
    fs.appendFileSync(TEMP_METRICS_FILE, line, "utf-8");
  } catch {
    // Silently ignore write errors
  }
}

const config: TestRunnerConfig = {
  async preVisit(page) {
    if (!isPerformanceTest) return;
    await page.addInitScript(() => {
      (window as any).__PERFORMANCE_TEST_ENABLED__ = true;
      (window as any).__VIBE_PERFORMANCE__ = { renders: {} };
    });
  },

  async postVisit(page, context) {
    if (!isPerformanceTest) return;
    const { id, title, name } = context;

    try {
      // Try to find the storybook root, but don't fail if not found
      const root = await page.waitForSelector("#storybook-root", { timeout: 5000 }).catch(() => null);
      if (!root) return;

      await page.waitForTimeout(50);

      const metrics = await page.evaluate((storyId: string) => {
        const container = document.querySelector("#storybook-root");
        if (!container) return null;

        const perfData = (window as any).__VIBE_PERFORMANCE__;
        const renderMetrics = perfData?.renders?.[storyId];

        const countNodes = (el: Element): number => {
          let count = 1;
          for (let i = 0; i < el.children.length; i++) {
            count += countNodes(el.children[i]);
          }
          return count;
        };

        const memory = (performance as any).memory;

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
    } catch {
      // Silently ignore - don't break tests for metrics collection
    }
  },

  async setup() {
    if (!isPerformanceTest) return;
    try {
      ensureDir();
      // Clear previous temp file
      if (fs.existsSync(TEMP_METRICS_FILE)) {
        fs.unlinkSync(TEMP_METRICS_FILE);
      }
      // Write a marker to verify setup ran
      fs.writeFileSync(path.join(METRICS_DIR, ".setup-marker"), new Date().toISOString());
    } catch {
      // Ignore setup errors
    }
  }
};

(config as any).teardown = async function () {
  if (!isPerformanceTest) return;

  try {
    if (!fs.existsSync(TEMP_METRICS_FILE)) {
      // No metrics collected - write empty report
      const emptyReport = {
        timestamp: new Date().toISOString(),
        commit: process.env.GIT_COMMIT || "unknown",
        components: {},
        _note: "No metrics collected - temp file not found"
      };
      ensureDir();
      fs.writeFileSync(METRICS_FILE, JSON.stringify(emptyReport, null, 2), "utf-8");
      return;
    }

    const content = fs.readFileSync(TEMP_METRICS_FILE, "utf-8").trim();
    if (!content) {
      const emptyReport = {
        timestamp: new Date().toISOString(),
        commit: process.env.GIT_COMMIT || "unknown",
        components: {},
        _note: "Temp file was empty"
      };
      fs.writeFileSync(METRICS_FILE, JSON.stringify(emptyReport, null, 2), "utf-8");
      return;
    }

    const lines = content.split("\n");
    const components: Record<string, Record<string, object>> = {};

    for (const line of lines) {
      if (!line) continue;
      try {
        const { title, name, data } = JSON.parse(line);
        if (!components[title]) components[title] = {};
        components[title][name] = data;
      } catch {
        /* skip */
      }
    }

    const report = {
      timestamp: new Date().toISOString(),
      commit: process.env.GIT_COMMIT || "unknown",
      components
    };

    fs.writeFileSync(METRICS_FILE, JSON.stringify(report, null, 2), "utf-8");

    // Clean up
    try {
      fs.unlinkSync(TEMP_METRICS_FILE);
    } catch {
      /* ignore */
    }
  } catch {
    // Last resort - write a minimal report so CI doesn't fail
    try {
      ensureDir();
      fs.writeFileSync(
        METRICS_FILE,
        JSON.stringify(
          {
            timestamp: new Date().toISOString(),
            commit: process.env.GIT_COMMIT || "unknown",
            components: {},
            _note: "Teardown error"
          },
          null,
          2
        ),
        "utf-8"
      );
    } catch {
      /* give up */
    }
  }
};

export default config;
