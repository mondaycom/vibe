#!/usr/bin/env node
/**
 * Aggregates performance metrics from temp .jsonl file into final JSON report.
 * Called by CI after test-storybook completes.
 */
const fs = require("fs");
const path = require("path");

const METRICS_DIR = path.join(__dirname, "reports");
const TEMP_METRICS_FILE = path.join(METRICS_DIR, ".metrics-temp.jsonl");
const METRICS_FILE = path.join(METRICS_DIR, "metrics.json");

function aggregate() {
  if (!fs.existsSync(METRICS_DIR)) {
    fs.mkdirSync(METRICS_DIR, { recursive: true });
  }

  if (!fs.existsSync(TEMP_METRICS_FILE)) {
    console.log("[perf] No temp metrics file found at:", TEMP_METRICS_FILE);
    const emptyReport = {
      timestamp: new Date().toISOString(),
      commit: process.env.GIT_COMMIT || "unknown",
      components: {},
      _note: "No metrics were collected"
    };
    fs.writeFileSync(METRICS_FILE, JSON.stringify(emptyReport, null, 2), "utf-8");
    console.log("[perf] Created empty report at:", METRICS_FILE);
    return;
  }

  const content = fs.readFileSync(TEMP_METRICS_FILE, "utf-8").trim();
  const lines = content ? content.split("\n") : [];
  const components = {};
  let parsed = 0, failed = 0;

  for (const line of lines) {
    if (!line) continue;
    try {
      const { title, name, data } = JSON.parse(line);
      if (!components[title]) components[title] = {};
      components[title][name] = data;
      parsed++;
    } catch (e) { failed++; }
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

  console.log("\n📊 Performance metrics aggregated");
  console.log("   Lines parsed:", parsed, "failed:", failed);
  console.log("   Components:", componentCount, "Stories:", storyCount);
  console.log("   Report:", METRICS_FILE, "\n");
}

aggregate();
