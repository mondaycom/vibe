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

const METRICS_DIR = path.resolve(__dirname, "../../../scripts/performance/reports");
const METRICS_FILE = path.join(METRICS_DIR, "metrics.json");
const TEMP_METRICS_FILE = path.join(METRICS_DIR, ".metrics-temp.jsonl");

function appendMetric(title: string, name: string, data: object) {
  try {
    if (!fs.existsSync(METRICS_DIR)) {
      fs.mkdirSync(METRICS_DIR, { recursive: true });
    }
    const line = JSON.stringify({ title, name, data }) + "\n";
    fs.appendFileSync(TEMP_METRICS_FILE, line, "utf-8");
  } catch (error) {
    console.error(`Failed to append metric for ${title}/${name}:`, error);
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
      await page.waitForSelector("#storybook-root", { timeout: 10000 });
      await page.waitForTimeout(150);

      const metrics = (await page.evaluate((storyId: string) => {
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
      }, id)) as CollectedMetrics | null;

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
    } catch (error) {
      console.error(`Failed to collect metrics for ${title}/${name}:`, error);
    }
  },

  async setup() {
    if (!isPerformanceTest) return;
    try {
      if (!fs.existsSync(METRICS_DIR)) {
        fs.mkdirSync(METRICS_DIR, { recursive: true });
      }
      if (fs.existsSync(TEMP_METRICS_FILE)) {
        fs.unlinkSync(TEMP_METRICS_FILE);
      }
    } catch (error) {
      console.error("Failed to setup metrics directory:", error);
    }
  }
};

(config as any).teardown = async function () {
  if (!isPerformanceTest) return;

  try {
    if (!fs.existsSync(TEMP_METRICS_FILE)) {
      console.log("\n⚠️ No performance metrics collected\n");
      return;
    }

    const lines = fs.readFileSync(TEMP_METRICS_FILE, "utf-8").trim().split("\n");
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
    fs.unlinkSync(TEMP_METRICS_FILE);

    const componentCount = Object.keys(components).length;
    let storyCount = 0;
    Object.values(components).forEach(stories => {
      storyCount += Object.keys(stories).length;
    });

    console.log("\n📊 Performance metrics collected");
    console.log(`   Components: ${componentCount}, Stories: ${storyCount}`);
    console.log(`   Report: ${METRICS_FILE}\n`);
  } catch (error) {
    console.error("Failed to write performance report:", error);
  }
};

export default config;
