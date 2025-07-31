import { z } from "zod";
import { getErrorMessage, MCPTool } from "../index.js";
import { TokenMetadataService } from "./token-metadata-service.js";

const SearchTokensParamsSchema = z.object({
  query: z.string().optional().describe("Text to search for in token names or values"),
  category: z
    .string()
    .optional()
    .describe(
      "Filter by category: 'Spacing', 'Typography', 'Border Radius', 'Borders', 'Motion', or color themes like 'Colors (Light)'"
    ),
  limit: z.number().optional().describe("Maximum number of results to return (default: 50)"),
  includeUsageExamples: z.boolean().optional().describe("Include CSS usage examples in the results (default: false)")
});

export const listVibeTokensTool: MCPTool<typeof SearchTokensParamsSchema.shape> = {
  name: "list-vibe-tokens",
  description:
    "Get a list of all available Vibe design tokens from the @vibe/style package. Supports optional filtering by text query, category, or limiting results. Returns token names, values, categories, and files, with optional CSS usage examples.",
  inputSchema: SearchTokensParamsSchema.shape,
  execute: async (input: z.infer<typeof SearchTokensParamsSchema>): Promise<any> => {
    const { query, category, limit, includeUsageExamples = false } = input;

    try {
      const allTokens = await TokenMetadataService.getTokenMetadata();
      let filteredTokens = allTokens;

      // Filter by category if provided
      if (category) {
        const normalizedCategory = category.toLowerCase();
        filteredTokens = filteredTokens.filter(token => token.category.toLowerCase().includes(normalizedCategory));
      }

      // Filter by text query if provided
      if (query) {
        const searchTerm = query.toLowerCase();
        filteredTokens = filteredTokens.filter(
          token =>
            token.name.toLowerCase().includes(searchTerm) ||
            token.value.toLowerCase().includes(searchTerm) ||
            (token.description && token.description.toLowerCase().includes(searchTerm))
        );
      }

      // Apply limit (default to 50 when filtering, unlimited when listing all)
      const shouldApplyLimit = query || category || limit !== undefined;
      const effectiveLimit = shouldApplyLimit ? limit || 50 : filteredTokens.length;
      const limitedTokens = filteredTokens.slice(0, effectiveLimit);

      // Group tokens by category for better organization
      const tokensByCategory = limitedTokens.reduce(
        (acc, token) => {
          if (!acc[token.category]) {
            acc[token.category] = [];
          }
          acc[token.category].push(token);
          return acc;
        },
        {} as Record<string, typeof limitedTokens>
      );

      // Format results
      const formattedResults = Object.entries(tokensByCategory).map(([categoryName, tokens]) => ({
        category: categoryName,
        count: tokens.length,
        tokens: tokens.map(token => {
          const baseResult = {
            name: token.name,
            value: token.value,
            description: token.description,
            file: token.file
          };

          // Add usage examples if requested
          if (includeUsageExamples) {
            return {
              ...baseResult,
              usageExamples: {
                "CSS Custom Property": `${token.name}: ${token.value};`,
                "CSS Usage": `color: var(${token.name});`,
                "SCSS Usage": `$my-variable: var(${token.name});`,
                "CSS Modules": `.myClass { color: var(${token.name}); }`
              }
            };
          }

          return baseResult;
        })
      }));

      const result = {
        searchParams: {
          query: query || null,
          category: category || null,
          limit: effectiveLimit,
          includeUsageExamples
        },
        totalFound: filteredTokens.length,
        showing: limitedTokens.length,
        categoriesFound: Object.keys(tokensByCategory).length,
        tokensByCategory: formattedResults,
        availableCategories: [...new Set(allTokens.map(token => token.category))].sort()
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
      const errorMessage = getErrorMessage(e) || `Failed to list vibe tokens`;

      return {
        content: [{ type: "text", text: `Error in list-vibe-tokens: ${errorMessage}` }],
        isError: true
      };
    }
  }
};
