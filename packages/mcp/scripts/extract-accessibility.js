import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const componentsDir = path.join(__dirname, "../../docs/src/pages/components/");
const outputDir = path.join(__dirname, "../dist/generated/accessibility/");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function getMdxFiles() {
  const mdxFiles = [];

  function traverseDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        // Recursively traverse subdirectories
        traverseDirectory(fullPath);
      } else if (entry.isFile()) {
        // Check for MDX files
        if (entry.name.endsWith(".mdx")) {
          mdxFiles.push(path.relative(__dirname, fullPath));
        }
      }
    }
  }

  traverseDirectory(componentsDir);
  return mdxFiles;
}

function extractAccessibilityFromMdx(file) {
  const inputFile = path.join(__dirname, file);
  const inputFileComponentName = path.basename(inputFile).split(".")[0];
  const outputFile = path.resolve(__dirname, outputDir, inputFileComponentName + ".md");

  const fileContent = fs.readFileSync(inputFile, "utf-8");

  console.log(`Extracting accessibility for ${inputFileComponentName}`);

  // Find accessibility section in MDX
  const lines = fileContent.split("\n");
  const accessibilityStartIndex = lines.findIndex(line => line.trim() === "## Accessibility");

  if (accessibilityStartIndex === -1) {
    console.log(`No accessibility section found in ${inputFileComponentName}`);
    return;
  }

  // Find the next section (starts with ##)
  let accessibilityEndIndex = lines.length;
  for (let i = accessibilityStartIndex + 1; i < lines.length; i++) {
    if (lines[i].trim().startsWith("##")) {
      accessibilityEndIndex = i;
      break;
    }
  }

  // Extract the accessibility section content (excluding the heading itself)
  const accessibilityLines = lines.slice(accessibilityStartIndex + 1, accessibilityEndIndex);

  // Clean up the content
  let startIndex = 0;
  let endIndex = accessibilityLines.length;

  // Find first non-empty line
  while (startIndex < accessibilityLines.length && accessibilityLines[startIndex].trim() === "") {
    startIndex++;
  }

  // Find last non-empty line
  while (endIndex > startIndex && accessibilityLines[endIndex - 1].trim() === "") {
    endIndex--;
  }

  const rawContent = accessibilityLines.slice(startIndex, endIndex).join("\n");

  // Clean up JSX/HTML content
  const cleanContent = cleanUpAccessibilityContent(rawContent);

  const markdown = `# ${inputFileComponentName} - Accessibility Requirements\n\n${cleanContent}`;

  fs.writeFileSync(outputFile, markdown, "utf-8");
  console.log(`Accessibility extracted for ${inputFileComponentName} at ${outputFile}`);
}

function cleanUpAccessibilityContent(content) {
  // Extract guidelines from UsageGuidelines component
  const guidelinesMatch = content.match(/guidelines=\{(\[[\s\S]*?\])\}/);

  if (guidelinesMatch) {
    const guidelinesArray = guidelinesMatch[1];

    // Extract individual guideline strings
    const guidelines = [];

    // Match each guideline wrapped in <> ... </> or quotes
    const guidelineMatches = guidelinesArray.match(/(?:<>[\s\S]*?<\/>|"[^"]*")/g);

    if (guidelineMatches) {
      guidelineMatches.forEach((match, index) => {
        let cleanGuideline = match;

        // Remove React fragments and JSX tags
        cleanGuideline = cleanGuideline.replace(/<\/?>/g, ""); // Remove <> and </>
        cleanGuideline = cleanGuideline.replace(/<\/?code>/g, "`"); // Replace <code> with backticks
        cleanGuideline = cleanGuideline.replace(/^\s*"?(.+?)"?\s*,?\s*$/, "$1"); // Remove quotes and trailing commas
        cleanGuideline = cleanGuideline.trim();

        // Skip empty guidelines and whitespace-only content
        if (cleanGuideline && cleanGuideline.length > 0 && !/^\s*$/.test(cleanGuideline)) {
          guidelines.push(`${guidelines.length + 1}. ${cleanGuideline}`);
        }
      });
    }

    if (guidelines.length > 0) {
      return guidelines.join("\n");
    }
  }

  // Fallback: basic HTML/JSX cleanup
  let cleaned = content;

  // Remove common JSX components and HTML tags
  cleaned = cleaned.replace(/<UsageGuidelines[\s\S]*?\/>/g, "");
  cleaned = cleaned.replace(/<\/?code>/g, "`");
  cleaned = cleaned.replace(/<\/?>/g, "");
  cleaned = cleaned.replace(/guidelines=\{[\s\S]*?\}/g, "");
  cleaned = cleaned.replace(/^\s*[\[\]{}(),]\s*$/gm, ""); // Remove lines with just brackets/punctuation

  // Clean up extra whitespace
  cleaned = cleaned.replace(/\n\s*\n\s*\n/g, "\n\n"); // Reduce multiple empty lines
  cleaned = cleaned.trim();

  return cleaned || "No accessibility guidelines found in expected format.";
}

function run() {
  console.log("🔍 Extracting accessibility content from MDX files...");

  const mdxFiles = getMdxFiles();

  if (mdxFiles.length === 0) {
    console.log("⚠️  No MDX files found");
    return;
  }

  console.log(`📄 Found ${mdxFiles.length} MDX files to process`);

  mdxFiles.forEach(file => {
    extractAccessibilityFromMdx(file);
  });

  console.log("✅ Accessibility extraction completed!");
}

run();
