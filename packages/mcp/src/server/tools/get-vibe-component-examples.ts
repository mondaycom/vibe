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
    .optional()
    .describe(
      "Optional. The name of the component to get examples for (e.g., Button, TextField). If omitted, returns examples for all components."
    )
});

export const getVibeComponentExamples: MCPTool<typeof ComponentNameParamsSchema.shape> = {
  name: "get-vibe-component-examples",
  description:
    "Get React usage examples for Vibe components. Returns implementation examples and patterns for specific components or all components if none specified.",
  inputSchema: ComponentNameParamsSchema.shape,
  execute: async (input: z.infer<typeof ComponentNameParamsSchema>) => {
    const { componentName } = input;
    try {
      const contextFilePath = path.resolve(__dirname, "../../../dist/generated/", `${componentName}.md`);
      const contextFileContents = await fs.readFile(contextFilePath, "utf-8");
      return {
        content: [
          { type: "text", text: componentName ?? "" },
          { type: "text", text: contextFileContents }
        ]
      };
    } catch (e) {
      const message = (e instanceof Error ? e.message : e) || "Failed to get code samples";
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
