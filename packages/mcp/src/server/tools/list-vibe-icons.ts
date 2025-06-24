import { z } from "zod";
import { getErrorMessage, MCPTool } from "../index.js";
import { IconMetadataService } from "./icon-metadata-service.js";

const SearchIconsParamsSchema = z.object({
  query: z.string().optional().describe("Text to search for in icon names, descriptions, or tags"),
  category: z.string().optional().describe("Filter by category: 'Basic', 'Platform', or 'View'"),
  limit: z.number().optional().describe("Maximum number of results to return (default: 20)"),
  includeUsageExamples: z.boolean().optional().describe("Include React usage examples in the results (default: false)")
});

export const listVibeIconsTool: MCPTool<typeof SearchIconsParamsSchema.shape> = {
  name: "list-vibe-icons",
  description:
    "Get a list of all available Vibe icons from the @vibe/icons package. Supports optional filtering by text query, category, or tags. Returns icon names, descriptions, categories, and tags, with optional usage examples.",
  inputSchema: SearchIconsParamsSchema.shape,
  execute: async (input: z.infer<typeof SearchIconsParamsSchema>): Promise<any> => {
    const { query, category, limit, includeUsageExamples = false } = input;

    try {
      const allIcons = await IconMetadataService.getIconMetadata();
      let filteredIcons = allIcons;

      // Filter by category if provided
      if (category) {
        const normalizedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
        filteredIcons = filteredIcons.filter(icon => icon.category && icon.category.includes(normalizedCategory));
      }

      // Filter by text query if provided
      if (query) {
        const searchTerm = query.toLowerCase();
        filteredIcons = filteredIcons.filter(
          icon =>
            icon.name.toLowerCase().includes(searchTerm) ||
            icon.description.toLowerCase().includes(searchTerm) ||
            icon.tags.toLowerCase().includes(searchTerm)
        );
      }

      // Apply limit (default to 20 when filtering, unlimited when listing all)
      const shouldApplyLimit = query || category || limit !== undefined;
      const effectiveLimit = shouldApplyLimit ? limit || 20 : filteredIcons.length;
      const limitedIcons = filteredIcons.slice(0, effectiveLimit);

      // Format results
      const formattedResults = limitedIcons.map(icon => {
        const baseResult = {
          name: icon.name,
          description: icon.description,
          category: icon.category || [],
          tags: icon.tags.split(", ").map(tag => tag.trim()),
          file: icon.file
        };

        // Add usage examples if requested
        if (includeUsageExamples) {
          return {
            ...baseResult,
            importPath: "@vibe/icons",
            usageExamples: {
              "Import Icon Component": `import { Icon } from "@vibe/core";`,
              "Import Icon": `import { ${icon.name} } from "@vibe/icons";`,
              "Basic Usage": `<Icon icon={${icon.name}} />`,
              "With Props": `<Icon icon={${icon.name}} iconSize={24} iconLabel="${icon.description}" />`
            }
          };
        }

        return baseResult;
      });

      const result = {
        searchParams: {
          query: query || null,
          category: category || null,
          limit: effectiveLimit,
          includeUsageExamples
        },
        totalFound: filteredIcons.length,
        showing: limitedIcons.length,
        icons: formattedResults
      };

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2)
          }
        ]
      };
    } catch (e) {
      const errorMessage = getErrorMessage(e) || `Failed to list vibe icons`;

      return {
        content: [{ type: "text", text: `Error in list-vibe-icons: ${errorMessage}` }],
        isError: true
      };
    }
  }
};
