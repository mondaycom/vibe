import { z } from "zod";
import { getErrorMessage, MCPTool } from "../index.js";
import { IconMetadataService } from "./icon-metadata-service.js";

const IconNameParamsSchema = z.object({
  iconName: z.string().describe("The name of the Vibe icon to get details for.")
});

export const getVibeIconDetailsTool: MCPTool<typeof IconNameParamsSchema.shape> = {
  name: "get-vibe-icon-details",
  description:
    "Get detailed information about a specific Vibe icon including description, tags, category, and usage examples.",
  inputSchema: IconNameParamsSchema.shape,
  execute: async (input: z.infer<typeof IconNameParamsSchema>): Promise<any> => {
    const { iconName } = input;
    try {
      const allIcons = await IconMetadataService.getIconMetadata();
      const icon = allIcons.find(icon => icon.name === iconName);

      if (!icon) {
        // Try case-insensitive search
        const iconLower = allIcons.find(icon => icon.name.toLowerCase() === iconName.toLowerCase());
        if (!iconLower) {
          return {
            content: [
              {
                type: "text",
                text: `Error in getVibeIconDetails: Icon '${iconName}' not found. Use the list-vibe-icons tool to see all available icons.`
              }
            ],
            isError: true
          };
        }
        return buildIconDetails(iconLower);
      }

      return buildIconDetails(icon);
    } catch (e) {
      const errorMessage = getErrorMessage(e) || `Failed to get icon details${iconName ? ` for ${iconName}` : ""}`;

      return {
        content: [{ type: "text", text: `Error in getVibeIconDetails: ${errorMessage}` }],
        isError: true
      };
    }
  }
};

function buildIconDetails(icon: any) {
  const importPath = `@vibe/icons`;
  const usageExamples = {
    "React Import": `import { ${icon.name} } from "${importPath}";`,
    "React Usage": `<${icon.name} />`,
    "With Props": `<${icon.name} size={24} color="var(--primary-color)" />`
  };

  const result = {
    name: icon.name,
    description: icon.description,
    file: icon.file,
    category: icon.category || [],
    tags: icon.tags.split(", ").map((tag: string) => tag.trim()),
    importPath,
    usageExamples
  };

  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(result, null, 2)
      }
    ]
  };
}
