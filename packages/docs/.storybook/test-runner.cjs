const fs = require("fs");
const path = require("path");

const isPerformanceTest = process.env.PERFORMANCE_TEST === "true";

// Use process.cwd() for consistent path resolution in CI
const METRICS_DIR = path.join(process.cwd(), "../../scripts/performance/reports");
const METRICS_FILE = path.join(METRICS_DIR, "metrics.json");
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
    // Silently ignore
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
      // Silently ignore
    }
  },

  async setup() {
    if (!isPerformanceTest) return;
    console.log("[perf] Setup running, metrics dir:", METRICS_DIR);
    try {
      ensureDir();
      if (fs.existsSync(TEMP_METRICS_FILE)) {
        fs.unlinkSync(TEMP_METRICS_FILE);
      }
    } catch (e) {
      console.log("[perf] Setup error:", e.message);
    }
  },

  async teardown() {
    if (!isPerformanceTest) return;
    console.log("[perf] Teardown running");

    try {
      ensureDir();
      
      if (!fs.existsSync(TEMP_METRICS_FILE)) {
        console.log("[perf] No temp metrics file found");
        fs.writeFileSync(METRICS_FILE, JSON.stringify({
          timestamp: new Date().toISOString(),
          commit: process.env.GIT_COMMIT || "unknown",
          components: {},
          _note: "No metrics collected"
        }, null, 2), "utf-8");
        return;
      }

      const content = fs.readFileSync(TEMP_METRICS_FILE, "utf-8").trim();
      const lines = content ? content.split("\n") : [];
      const components = {};

      for (const line of lines) {
        if (!line) continue;
        try {
          const { title, name, data } = JSON.parse(line);
          if (!components[title]) components[title] = {};
          components[title][name] = data;
        } catch { /* skip */ }
      }

      const report = {
        timestamp: new Date().toISOString(),
        commit: process.env.GIT_COMMIT || "unknown",
        components
      };

      fs.writeFileSync(METRICS_FILE, JSON.stringify(report, null, 2), "utf-8");
      
      try { fs.unlinkSync(TEMP_METRICS_FILE); } catch { }

      const componentCount = Object.keys(components).length;
      let storyCount = 0;
      Object.values(components).forEach(stories => {
        storyCount += Object.keys(stories).length;
      });

      console.log("\n📊 Performance metrics collected");
      console.log(`   Components: ${componentCount}, Stories: ${storyCount}`);
      console.log(`   Report: ${METRICS_FILE}\n`);
    } catch (e) {
      console.log("[perf] Teardown error:", e.message);
      fs.writeFileSync(METRICS_FILE, JSON.stringify({
        timestamp: new Date().toISOString(),
        components: {},
        _error: e.message
      }, null, 2), "utf-8");
    }
  }
};
