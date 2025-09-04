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
      // Read from pre-generated accessibility file
      const accessibilityFilePath = path.resolve(
        __dirname,
        "../../../dist/generated/accessibility/",
        `${componentName}.md`
      );

      let accessibilityContent: string;
      try {
        accessibilityContent = await fs.readFile(accessibilityFilePath, "utf-8");
      } catch (readError) {
        return {
          content: [
            {
              type: "text",
              text: `Error: Could not find accessibility documentation for component "${componentName}". Expected file: ${accessibilityFilePath}`
            }
          ],
          isError: true
        };
      }

      return {
        content: [
          {
            type: "text",
            text: accessibilityContent
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
