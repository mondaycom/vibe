import { z } from "zod";
import { getErrorMessage, MCPTool } from "../index.js";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ComponentNameParamsSchema = z.object({
  componentName: z
    .string()
    .describe("The name of the component to get accessibility requirements for (e.g., Button, Checkbox, TextField)")
});

export const getVibeComponentAccessibility: MCPTool<typeof ComponentNameParamsSchema.shape> = {
  name: "get-vibe-component-accessibility",
  description:
    "Get accessibility requirements and guidelines for Vibe components. Returns structured accessibility information extracted from component documentation.",
  inputSchema: ComponentNameParamsSchema.shape,
  execute: async (input: z.infer<typeof ComponentNameParamsSchema>) => {
    const { componentName } = input;

    if (!componentName) {
      return {
        content: [
          {
            type: "text",
            text: "Error: componentName is required"
          }
        ],
        isError: true
      };
    }

    try {
      // Try to find the component's MDX file in the components directory
      const corePackagePath = path.resolve(__dirname, "../../../../core/src/components");
      const componentMdxPath = path.join(corePackagePath, componentName, "__stories__", `${componentName}.mdx`);

      let mdxContent: string;
      try {
        mdxContent = await fs.readFile(componentMdxPath, "utf-8");
      } catch (readError) {
        return {
          content: [
            {
              type: "text",
              text: `Error: Could not find accessibility documentation for component "${componentName}". Expected file: ${componentMdxPath}`
            }
          ],
          isError: true
        };
      }

      // Extract accessibility section from MDX content
      const accessibilitySection = extractAccessibilitySection(mdxContent);

      if (!accessibilitySection) {
        return {
          content: [
            {
              type: "text",
              text: `No accessibility section found in ${componentName} documentation.`
            }
          ]
        };
      }

      return {
        content: [
          {
            type: "text",
            text: `# ${componentName} - Accessibility Requirements\n\n${accessibilitySection}`
          }
        ]
      };
    } catch (e) {
      const message = getErrorMessage(e);
      return {
        content: [
          {
            type: "text",
            text: `Error retrieving accessibility requirements for ${componentName}: ${message}`
          }
        ],
        isError: true
      };
    }
  }
};

/**
 * Extracts the accessibility section from MDX content
 * Looks for "## Accessibility" heading and extracts content until the next heading
 * Cleans up JSX/HTML to make it LLM-friendly
 */
function extractAccessibilitySection(mdxContent: string): string | null {
  const lines = mdxContent.split("\n");
  const accessibilityStartIndex = lines.findIndex(line => line.trim() === "## Accessibility");

  if (accessibilityStartIndex === -1) {
    return null;
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

  // Clean up the content by removing empty lines at the start and end
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

  // Clean up JSX/HTML content to make it LLM-friendly
  return cleanUpAccessibilityContent(rawContent);
}

/**
 * Cleans up JSX/HTML content from accessibility sections
 */
function cleanUpAccessibilityContent(content: string): string {
  // Extract guidelines from UsageGuidelines component
  const guidelinesMatch = content.match(/guidelines=\{(\[[\s\S]*?\])\}/);

  if (guidelinesMatch) {
    const guidelinesArray = guidelinesMatch[1];

    // Extract individual guideline strings
    const guidelines: string[] = [];

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
