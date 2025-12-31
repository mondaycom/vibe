const fs = require("fs");
const path = require("path");

const THRESHOLDS = {
  /** Minimum percentage change to report (below this is considered noise) */
  NOISE_FLOOR: 5,
  /** Mount time regression threshold (%) */
  MOUNT_TIME_REGRESSION: 20,
  /** Memory regression threshold (%) - higher because memory is more variable */
  MEMORY_REGRESSION: 30,
  /** DOM nodes regression threshold (%) */
  DOM_NODES_REGRESSION: 15
};

const REPORTS_DIR = path.join(__dirname, "reports");

function formatTime(ms) {
  if (ms < 1) {
    return `${(ms * 1000).toFixed(2)}μs`;
  } else if (ms < 1000) {
    return `${ms.toFixed(2)}ms`;
  }
  return `${(ms / 1000).toFixed(2)}s`;
}

function formatBytes(bytes) {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
}

function calculatePercentChange(base, current) {
  if (base === 0) return current > 0 ? 100 : 0;
  return ((current - base) / base) * 100;
}

function getPerformanceEmoji(percentChange, regressionThreshold) {
  if (Math.abs(percentChange) < THRESHOLDS.NOISE_FLOOR) return "➖"; // Insignificant
  if (percentChange > regressionThreshold) return "⚠️"; // Regression
  if (percentChange > 0) return "🔺"; // Minor increase
  if (percentChange < -regressionThreshold) return "✨"; // Significant improvement
  return "🟢"; // Minor improvement
}

function compareStoryMetrics(baseMetrics, prMetrics, componentName, storyName) {
  const results = {
    component: componentName,
    story: storyName,
    changes: [],
    hasRegression: false,
    hasImprovement: false
  };

  // Compare mount time
  const mountPercent = calculatePercentChange(baseMetrics.renderMetrics.mountTime, prMetrics.renderMetrics.mountTime);

  if (Math.abs(mountPercent) > THRESHOLDS.NOISE_FLOOR) {
    const emoji = getPerformanceEmoji(mountPercent, THRESHOLDS.MOUNT_TIME_REGRESSION);
    results.changes.push({
      metric: "Mount Time",
      base: formatTime(baseMetrics.renderMetrics.mountTime),
      pr: formatTime(prMetrics.renderMetrics.mountTime),
      diff: `${mountPercent >= 0 ? "+" : ""}${mountPercent.toFixed(1)}%`,
      emoji,
      isRegression: mountPercent > THRESHOLDS.MOUNT_TIME_REGRESSION
    });

    if (mountPercent > THRESHOLDS.MOUNT_TIME_REGRESSION) results.hasRegression = true;
    if (mountPercent < -THRESHOLDS.MOUNT_TIME_REGRESSION) results.hasImprovement = true;
  }

  // Compare memory
  const memPercent = calculatePercentChange(baseMetrics.memoryMetrics.heapUsed, prMetrics.memoryMetrics.heapUsed);

  if (Math.abs(memPercent) > THRESHOLDS.NOISE_FLOOR) {
    const emoji = getPerformanceEmoji(memPercent, THRESHOLDS.MEMORY_REGRESSION);
    results.changes.push({
      metric: "Memory",
      base: formatBytes(baseMetrics.memoryMetrics.heapUsed),
      pr: formatBytes(prMetrics.memoryMetrics.heapUsed),
      diff: `${memPercent >= 0 ? "+" : ""}${memPercent.toFixed(1)}%`,
      emoji,
      isRegression: memPercent > THRESHOLDS.MEMORY_REGRESSION
    });

    if (memPercent > THRESHOLDS.MEMORY_REGRESSION) results.hasRegression = true;
    if (memPercent < -THRESHOLDS.MEMORY_REGRESSION) results.hasImprovement = true;
  }

  // Compare DOM nodes
  const domDiff = prMetrics.memoryMetrics.domNodes - baseMetrics.memoryMetrics.domNodes;
  const domPercent = calculatePercentChange(baseMetrics.memoryMetrics.domNodes, prMetrics.memoryMetrics.domNodes);

  if (Math.abs(domPercent) > THRESHOLDS.NOISE_FLOOR * 2) {
    // Higher threshold for DOM
    const emoji = getPerformanceEmoji(domPercent, THRESHOLDS.DOM_NODES_REGRESSION);
    results.changes.push({
      metric: "DOM Nodes",
      base: baseMetrics.memoryMetrics.domNodes.toString(),
      pr: prMetrics.memoryMetrics.domNodes.toString(),
      diff: `${domDiff >= 0 ? "+" : ""}${domDiff} (${domPercent >= 0 ? "+" : ""}${domPercent.toFixed(1)}%)`,
      emoji,
      isRegression: domPercent > THRESHOLDS.DOM_NODES_REGRESSION
    });

    if (domPercent > THRESHOLDS.DOM_NODES_REGRESSION) results.hasRegression = true;
  }

  return results;
}

