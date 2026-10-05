import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.resolve(__dirname, "../../../docs/src/pages/components/");
const outputDir = path.resolve(__dirname, "../../dist/metadata/accessibility/");

export function getMdxFiles(): string[] {
  const mdxFiles: string[] = [];

  function traverseDirectory(dir: string): void {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        traverseDirectory(fullPath);
      } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
        mdxFiles.push(fullPath);
      }
    }
  }

  traverseDirectory(componentsDir);
  return mdxFiles;
}

export function extractAccessibilityFromMdx(file: string): void {
  const componentName = path.basename(file).split(".")[0];
  const outputFile = path.join(outputDir, componentName + ".md");
  const fileContent = fs.readFileSync(file, "utf-8");

  const lines = fileContent.split("\n");
  const accessibilityStartIndex = lines.findIndex(line => line.trim() === "## Accessibility");

  if (accessibilityStartIndex === -1) {
    return;
  }

  let accessibilityEndIndex = lines.length;
  for (let i = accessibilityStartIndex + 1; i < lines.length; i++) {
    if (lines[i].trim().startsWith("##")) {
      accessibilityEndIndex = i;
      break;
    }
  }

  const accessibilityLines = lines.slice(accessibilityStartIndex + 1, accessibilityEndIndex);

  let startIndex = 0;
  let endIndex = accessibilityLines.length;

  while (startIndex < accessibilityLines.length && accessibilityLines[startIndex].trim() === "") {
    startIndex++;
  }
  while (endIndex > startIndex && accessibilityLines[endIndex - 1].trim() === "") {
    endIndex--;
  }

  const rawContent = accessibilityLines.slice(startIndex, endIndex).join("\n");
  const cleanContent = cleanUpAccessibilityContent(rawContent);
  const markdown = `# ${componentName} - Accessibility Requirements\n\n${cleanContent}`;

  fs.writeFileSync(outputFile, markdown, "utf-8");
}

export function cleanUpAccessibilityContent(content: string): string {
  const guidelinesMatch = content.match(/guidelines=\{(\[[\s\S]*?\])\}/);

  if (guidelinesMatch) {
    const guidelinesArray = guidelinesMatch[1];
    const guidelines: string[] = [];
    const guidelineMatches = guidelinesArray.match(/(?:<>[\s\S]*?<\/>|"[^"]*")/g);

    if (guidelineMatches) {
      guidelineMatches.forEach(match => {
        let cleanGuideline = match;
        cleanGuideline = cleanGuideline.replace(/<\/?>/g, "");
        cleanGuideline = cleanGuideline.replace(/<\/?code>/g, "`");
        cleanGuideline = cleanGuideline.replace(/^\s*"?(.+?)"?\s*,?\s*$/, "$1");
        cleanGuideline = cleanGuideline.trim();

        if (cleanGuideline.length > 0 && !/^\s*$/.test(cleanGuideline)) {
          guidelines.push(`${guidelines.length + 1}. ${cleanGuideline}`);
        }
      });
    }

    if (guidelines.length > 0) {
      return guidelines.join("\n");
    }
  }

  let cleaned = content;
  cleaned = cleaned.replace(/<UsageGuidelines[\s\S]*?\/>/g, "");
  cleaned = cleaned.replace(/<\/?code>/g, "`");
  cleaned = cleaned.replace(/<\/?>/g, "");
  cleaned = cleaned.replace(/guidelines=\{[\s\S]*?\}/g, "");
  cleaned = cleaned.replace(/^\s*[[\]{}(),]\s*$/gm, "");
  cleaned = cleaned.replace(/\n\s*\n\s*\n/g, "\n\n");
  cleaned = cleaned.trim();

  return cleaned || "No accessibility guidelines found in expected format.";
}

export function run(): void {
  if (!fs.existsSync(componentsDir)) {
    console.error(`Components directory not found: ${componentsDir}`);
    process.exit(1);
  }

  fs.mkdirSync(outputDir, { recursive: true });

  const mdxFiles = getMdxFiles();
  console.log(`Extracting accessibility from ${mdxFiles.length} MDX files...`);
  mdxFiles.forEach(file => extractAccessibilityFromMdx(file));
  console.log("Accessibility extraction complete");
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  run();
}
