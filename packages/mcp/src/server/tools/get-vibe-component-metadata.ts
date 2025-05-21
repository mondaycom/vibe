import { z } from "zod";
import metadata from "@vibe/core/meta" assert { type: "json" };
import { getErrorMessage, MCPTool } from "../index.js";

const ComponentNameParamsSchema = z.object({
  componentName: z.string().describe("The name of the public Vibe component to get metadata for.")
});

export const getVibeComponentMetadataTool: MCPTool<typeof ComponentNameParamsSchema.shape> = {
  name: "get-vibe-component-metadata",
  description: "Get the metadata for a specific @vibe/core/next or @vibe/core component.",
  inputSchema: ComponentNameParamsSchema.shape,
  execute: async (input: z.infer<typeof ComponentNameParamsSchema>): Promise<any> => {
    const { componentName } = input;
    try {
      const componentMatches = metadata.filter(component => component.displayName === componentName);

      if (componentMatches.length === 0) {
        return {
          content: [
            { type: "text", text: `Error in getVibeComponentMetadata: Component '${componentName}' not found.` }
          ],
          isError: true
        };
      }

      // Prefer the 'next' version if it exists among matches
      const nextComponent = componentMatches.find(component => component.aggregator === "next");
      const result = nextComponent || componentMatches[0]; // Fallback to the first match

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2)
          }
        ]
      };
    } catch (e) {
      const errorMessage =
        getErrorMessage(e) || `Failed to get metadata${componentName ? ` for ${componentName}` : ""}`;

      return {
        content: [{ type: "text", text: `Error in getVibeComponentMetadata: ${errorMessage}` }],
        isError: true
      };
    }
  }
};
