const fs = require("fs");
const path = require("path");
const bytes = require("bytes");

function extractJson(content) {
  // Try to find a JSON array in the content (handles multi-line arrays)
  const jsonMatch = content.match(/\[[\s\S]*\]/);

  if (!jsonMatch) {
    return null;
  }

  return jsonMatch[0];
}

function loadJsonFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const json = extractJson(content);

    if (!json) {
      console.warn(`⚠️  No JSON array found in ${filePath}, skipping...`);
      return [];
    }

    return JSON.parse(json);
  } catch (error) {
    console.warn(`⚠️  Could not read or parse ${filePath}: ${error.message}, skipping...`);
    return [];
  }
}

const base = loadJsonFile("scripts/bundle-check/reports/base.json");
const pr = loadJsonFile("scripts/bundle-check/reports/pr.json");

let md = "📦 **Bundle Size Analysis**\n\n";
const tableHeader = "| Component | Base | PR | Diff |\n|-----------|------|----|------|\n";

const baseMap = new Map();
base.forEach(entry => {
  baseMap.set(entry.name, entry);
});

const prMap = new Map();
pr.forEach(entry => {
  prMap.set(entry.name, entry);
});

const allComponents = new Set([...baseMap.keys(), ...prMap.keys()]);

const changedRows = [];
const unchangedRows = [];

Array.from(allComponents)
  .sort()
  .forEach(componentName => {
    const baseEntry = baseMap.get(componentName);
    const prEntry = prMap.get(componentName);

    let displayName;
    if (componentName.startsWith("packages/components/")) {
      const packageName = componentName.split("/")[2];
      displayName = `@vibe/${packageName}`;
    } else if (componentName.includes("/next/")) {
      const baseName = path.basename(componentName, path.extname(componentName));
      displayName = `${baseName} (Next)`;
    } else {
      displayName = path.basename(componentName, path.extname(componentName));
    }

    if (!baseEntry && prEntry) {
      // New component
      const prSize = bytes(prEntry.size);
      changedRows.push(`| \`${displayName}\` | - | ${prSize} | **+${prSize}** 🆕 |`);
    } else if (baseEntry && !prEntry) {
      // Removed component
      const baseSize = bytes(baseEntry.size);
      changedRows.push(`| \`${displayName}\` | ${baseSize} | - | **-${baseSize}** ❌ |`);
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

      const row = `| \`${displayName}\` | ${baseSize} | ${prSize} | ${diffText} ${emoji} |`;

      // Highlight significant changes (>5KB) and ignore changes under 5KB
      if (Math.abs(diffBytes) > 5120) {
        changedRows.push(row.replace(`| ${diffText} `, `| **${diffText}** `));
        // Treat changes under 1KB as unchanged
      } else if (Math.abs(diffBytes) >= 1024) {
        changedRows.push(row);
      } else {
        unchangedRows.push(row);
      }
    }
  });

if (changedRows.length > 0) {
  md += "### Changed Components\n";
  md += tableHeader;
  md += changedRows.join("\n") + "\n";
} else {
  md += "✅ No bundle size changes detected.\n";
}

if (unchangedRows.length > 0) {
  md += "\n<details><summary>Unchanged Components</summary>\n\n";
  md += tableHeader;
  md += unchangedRows.join("\n") + "\n";
  md += "\n</details>\n";
}

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

fs.writeFileSync("scripts/bundle-check/reports/bundle-sizes.md", md);
console.log("Bundle size Analysis generated successfully!");
