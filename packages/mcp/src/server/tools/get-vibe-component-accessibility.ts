import { z } from "zod";
import { exec } from "child_process";
import { promisify } from "util";
import { getErrorMessage, MCPTool } from "../index.js";
import { detectVibeVersion } from "../version-detector.js";

const execAsync = promisify(exec);

const cache = new Map<string, string>();

const ComponentNameParamsSchema = z.object({
  componentName: z
    .string()
    .describe("The name of the component to get accessibility requirements for (e.g., Button, Checkbox, TextField)")
});

async function fetchAccessibility(componentName: string, version: number): Promise<string> {
  const cacheKey = `${version}:${componentName}`;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey)!;
  }

  const url = `https://unpkg.com/@vibe/core@${version}/dist/metadata/accessibility/${componentName}.md`;

  let content: string;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    content = await response.text();
  } catch (fetchError) {
    const { stdout } = await execAsync(`curl -s -L "${url}"`);
    if (!stdout.trim()) {
      throw fetchError;
    }
    content = stdout;
  }

  cache.set(cacheKey, content);
  return content;
}

export const getVibeComponentAccessibility: MCPTool<typeof ComponentNameParamsSchema.shape> = {
  name: "get-vibe-component-accessibility",
  description:
    "Get accessibility requirements and guidelines for Vibe components. Returns structured accessibility information extracted from component documentation.",
  inputSchema: ComponentNameParamsSchema.shape,
  execute: async (input: z.infer<typeof ComponentNameParamsSchema>) => {
    const { componentName } = input;

    if (!componentName) {
      return {
        content: [{ type: "text", text: "Error: componentName is required" }],
        isError: true
      };
    }

    try {
      const version = await detectVibeVersion();
      const content = await fetchAccessibility(componentName, version);
      return {
        content: [
          {
            type: "text",
            text: content
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
