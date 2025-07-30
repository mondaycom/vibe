import { z } from "zod";
import { getErrorMessage, MCPTool } from "../index.js";
import { TokenService } from "./token-service.js";

const ListTokensParamsSchema = z.object({
  query: z.string().optional().describe("Text to search for in token names, values, categories, or themes"),
  category: z
    .string()
    .optional()
    .describe("Filter by category: 'color', 'typography', 'border', 'semantic', 'state', 'status', or 'other'"),
  theme: z
    .string()
    .optional()
    .describe("Filter by theme: 'light-app-theme', 'dark-app-theme', 'black-app-theme', or 'hacker-app-theme'"),
  limit: z
    .number()
    .optional()
    .describe("Maximum number of results to return (default: 50 when filtering, unlimited when no filters applied)"),
  includeUsageExamples: z.boolean().optional().describe("Include CSS usage examples in the results (default: false)")
});

export const listVibeTokensTool: MCPTool<typeof ListTokensParamsSchema.shape> = {
  name: "list-vibe-tokens",
  description:
    "Get a list of all available Vibe design tokens from the @vibe/style package. When called without parameters, returns ALL tokens. Supports optional filtering by text query, category, or theme. Returns token names, values, themes, and categories, with optional usage examples.",
  inputSchema: ListTokensParamsSchema.shape,
  execute: async (input: z.infer<typeof ListTokensParamsSchema>): Promise<any> => {
    const { query, category, theme, limit, includeUsageExamples = false } = input;

    try {
      let filteredTokens = await TokenService.getTokens();

      // Apply filters
      if (category) {
        filteredTokens = await TokenService.getTokensByCategory(category);
      }

      if (theme) {
        const themeTokens = await TokenService.getTokensByTheme(theme);
        filteredTokens = category
          ? filteredTokens.filter(token => themeTokens.some(t => t.name === token.name && t.theme === token.theme))
          : themeTokens;
      }

      // Apply search query
      if (query) {
        const searchResults = await TokenService.searchTokens(query);
        filteredTokens = filteredTokens.filter(token =>
          searchResults.some(s => s.name === token.name && s.theme === token.theme)
        );
      }

      const hasFilters = query || category || theme;
      const shouldApplyLimit = hasFilters || limit !== undefined;
      const effectiveLimit = shouldApplyLimit ? limit || 50 : filteredTokens.length;
      const limitedTokens = filteredTokens.slice(0, effectiveLimit);

      const formattedResults = limitedTokens.map(token => {
        const baseResult = {
          name: token.name,
          value: token.value,
          theme: token.theme,
          category: token.category,
          cssVariable: `--${token.name}`
        };

        if (includeUsageExamples) {
          return {
            ...baseResult,
            usageExamples: {
              "CSS Variable": `var(--${token.name})`,
              "SCSS Usage": `color: var(--${token.name});`,
              "CSS Property": `background-color: var(--${token.name});`,
              "With Fallback": `color: var(--${token.name}, ${token.value});`
            }
          };
        }

        return baseResult;
      });

      const tokensByCategory = formattedResults.reduce(
        (acc, token) => {
          if (!acc[token.category]) {
            acc[token.category] = [];
          }
          acc[token.category].push(token);
          return acc;
        },
        {} as Record<string, typeof formattedResults>
      );

      const result = {
        searchParams: {
          query: query || null,
          category: category || null,
          theme: theme || null,
          limit: effectiveLimit,
          includeUsageExamples
        },
        totalFound: filteredTokens.length,
        showing: limitedTokens.length,
        availableCategories: TokenService.getAvailableCategories(),
        availableThemes: TokenService.getAvailableThemes(),
        tokensByCategory,
        tokens: formattedResults
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