function generateMarkdownReport(prReport, baseReport, regressions, improvements, unchanged) {
  let md = "# ⚡ Performance Report\n\n";

  // Summary counts
  const totalComponents = Object.keys(prReport.components).length;
  let totalStories = 0;
  Object.values(prReport.components).forEach(stories => {
    totalStories += Object.keys(stories).length;
  });

  md += "## 📊 Summary\n\n";
  md += `| Metric | Count |\n`;
  md += `|--------|-------|\n`;
  md += `| Components tested | ${totalComponents} |\n`;
  md += `| Stories tested | ${totalStories} |\n`;
  md += `| Regressions | ${regressions.length} |\n`;
  md += `| Improvements | ${improvements.length} |\n`;
  md += `| Unchanged | ${unchanged.length} |\n\n`;

  // Performance changes table
  const allChanges = [...regressions, ...improvements];

  if (allChanges.length > 0) {
    md += "## 📈 Performance Changes\n\n";
    md += "| Story | Mount Time | Memory | DOM Nodes |\n";
    md += "|-------|------------|--------|------------|\n";

    allChanges.forEach(result => {
      const storyName = `${result.component} / ${result.story}`;

      const mountChange = result.changes.find(c => c.metric === "Mount Time");
      const memoryChange = result.changes.find(c => c.metric === "Memory");
      const domChange = result.changes.find(c => c.metric === "DOM Nodes");

      const formatCell = change => {
        if (!change) return "-";
        const bold = change.isRegression ? "**" : "";
        return `${bold}${change.diff}${bold} ${change.emoji}`;
      };

      md += `| ${storyName} | ${formatCell(mountChange)} | ${formatCell(memoryChange)} | ${formatCell(domChange)} |\n`;
    });

    md += "\n";
  } else {
    md += "## ✅ No Significant Performance Changes\n\n";
    md += "All components are performing within acceptable thresholds.\n\n";
  }

  // Collapsible unchanged section (like bundle-check)
  if (unchanged.length > 0) {
    md += "<details><summary>📋 Unchanged Stories (" + unchanged.length + ")</summary>\n\n";
    md += "These stories showed no significant performance changes.\n\n";
    md += "</details>\n\n";
  }

  // Thresholds info
  md += "---\n\n";
  md += "**📏 Thresholds:**\n";
  md += `- Mount time: ±${THRESHOLDS.MOUNT_TIME_REGRESSION}% for regression\n`;
  md += `- Memory usage: ±${THRESHOLDS.MEMORY_REGRESSION}% for regression\n`;
  md += `- DOM nodes: ±${THRESHOLDS.DOM_NODES_REGRESSION}% for regression\n`;
  md += `- Changes under ${THRESHOLDS.NOISE_FLOOR}% are not reported\n\n`;
  md +=
    "**Legend:** ⚠️ Regression | 🔺 Minor increase | ✨ Significant improvement | 🟢 Minor improvement | ➖ No change\n";

  return md;
}

try {
  // Check if reports exist
  const basePath = path.join(REPORTS_DIR, "base.json");
  const prPath = path.join(REPORTS_DIR, "pr.json");

  if (!fs.existsSync(basePath) || !fs.existsSync(prPath)) {
    console.error("❌ Missing performance reports. Run performance tests first.");
    console.error(`   Expected: ${basePath}`);
    console.error(`   Expected: ${prPath}`);
    process.exit(1);
  }

  const baseReport = JSON.parse(fs.readFileSync(basePath, "utf8"));
  const prReport = JSON.parse(fs.readFileSync(prPath, "utf8"));

  const regressions = [];
  const improvements = [];
  const unchanged = [];

  // Compare all components and stories
  Object.keys(prReport.components).forEach(componentName => {
    const prComponent = prReport.components[componentName];
    const baseComponent = baseReport.components[componentName];

    if (!baseComponent) {
      // New component - skip (can't compare)
      return;
    }

    Object.keys(prComponent).forEach(storyName => {
      const prStory = prComponent[storyName];
      const baseStory = baseComponent[storyName];

      if (!baseStory) {
        // New story - skip (can't compare)
        return;
      }

      const comparison = compareStoryMetrics(baseStory, prStory, componentName, storyName);

      if (comparison.changes.length === 0) {
        unchanged.push(comparison);
      } else if (comparison.hasRegression) {
        regressions.push(comparison);
      } else if (comparison.hasImprovement) {
        improvements.push(comparison);
      } else {
        // Has minor changes but not significant enough for regression/improvement
        unchanged.push(comparison);
      }
    });
  });

  // Generate and write report
  const markdown = generateMarkdownReport(prReport, baseReport, regressions, improvements, unchanged);
  const reportPath = path.join(REPORTS_DIR, "comparison.md");
  fs.writeFileSync(reportPath, markdown);

  // Console output
  console.log("\n✅ Performance comparison completed!");
  console.log(`📁 Report: ${reportPath}`);
  console.log(`\n📊 Results:`);
  console.log(`   Regressions: ${regressions.length}`);
  console.log(`   Improvements: ${improvements.length}`);
  console.log(`   Unchanged: ${unchanged.length}`);

  // Always exit 0 (non-blocking)
  process.exit(0);
} catch (error) {
  console.error("❌ Error comparing performance metrics:", error.message);
  console.error(error.stack);
  process.exit(1);
}
