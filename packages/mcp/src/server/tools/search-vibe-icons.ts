import { z } from "zod";
import { getErrorMessage, MCPTool } from "../index.js";
import { IconMetadataService } from "./icon-metadata-service.js";

const SearchIconsParamsSchema = z.object({
  query: z.string().optional().describe("Text to search for in icon names, descriptions, or tags"),
  category: z.string().optional().describe("Filter by category: 'Basic', 'Platform', or 'View'"),
  limit: z.number().optional().describe("Maximum number of results to return (default: 20)")
});

export const searchVibeIconsTool: MCPTool<typeof SearchIconsParamsSchema.shape> = {
  name: "search-vibe-icons",
  description:
    "Search and filter Vibe icons by text query, category, or tags. Returns matching icons with their details.",
  inputSchema: SearchIconsParamsSchema.shape,
  execute: async (input: z.infer<typeof SearchIconsParamsSchema>): Promise<any> => {
    const { query, category, limit = 20 } = input;

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

      // Apply limit
      const limitedIcons = filteredIcons.slice(0, limit);

      // Format results
      const formattedResults = limitedIcons.map(icon => ({
        name: icon.name,
        description: icon.description,
        category: icon.category || [],
        tags: icon.tags.split(", ").map(tag => tag.trim()),
        file: icon.file
      }));

      const result = {
        searchParams: {
          query: query || null,
          category: category || null,
          limit
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
      const errorMessage = getErrorMessage(e) || `Failed to search vibe icons`;

      return {
        content: [{ type: "text", text: `Error in search-vibe-icons: ${errorMessage}` }],
        isError: true
      };
    }
  }
};
