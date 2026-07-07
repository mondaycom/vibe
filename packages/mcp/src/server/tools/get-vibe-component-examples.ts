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
    .optional()
    .describe(
      "Optional. The name of the component to get examples for (e.g., Button, TextField). If omitted, returns examples for all components."
    )
});

async function fetchExamples(componentName: string, version: number): Promise<string> {
  const cacheKey = `${version}:${componentName}`;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey)!;
  }

  const url = `https://unpkg.com/@vibe/core@${version}/dist/metadata/examples/${componentName}.md`;

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

export const getVibeComponentExamples: MCPTool<typeof ComponentNameParamsSchema.shape> = {
  name: "get-vibe-component-examples",
  description:
    "Get React usage examples for Vibe components. Returns implementation examples and patterns for specific components or all components if none specified.",
  inputSchema: ComponentNameParamsSchema.shape,
  execute: async (input: z.infer<typeof ComponentNameParamsSchema>) => {
    const { componentName } = input;
    try {
      const version = await detectVibeVersion();
      const content = await fetchExamples(componentName ?? "", version);
      return {
        content: [
          { type: "text", text: componentName ?? "" },
          { type: "text", text: content }
        ]
      };
    } catch (e) {
      const message = getErrorMessage(e) || "Failed to get code samples";
      return {
        content: [
          {
            type: "text",
            text: `Error in getComponentExampleCode: ${message}`
          }
        ],
        isError: true
      };
    }
  }
};
