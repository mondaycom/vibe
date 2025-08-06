const fs = require("fs");
const bytes = require("bytes");

const base = JSON.parse(fs.readFileSync("base.json", "utf8"));
const pr = JSON.parse(fs.readFileSync("pr.json", "utf8"));

let md = "📦 **Bundle Size Comparison**\n\n";
md += "| Component | Base | PR | Diff |\n";
md += "|-----------|------|----|------|\n";

const baseMap = new Map();
base.forEach(entry => {
  // Handle both 'path' (global config) and 'name' (package config) properties
  const path = entry.path || entry.name;
  const componentName = path.match(/components\/([^\/]+)\//)?.[1] || path;
  baseMap.set(componentName, entry);
});

const prMap = new Map();
pr.forEach(entry => {
  // Handle both 'path' (global config) and 'name' (package config) properties
  const path = entry.path || entry.name;
  const componentName = path.match(/components\/([^\/]+)\//)?.[1] || path;
  prMap.set(componentName, entry);
});

const allComponents = new Set([...baseMap.keys(), ...prMap.keys()]);

Array.from(allComponents)
  .sort()
  .forEach(componentName => {
    const baseEntry = baseMap.get(componentName);
    const prEntry = prMap.get(componentName);

    if (!baseEntry && prEntry) {
      // New component
      const prSize = bytes(prEntry.size);
      md += `| \`${componentName}\` | - | ${prSize} | **+${prSize}** 🆕 |\n`;
    } else if (baseEntry && !prEntry) {
      // Removed component
      const baseSize = bytes(baseEntry.size);
      md += `| \`${componentName}\` | ${baseSize} | - | **-${baseSize}** ❌ |\n`;
    } else if (baseEntry && prEntry) {
      // Existing component
      const baseSize = bytes(baseEntry.size);
      const prSize = bytes(prEntry.size);
      const diffBytes = prEntry.size - baseEntry.size;
      const diffFormatted = bytes(Math.abs(diffBytes));

      let emoji = "➖";
      let diffText = diffFormatted;

      if (diffBytes > 0) {
        emoji = "🔺";
        diffText = `+${diffFormatted}`;
      } else if (diffBytes < 0) {
        emoji = "🟢";
        diffText = `-${diffFormatted}`;
      }

      // Highlight significant changes (>1KB)
      if (Math.abs(diffBytes) > 1024) {
        diffText = `**${diffText}**`;
      }

      md += `| \`${componentName}\` | ${baseSize} | ${prSize} | ${diffText} ${emoji} |\n`;
    }
  });

const totalBaseSize = base.reduce((sum, entry) => sum + entry.size, 0);
const totalPrSize = pr.reduce((sum, entry) => sum + entry.size, 0);

md += "\n---\n\n";
md += "**📊 Summary:**\n";
md += `- **Total Base Size:** ${bytes(totalBaseSize)}\n`;
md += `- **Total PR Size:** ${bytes(totalPrSize)}\n`;
const totalDiffBytes = totalPrSize - totalBaseSize;
md += `- **Total Difference:** ${totalDiffBytes >= 0 ? "+" : ""}${bytes(Math.abs(totalDiffBytes))}\n`;

// 5KB in bytes
if (Math.abs(totalDiffBytes) > 5120) {
  md += `\n⚠️ **Significant size change detected!** Please review the changes carefully.\n`;
}

fs.writeFileSync("bundle-sizes.md", md);
console.log("Bundle size comparison generated successfully!");
